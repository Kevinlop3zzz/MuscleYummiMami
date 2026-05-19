"use client";

import { useState } from "react";
import Link from "next/link";

export function AnnouncementApply() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Prevent native form submission before React hydrates.
  // The button stays disabled until this flips to true (happens immediately
  // after the first render on the client, so users never notice the delay).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    // 15-second timeout so the button doesn't spin forever on a bad connection
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/model-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "quick", email }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ marginTop: 4, background: "#e8f5e9", border: "1.5px solid #4caf50", padding: "6px 10px", fontSize: 10, color: "#1b5e20", textAlign: "center" }}>
        Got it! 🔥 We&apos;ll be in touch.{" "}
        <Link href="/models" style={{ color: "#1b5e20", fontWeight: "bold" }}>Fill out full application →</Link>
      </div>
    );
  }

  return (
    /* <form> wrapper means the mobile keyboard's "Go" / "Done" button submits
       correctly on both iOS Safari and Android Chrome without a separate
       onKeyDown handler. */
    <form onSubmit={handleApply} method="post" style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={status === "loading"}
          style={{ flex: 1, border: "1.5px solid #888", padding: "4px 6px", fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none", opacity: status === "loading" ? 0.6 : 1 }}
        />
        <button
          type="submit"
          disabled={!mounted || status === "loading"}
          style={{
            background: "#000",
            color: "#fff",
            border: "1.5px solid #000",
            padding: "4px 10px",
            fontWeight: "bold",
            cursor: status === "loading" ? "wait" : "pointer",
            fontFamily: "Geneva, Arial, sans-serif",
            boxShadow: "1px 1px 0 #555",
            opacity: (!mounted || status === "loading") ? 0.6 : 1,
            pointerEvents: (!mounted || status === "loading") ? "none" : "auto",
            touchAction: "manipulation",
          }}
        >
          {status === "loading" ? "..." : "Apply"}
        </button>
      </div>
      {status === "error" && (
        /* Bumped from 9px (unreadable on mobile) to 11px */
        <div style={{ fontSize: 11, color: "#b71c1c" }}>Could not send. Try again or <Link href="/models" style={{ color: "#b71c1c" }}>use full form</Link>.</div>
      )}
      <div style={{ fontSize: 9, color: "#888" }}>
        Want to share more? <Link href="/models" style={{ color: "#555" }}>Fill out the full application →</Link>
      </div>
    </form>
  );
}
