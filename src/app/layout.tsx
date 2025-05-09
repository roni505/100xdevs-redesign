import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Nav from "@/ui/nav";

export const metadata: Metadata = {
  title: "100xDevs",
  description: "Take your development skills from 0 to 100.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
