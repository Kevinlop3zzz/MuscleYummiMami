"use client";

import { useState } from "react";
import Link from "next/link";

export function AnnouncementApply() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleApply = async () => {
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/model-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email, phone: "", instagram: "", type: "Model", message: "" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
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
    <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleApply()}
          disabled={status === "loading"}
          style={{ flex: 1, border: "1.5px solid #888", padding: "4px 6px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none", opacity: status === "loading" ? 0.6 : 1 }}
        />
        <button
          onClick={handleApply}
          disabled={status === "loading"}
          style={{ background: "#000", color: "#fff", border: "1.5px solid #000", padding: "4px 10px", fontSize: 11, fontWeight: "bold", cursor: status === "loading" ? "wait" : "pointer", fontFamily: "Geneva, Arial, sans-serif", boxShadow: "1px 1px 0 #555", opacity: status === "loading" ? 0.6 : 1 }}
        >
          {status === "loading" ? "..." : "Apply"}
        </button>
      </div>
      {status === "error" && (
        <div style={{ fontSize: 9, color: "#b71c1c" }}>Could not send. Try again or <Link href="/models" style={{ color: "#b71c1c" }}>use full form</Link>.</div>
      )}
      <div style={{ fontSize: 9, color: "#888" }}>
        Want to share more? <Link href="/models" style={{ color: "#555" }}>Fill out the full application →</Link>
      </div>
    </div>
  );
}
