"use client";

import { MenuBar } from "@/components/MacWindow";
import { useState, useRef } from "react";

export default function LoveLetterPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "", letter: "" });
  const [photo, setPhoto] = useState<{ base64: string; type: string; name: string } | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPhoto({ base64: reader.result as string, type: file.type, name: file.name });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/love-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          photo: photo?.base64 || "",
          photoType: photo?.type || "",
          photoName: photo?.name || "",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Letter received! We read every single one. 💛");
        setForm({ name: "", email: "", role: "", letter: "" });
        setPhoto(null);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Try again.");
    }
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#a4bccc", fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif", userSelect: "none" }}>
      <MenuBar active="Love Letter" />

      <div style={{ paddingTop: 48, padding: "48px 60px 60px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Love Letter
        </div>

        {/* Main window */}
        <div style={{ width: "100%", maxWidth: 560, border: "2px solid #000", boxShadow: "4px 4px 0 #333" }}>

          {/* Title bar */}
          <div style={{
            height: 22,
            background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
            borderBottom: "1.5px solid #000",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
          }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              💌 &nbsp; Love Letter
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10 }}>
            New Document — Untitled Love Letter
          </div>

          {/* Paper body */}
          <div style={{ background: "#fffef0", padding: "28px 32px", borderBottom: "1px solid #000" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 22 }}>💌</div>
              <h1 style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginTop: 6, letterSpacing: 1 }}>
                Write Us a Love Letter
              </h1>
              <p style={{ fontSize: 10, color: "#666", marginTop: 6, lineHeight: 1.6 }}>
                Customer, fan, or model — we want to hear from you. Tell us what Muscle Yummi Mami means to you, what you love, what you want to see, or why you want to work with us. No filter. Just real words. 💛
              </p>
              <div style={{ borderBottom: "1px dashed #ccc", marginTop: 14 }} />
            </div>

            {/* Success */}
            {status === "success" && (
              <div style={{ background: "#e8f5e9", border: "1.5px solid #4caf50", padding: "10px 14px", fontSize: 11, color: "#1b5e20", marginBottom: 16, textAlign: "center" }}>
                {message}
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div style={{ background: "#ffebee", border: "1.5px solid #e53935", padding: "10px 14px", fontSize: 11, color: "#b71c1c", marginBottom: 16, textAlign: "center" }}>
                {message}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Name</label>
                <input
                  type="text"
                  placeholder="What should we call you?"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Email</label>
                <input
                  type="email"
                  placeholder="So we can write back..."
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Role */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>I am a...</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["Customer 🛒", "Model 📸", "Fan 💛", "Other"].map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="role"
                        value={opt}
                        checked={form.role === opt}
                        onChange={() => setForm({ ...form, role: opt })}
                        style={{ cursor: "pointer" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Letter */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Love Letter ✍️ *</label>
                <textarea
                  required
                  placeholder="Dear Muscle Yummi Mami..."
                  rows={8}
                  value={form.letter}
                  onChange={e => setForm({ ...form, letter: e.target.value })}
                  style={{ border: "1.5px solid #888", padding: "8px", fontSize: 11, fontFamily: "Georgia, serif", background: "#fff", outline: "none", resize: "vertical", lineHeight: 1.8, color: "#222" }}
                />
              </div>

              {/* Photo upload */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>
                  Attach a Photo &nbsp;<span style={{ fontWeight: "normal", color: "#888" }}>(optional)</span>
                </label>
                <p style={{ fontSize: 9, color: "#888", marginBottom: 4 }}>
                  Models — drop your best shot. Customers — show us your fit. Fans — share the love. 📸
                </p>
                <div
                  style={{ border: "1.5px dashed #aaa", background: "#fff", padding: "14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
                  onClick={() => fileRef.current?.click()}
                >
                  <span style={{ fontSize: 22 }}>{photo ? "✅" : "📁"}</span>
                  <span style={{ fontSize: 10, color: "#555" }}>
                    {photo ? photo.name : "Click to choose a photo"}
                  </span>
                  <span style={{ fontSize: 9, color: "#aaa" }}>JPG, PNG, GIF — max 10MB</span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                    style={{ display: "none" }}
                  />
                </div>
                {photo && (
                  <button
                    type="button"
                    onClick={() => { setPhoto(null); if (fileRef.current) fileRef.current.value = ""; }}
                    style={{ fontSize: 9, color: "#888", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}
                  >
                    ✕ Remove photo
                  </button>
                )}
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "#000",
                    color: "#fff",
                    border: "2px solid #000",
                    padding: "6px 20px",
                    fontSize: 11,
                    fontWeight: "bold",
                    cursor: status === "loading" ? "wait" : "pointer",
                    fontFamily: "Geneva, Arial, sans-serif",
                    boxShadow: "2px 2px 0 #555",
                    letterSpacing: 1,
                    opacity: status === "loading" ? 0.6 : 1
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Letter 💌"}
                </button>
              </div>

            </form>
          </div>

          {/* Bottom bar */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 16, display: "flex", alignItems: "center", paddingLeft: 8, fontSize: 9, color: "#555" }}>
            All letters are read with love 🤍
          </div>

        </div>
      </div>
    </div>
  );
}
