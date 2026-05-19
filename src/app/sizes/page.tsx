import { MenuBar } from "@/components/MacWindow";

const shirtSizes = [
  { size: "S",   chest: "34–36",  length: "28" },
  { size: "M",   chest: "38–40",  length: "29" },
  { size: "L",   chest: "42–44",  length: "30" },
  { size: "XL",  chest: "46–48",  length: "31" },
  { size: "2XL", chest: "50–52",  length: "32" },
  { size: "3XL", chest: "54–56",  length: "33" },
  { size: "4XL", chest: "58–60",  length: "34" },
  { size: "5XL", chest: "62–64",  length: "35" },
];

export default function SizesPage() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="Sizes" />

      <div className="mobile-page-padding" style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#444", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Size Guide
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
              📐 &nbsp; Size Guide — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10 }}>
            All measurements in inches — lay flat on a surface for best results
          </div>

          {/* Content */}
          <div style={{ background: "#fff", padding: "28px 32px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 22 }}>📐</div>
              <h1 style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginTop: 6, letterSpacing: 1 }}>
                MMM Size Guide
              </h1>
              <p style={{ fontSize: 10, color: "#555", marginTop: 6, lineHeight: 1.7 }}>
                Our tees run true to size with a relaxed streetwear fit.<br />
                When in doubt, size up for that oversized look. 🖤
              </p>
              <div style={{ borderBottom: "1px dashed #ccc", marginTop: 14 }} />
            </div>

            {/* ── Two-Tier Section ── */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginBottom: 10 }}>Choose Your Tier</p>
              <p style={{ fontSize: 9, color: "#666", marginBottom: 12, lineHeight: 1.6 }}>
                We believe everybody deserves to rep the brand — no matter the budget. Pick the tier that works for you.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>

                {/* Premium Tier */}
                <div style={{ flex: 1, minWidth: 180, border: "2px solid #000", boxShadow: "3px 3px 0 #333" }}>
                  {/* Title bar */}
                  <div style={{ background: "#e8b86d", padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 12 }}>💪</span>
                    <span style={{ fontSize: 10, fontWeight: "bold", color: "#000", letterSpacing: 1 }}>PREMIUM</span>
                  </div>
                  {/* Body */}
                  <div style={{ background: "#fffef5", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 13, fontWeight: "bold", color: "#000", lineHeight: 1.4 }}>
                      Heavyweight Cotton
                    </p>
                    <p style={{ fontSize: 9, color: "#444", lineHeight: 1.7 }}>
                      6oz+ thick cotton — the same quality as Pro Club. Built to last through washes, workouts, and everyday wear. Full premium graphics, deep colors, and a structured feel that holds its shape.
                    </p>
                    <div style={{ borderTop: "1px solid #e0d0a0", paddingTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                      {["✅ Heavy 6oz+ cotton", "✅ Full graphic prints", "✅ Built to last", "✅ Pro Club quality feel"].map(item => (
                        <span key={item} style={{ fontSize: 9, color: "#7a5500" }}>{item}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: 4, background: "#f5e6c0", border: "1px solid #e8b86d", padding: "6px 10px", textAlign: "center" }}>
                      <span style={{ fontSize: 10, fontWeight: "bold", color: "#7a5500", letterSpacing: 1 }}>TOP TIER 🔥</span>
                    </div>
                  </div>
                </div>

                {/* The Plug Tier */}
                <div style={{ flex: 1, minWidth: 180, border: "2px solid #000", boxShadow: "3px 3px 0 #333" }}>
                  {/* Title bar */}
                  <div style={{ background: "#5b9bd5", padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 12 }}>🔌</span>
                    <span style={{ fontSize: 10, fontWeight: "bold", color: "#fff", letterSpacing: 1 }}>THE PLUG</span>
                  </div>
                  {/* Body */}
                  <div style={{ background: "#f0f6ff", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 13, fontWeight: "bold", color: "#000", lineHeight: 1.4 }}>
                      Lightweight Cotton
                    </p>
                    <p style={{ fontSize: 9, color: "#444", lineHeight: 1.7 }}>
                      Not our heaviest tee — and that&apos;s the point. Lighter cotton, simpler print, lower price. No frills, no premium weight. If you want to rep MMM on a budget, this is your way in. Still real. Still us. Just lighter on the wallet AND the shirt.
                    </p>
                    <div style={{ borderTop: "1px solid #c0d4e8", paddingTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                      {[
                        { text: "✅ Lightweight cotton", warn: false },
                        { text: "✅ Simplified design / fewer colors", warn: false },
                        { text: "✅ Lower price point", warn: false },
                        { text: "⚠️ Not as thick as Premium — lighter feel", warn: true },
                        { text: "⚠️ Basic print — not the full graphic", warn: true },
                      ].map(({ text, warn }) => (
                        <span key={text} style={{ fontSize: 9, color: warn ? "#996600" : "#1a4a7a" }}>{text}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: 4, background: "#dceeff", border: "1px solid #5b9bd5", padding: "6px 10px", textAlign: "center" }}>
                      <span style={{ fontSize: 10, fontWeight: "bold", color: "#1a4a7a", letterSpacing: 1 }}>YOUR WAY IN 🔌</span>
                    </div>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: 10, background: "#fffef0", border: "1px dashed #ccc", padding: "8px 12px", fontSize: 9, color: "#666", lineHeight: 1.7 }}>
                <strong style={{ color: "#000" }}>Both tiers share the same size chart below.</strong> The sizing is consistent across Premium and The Plug — no need to size differently.
              </div>
            </div>

            {/* How to measure */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginBottom: 10 }}>How to Measure</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 180, background: "#f5f5f5", border: "1px solid #ddd", padding: "10px 12px" }}>
                  <p style={{ fontSize: 10, fontWeight: "bold", color: "#000", marginBottom: 4 }}>👕 Chest</p>
                  <p style={{ fontSize: 9, color: "#555", lineHeight: 1.6 }}>
                    Lay the shirt flat. Measure straight across the chest from armpit seam to armpit seam. Multiply by 2 for the full chest measurement.
                  </p>
                </div>
                <div style={{ flex: 1, minWidth: 180, background: "#f5f5f5", border: "1px solid #ddd", padding: "10px 12px" }}>
                  <p style={{ fontSize: 10, fontWeight: "bold", color: "#000", marginBottom: 4 }}>📏 Length</p>
                  <p style={{ fontSize: 9, color: "#555", lineHeight: 1.6 }}>
                    Lay the shirt flat. Measure from the highest point of the shoulder down to the bottom hem in a straight line.
                  </p>
                </div>
              </div>
            </div>

            {/* Size table */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginBottom: 10 }}>Shirt Sizes</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#000", color: "#fff" }}>
                    <th style={{ padding: "7px 12px", textAlign: "left", fontSize: 10, letterSpacing: 1, fontWeight: "bold", border: "1px solid #000" }}>SIZE</th>
                    <th style={{ padding: "7px 12px", textAlign: "center", fontSize: 10, letterSpacing: 1, fontWeight: "bold", border: "1px solid #000" }}>CHEST (in)</th>
                    <th style={{ padding: "7px 12px", textAlign: "center", fontSize: 10, letterSpacing: 1, fontWeight: "bold", border: "1px solid #000" }}>LENGTH (in)</th>
                    <th style={{ padding: "7px 12px", textAlign: "center", fontSize: 10, letterSpacing: 1, fontWeight: "bold", border: "1px solid #000" }}>FIT</th>
                  </tr>
                </thead>
                <tbody>
                  {shirtSizes.map((row, i) => (
                    <tr key={row.size} style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                      <td style={{ padding: "7px 12px", fontWeight: "bold", border: "1px solid #ddd", color: "#000" }}>{row.size}</td>
                      <td style={{ padding: "7px 12px", textAlign: "center", border: "1px solid #ddd", color: "#333" }}>{row.chest}</td>
                      <td style={{ padding: "7px 12px", textAlign: "center", border: "1px solid #ddd", color: "#333" }}>{row.length}</td>
                      <td style={{ padding: "7px 12px", textAlign: "center", border: "1px solid #ddd", color: "#888", fontSize: 9 }}>
                        {row.size === "S" || row.size === "M" ? "Regular" : row.size === "L" || row.size === "XL" ? "Relaxed" : "Oversized"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div style={{ background: "#fffef0", border: "1px dashed #ccc", padding: "10px 14px", fontSize: 9, color: "#666", lineHeight: 1.7 }}>
              <strong style={{ color: "#000" }}>Note:</strong> Measurements may vary slightly between designs. All MMM tees are heavyweight cotton with a durable finish built to last. If you have questions about fit, reach out on Instagram or Discord before ordering.
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 16, display: "flex", alignItems: "center", paddingLeft: 8, fontSize: 9, color: "#555" }}>
            Still unsure? DM us on Instagram — we&apos;ll help you find your size. 🖤
          </div>

        </div>
      </div>
    </div>
  );
}
