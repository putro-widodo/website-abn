"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  // Pesan WhatsApp otomatis
  const waMessage = encodeURIComponent("Halo, saya dari website ABN ingin berdiskusi mengenai orderan sparepart dan layanan energi lainnya.");
  const waLink = `https://wa.me/6281318499784?text=${waMessage}`;

  return (
    <div className="pt-40 pb-24 bg-[#FCFCFC] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SALES / DIRECT INQUIRY SECTION --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-red-700"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-600">Direct Sales Inquiry</span>
          </div>

          <div className="bg-white border-2 border-gray-100 shadow-2xl overflow-hidden grid md:grid-cols-12 items-center">
            {/* Foto Profile Section */}
            <div className="md:col-span-3 bg-gray-50 aspect-square flex items-center justify-center border-r-2 border-gray-100 relative group overflow-hidden">
               {/* TIPS: 
                  1. Masukkan foto Pak Aryo ke folder /public/aryo.jpg
                  2. Ganti src="/aryo.jpg" di bawah ini
               */}
               <Image 
                  src="/aryojas.jpeg" // Ganti dengan path foto aslimu
                  alt="Aryo Bintang Putro Widodo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 300px"
               />
               {/* Overlay jika foto belum ada */}
               <div className="absolute inset-0 bg-[#001F3F]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-[#001F3F] uppercase tracking-widest">View Profile</span>
               </div>
            </div>

            {/* Detail Sales */}
            <div className="md:col-span-9 p-8 md:p-16 space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-serif text-[#001F3F] font-bold">Aryo Bintang Putro Widodo</h2>
                <div className="inline-block px-4 py-1 bg-[#D4AF37] text-[#001F3F] font-black text-[10px] tracking-[0.4em] uppercase">
                  Sales Department
                </div>
              </div>
              
              {/* Teks Deskripsi dibuat tebal (font-medium) dan gelap (text-gray-800) */}
              <p className="text-gray-800 font-medium text-lg leading-relaxed max-w-2xl italic">
                &quot;For immediate discussions regarding procurement, high-grade spare parts, or customized energy solutions, please connect directly through our prioritized WhatsApp channel.&quot;
              </p>

              <div className="pt-4">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 px-12 py-6 bg-[#001F3F] text-white text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all duration-500 group shadow-[0_20px_50px_rgba(0,31,63,0.3)]"
                >
                  <MessageSquare className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                  Discuss Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- OFFICE INFORMATION --- */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border-2 border-gray-200 shadow-lg">
          {/* Head Office */}
          <div className="bg-white p-12 md:p-20 space-y-10 group hover:bg-gray-50 transition-all duration-500">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black text-[11px] tracking-[0.3em] uppercase underline underline-offset-4">Corporate Headquarters</span>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-serif text-[#001F3F] font-bold">South Jakarta</h3>
              <p className="text-gray-900 text-lg font-medium leading-relaxed">
                Gedung SOHO Pancoran, Lantai 17, <br />
                Unit Noble 1701, Jakarta Selatan, <br />
                DKI Jakarta, Indonesia.
              </p>
            </div>
          </div>

          {/* Operational Contact */}
          <div className="bg-white p-12 md:p-20 space-y-10 group hover:bg-gray-50 transition-all duration-500">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-black text-[11px] tracking-[0.3em] uppercase underline underline-offset-4">General Inquiries</span>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500 uppercase font-black tracking-widest">Direct Line</p>
                <p className="text-3xl font-serif text-[#001F3F] font-bold">021-8062-5822</p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500 uppercase font-black tracking-widest">Official Email</p>
                <p className="text-3xl font-serif text-[#001F3F] font-bold">Aryobpw@adikabn.co</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER DECORATION --- */}
        <div className="mt-32 text-center">
          <div className="h-[1px] w-24 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-[12px] font-black text-gray-400 uppercase tracking-[1.2em] ml-[1.2em]">PT Adika Badi Nusantara</p>
        </div>

      </div>
    </div>
  );
}