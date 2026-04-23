"use client";

import Image from "next/image";

export default function AboutPage() {
  const experiences = [
    { 
      id: 1, 
      title: "Power Systems Installation", 
      location: "Industrial Site", 
      image: "/gensetkuning.jpeg" 
    },
    { 
      id: 2, 
      title: "Electrical Infrastructure", 
      location: "Project Site", 
      image: "/gensetputih.jpeg" 
    },
    { 
      id: 3, 
      title: "Piping & Mechanical Works", 
      location: "Workshop", 
      image: "/pipakuning.jpeg" 
    },
    { 
      id: 4, 
      title: "Storage & Tank Systems", 
      location: "Operations", 
      image: "/tangkiputih.jpeg" 
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[2px] w-8 md:w-12 bg-red-700 flex-shrink-0"></div>
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-600 italic">Established 2017</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-[90px] font-serif text-[#001F3F] leading-[1.1] mb-10 md:mb-12 break-words">
            A Legacy of <br className="hidden md:block" />
            <span className="italic text-gray-500 font-light underline decoration-[#D4AF37] decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">Structural Integrity.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-4 md:space-y-6 text-gray-800 font-medium text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold text-[#001F3F]">PT Adika Badi Nusantara (ABN)</span> is a leading Indonesian multi-disciplinary firm specializing in General Construction, Trading, Engineering Services, and Strategic Supply. 
              </p>
              <p>
                Headquartered in Jakarta, we have built our reputation on the foundation of technical precision and unwavering commitment to client satisfaction. Our expertise spans across civil infrastructure, mechanical-electrical systems, and industrial-grade procurement.
              </p>
            </div>

            <div className="bg-[#001F3F] p-8 md:p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 p-4 md:p-8 text-4xl md:text-6xl font-black text-white/5 uppercase select-none">Vision</div>
              <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed relative z-10 font-light">
                &quot;To be a premier leader in Indonesia&apos;s construction and supply landscape by integrating superior human resources with disciplined work management.&quot;
              </p>
              <div className="h-[2px] w-12 bg-[#D4AF37] mt-8 md:mt-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS SECTION --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { num: "01", title: "Corporate Governance", desc: "Upholding the highest standards of transparency and accountability in every project lifecycle." },
              { num: "02", title: "Technical Rigor", desc: "Executing complex engineering tasks with a focus on durability, safety, and modern standards." },
              { num: "03", title: "Supply Synergy", desc: "Optimizing timelines through a seamless integration of procurement and onsite execution." }
            ].map((pillar, i) => (
              <div key={i} className="space-y-4 md:space-y-6 border-l-2 border-gray-200 pl-6 md:border-l-0 md:pl-0">
                <span className="text-[#D4AF37] font-black text-xs tracking-widest">{pillar.num} / CORE PILLAR</span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#001F3F] font-bold leading-tight">{pillar.title}</h3>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE GALLERY --- */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[#001F3F] text-3xl md:text-6xl font-serif font-bold leading-none">Our Experience</h2>
              <p className="text-gray-600 text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.4em] uppercase italic">Portfolio of Executed Works</p>
            </div>
            <div className="h-[2px] flex-grow bg-gray-100 hidden md:block mx-12 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-4 md:mb-6 shadow-xl border border-gray-100 rounded-sm">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" 
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="text-[#001F3F] font-black text-xs md:text-sm uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors break-words">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 text-[10px] md:text-[11px] uppercase font-black">{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORK CULTURE SECTION (FIXED FOR MOBILE) --- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#001F3F] p-6 sm:p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-red-700/20 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
              <h2 className="text-3xl md:text-5xl font-serif italic text-gray-200 leading-tight break-words">
                Committed to <br className="hidden md:block" />
                <span className="text-white not-italic font-bold text-3xl sm:text-4xl md:text-5xl block">HR Development.</span>
              </h2>
              <p className="text-gray-100 font-medium text-sm sm:text-base md:text-lg leading-relaxed italic opacity-90 break-words">
                At ABN, we believe our greatest asset is our people. We continuously invest in the professional growth of our engineers and staff, ensuring every project is managed by experts who share our vision for quality and national progress.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}