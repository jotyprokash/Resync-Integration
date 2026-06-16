import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "ZEROOS <hello@zeroos.co>";
const replyToEmail = "hello@zeroos.co";
const adminEmail = "hello@zeroos.co";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // 1. Save to Supabase
  const { error: dbError } = await supabase
    .from("subscribers")
    .insert({ email });

  if (dbError) {
    if (dbError.code === "23505") {
      return res.status(409).json({ error: "Already subscribed." });
    }
    console.error("Supabase error:", dbError);
    return res.status(500).json({ error: "Failed to save email." });
  }

  // 2. Send confirmation and admin notification emails via Resend
  const [confirmationResult, adminResult] = await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: email,
      reply_to: replyToEmail,
      subject: "You're on the list ✦",
      html: `
        <div style="background:#f4f1eb;padding:40px 0;font-family:Arial,sans-serif">
          <div style="max-width:560px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e5dfd5;background:#fff">
            <div style="background:#0a0a0f;padding:24px 40px;text-align:center">
              <p style="color:#c8a96e;font-size:13px;font-weight:700;letter-spacing:0.2em;margin:0">✦ ZEROOS</p>
            </div>
            <div style="background:#0a0a0f;padding:36px 40px 32px;text-align:center">
              <h1 style="color:#f5f0e8;font-size:40px;font-family:Georgia,serif;font-weight:700;margin:0 0 10px">You're on the list.</h1>
              <p style="color:rgba(245,240,232,0.55);font-size:15px;margin:0">Something big is coming — and you'll be the first to know.</p>
            </div>
            <div style="padding:32px 40px 8px">
              <p style="color:#3a3530;font-size:15px;line-height:1.7;margin:0 0 14px">Hi there,</p>
              <p style="color:#3a3530;font-size:15px;line-height:1.7;margin:0 0 14px">Thank you for subscribing! We're putting the final touches on our store and we can't wait to share it with you.</p>
              <p style="color:#3a3530;font-size:15px;line-height:1.7;margin:0 0 14px">When we launch, you'll be among the very first to get access — along with any exclusive early-bird offers we have lined up.</p>
            </div>
            <div style="padding:8px 40px 32px;text-align:center">
              <a href="https://zeroos.com" style="background:#c8a96e;color:#0a0a0f;font-size:13px;font-weight:700;padding:13px 30px;border-radius:100px;text-decoration:none;display:inline-block">Visit Our Website</a>
            </div>
            <div style="height:1px;background:#e5dfd5;margin:0 40px"></div>
            <div style="padding:20px 40px 28px;text-align:center">
              <p style="color:#aaa;font-size:12px;margin:0 0 4px">© 2026 ZeroOS. All rights reserved.</p>
              <p style="color:#aaa;font-size:12px;margin:0">You received this because you signed up at zeroos.com</p>
            </div>
          </div>
        </div>
      `,
    }),
    resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      reply_to: replyToEmail,
      subject: "New ZEROOS waitlist signup",
      text: [
        "New waitlist/contact form submission from zeroos.com",
        "",
        `Email: ${email}`,
        `Submitted at: ${new Date().toISOString()}`,
      ].join("\n"),
    }),
  ]);

  if (confirmationResult.error || adminResult.error) {
    console.error("Resend confirmation error:", confirmationResult.error);
    console.error("Resend admin notification error:", adminResult.error);
    return res
      .status(200)
      .json({ success: true, warning: "Subscribed but email failed." });
  }

  return res.status(200).json({ success: true });
}
