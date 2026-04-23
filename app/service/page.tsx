"use client";

import React from "react";
import { Zap, Settings, Truck, ShieldCheck, Activity, PenTool } from "lucide-react";

export default function ServicePage() {
  const coreServices = [
    {
      title: "Solar Power Plants (PLTS)",
      category: "RENEWABLE ENERGY",
      icon: <Zap className="w-7 h-7" />, // Ikon diperbesar sedikit
      desc: "Delivering clean and renewable solar power solutions, either as standalone systems or hybrid integration with diesel/gas generators.",
    },
    {
      title: "Gas Engine (PLTMG)",
      category: "NATURAL GAS SOLUTIONS",
      icon: <Activity className="w-7 h-7" />,
      desc: "Offering natural gas-based power solutions that are efficient, environmentally friendly, and suitable for long-term operations.",
    },
    {
      title: "Diesel Power Plants (PLTD)",
      category: "CONVENTIONAL POWER",
      icon: <Settings className="w-7 h-7" />,
      desc: "Providing reliable and flexible diesel generator rental services to meet urgent or temporary electricity demands.",
    },
    {
      title: "Operation & Maintenance",
      category: "TECHNICAL SERVICES",
      icon: <PenTool className="w-7 h-7" />,
      desc: "Comprehensive O&M services ensuring optimal performance with 24/7 monitoring and skilled technical teams.",
    },
    {
      title: "Strategic Material Supply",
      category: "PROCUREMENT",
      icon: <Truck className="w-7 h-7" />,
      desc: "Global sourcing of high-grade industrial equipment, spare parts, and construction materials for project efficiency.",
    },
    {
      title: "Engineering Support",
      category: "PROJECT GOVERNANCE",
      icon: <ShieldCheck className="w-7 h-7" />,
      desc: "Professional detailed engineering design, commissioning, and integration services tailored to specific energy needs.",
    },
  ];

  return (
    <div className="bg-[#FCFCFC] min-h-screen pt-40 pb-24 font-sans selection:bg-[#D4AF37] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-red-700"></div>
              {/* Teks dipertegas ke gray-600 */}
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-600">Core Energy Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#001F3F] leading-tight font-bold">
              Comprehensive <br />
              {/* Dipertegas dari gray-300 ke gray-500 + Underline Emas */}
              <span className="italic text-gray-500 font-light underline decoration-[#D4AF37] decoration-2 underline-offset-8">Infrastructure</span> Solutions.
            </h1>
          </div>
          {/* Deskripsi samping dipertegas ke gray-700 dan font-medium */}
          <p className="text-gray-700 font-medium text-base max-w-xs border-l-2 border-[#D4AF37] pl-8 leading-relaxed italic">
            Integrating advanced technical expertise with a disciplined supply chain to deliver reliable, flexible, and sustainable power supply.
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-xl">
          {coreServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-12 space-y-8 hover:bg-gray-50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Number diperjelas sedikit agar terlihat tekstur modernnya */}
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-gray-100 uppercase select-none group-hover:text-[#D4AF37]/10 transition-colors">
                0{idx + 1}
              </div>

              <div className="text-[#001F3F] group-hover:text-[#D4AF37] transition-colors duration-500">
                {service.icon}
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-black text-[#D4AF37] tracking-[0.3em] uppercase">
                  {service.category}
                </span>
                <h3 className="text-3xl font-serif text-[#001F3F] font-bold group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                {/* Deskripsi diubah menjadi gray-800 dan font-medium agar sangat jelas dibaca */}
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Tambahan visual penutup kartu agar lebih dewasa */}
              <div className="h-[2px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700 absolute bottom-0 left-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}