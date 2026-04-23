"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  // Pesan WhatsApp otomatis
  const waMessage = encodeURIComponent("Halo, saya dari website ABN ingin berdiskusi mengenai orderan sparepart dan layanan energi lainnya.");
  const waLink = `https://wa.me/6281318499784?text=${waMessage}`;

  return (
    <div className="pt-32 md:pt-40 pb-24 bg-[#FCFCFC] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- SALES / DIRECT INQUIRY SECTION --- */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-8 md:w-12 bg-red-700 flex-shrink-0"></div>
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-600">Direct Sales Inquiry</span>
          </div>

          <div className="bg-white border-2 border-gray-100 shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12 items-center">
            {/* Foto Profile Section - Responsive Aspect Ratio */}
            <div className="w-full md:col-span-4 lg:col-span-3 bg-gray-50 aspect-square md:aspect-[3/4] lg:aspect-square flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-gray-100 relative group overflow-hidden">
               <Image 
                  src="/aryojas.jpeg" 
                  alt="Aryo Bintang Putro Widodo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 300px"
               />
               <div className="absolute inset-0 bg-[#001F3F]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-[#001F3F] uppercase tracking-widest">Business Personnel</span>
               </div>
            </div>

            {/* Detail Sales */}
            <div className="w-full md:col-span-8 lg:col-span-9 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-8">
              <div className="space-y-3">
                {/* Nama mengecil di HP agar tidak meluber */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#001F3F] font-bold leading-tight break-words">
                  Aryo Bintang Putro Widodo
                </h2>
                <div className="inline-block px-4 py-1 bg-[#D4AF37] text-[#001F3F] font-black text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase">
                  Sales Department
                </div>
              </div>
              
              <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed max-w-2xl italic break-words">
                &quot;For immediate discussions regarding procurement, high-grade spare parts, or customized energy solutions, please connect directly through our prioritized WhatsApp channel.&quot;
              </p>

              <div className="pt-2 md:pt-4">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-[#001F3F] text-white text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#D4AF37] transition-all duration-500 group shadow-xl"
                >
                  <MessageSquare className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                  Discuss Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- OFFICE INFORMATION --- */}
        {/* Grid 1 kolom di HP, 2 kolom di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border-2 border-gray-200 shadow-lg">
          {/* Head Office */}
          <div className="bg-white p-8 md:p-16 lg:p-20 space-y-8 md:space-y-10 group hover:bg-gray-50 transition-all duration-500">
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase underline underline-offset-4">Corporate Headquarters</span>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif text-[#001F3F] font-bold">South Jakarta</h3>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed break-words">
                Gedung SOHO Pancoran, Lantai 17, <br />
                Unit Noble 1701, Jakarta Selatan, <br />
                DKI Jakarta, Indonesia.
              </p>
            </div>
          </div>

          {/* Operational Contact */}
          <div className="bg-white p-8 md:p-16 lg:p-20 space-y-8 md:space-y-10 group hover:bg-gray-50 transition-all duration-500">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase underline underline-offset-4">General Inquiries</span>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-1 md:space-y-2">
                <p className="text-[10px] md:text-[11px] text-gray-500 uppercase font-black tracking-widest">Direct Line</p>
                <p className="text-2xl md:text-3xl font-serif text-[#001F3F] font-bold">021-8062-5822</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-[10px] md:text-[11px] text-gray-500 uppercase font-black tracking-widest">Official Email</p>
                {/* Email responsif agar tidak memotong container */}
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#001F3F] font-bold break-all md:break-normal">Aryobpw@adikabn.co</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER DECORATION --- */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="h-[1px] w-16 md:w-24 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-[10px] md:text-[12px] font-black text-gray-400 uppercase tracking-[0.5em] md:tracking-[1.2em] leading-loose">
            PT Adika Badi Nusantara
          </p>
        </div>

      </div>
    </div>
  );
}