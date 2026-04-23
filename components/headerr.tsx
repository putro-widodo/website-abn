"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Headerr() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Kunci scroll body saat menu dibuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0 z-[110]">
          <Link href="/" onClick={closeMenu} className="relative flex items-center group">
            <div className="relative w-32 h-10 md:w-40 md:h-12 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logoabn.png" 
                alt="PT Adika Badi Nusantara Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </Link>
        </div>

        {/* DESKTOP MENU (Hanya muncul di layar XL / Besar) */}
        <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">
          <Link href="/" className={`${isActive('/') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive('/about') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors`}>
            About
          </Link>
          <Link href="/service" className={`${isActive('/service') ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors`}>
            Service
          </Link>
          <Link 
            href="/contact" 
            className={`px-8 py-3 transition-all duration-500 shadow-sm ${
              isActive('/contact') ? 'bg-[#D4AF37] text-white' : 'bg-[#001F3F] text-white hover:bg-[#D4AF37]'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE & TABLET TOGGLE BUTTON (Muncul di layar selain XL) */}
        <button 
          className="xl:hidden p-2 text-[#001F3F] z-[110] transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE FULLSCREEN OVERLAY */}
        <div className={`
          fixed inset-0 bg-white z-[105] flex flex-col pt-32 px-10 transition-all duration-500 xl:hidden
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}>
          <div className="flex flex-col gap-8 text-[22px] font-serif italic text-[#001F3F] border-l-2 border-[#D4AF37] pl-8">
            <Link href="/" onClick={closeMenu} className={`flex items-center justify-between ${isActive('/') ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
              <span>01. Home</span>
            </Link>
            <Link href="/about" onClick={closeMenu} className={`flex items-center justify-between ${isActive('/about') ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
              <span>02. About Us</span>
            </Link>
            <Link href="/service" onClick={closeMenu} className={`flex items-center justify-between ${isActive('/service') ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
              <span>03. Service</span>
            </Link>
            <Link href="/contact" onClick={closeMenu} className={`flex items-center justify-between ${isActive('/contact') ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
              <span>04. Contact Us</span>
            </Link>
          </div>

          <div className="mt-auto pb-12 space-y-6">
            <div className="h-[1px] w-full bg-gray-100"></div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">PT Adika Badi Nusantara</p>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              SOHO Pancoran, Unit 1701 <br />
              Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>

      </div>
    </nav>
  );
}