"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

/**
 * GridBanner Component
 * Renders the top grid row banner with highlighted lit segments.
 */
function GridBanner() {
  const highlights = [3, 17];
  return (
    <div className="w-full grid grid-cols-12 md:grid-cols-24 bg-black h-16 divide-x divide-neutral-900 border-b border-neutral-900">
      {Array.from({ length: 24 }).map((_, i) => {
        const isHighlighted = highlights.includes(i);
        return (
          <div 
            key={i} 
            className={`h-full relative overflow-hidden transition-all duration-500 ${
              isHighlighted 
                ? "bg-gradient-to-b from-neutral-800/35 via-neutral-950/10 to-transparent" 
                : "bg-[#020205]"
            }`}
          >
            {isHighlighted && (
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry transitions for centered elements
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full flex flex-col bg-black overflow-hidden relative">
      
      {/* Top Banner Row */}
      <GridBanner />

      {/* Hero Central Section */}
      <section
        id="hero"
        style={{ colorScheme: "dark" }}
        className="relative bg-[#020205] pt-24 pb-36 px-6 md:px-10 flex flex-col items-center justify-center min-h-[70vh]"
      >
        {/* 24-Column Vertical Grid Lines matching GridBanner columns */}
        <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12 md:grid-cols-24 divide-x divide-neutral-900/60 pointer-events-none z-0" />
        
        {/* Subtle Horizontal grid line overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4rem] pointer-events-none" />

        {/* Ambient radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Core Content */}
        <div className="max-w-5xl w-full mx-auto text-center z-20 hero-content space-y-8">
          
          {/* Header Label */}
          <div className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6C5CE7]">
            Website Development Services
          </div>

          {/* Main Integrated Headline with direct images from kgagile.com */}
          <h1 className="text-[clamp(30px,5vw,72px)] font-black text-white leading-[1.3] tracking-tight max-w-4xl mx-auto">
            <span className="text-[#2ecc71] font-bold">Build a </span>
            
            {/* Inline Fast lightning image */}
            <span className="inline-flex mx-2 align-middle w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] shrink-0">
              <img 
                loading="lazy" 
                src="https://kgagile.com/wp-content/uploads/2025/11/website_text_4.png" 
                alt="Fast" 
                className="w-full h-auto object-contain" 
              />
            </span>
            
            {/* Inline Scalable planet image */}
            <span className="inline-flex mx-2 align-middle w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] shrink-0">
              <img 
                loading="lazy" 
                src="https://kgagile.com/wp-content/uploads/2025/11/website_text_5.png" 
                alt="Scalable" 
                className="w-full h-auto object-contain" 
              />
            </span>
            
            <br />
            <span className="text-white">User-First Website</span>
            
            {/* Inline Sparkle Star image */}
            <span className="inline-flex mx-2 align-middle w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] shrink-0 animate-pulse">
              <img 
                loading="lazy" 
                src="https://kgagile.com/wp-content/uploads/2025/11/Gemini2.webp" 
                alt="Sparkle" 
                className="w-full h-auto object-contain" 
              />
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            As an expert website development company, KG Agile builds websites and web applications that convert visitors into customers.
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="bg-white hover:bg-neutral-100 px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-white/5 inline-block"
              style={{ color: "#1377ED" }}
            >
              Get Your Free Consultation
            </a>
          </div>

        </div>

        {/* Asymmetrical Shape Divider Bottom (Blends to bg-gray-50 next section) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path fill="#f9fafb" d="M738,99l262-93V0H0v5.6L738,99z" />
          </svg>
        </div>

      </section>

    </div>
  );
}
