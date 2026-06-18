import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

const resend = new Resend(process.env.RESEND_API_KEY);
const siteName = process.env.PUBLIC_SITE_NAME || "Launch Updates";
const siteUrl = process.env.PUBLIC_SITE_URL || "https://example.com";
const fromName = process.env.MAIL_FROM_NAME || siteName;
const fromAddress = process.env.MAIL_FROM_EMAIL || "noreply@example.com";
const fromEmail = `${fromName} <${fromAddress}>`;
const replyToEmail = process.env.MAIL_REPLY_TO || fromAddress;
const adminEmail = process.env.ADMIN_EMAIL || fromAddress;

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
      subject: `${siteName} waitlist confirmation`,
      text: [
        "Hello,",
        "",
        `Thanks for joining the ${siteName} waitlist.`,
        "",
        "We received your request and will let you know when access is available.",
        "",
        "No action is needed from you right now.",
        "",
        siteName,
        siteUrl,
      ].join("\n"),
      html: `
        <div style="background:#f6f4ef;padding:32px 0;font-family:Arial,sans-serif">
          <div style="max-width:560px;margin:0 auto;border:1px solid #e7e1d8;background:#ffffff">
            <div style="padding:24px 40px;border-bottom:1px solid #eee8df">
              <p style="color:#111111;font-size:14px;font-weight:700;letter-spacing:0.16em;margin:0;text-transform:uppercase">${siteName}</p>
            </div>
            <div style="padding:36px 40px 10px">
              <h1 style="color:#111111;font-size:28px;font-family:Georgia,serif;font-weight:700;line-height:1.2;margin:0 0 14px">You're on the waitlist.</h1>
              <p style="color:#4d4944;font-size:15px;line-height:1.7;margin:0">Thanks for joining. We received your request and will let you know when access is available.</p>
            </div>
            <div style="padding:14px 40px 8px">
              <p style="color:#4d4944;font-size:15px;line-height:1.7;margin:0 0 14px">Hello,</p>
              <p style="color:#4d4944;font-size:15px;line-height:1.7;margin:0 0 14px">No action is needed from you right now. We'll send the next update to this email address.</p>
              <p style="color:#4d4944;font-size:15px;line-height:1.7;margin:0 0 14px">If you have any questions, you can reply directly to this email.</p>
            </div>
            <div style="padding:8px 40px 32px;text-align:center">
              <a href="${siteUrl}" style="background:#111111;color:#ffffff;font-size:13px;font-weight:700;padding:13px 28px;text-decoration:none;display:inline-block">Visit website</a>
            </div>
            <div style="border-top:1px solid #eee8df;padding:20px 40px 28px">
              <p style="color:#8a8580;font-size:12px;line-height:1.6;margin:0 0 4px">You received this email because you joined the waitlist at ${siteUrl}.</p>
              <p style="color:#8a8580;font-size:12px;line-height:1.6;margin:0">© 2026 ${siteName}. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    }),
    resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      reply_to: replyToEmail,
      subject: `New ${siteName} waitlist signup`,
      text: [
        `New waitlist/contact form submission from ${siteUrl}`,
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
