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
        {/* 24-Column Vertical Grid Lines matching GridBanner columns */}
        <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12 md:grid-cols-24 divide-x divide-neutral-900/60 pointer-events-none z-0" />
        
        {/* Subtle Horizontal grid line overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4rem] pointer-events-none" />

        {/* Ambient radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Core Content */}
        <div className="max-w-5xl w-full mx-auto text-center z-20 hero-content space-y-8">
          
          {/* Header Label */}
          <div className="text-sm font-extrabold tracking-[0.25em] uppercase text-indigo-400/90">
            Website Development Services
          </div>

          {/* Main Integrated Headline */}
          <h1 className="text-[clamp(32px,5.2vw,72px)] font-black text-white leading-[1.3] tracking-tight max-w-4xl mx-auto">
            <span className="text-[#2ecc71] font-bold">Build a</span>
            
            {/* Inline Lightning Bolt Oval Capsule from Mockup */}
            <span className="inline-block align-middle mx-2 shrink-0">
              <svg className="w-16 h-8 sm:w-20 sm:h-10" viewBox="0 0 64 32" fill="none">
                {/* Speed motion dashes on left */}
                <path d="M2 11h6M0 16h10M3 21h5" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                {/* Solid purple capsule */}
                <rect x="14" y="2" width="46" height="28" rx="14" fill="#6c5ce7" />
                {/* Lightning bolt inside circle on right side */}
                <circle cx="48" cy="16" r="9" fill="#6c5ce7" />
                <path d="M49 10l-4.5 7h4l-1 5 4.5-7h-4l1-5z" fill="#ffffff" />
              </svg>
            </span>
            
            {/* Inline Word "Fast" with red-purple swoosh background */}
            <span className="relative inline-block font-bold text-white px-2">
              <span className="relative z-10">Fast</span>
              <svg className="absolute -inset-x-2 -bottom-2 -top-4 w-[calc(100%+16px)] h-[calc(100%+24px)] pointer-events-none z-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,25 C30,10 70,5 100,20 L100,30 C70,15 30,20 0,35 Z" fill="url(#fastSwooshGrad)" opacity="0.65" />
                <defs>
                  <linearGradient id="fastSwooshGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            
            {/* Inline planetary crescent logo representing Scalable from Mockup */}
            <span className="w-10 h-10 sm:w-12 sm:h-12 inline-flex items-center justify-center align-middle mx-2 shrink-0">
              <svg className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" viewBox="0 0 32 32" fill="none">
                <path d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 24a10 10 0 1110-10 10 10 0 01-10 10z" fill="url(#heroScalePlanetGrad)" />
                <circle cx="16" cy="16" r="9" fill="url(#heroScalePlanetGlow)" opacity="0.3" />
                <defs>
                  <linearGradient id="heroScalePlanetGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#3b82f6" />
                    <stop offset="0.5" stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                  <radialGradient id="heroScalePlanetGlow" cx="16" cy="16" r="10">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
            </span>
            
            <span className="font-bold">Scalable</span> <br className="hidden sm:block" />
            <span className="font-bold">User-First Website</span>
            
            {/* Inline Gradient Sparkle Star from Mockup */}
            <span className="inline-block align-middle ml-3">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 animate-pulse" viewBox="0 0 100 100" fill="none">
                <path d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z" fill="url(#heroSparkleGrad)" />
                <defs>
                  <linearGradient id="heroSparkleGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop stopColor="#3b82f6" />
                    <stop offset="0.5" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
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
