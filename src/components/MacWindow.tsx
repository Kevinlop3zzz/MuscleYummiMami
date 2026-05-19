import Link from "next/link";

interface MacWindowProps {
  title: string;
  itemCount?: number;
  children: React.ReactNode;
}

export function MacWindow({ title, itemCount, children }: MacWindowProps) {
  return (
    <div style={{ border: "2px solid #000", boxShadow: "3px 3px 0 #333", background: "#fff" }}>
      {/* Title bar */}
      <div
        style={{
          height: 22,
          background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
          borderBottom: "1.5px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
        <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
          {title}
        </div>
        <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
      </div>

      {/* Toolbar */}
      <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", display: "flex", gap: 12, fontSize: 10 }}>
        <span>{itemCount ?? 0} items</span>
        <span>—</span>
        <span>∞ MB available</span>
      </div>

      {/* Content */}
      <div style={{ background: "#ffffff", padding: "28px 24px", minHeight: 320 }}>
        {children}
      </div>

      {/* Bottom bar */}
      <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 16, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 2 }}>
        <div style={{ width: 14, height: 14, background: "#e8e8e8", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>▼</div>
      </div>

      {/* Resize handle */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 16, height: 16, background: "repeating-linear-gradient(135deg, #888 0px, #888 1px, #fff 1px, #fff 3px)", border: "1px solid #000" }} />
    </div>
  );
}

export function MenuBar({ active }: { active: string }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shirts", href: "/shop/shirts" },
    { label: "Shoes", href: "/shop/shoes" },
    { label: "About", href: "/about" },
    { label: "The Drop", href: "/the-drop" },
    { label: "Models", href: "/models" },
    { label: "Email List", href: "/email-list" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 20, background: "#fff", borderBottom: "1px solid #555", display: "flex", alignItems: "center", zIndex: 1000, padding: "0 8px", gap: 0, fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif" }}>
      <div style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: 13, marginRight: 8 }}>⌘</div>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          style={{ padding: "0 10px", height: 20, display: "flex", alignItems: "center", fontSize: 12, fontWeight: l.label === active ? "bold" : "normal", color: "#000", background: l.label === active ? "#000" : "transparent", color: l.label === active ? "#fff" : "#000" }}
        >
          {l.label}
        </Link>
      ))}
      <div style={{ marginLeft: "auto", fontSize: 11, paddingRight: 8 }}>
        <span>musclemami.fit</span>
      </div>
    </div>
  );
}
