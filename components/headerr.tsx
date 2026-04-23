"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Headerr() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { id: "01", name: "Home", path: "/" },
    { id: "02", name: "About Us", path: "/about" },
    { id: "03", name: "Service", path: "/service" },
    { id: "04", name: "Contact Us", path: "/contact" },
  ];

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

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`${isActive(item.path) ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'} transition-colors`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-[#001F3F] text-white hover:bg-[#D4AF37] transition-all duration-500 shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="xl:hidden p-2 text-[#001F3F] z-[110] transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE FULLSCREEN OVERLAY */}
        <div className={`
          fixed inset-0 bg-gray-50 z-[105] flex flex-col pt-28 px-6 transition-all duration-500 xl:hidden
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}>
          
          {/* MENU ITEMS WITH WHITE BOXES */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2 px-2">Navigation Menu</p>
            
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                onClick={closeMenu}
                className={`
                  flex items-center justify-between p-5 rounded-xl shadow-sm border transition-all duration-300
                  ${isActive(item.path) 
                    ? 'bg-white border-[#D4AF37] translate-x-2' 
                    : 'bg-white border-transparent active:scale-95'}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-[#D4AF37]">{item.id}</span>
                  <span className={`text-lg font-serif italic ${isActive(item.path) ? 'text-[#D4AF37]' : 'text-[#001F3F]'}`}>
                    {item.name}
                  </span>
                </div>
                <ChevronRight size={18} className={isActive(item.path) ? 'text-[#D4AF37]' : 'text-gray-300'} />
              </Link>
            ))}
          </div>

          {/* FOOTER INFO */}
          <div className="mt-auto pb-10 space-y-6">
            <div className="bg-[#001F3F] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-4xl select-none">ABN</div>
              <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-2">Corporate Office</p>
              <p className="text-xs leading-relaxed font-medium">
                Gedung SOHO Pancoran, Unit 1701 <br />
                Jakarta Selatan, Indonesia
              </p>
              <div className="h-[1px] w-12 bg-[#D4AF37] mt-4"></div>
            </div>
            <p className="text-[9px] text-center font-bold text-gray-400 uppercase tracking-[0.8em]">PT Adika Badi Nusantara</p>
          </div>
        </div>

      </div>
    </nav>
  );
}