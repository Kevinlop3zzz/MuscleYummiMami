import Link from "next/link";
import Image from "next/image";

interface FolderIconProps {
  label: string;
  color: string;
  href: string;
  icon?: string;
  style?: React.CSSProperties;
}

function FolderIcon({ label, color, href, icon, style }: FolderIconProps) {
  return (
    <Link href={href} className="desktop-icon" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", ...style }}>
      <div style={{ position: "relative", width: 64, height: 52 }}>
        {/* Folder tab */}
        <div style={{ position: "absolute", top: 0, left: 6, width: 22, height: 9, background: color, border: "1.5px solid #000", borderBottom: "none", borderRadius: "2px 2px 0 0" }} />
        {/* Folder body */}
        <div className="folder-body" style={{ position: "absolute", top: 7, left: 0, right: 0, bottom: 0, background: color, border: "1.5px solid #000", borderRadius: "0 3px 3px 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
          {icon}
        </div>
      </div>
      <span style={{ fontSize: 11, color: "#fff", textAlign: "center", padding: "1px 3px", whiteSpace: "nowrap", maxWidth: 80, overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
    </Link>
  );
}

function DesktopIcon({ label, href, children, style }: { label: string; href: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <Link href={href} className="desktop-icon" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: "pointer", ...style }}>
      <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
      <span style={{ fontSize: 10, color: "#fff", textAlign: "center", padding: "1px 3px", whiteSpace: "nowrap" }}>
        {label}
      </span>
    </Link>
  );
}

function FloppyDisk({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      <div style={{ width: 32, height: 36, background: "#ccc", border: "1.5px solid #000", position: "relative", borderRadius: 2 }}>
        <div style={{ position: "absolute", top: 4, left: 4, right: 4, height: 8, background: "#888", borderRadius: 1 }} />
        <div style={{ position: "absolute", bottom: 4, right: 6, width: 10, height: 10, background: "#aaa", border: "1px solid #666", borderRadius: 1 }} />
      </div>
      <span style={{ fontSize: 10, color: "#fff", textAlign: "center" }}>{label}</span>
    </div>
  );
}

function TrashCan() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      <div style={{ width: 28, height: 34, position: "relative" }}>
        {/* Trash body */}
        <div style={{ position: "absolute", bottom: 0, left: 2, right: 2, height: 26, background: "#fff", border: "1.5px solid #000", borderRadius: "0 0 3px 3px" }}>
          {/* Lines */}
          <div style={{ position: "absolute", top: 4, left: 5, width: 1, height: 14, background: "#000" }} />
          <div style={{ position: "absolute", top: 4, left: 9, width: 1, height: 14, background: "#000" }} />
          <div style={{ position: "absolute", top: 4, left: 13, width: 1, height: 14, background: "#000" }} />
        </div>
        {/* Lid */}
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 5, background: "#fff", border: "1.5px solid #000", borderRadius: 2 }} />
        {/* Handle */}
        <div style={{ position: "absolute", top: 0, left: 8, right: 8, height: 7, border: "1.5px solid #000", borderBottom: "none", borderRadius: "3px 3px 0 0", background: "transparent" }} />
      </div>
      <span style={{ fontSize: 10, color: "#fff" }}>Trash</span>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#000", position: "relative", overflow: "hidden", userSelect: "none" }}>

      {/* ── Menu Bar ── */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 20, background: "#fff", borderBottom: "1px solid #555", display: "flex", alignItems: "center", zIndex: 1000, padding: "0 8px", gap: 0 }}>
        {/* Apple-style logo */}
        <div style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: 13, marginRight: 8 }}>
          ⌘
        </div>
        {["Shirts", "Shoes", "About", "Email List", "Blog"].map((item) => (
          <Link key={item} href={item === "Shirts" ? "/shop/shirts" : item === "Shoes" ? "/shop/shoes" : item === "About" ? "/about" : "#"} style={{ padding: "0 10px", height: 20, display: "flex", alignItems: "center", fontSize: 12, fontWeight: "bold", color: "#000" }}>
            {item}
          </Link>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 11, paddingRight: 8, display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/cart" style={{ display: "flex", alignItems: "center", gap: 4, background: "#000", color: "#fff", padding: "1px 7px", fontSize: 11, fontWeight: "bold", border: "1px solid #000", cursor: "pointer" }}>
            🛒 Cart
          </Link>
          <span>musclemami.fit</span>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div style={{ paddingTop: 20, width: "100%", minHeight: "100vh", position: "relative" }}>

        {/* ── Main Finder Window ── */}
        <div style={{ position: "absolute", top: 30, left: 120, width: 540, border: "2px solid #000", zIndex: 10, boxShadow: "3px 3px 0 #333" }}>
          {/* Title bar */}
          <div className="mac-title-bar" style={{ height: 22, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1.5px solid #000" }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 6px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              MUSCLE YUMMI MAMI &nbsp; HARD DRIVE
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Window toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", display: "flex", gap: 12, fontSize: 10 }}>
            <span>14 items</span>
            <span>—</span>
            <span>∞ MB available</span>
          </div>

          {/* Window content */}
          <div style={{ background: "#1c1c1c", padding: "24px 20px", display: "flex", flexWrap: "wrap", gap: 28, minHeight: 260 }}>
            <FolderIcon label="About / Bio" color="#d4b896" href="/about" icon="👤" />
            <FolderIcon label="Shirts" color="#7ec8a0" href="/shop/shirts" icon="👕" />
            <FolderIcon label="Shoes" color="#a8c4e8" href="/shop/shoes" icon="👟" />
            <FolderIcon label="Email List" color="#c8a8e8" href="#" icon="✉️" />
            <FolderIcon label="Blog" color="#f0c878" href="#" icon="💬" />
            <FolderIcon label="Contact" color="#f09898" href="#" icon="📞" />
            <FolderIcon label="Love Letter" color="#ff6b8a" href="/love-letter" icon="💌" />
          </div>

          {/* Scroll bar area */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 16, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 2 }}>
            <div style={{ width: 14, height: 14, background: "#e8e8e8", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>▼</div>
          </div>

          {/* Resize handle */}
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 16, height: 16, background: "repeating-linear-gradient(135deg, #888 0px, #888 1px, #fff 1px, #fff 3px)", border: "1px solid #000" }} />
        </div>

        {/* ── Small Utility Window (left) ── */}
        <div style={{ position: "absolute", top: 40, left: 30, width: 90, border: "2px solid #000", zIndex: 9, boxShadow: "2px 2px 0 #333" }}>
          <div className="mac-title-bar-inactive" style={{ height: 18, borderBottom: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 9, fontWeight: "bold" }}></span>
          </div>
          <div style={{ background: "#d0d0d0", padding: "10px 8px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <DesktopIcon label="Lookbook" href="#">
              <div style={{ width: 28, height: 28, background: "#fff", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📋</div>
            </DesktopIcon>
            <DesktopIcon label="Sizes" href="#">
              <div style={{ width: 28, height: 28, background: "#fff", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📐</div>
            </DesktopIcon>
          </div>
        </div>

        {/* ── Right side: floppy disks ── */}
        <div style={{ position: "absolute", top: 40, right: 20, display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <FloppyDisk label="musclemami.fit" />
          <FloppyDisk label="Drop 001" />
        </div>

        {/* ── Social Media Window ── */}
        <div style={{ position: "absolute", top: 32, right: 196, width: 160, border: "2px solid #000", zIndex: 10, boxShadow: "3px 3px 0 #333" }}>
          {/* Title bar */}
          <div className="mac-title-bar" style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1.5px solid #000" }}>
            <div style={{ position: "absolute", left: 4, width: 12, height: 12, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 5px", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 }}>
              Connect With Us
            </div>
          </div>
          {/* Content */}
          <div style={{ background: "#d4d4d4", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Instagram", icon: "📷", href: "https://instagram.com" },
              { label: "Discord",   icon: "🎮", href: "https://discord.com" },
            ].map(({ label, icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "1.5px solid #888", padding: "4px 6px", cursor: "pointer", fontSize: 11, fontWeight: "bold", color: "#000", textDecoration: "none", boxShadow: "1px 1px 0 #000" }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
          {/* Bottom bar */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 12 }} />
        </div>

        {/* ── Mami Monday Window ── */}
        <div style={{ position: "absolute", top: 32, left: 690, width: 320, border: "2px solid #000", zIndex: 10, boxShadow: "3px 3px 0 #333" }}>
          {/* Title bar */}
          <div className="mac-title-bar" style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1.5px solid #000" }}>
            <div style={{ position: "absolute", left: 4, width: 12, height: 12, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 5px", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 }}>
              Weekly Feature
            </div>
          </div>
          {/* Content */}
          <div style={{ background: "#000", padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 160 }}>
            <div className="mami-script">Mami</div>
            <div className="mami-day">MONDAY</div>
            <p style={{ color: "#aaa", fontSize: 10, marginTop: 12, textAlign: "center", lineHeight: 1.6 }}>
              Every Monday we spotlight a Mami. Models, customers, fans — anyone repping the brand. Could be you. 👀
            </p>
            <Link href="/love-letter" style={{ marginTop: 12, fontSize: 10, color: "#c084fc", letterSpacing: 2, textTransform: "uppercase", borderBottom: "1px solid #c084fc", paddingBottom: 2 }}>
              Submit Yourself →
            </Link>
          </div>
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 12 }} />
        </div>

        {/* ── Models Collab Window ── */}
        <div style={{ position: "absolute", top: 390, left: 120, width: 380, border: "2px solid #000", zIndex: 10, boxShadow: "3px 3px 0 #333" }}>
          {/* Title bar */}
          <div className="mac-title-bar" style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1.5px solid #000" }}>
            <div style={{ position: "absolute", left: 4, width: 12, height: 12, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 5px", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 }}>
              📢 Announcement
            </div>
          </div>
          {/* Dialog body */}
          <div style={{ background: "#e8e8e8", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 28 }}>📸</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: "bold", color: "#000", lineHeight: 1.5 }}>
                  🔥 Models Wanted — Get Paid to Look Good!
                </p>
                <p style={{ fontSize: 10, color: "#444", marginTop: 4, lineHeight: 1.5 }}>
                  Think you got what it takes to rep Muscle Yummi Mami? Send us your photo catalog and let&apos;s get you paid. We&apos;re building something BIG and we want the right faces on it. Take action — this is YOUR moment. Drop your email and we&apos;ll take it from there! 💸
                </p>
              </div>
            </div>
            {/* Email input row */}
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              <input
                type="email"
                placeholder="Enter your email..."
                style={{ flex: 1, border: "1.5px solid #888", padding: "4px 6px", fontSize: 11, fontFamily: "Geneva, Arial, sans-serif", background: "#fff", outline: "none" }}
              />
              <button style={{ background: "#000", color: "#fff", border: "1.5px solid #000", padding: "4px 10px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Geneva, Arial, sans-serif", boxShadow: "1px 1px 0 #555" }}>
                Apply
              </button>
            </div>
          </div>
          {/* Bottom bar */}
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 12 }} />
        </div>

        {/* ── Artist Behind Bars Window ── */}
        <div style={{ position: "absolute", top: 360, left: 530, width: 380, border: "2px solid #000", zIndex: 10, boxShadow: "3px 3px 0 #333" }}>
          {/* Title bar */}
          <div className="mac-title-bar" style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1.5px solid #000" }}>
            <div style={{ position: "absolute", left: 4, width: 12, height: 12, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 5px", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 }}>
              🎨 New Message
            </div>
          </div>
          {/* Dialog body */}
          <div style={{ background: "#e8e8e8", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 28 }}>✊</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: "bold", color: "#000", lineHeight: 1.5 }}>
                  Art Doesn&apos;t Stop at Bars.
                </p>
                <p style={{ fontSize: 10, color: "#444", marginTop: 6, lineHeight: 1.7 }}>
                  Know an artist behind bars with real talent? Their story deserves to be on the streets. We collaborate with incarcerated artists — putting their work on our shirts and shoes so the world can feel it. They create. We build the platform. Everyone eats.
                </p>
                <p style={{ fontSize: 10, color: "#222", marginTop: 6, fontWeight: "bold", lineHeight: 1.6 }}>
                  Reach out on their behalf. Let&apos;s get their art out of the cell and onto the culture. 🖤
                </p>
              </div>
            </div>
            {/* Love Letter redirect */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
              <Link href="/love-letter" style={{ background: "#000", color: "#fff", border: "2px solid #000", padding: "6px 18px", fontSize: 11, fontWeight: "bold", letterSpacing: 1, boxShadow: "2px 2px 0 #555", fontFamily: "Geneva, Arial, sans-serif" }}>
                ✊ Write Us a Love Letter
              </Link>
            </div>
          </div>
          <div style={{ background: "#c8c8c8", borderTop: "1px solid #000", height: 12 }} />
        </div>

        {/* ── Bottom desktop icons ── */}
        <div style={{ position: "absolute", bottom: 24, left: 120, display: "flex", gap: 28, alignItems: "flex-end" }}>
          <DesktopIcon label="Receipts" href="#">
            <div style={{ width: 28, height: 34, background: "#fff", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, position: "relative" }}>
              🧾
              <div style={{ position: "absolute", top: -1, right: -1, width: 10, height: 10, background: "#fff", border: "1px solid #000", transform: "rotate(0deg)" }} />
            </div>
          </DesktopIcon>
          <DesktopIcon label="Shirt Designs" href="/shop/shirts">
            <div style={{ width: 28, height: 34, background: "#fff", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👕</div>
          </DesktopIcon>
          <DesktopIcon label="Shoe Designs" href="/shop/shoes">
            <div style={{ width: 28, height: 34, background: "#fff", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👟</div>
          </DesktopIcon>
          <DesktopIcon label="MM Lookbook" href="#">
            <div style={{ width: 28, height: 34, background: "#ff6b6b", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📸</div>
          </DesktopIcon>
          <DesktopIcon label="Size Guide" href="#">
            <div style={{ width: 28, height: 34, background: "#ffd93d", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📏</div>
          </DesktopIcon>
        </div>

        {/* ── MMM Logo ── */}
        <div style={{ position: "fixed", top: 256, right: 88, zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <Image
            src="/logo.png"
            alt="Muscle Yummi Mami Logo"
            width={450}
            height={450}
            style={{ borderRadius: "50%" }}
          />
          <span style={{ fontSize: 9, color: "#888", letterSpacing: 1, textTransform: "uppercase" }}>MYM</span>
        </div>

        {/* ── Cart (top right) ── */}
        <div style={{ position: "fixed", top: 220, right: 24, zIndex: 100 }}>
          <Link href="/cart" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, background: "#fff", border: "1.5px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              🛒
            </div>
            <span style={{ fontSize: 10, color: "#fff" }}>Cart</span>
          </Link>
        </div>

        {/* ── Trash (bottom right) ── */}
        <div style={{ position: "fixed", bottom: 20, right: 24, zIndex: 100 }}>
          <TrashCan />
        </div>

      </div>
    </div>
  );
}
