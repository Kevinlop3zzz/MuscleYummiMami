import Link from "next/link";

interface CerealBoxProps {
  name: string;
  flavor: string;
  color: string;
  accent: string;
  textColor?: string;
  emoji: string;
  href: string;
  tagline?: string;
}

export function CerealBox({ name, flavor, color, accent, textColor = "#fff", emoji, href, tagline }: CerealBoxProps) {
  return (
    <Link href={href} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", textDecoration: "none" }}
      className="cereal-icon">
      {/* Box */}
      <div style={{
        width: 56,
        height: 78,
        background: color,
        border: "2px solid #000",
        borderRadius: "2px 2px 1px 1px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "2px 2px 0 #000",
      }}>
        {/* Top strip */}
        <div style={{ height: 14, background: accent, borderBottom: "1.5px solid #000", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2px" }}>
          <span style={{ fontSize: 6, color: textColor, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 0.5, textAlign: "center", lineHeight: 1 }}>
            {name}
          </span>
        </div>

        {/* Emoji mascot */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
          {emoji}
        </div>

        {/* Flavor name band */}
        <div style={{ padding: "3px 2px", background: accent, borderTop: "1.5px solid #000", textAlign: "center" }}>
          <div style={{ fontSize: 6, fontWeight: "bold", color: textColor, textTransform: "uppercase", letterSpacing: 0.3, lineHeight: 1.2 }}>
            {flavor}
          </div>
          {tagline && (
            <div style={{ fontSize: 5, color: textColor, opacity: 0.85, marginTop: 1 }}>{tagline}</div>
          )}
        </div>

        {/* Bottom strip */}
        <div style={{ height: 8, background: color, borderTop: "1px solid rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 5, color: accent, opacity: 0.8 }}>NET WT 12 OZ</span>
        </div>
      </div>

      {/* Label under box */}
      <span style={{ fontSize: 10, color: "#fff", textAlign: "center", maxWidth: 70, lineHeight: 1.3 }}>
        {flavor}
      </span>
    </Link>
  );
}
