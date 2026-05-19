import { MenuBar } from "@/components/MacWindow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Some brands make clothes. We make a statement. Learn who we are and what Muscle Yummi Mami is built on.",
  openGraph: {
    title: "About — Muscle Yummi Mami",
    description: "Some brands make clothes. We make a statement. Learn who we are and what Muscle Yummi Mami is built on.",
    url: "https://musclemami.fit/about",
  },
};

export default function AboutPage() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="About" />

      <div style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; About
        </div>

        {/* Main window */}
        <div style={{ width: "100%", maxWidth: 620, border: "2px solid #000", boxShadow: "4px 4px 0 #333" }}>

          {/* Title bar */}
          <div style={{
            height: 22,
            background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
            borderBottom: "1.5px solid #000",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
          }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              📁 &nbsp; About — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10 }}>
            Bio — musclemami.fit
          </div>

          {/* Content */}
          <div style={{ background: "#ffffff", padding: "40px 44px" }}>

            {/* Header */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: 3, marginBottom: 10 }}>
                WHO WE ARE
              </div>
              <div style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#000",
                lineHeight: 1.3,
                letterSpacing: 1
              }}>
                Some brands make clothes.<br />
                <span style={{ color: "#c084fc" }}>We make a statement.</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderBottom: "1px solid #222", marginBottom: 28 }} />

            {/* Bio paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              <p style={{ fontSize: 11, color: "#333", lineHeight: 2 }}>
                Muscle Yummi Mami was born from the idea that the best things in life hit different when they're made with intention — the fits that turn heads, the art that stops you mid-scroll, the drop you didn't see coming. That's the energy we run on.
              </p>

              <p style={{ fontSize: 11, color: "#333", lineHeight: 2 }}>
                Every piece we put out starts with a feeling. Not a trend, not a formula — a feeling. The kind that makes you point at something and say <em style={{ color: "#000", fontStyle: "italic" }}>that's me.</em> Bold enough to stand alone. Specific enough to mean something. Wearable enough that you actually reach for it.
              </p>

              <p style={{ fontSize: 11, color: "#333", lineHeight: 2 }}>
                We're not chasing the mainstream. We're building our own lane — one drop at a time, one design at a time, one person at a time. Our community includes the grinders, the creatives, the ones overlooked, the ones unbothered, the ones just now stepping into their moment.
              </p>

              <p style={{ fontSize: 11, color: "#333", lineHeight: 2 }}>
                If you found us, you already know. This isn't for everybody — but if it's for you, it's <em style={{ color: "#000" }}>really</em> for you.
              </p>

            </div>

            {/* Sign-off */}
            <div style={{
              marginTop: 40,
              padding: "20px 24px",
              border: "1px solid #000",
              background: "#1a1a2e"
            }}>
              <div style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#c084fc",
                letterSpacing: 2,
                lineHeight: 1.8
              }}>
                Muscle Yummi Mami.
              </div>
              <div style={{ fontSize: 10, color: "#888", letterSpacing: 2, marginTop: 4 }}>
                ORIGINAL DESIGNS. BUILT DIFFERENT.
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{
            background: "#c8c8c8",
            borderTop: "1px solid #000",
            height: 16,
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
            fontSize: 9,
            color: "#555"
          }}>
            © 2025 Muscle Yummi Mami — musclemami.fit
          </div>

        </div>
      </div>
    </div>
  );
}
