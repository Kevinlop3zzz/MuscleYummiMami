import type { Metadata, Viewport } from "next";
import { Great_Vibes, Bebas_Neue } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Do NOT set maximumScale — disabling pinch-to-zoom is an accessibility
  // violation (WCAG 1.4.4) and iOS 10+ ignores it anyway.
  themeColor: "#a4bccc", // iOS address bar matches the site's mac-desktop blue
};

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Muscle Yummi Mami",
    template: "%s — Muscle Yummi Mami",
  },
  description: "Muscle Yummi Mami — original custom streetwear. Bold shirts, fresh shoes, limited drops. Built different.",
  keywords: ["streetwear", "custom shirts", "custom shoes", "limited drops", "muscle yummi mami", "MMM", "musclemami.fit"],
  metadataBase: new URL("https://musclemami.fit"),
  openGraph: {
    title: "Muscle Yummi Mami",
    description: "Original custom streetwear. Bold shirts, fresh shoes, limited drops. Built different.",
    url: "https://musclemami.fit",
    siteName: "Muscle Yummi Mami",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscle Yummi Mami",
    description: "Original custom streetwear. Bold shirts, fresh shoes, limited drops. Built different.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${bebasNeue.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
