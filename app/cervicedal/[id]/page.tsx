"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; 
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Database Konten Service
const serviceData: any = {
  "plts": {
    title: "Solar Power Plant (PLTS)",
    location: "Maratua Hybrid System",
    description: "Our Solar Power Plant in Maratua utilizes a sophisticated Hybrid System, combining solar energy with energy storage to ensure 24/7 power availability for remote areas.",
    features: ["Hybrid Energy Management", "BESS (Battery Energy Storage System)", "Sustainable Power Source", "Remote Monitoring"],
    images: ["/plts1.jpeg", "/plts2.jpeg", "/plts3.jpeg", "/plts4.jpeg"]
  },
  "pltmg": {
    title: "Gas Engine Power Plant (PLTMG)",
    explanation: "PLTMG (Pembangkit Listrik Tenaga Mesin Gas) is a power generation system that uses gas engines to drive alternators. It is highly efficient and has a faster start-up time compared to conventional steam plants.",
    installation: "Our installation process involves site preparation, engine-generator set mounting, gas piping systems, and synchronization with the national grid (PLN).",
    features: ["Dual Fuel Capability", "High Efficiency", "Low Emission", "Fast Startup"],
    images: ["/pltmg1.jpg", "/pltmg2.jpg", "/pltmg3.jpg", "/pltmg4.jpg"]
  },
  "pltd": {
    title: "Diesel Power Plant (PLTD)",
    explanation: "PLTD (Pembangkit Listrik Tenaga Diesel) uses diesel engines as the prime mover to produce electricity. It is commonly used for peak-shaving or as a primary power source in isolated grids.",
    features: ["Reliable Base Load", "Easy Maintenance", "Scalable Capacity", "Grid Stability"],
    images: ["/pltd1.jpeg", "/pltd2.jpeg", "/pltd3.jpeg", "/pltd4.jpeg"]
  },
  "om": {
    title: "Operation & Maintenance",
    professionalism: "We deploy highly certified and professional technicians with extensive experience in power plant management.",
    procedures: "Based on our corporate standards, our O&M procedures include Preventive Maintenance (PM), Corrective Maintenance (CM), and Real-time Performance Analytics to minimize downtime.",
    features: ["24/7 Technical Support", "Standardized Safety Protocols", "Spare Parts Management", "Performance Optimization"],
    images: ["/onm1.png", "/onm2.png", "/onm3.png", "/onm5.png"]
  },
  "strategic": {
    title: "Strategic Cooperation",
    explanation: "We engage in intensive strategic meetings and planning with PLN (Perusahaan Listrik Negara) to support national electrification programs and infrastructure development.",
    features: ["PPA (Power Purchase Agreement) Consulting", "Regulatory Compliance", "Infrastructure Planning", "Grid Integration Strategy"],
    images: ["/sms1.jpeg", "/sms2.jpeg", "/sms3.jpeg", "/sms4.jpeg"]
  },
  "engineering": {
    title: "Engineering Support",
    explanation: "Our engineering division provides end-to-end technical support, from feasibility studies and system design to commissioning and technical troubleshooting.",
    features: ["Feasibility Studies", "Technical Design (CAD/BIM)", "Commissioning Support", "Troubleshooting Experts"],
    images: ["/eng1.jpg", "/eng2.jpg", "/eng3.jpg", "/eng4.jpg"]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id as string; // Ini akan mengambil 'plts' atau 'pltmg' dari URL
  const data = serviceData[id];

  if (!data) return (
    <div className="pt-40 text-center flex flex-col items-center gap-4">
      <p className="text-xl font-bold text-[#001F3F]">Service Not Found</p>
      <Link href="/service" className="text-[#D4AF37] font-bold">Return to Services</Link>
    </div>
  );

  return (
    <div className="pt-32 pb-24 bg-[#FCFCFC] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/service" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-1 w-12 bg-red-700"></div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#001F3F] leading-tight">{data.title}</h1>
              {data.location && <p className="text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xs">Location: {data.location}</p>}
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-medium">
              <p>{data.description || data.explanation}</p>
              {data.installation && (
                <div className="p-6 bg-white border-l-4 border-[#D4AF37] shadow-sm italic text-gray-600">
                  <h4 className="font-bold text-[#001F3F] not-italic mb-2 uppercase text-[10px] tracking-widest">Installation & System</h4>
                  {data.installation}
                </div>
              )}
              {data.professionalism && (
                <div className="space-y-4">
                  <p>{data.professionalism}</p>
                  <p className="text-sm font-bold border-t pt-4 text-gray-500">{data.procedures}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-50">
                  <CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#001F3F] uppercase tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-square lg:aspect-[4/5] bg-gray-100 shadow-2xl border-8 border-white overflow-hidden">
             <Image 
                src={data.images[0]} 
                alt={data.title} 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>

        {/* Gallery Slot */}
        <div className="space-y-12">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001F3F]">Project Documentation</h2>
            <div className="h-1 w-12 bg-[#D4AF37] mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.images.map((img: string, index: number) => (
              <div key={index} className="group relative aspect-square bg-gray-100 overflow-hidden shadow-md border-4 border-white transition-transform hover:-translate-y-2">
                <Image 
                  src={img} 
                  alt={`Documentation ${index + 1}`} 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#001F3F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest border border-white px-4 py-2">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}