"use client";

import { MenuBar } from "@/components/MacWindow";
import { useState } from "react";

export default function EmailListPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Customer" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 15-second timeout — prevents infinite "Saving..." on a weak mobile signal
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/email-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list! 🔔 You'll be the first to know when we drop.");
        setForm({ name: "", email: "", phone: "", interest: "Customer" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
      const isTimeout = err instanceof Error && err.name === "AbortError";
      setMessage(isTimeout ? "Request timed out. Check your connection and try again." : "Could not connect. Try again.");
    }
  };

  return (
    <div style={{
      width: "100%",
      minHeight: "100dvh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
    }}>
      <MenuBar active="Email List" />

      <div className="mobile-page-padding" style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#444", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Email List
        </div>

        {/* Main window */}
        <div style={{ width: "100%", maxWidth: 520, border: "2px solid #000", boxShadow: "4px 4px 0 #333" }}>

          {/* Title bar */}
          <div style={{
            height: 22,
            background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
            borderBottom: "1.5px solid #000",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
          }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              🔔 &nbsp; Email List — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10 }}>
            New Subscriber — Get first access to every drop
          </div>

          {/* Content */}
          <div style={{ background: "#fff", padding: "28px 32px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <div style={{ fontSize: 22 }}>🔔</div>
              <h1 style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginTop: 6, letterSpacing: 1 }}>
                Get On The List
              </h1>
              <p style={{ fontSize: 10, color: "#555", marginTop: 6, lineHeight: 1.7 }}>
                Drop alerts. Mami Monday. Exclusive access. Before anyone else. No spam — just the good stuff.
              </p>
              <div style={{ borderBottom: "1px dashed #ccc", marginTop: 14 }} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Full Name *</label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Email Address *</label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Phone */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>
                  Phone &nbsp;<span style={{ fontWeight: "normal", color: "#888" }}>(optional — for SMS drop alerts)</span>
                </label>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Interest */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>I am a...</label>
                {/* Increased padding on radio labels for 44px-ish tap targets on mobile */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Customer", "Model", "Fan", "Artist"].map(opt => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, cursor: "pointer", padding: "8px 4px" }}>
                      <input
                        type="radio"
                        name="interest"
                        value={opt}
                        checked={form.interest === opt}
                        onChange={() => setForm({ ...form, interest: opt })}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      background: "#000",
                      color: "#fff",
                      border: "2px solid #000",
                      padding: "10px 24px",
                      fontWeight: "bold",
                      cursor: status === "loading" ? "wait" : "pointer",
                      fontFamily: "Geneva, Arial, sans-serif",
                      boxShadow: "2px 2px 0 #555",
                      letterSpacing: 1,
                      opacity: status === "loading" ? 0.6 : 1,
                      pointerEvents: status === "loading" ? "none" : "auto",
                      touchAction: "manipulation",
                      minHeight: 44,
                    }}
                  >
                    {status === "loading" ? "Saving..." : "Join The List 🔔"}
                  </button>
                </div>

                {/* Success — shown below submit so it's visible on mobile */}
                {status === "success" && (
                  <div style={{ background: "#e8f5e9", border: "1.5px solid #4caf50", padding: "10px 14px", fontSize: 11, color: "#1b5e20", textAlign: "center" }}>
                    {message}
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div style={{ background: "#ffebee", border: "1.5px solid #e53935", padding: "10px 14px", fontSize: 11, color: "#b71c1c", textAlign: "center" }}>
                    {message}
                  </div>
                )}
              </div>

            </form>
          </div>

          {/* Bottom bar */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 16, display: "flex", alignItems: "center", paddingLeft: 8, fontSize: 9, color: "#555" }}>
            No spam. Ever. Unsubscribe anytime. 🤍
          </div>

        </div>
      </div>
    </div>
  );
}
