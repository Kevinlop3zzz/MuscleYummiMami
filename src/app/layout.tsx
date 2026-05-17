import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
