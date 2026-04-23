"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Headerr() {
  const pathname = usePathname();

  // Fungsi bantuan untuk menentukan apakah link sedang aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO IMAGE */}
        <Link href="/" className="relative flex items-center h-full group">
          <div className="relative w-40 h-12 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logoabn.png" 
              alt="PT Adika Badi Nusantara Logo"
              fill
              className="object-contain"
              priority // Mempercepat loading logo sebagai elemen LCP
              sizes="(max-width: 768px) 100vw, 160px" // Optimalisasi ukuran gambar
            />
          </div>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">
          <Link 
            href="/" 
            className={`${isActive('/') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors duration-300`}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`${isActive('/about') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors duration-300`}
          >
            About
          </Link>
          
          {/* Link diarahkan ke rute /service sesuai nama folder baru */}
          <Link 
            href="/service" 
            className={`${isActive('/service') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors duration-300`}
          >
            Service
          </Link>
          
          {/* CTA Button mengarah ke folder /contact */}
          <Link 
            href="/contact" 
            className={`ml-4 px-8 py-3 transition-all duration-500 shadow-md ${
              isActive('/contact') 
              ? 'bg-[#D4AF37] text-white' 
              : 'bg-[#001F3F] text-white hover:bg-[#D4AF37]'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-[#001F3F]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

      </div>
    </nav>
  );
}