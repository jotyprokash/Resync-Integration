import { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | invalid
  const siteName = import.meta.env.VITE_PUBLIC_SITE_NAME || "Something new";
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || "our website";

  async function handleSubscribe() {
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValid) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubscribe();
  }

  function handleChange(e) {
    setEmail(e.target.value);
    if (status === "invalid" || status === "error") setStatus("idle");
  }

  return (
    <div className={styles.page}>
      {/* Background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={styles.noise} />

      <main className={styles.container}>
        <span className={styles.eyebrow}>✦ {siteName} is brewing</span>

        <h1 className={styles.headline}>
          Coming
          <br />
          <span className={styles.headlineGold}>Soon.</span>
        </h1>

        <p className={styles.sub}>
          We're crafting something extraordinary for {siteUrl}.
          <br />
          Be the first to know when we launch.
        </p>

        {status === "success" ? (
          <div className={styles.successBox}>
            <span className={styles.successIcon}>✓</span>
            <div>
              <p className={styles.successTitle}>You're on the list!</p>
              <p className={styles.successText}>
                Check your inbox — a confirmation email is on its way.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`${styles.formWrap} ${status === "invalid" || status === "error" ? styles.formError : ""}`}
            >
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={status === "loading"}
                autoComplete="email"
              />
              <button
                className={styles.button}
                onClick={handleSubscribe}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Notify Me"}
              </button>
            </div>

            {status === "invalid" && (
              <p className={styles.errorMsg}>
                Please enter a valid email address.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again.
              </p>
            )}
          </>
        )}

        <p className={styles.footerNote}>No spam, ever. Unsubscribe anytime.</p>
      </main>
    </div>
  );
}
