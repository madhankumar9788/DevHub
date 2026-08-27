import React, { useState, useEffect, useRef } from "react";
import BorderGlow from "./BorderGlow";

const testimonials = [
  {
    id: "arul",
    author: "Dr. K. Arul",
    handle: "@karul_kgisl",
    role: "Director, KGiSL Educational Institutions",
    avatarColor: "bg-[#3B82F6] text-white",
    initials: "KA",
    rating: 5,
    quote:
      "DEV HUB delivered our full campus portal and department sub-sites ahead of schedule. Clean React architecture, responsive department layouts, and zero revision headaches. Transformed our institution's online presence completely.",
  },
  {
    id: "meenakshi",
    author: "R. Meenakshi",
    handle: "@meenakshi_skillryt",
    role: "Head of Operations, SkillRyt EdTech",
    avatarColor: "bg-[#06B6D4] text-white",
    initials: "RM",
    rating: 5,
    quote:
      "Completely revolutionized our skill learning platform UI. The responsive course catalog, student dashboard, and fast loading speeds exceeded all our expectations.",
  },
  {
    id: "venkatesh",
    author: "S. Venkatesh",
    handle: "@s_venkatesh_tsa",
    role: "Principal, TSA College",
    avatarColor: "bg-blue-600 text-white",
    initials: "SV",
    rating: 5,
    quote:
      "Professional, agile, and extremely reliable. Turned our complex institutional requirements into a seamless, high-performance web experience for students and faculty.",
  },
  {
    id: "ashok",
    author: "Dr. Ashok Kumar",
    handle: "@ashok_kgcas",
    role: "Dean of Academics, KGCAS",
    avatarColor: "bg-indigo-600 text-white",
    initials: "AK",
    rating: 5,
    quote:
      "The attention to detail and user experience is outstanding. Our portal bounce rates dropped dramatically and parents praised the clear admission guidance.",
  },
  {
    id: "swaminathan",
    author: "P. Swaminathan",
    handle: "@swami_apex",
    role: "Founder & CEO, Apex EduTech",
    avatarColor: "bg-emerald-600 text-white",
    initials: "PS",
    rating: 5,
    quote:
      "High-speed React components and pixel-perfect design execution. DEV HUB is our go-to web development partner for all institutional web projects.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Smooth scroll tracking: As user scrolls down, advance upward-sliding reviews
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrollDistance = windowHeight - rect.top;
        const totalDistance = rect.height + windowHeight;
        const progress = Math.max(0, Math.min(1, scrollDistance / totalDistance));
        
        const newIndex = Math.min(
          testimonials.length - 1,
          Math.floor(progress * testimonials.length)
        );

        setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-slate-50 text-slate-900 py-24 px-6 sm:px-10 lg:px-12 overflow-hidden font-sans scroll-section relative border-t border-slate-200"
    >
      {/* Light Radial Ambient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-space">
          <span className="inline-block text-[#3B82F6] text-xs font-mono font-bold uppercase tracking-[0.2em] bg-white border border-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
            ✦ Client Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            <span>What Clients </span>
            <span className="text-[#3B82F6]">Say</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans font-normal">
            Real feedback from educational institutions, directors, and business partners.
          </p>
        </div>

        {/* Scroll Interactive Grid & Upward Animated Card Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Upward Sliding Card Container wrapped in BorderGlow */}
          <div className="lg:col-span-7 sticky top-28">
            <BorderGlow borderRadius={28} backgroundColor="#ffffff" colors={['#3B82F6', '#06B6D4', '#60A5FA']}>
              <div
                key={activeTestimonial.id}
                className="p-8 sm:p-10 flex flex-col justify-between min-h-[380px] animate-fade-up"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 font-space">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${activeTestimonial.avatarColor} font-bold text-lg flex items-center justify-center shadow-md shrink-0`}>
                        {activeTestimonial.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                            {activeTestimonial.author}
                          </h3>
                          <svg className="w-5 h-5 text-[#3B82F6] fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <p className="text-xs font-mono text-[#3B82F6] mt-0.5 font-bold">
                          {activeTestimonial.handle}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 text-amber-400 text-sm">
                      {"★".repeat(activeTestimonial.rating)}
                    </div>
                  </div>

                  <p className="text-slate-800 text-lg leading-relaxed font-sans font-normal italic">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between font-sans">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#3B82F6] uppercase tracking-wider block">
                      VERIFIED CLIENT REVIEW
                    </span>
                    <p className="text-sm font-semibold text-slate-600 mt-0.5">
                      {activeTestimonial.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                    <span className="text-[#3B82F6] font-bold">{activeIndex + 1}</span>
                    <span>/</span>
                    <span>{testimonials.length}</span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Right Column: Upward Scroll Stack Selectable Items */}
          <div className="lg:col-span-5 space-y-3 font-sans">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              ✦ SCROLL DOWN TO SWITCH REVIEWS
            </p>

            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border cursor-pointer ${
                    isActive
                      ? "bg-white text-slate-900 border-[#3B82F6] shadow-lg shadow-slate-200/80 translate-x-2 -translate-y-1"
                      : "bg-white/60 hover:bg-white text-slate-600 border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-center w-4 shrink-0">
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                    )}
                  </div>

                  <div className={`w-10 h-10 rounded-xl ${t.avatarColor} font-bold text-sm flex items-center justify-center shrink-0 shadow-sm font-space`}>
                    {t.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                      {t.author}
                    </p>
                    <p className={`text-xs truncate ${isActive ? "text-[#3B82F6]" : "text-slate-500"}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
