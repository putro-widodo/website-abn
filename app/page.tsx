"use client";

import React from "react";

export default function Home() {
  return (
    // Menambahkan overflow-x-hidden pada root untuk mencegah scroll ke samping
    <div className="bg-white text-[#1a1a1a] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-20 border-b border-gray-100 overflow-hidden">
        {/* Pattern dibuat lebih samar */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 pointer-events-none"></div>
        
        {/* px-4 di mobile agar teks tidak mepet ke pinggir layar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 md:space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-red-700 flex-shrink-0"></div>
              <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-600 break-words">
                Established 2017 | ISO Certified Standards
              </span>
            </div>

            {/* Ukuran font text-3xl sampai 4xl di mobile agar tidak memotong sisi kanan */}
            <h1 className="text-3xl sm:text-5xl md:text-[85px] font-bold leading-[1.2] md:leading-[1.05] tracking-tight text-[#001F3F] font-serif break-words">
              Engineering <br className="hidden sm:block" />
              <span className="font-light italic text-[#D4AF37]">Industrial</span> Excellence.
            </h1>

            <p className="max-w-xl text-gray-700 text-sm md:text-lg leading-relaxed font-medium">
              PT Adika Badi Nusantara provides comprehensive solutions in general construction and strategic procurement. We deliver structural integrity through disciplined engineering and superior corporate governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/service" className="w-full sm:w-auto px-10 py-4 bg-[#001F3F] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-300 shadow-xl text-center">
                Our Capabilities
              </a>
              <a href="/about" className="w-full sm:w-auto px-10 py-4 border-2 border-[#001F3F] text-[#001F3F] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all duration-300 text-center">
                Company Profile
              </a>
            </div>
          </div>
          
          {/* Gambar hanya muncul di Desktop, memastikan tidak memakan tempat di Mobile */}
          <div className="hidden md:block md:col-span-5 relative">
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden border border-gray-200 group">
                <div className="absolute inset-0 border-[15px] border-white z-10 shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-white">
                   <p className="text-[#001F3F] font-serif text-2xl leading-relaxed italic font-medium">
                     "Focusing on the convergence of precision engineering and strategic supply chain management."
                   </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORPORATE VALUES --- */}
      <section id="about" className="py-20 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { label: "01 / Vision", title: "National Contribution", desc: "To be the most trusted partner in Indonesia's infrastructure development, prioritizing human resource growth." },
              { label: "02 / Governance", title: "Strategic Precision", desc: "Every project is an exercise in meticulous planning and execution, ensuring compliance with global standards." },
              { label: "03 / Supply", title: "End-to-End Synergy", desc: "Seamless integration between construction services and strategic material supply for project efficiency." }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4 md:space-y-6">
                <span className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase">{value.label}</span>
                <h3 className="text-xl md:text-3xl font-serif font-bold text-[#001F3F] leading-tight">{value.title}</h3>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <section id="services" className="py-20 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#001F3F]">Comprehensive Expertise</h2>
            <div className="h-1 md:h-2 w-16 md:w-24 bg-[#D4AF37]"></div>
          </div>

          <div className="border-t-2 border-[#001F3F]">
            {[
              { title: "General Construction", category: "CIVIL & STRUCTURAL", desc: "Expertise in high-precision steel construction, foundation works, and industrial renovations." },
              { title: "Mechanical & Electrical", category: "ENGINEERING SYSTEMS", desc: "Strategic implementation of power distribution, HVAC, and industrial mechanical installations." },
              { title: "Strategic Material Supply", category: "PROCUREMENT", desc: "Global sourcing and logistics for high-grade industrial equipment and construction materials." }
            ].map((item, idx) => (
              <div key={idx} className="group py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200 hover:bg-white transition-all duration-300 px-2 md:px-6">
                <div className="space-y-2 mb-4 md:mb-0">
                  <span className="text-[10px] font-black text-red-700 tracking-[0.2em] uppercase">{item.category}</span>
                  <h4 className="text-xl md:text-4xl font-serif font-bold text-[#001F3F] leading-tight">{item.title}</h4>
                </div>
                <p className="text-gray-700 text-sm md:text-md max-w-sm font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-16 md:py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <div className="space-y-1 md:space-y-2">
            <span className="text-3xl md:text-5xl font-bold font-serif text-[#D4AF37]">70+</span>
            <p className="text-[9px] md:text-[12px] uppercase tracking-[0.1em] font-black opacity-80">Projects Delivered</p>
          </div>
          <div className="space-y-1 md:space-y-2 border-l border-white/10">
            <span className="text-3xl md:text-5xl font-bold font-serif text-[#D4AF37]">Expert</span>
            <p className="text-[9px] md:text-[12px] uppercase tracking-[0.1em] font-black opacity-80">Engineers & Staff</p>
          </div>
          <div className="space-y-1 md:space-y-2 border-l-0 md:border-l border-white/10">
            <span className="text-3xl md:text-5xl font-bold font-serif text-[#D4AF37]">2017</span>
            <p className="text-[9px] md:text-[12px] uppercase tracking-[0.1em] font-black opacity-80">Established</p>
          </div>
          <div className="space-y-1 md:space-y-2 border-l border-white/10">
            <span className="text-3xl md:text-5xl font-bold font-serif text-[#D4AF37]">ISO</span>
            <p className="text-[9px] md:text-[12px] uppercase tracking-[0.1em] font-black opacity-80">Quality Certified</p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-7xl font-serif text-[#001F3F] leading-tight font-bold">
            Let's discuss your next <br className="hidden md:block" /> 
            <span className="text-[#D4AF37] italic font-light">industrial landmark.</span>
          </h2>
          <div className="pt-4">
            <a href="/contact" className="inline-block w-full sm:w-auto px-12 py-5 md:py-7 bg-[#001F3F] text-white text-[11px] md:text-[13px] font-black uppercase tracking-[0.4em] hover:bg-[#D4AF37] transition-all duration-500 shadow-2xl">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}