import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Menggunakan alias "@" (jika dikonfigurasi) atau jalur relatif yang tepat
import Headerr from "@/components/headerr";
import Footerr from "@/components/footerr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata ditingkatkan agar profesional di mata Google (SEO)
export const metadata: Metadata = {
  title: "PT Adika Badi Nusantara | Power Plant & Energy Solutions",
  description: "Premier energy solutions provider in Indonesia. Specializing in PLTS (Solar), PLTMG (Gas), and PLTD (Diesel) rental and O&M services.",
  keywords: ["PT Adika Badi Nusantara", "ABN", "Power Plant Indonesia", "PLTS", "PLTMG", "PLTD", "Solar Energy Indonesia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#1a1a1a]`}
        suppressHydrationWarning={true}
      >
        <Headerr />
        {/* Min-h-screen memastikan footer selalu di bawah walaupun konten sedikit */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footerr />
      </body>
    </html>
  );
}