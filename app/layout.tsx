import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Perhatikan "../" karena folder components sudah di luar folder app
import Headerr from "../components/headerr";
import Footerr from "../components/footerr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Adika Badi Nusantara",
  description: "General Contractor & Supplier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <Headerr />
        <main>{children}</main>
        <Footerr />
      </body>
    </html>
  );
}