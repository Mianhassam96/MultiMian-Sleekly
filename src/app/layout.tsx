import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MultiMian Sleekly",
  description: "Minimal URL shortener landing page and analytics dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
