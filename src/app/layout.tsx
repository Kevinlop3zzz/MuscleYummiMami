import type { Metadata } from "next";
import { Great_Vibes, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
  title: "Muscle Yummi Mami",
  description: "Original designs. Built different.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${bebasNeue.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
