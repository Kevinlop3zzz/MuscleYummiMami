import { MenuBar } from "@/components/MacWindow";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Drop — Muscle Yummi Mami",
  description: "Drop announcements, artist spotlights, and Mami Monday features from Muscle Yummi Mami. Stay up on what's coming next.",
  openGraph: {
    title: "The Drop — Muscle Yummi Mami",
    description: "Drop announcements, artist spotlights, and Mami Monday features. Stay up on what's coming next.",
    url: "https://musclemami.fit/the-drop",
    siteName: "Muscle Yummi Mami",
    type: "website",
  },
};

const posts = [
  {
    type: "DROP",
    typeColor: "#5dbb8a",
    date: "May 17, 2025",
    title: "The First Drop Is Coming.",
    preview: "We've been in the lab. Every design you're about to see started as a feeling — not a trend. The inaugural Muscle Yummi Mami collection drops soon. Limited units. No restocks. Stay ready.",
    emoji: "👕",
  },
  {
    type: "ARTIST SPOTLIGHT",
    typeColor: "#c084fc",
    date: "May 10, 2025",
    title: "Art Doesn't Stop at Bars — Introducing Our First Collab.",
    preview: "Some of the most powerful art being made right now is coming from inside. We're partnering with incarcerated artists to bring their work to the streets — because talent doesn't pause for circumstance. More details coming soon. If you know an artist, send us a Love Letter.",
    emoji: "🎨",
  },
  {
    type: "MAMI MONDAY",
    typeColor: "#e879f9",
    date: "May 5, 2025",
    title: "Mami Monday Vol. 01 — We're Just Getting Started.",
    preview: "Every Monday we highlight someone in the community who embodies the Muscle Yummi Mami spirit — the grinders, the creatives, the ones doing it on their own terms. Vol. 01 is coming. You might be next.",
    emoji: "💜",
  },
];

export default function TheDropPage() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#000",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="The Drop" />

      <div style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; The Drop
        </div>

        {/* Main window */}
        <div style={{ width: "100%", maxWidth: 680, border: "2px solid #000", boxShadow: "4px 4px 0 #333" }}>

          {/* Title bar */}
          <div style={{
            height: 22,
            background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
            borderBottom: "1.5px solid #000",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
          }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              💬 &nbsp; The Drop — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10, display: "flex", justifyContent: "space-between" }}>
            <span>{posts.length} posts</span>
            <span>Drops · Spotlights · Mami Monday</span>
          </div>

          {/* Content */}
          <div style={{ background: "#0d0d0d", padding: "32px 36px" }}>

            {/* Header */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: 3, marginBottom: 8 }}>LATEST</div>
              <div style={{ fontSize: 20, fontWeight: "bold", color: "#fff", letterSpacing: 1 }}>
                The Drop.
              </div>
              <div style={{ fontSize: 10, color: "#666", marginTop: 6, lineHeight: 1.8 }}>
                Announcements, artist features, and Mami Monday — everything happening inside the world of MMM.
              </div>
              <div style={{ borderBottom: "1px solid #222", marginTop: 20 }} />
            </div>

            {/* Posts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {posts.map((post, i) => (
                <div key={i}>
                  <div style={{
                    background: "#111",
                    border: "1px solid #222",
                    padding: "20px 24px",
                    cursor: "pointer",
                    transition: "border-color 0.15s"
                  }}>
                    {/* Post header */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{
                        background: post.typeColor,
                        color: "#000",
                        fontSize: 8,
                        fontWeight: "bold",
                        padding: "2px 7px",
                        letterSpacing: 1.5
                      }}>
                        {post.type}
                      </span>
                      <span style={{ fontSize: 9, color: "#555" }}>{post.date}</span>
                    </div>

                    {/* Title */}
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{post.emoji}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: "bold", color: "#fff", marginBottom: 8, lineHeight: 1.4 }}>
                          {post.title}
                        </div>
                        <div style={{ fontSize: 10, color: "#888", lineHeight: 1.9 }}>
                          {post.preview}
                        </div>
                      </div>
                    </div>

                    {/* Read more */}
                    <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
                      <span style={{ fontSize: 9, color: "#555", letterSpacing: 1 }}>
                        READ MORE →
                      </span>
                    </div>
                  </div>
                  {i < posts.length - 1 && <div style={{ height: 1, background: "#1a1a1a" }} />}
                </div>
              ))}
            </div>

            {/* Subscribe nudge */}
            <div style={{
              marginTop: 32,
              padding: "16px 20px",
              border: "1px solid #222",
              background: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: "bold", color: "#fff", marginBottom: 4 }}>
                  Never miss a drop. 📬
                </div>
                <div style={{ fontSize: 9, color: "#666" }}>
                  Get drop alerts, Mami Monday features, and artist spotlights straight to your inbox.
                </div>
              </div>
              <Link href="#" style={{
                background: "#c084fc",
                color: "#000",
                fontSize: 9,
                fontWeight: "bold",
                padding: "6px 14px",
                letterSpacing: 1,
                whiteSpace: "nowrap",
                flexShrink: 0
              }}>
                JOIN THE LIST
              </Link>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{
            background: "#c8c8c8",
            borderTop: "1px solid #000",
            height: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: 9,
            color: "#555"
          }}>
            <span>The Drop — musclemami.fit</span>
            <span>© 2025 Muscle Yummi Mami</span>
          </div>

        </div>
      </div>
    </div>
  );
}
