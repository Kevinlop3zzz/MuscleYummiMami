import { MenuBar } from "@/components/MacWindow";

export default function LoveLetterPage() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#000", fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif", userSelect: "none" }}>
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

            {/* Form */}
            <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Name</label>
                <input
                  type="text"
                  placeholder="What should we call you?"
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Email</label>
                <input
                  type="email"
                  placeholder="So we can write back..."
                  style={{ border: "1.5px solid #888", padding: "5px 8px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
                />
              </div>

              {/* Who are you */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>I am a...</label>
                <div style={{ display: "flex", gap: 10 }}>
                  {["Customer 🛒", "Model 📸", "Fan 💛", "Other"].map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, cursor: "pointer" }}>
                      <input type="radio" name="role" value={opt} style={{ cursor: "pointer" }} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* The letter */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>Your Love Letter ✍️</label>
                <textarea
                  placeholder="Dear Muscle Yummi Mami..."
                  rows={8}
                  style={{ border: "1.5px solid #888", padding: "8px", fontSize: 11, fontFamily: "Georgia, serif", background: "#fff", outline: "none", resize: "vertical", lineHeight: 1.8, color: "#222" }}
                />
              </div>

              {/* Photo upload (optional) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>
                  Attach a Photo &nbsp;<span style={{ fontWeight: "normal", color: "#888" }}>(optional)</span>
                </label>
                <p style={{ fontSize: 9, color: "#888", marginBottom: 4 }}>
                  Models — drop your best shot. Customers — show us your fit. Fans — share the love. 📸
                </p>
                <div style={{ border: "1.5px dashed #aaa", background: "#fff", padding: "14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 22 }}>📁</span>
                  <span style={{ fontSize: 10, color: "#555" }}>Drag & drop or click to choose a file</span>
                  <span style={{ fontSize: 9, color: "#aaa" }}>JPG, PNG, GIF — max 10MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ fontSize: 10, fontFamily: "Geneva, Arial, sans-serif", cursor: "pointer", marginTop: 4 }}
                  />
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <button
                  type="submit"
                  style={{ background: "#000", color: "#fff", border: "2px solid #000", padding: "6px 20px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Geneva, Arial, sans-serif", boxShadow: "2px 2px 0 #555", letterSpacing: 1 }}
                >
                  Send Letter 💌
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
