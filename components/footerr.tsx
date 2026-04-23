"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footerr() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001F3F] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* --- BRAND COLUMN --- */}
          <div className="md:col-span-5 space-y-8">
            <div className="relative w-48 h-12 grayscale brightness-200">
               {/* Gunakan logo yang sama dengan header */}
               <Image 
                 src="/logoabn.png" 
                 alt="PT Adika Badi Nusantara" 
                 fill 
                 className="object-contain object-left"
               />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              A premier contractor and strategic supplier dedicated to delivering 
              structural excellence and industrial solutions with high-level corporate 
              governance and precision engineering.
            </p>
            <div className="flex gap-4">
              <div className="h-[1px] w-8 bg-[#D4AF37] self-center"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Since 2017
              </span>
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/10 pb-4">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* --- CONTACT & ADDRESS --- */}
          <div className="md:col-span-5 space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/10 pb-4">
              Contact & Locations
            </h4>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="block text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Head Office</span>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  SOHO Pancoran, 17th Floor, <br />
                  Noble Unit 1701, South Jakarta, <br />
                  Indonesia.
                </p>
                <div className="text-sm text-gray-300 font-medium">
                  T: 021-8062-5822 <br />
                  E: Aryobpw@adikabn.co
                </div>
              </div>

              <div className="space-y-4">
                <span className="block text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Workshop</span>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Jl. Parakan 4 No. 9 Cinangka, <br />
                  Sawangan, Depok, <br />
                  West Java.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-medium text-center md:text-left">
            © {currentYear} PT Adika Badi Nusantara. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest text-gray-600">
             <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
             <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}