"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

/**
 * GridBanner Component
 * Renders the top or bottom grid row banner with highlighted lit segments.
 */
function GridBanner({ position }) {
  const highlights = position === "top" ? [3, 17] : [8, 20];
  return (
    <div 
      className={`w-full grid grid-cols-12 md:grid-cols-24 bg-black h-16 divide-x divide-neutral-900 border-neutral-900 ${
        position === "top" ? "border-b" : "border-t"
      }`}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const isHighlighted = highlights.includes(i);
        return (
          <div 
            key={i} 
            className={`h-full relative overflow-hidden transition-all duration-500 ${
              isHighlighted 
                ? position === "top"
                  ? "bg-gradient-to-b from-neutral-800/35 via-neutral-950/10 to-transparent" 
                  : "bg-gradient-to-t from-neutral-800/35 via-neutral-950/10 to-transparent"
                : "bg-[#020205]"
            }`}
          >
            {isHighlighted && (
              <div 
                className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent ${
                  position === "top" ? "top-0" : "bottom-0"
                }`} 
              />
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
      // Direct GSAP entry transitions for centered elements
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
    <div className="relative w-full flex flex-col bg-black overflow-hidden border-b border-neutral-900">
      
      {/* Top Banner Row */}
      <GridBanner position="top" />

      {/* Hero Central Section */}
      <section
        id="hero"
        style={{ colorScheme: "dark" }}
        className="relative bg-[#020205] py-28 px-6 md:px-10 flex flex-col items-center justify-center min-h-[65vh]"
      >
        {/* Subtle Tech Grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* Ambient radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Core Content */}
        <div className="max-w-5xl w-full mx-auto text-center z-20 hero-content space-y-8">
          
          {/* Header Label */}
          <div className="text-sm font-extrabold tracking-[0.25em] uppercase text-indigo-400/90">
            Website Development Services
          </div>

          {/* Main Integrated Headline */}
          <h1 className="text-[clamp(32px,5vw,68px)] font-black text-white leading-[1.2] tracking-tight max-w-4xl mx-auto">
            <span className="text-[#2ecc71] font-bold">Build a</span>
            
            {/* Inline Lightning Bolt Circle */}
            <span className="w-10 h-10 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-indigo-950/45 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.45)] mx-3 align-middle shrink-0 animate-pulse">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            
            <span className="font-bold">Fast</span>
            
            {/* Inline Planetary Orbit Sphere */}
            <span className="w-10 h-10 sm:w-12 sm:h-12 inline-flex items-center justify-center mx-3 align-middle shrink-0">
              <svg className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-[0_0_8px_rgba(139,92,241,0.6)]" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="7" fill="url(#heroPlanetGradient)" />
                <path d="M6 18c2-2.5 6-4 10-4s8 1.5 10 4" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4" />
                <path d="M26 14c-2 2.5-6 4-10 4S8 16.5 6 14" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
                <defs>
                  <linearGradient id="heroPlanetGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            
            <span className="font-bold">Scalable</span> <br className="hidden sm:block" />
            <span className="font-bold">User-First Website</span>
            
            {/* Inline Sparkle ✦ */}
            <svg className="w-7 h-7 sm:w-9 sm:h-9 inline text-cyan-400 fill-current ml-3 align-middle animate-bounce" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
          </h1>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            As an expert website development company, KG Agile builds websites and web applications that convert visitors into customers.
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="bg-white hover:bg-neutral-100 text-blue-700 px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-white/5 inline-block"
            >
              Get Your Free Consultation
            </a>
          </div>

        </div>
      </section>

      {/* Bottom Banner Row */}
      <GridBanner position="bottom" />

    </div>
  );
}
