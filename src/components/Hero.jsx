"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

/**
 * CpuChip Component
 * Represents the glowing, animated CPU microchip inside the tablet mockup.
 */
function CpuChip() {
  return (
    <div className="relative w-36 h-36 bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-chip-glow">
      {/* Horizontal pins */}
      <div className="absolute inset-x-[-10px] top-1/3 bottom-1/3 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between w-full">
          <div className="w-2.5 h-[1.5px] bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
          <div className="w-2.5 h-[1.5px] bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
        </div>
        <div className="flex justify-between w-full">
          <div className="w-2.5 h-[1.5px] bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
          <div className="w-2.5 h-[1.5px] bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
        </div>
      </div>

      {/* Vertical pins */}
      <div className="absolute inset-y-[-10px] left-1/3 right-1/3 flex justify-between pointer-events-none">
        <div className="flex flex-col justify-between h-full">
          <div className="w-[1.5px] h-2.5 bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
          <div className="w-[1.5px] h-2.5 bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="w-[1.5px] h-2.5 bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
          <div className="w-[1.5px] h-2.5 bg-blue-500/50 shadow-[0_0_4px_#3b82f6]" />
        </div>
      </div>

      {/* Main Silicon Body */}
      <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-lg p-2 flex items-center justify-center relative">
        {/* Core Logic Block */}
        <div className="w-16 h-16 bg-gradient-to-b from-slate-950 to-slate-900 border border-blue-500/40 rounded flex flex-col items-center justify-center relative overflow-hidden">
          {/* LED pulse indicator */}
          <div className="absolute inset-0 bg-blue-500/10 animate-led-pulse" />

          <svg className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * TabletMockup Component
 * Renders the slanted 3D tablet mockup displaying the site.
 */
function TabletMockup() {
  return (
    <div className="relative w-full max-w-[620px] aspect-[4/3] perspective-[1500px]">
      {/* Bottom Concrete Stand Blocks */}
      <div className="absolute bottom-[-40px] left-[-20px] w-[50%] h-[30px] bg-slate-800/80 border border-slate-700 rounded-lg transform -rotate-x-12 -rotate-y-12 rotate-z-6 shadow-2xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[40px] w-[60%] h-[40px] bg-slate-900 border border-slate-800 rounded-lg transform -rotate-x-12 -rotate-y-12 rotate-z-6 shadow-2xl pointer-events-none" />

      {/* Tablet Body Chassis */}
      <div className="w-full h-full bg-[#1e293b] border-[6px] border-[#334155] rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-3.5 transform -rotate-x-12 -rotate-y-12 rotate-z-6 relative overflow-hidden group">
        {/* Anti-reflective glass shine sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30" />

        {/* Screen Content Panel */}
        <div className="w-full h-full bg-[#05070c] rounded-[1.8rem] relative overflow-hidden p-6 flex flex-col justify-between border border-slate-950 z-20">
          {/* Subtle Screen Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          {/* Top Navbar */}
          <div className="flex items-center justify-between relative z-20 border-b border-slate-900/80 pb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white font-black text-xs">
                D
              </div>
              <span style={{ color: "#ffffff" }} className="text-xs font-bold font-mono tracking-tight">
                DevHub
              </span>
            </div>

            <div className="flex items-center gap-4 text-[9px] font-mono" style={{ color: "#94a3b8" }}>
              <span>Contact</span>
              <span>Services</span>
              <span>Reviews</span>
            </div>

            <button className="bg-blue-600/90 text-white font-mono text-[9px] font-bold px-2.5 py-1 rounded-md hover:bg-blue-500 transition-colors">
              $Explore More
            </button>
          </div>

          {/* Main Area */}
          <div className="grid grid-cols-12 gap-4 items-center my-auto relative z-20">
            {/* Left copy block */}
            <div className="col-span-7 space-y-4 text-left">
              <h2 style={{ color: "#ffffff" }} className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                Future,<br />
                Ready<br />
                Products
              </h2>
              <p style={{ color: "#94a3b8" }} className="text-[10px] leading-relaxed font-light">
                Custom React, WordPress, and Laravel development built to scale.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-[9px] px-3.5 py-2 rounded-full border border-blue-500 transition-all font-bold">
                View Showcase
              </button>
            </div>

            {/* Right microchip */}
            <div className="col-span-5 flex justify-center">
              <CpuChip />
            </div>
          </div>

        </div>
      </div>
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
      // Entrance animations
      gsap.from(".hero-left", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-tablet", {
        y: 60,
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      style={{ colorScheme: "dark" }}
      className="bg-[#0b0f19] pt-32 pb-28 px-6 md:px-10 relative overflow-hidden border-b border-slate-950 flex items-center justify-center min-h-[90vh]"
    >
      {/* Glowing light lines (Reference layout) */}
      <div className="absolute top-[-20%] left-[30%] w-16 h-[160%] bg-white/20 blur-2xl rotate-[35deg] origin-top pointer-events-none z-10" />
      <div className="absolute top-[-20%] left-[30%] w-4 h-[160%] bg-white/40 blur-lg rotate-[35deg] origin-top pointer-events-none z-10" />

      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Core Content Wrapper */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">

        {/* Left Column Copy & CTA */}
        <div className="lg:col-span-5 space-y-8 hero-left text-left">
          <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-indigo-200 text-xs font-mono uppercase tracking-widest font-bold">
              Creative Digital Agency
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.85] font-gothic text-white">

            <div className="flex">
              <span className="solid-glow-letter" data-text="F">F</span>
              <span className="outline-glow-text" data-text="UTURE">UTURE</span>
            </div>

            <div className="flex">
              <span className="solid-glow-letter" data-text="R">R</span>
              <span className="outline-glow-text" data-text="EADY">EADY</span>
            </div>

            <div className="flex">
              <span className="solid-glow-letter" data-text="P">P</span>
              <span className="outline-glow-text" data-text="RODUCTS">RODUCTS</span>
            </div>

          </h1>
          <p
            style={{ color: "#ffffff" }}
            className="text-base sm:text-lg leading-relaxed font-light text-slate-300"
          >
            We build fast, secure, and modern digital experiences. Specializing in high-performance React applications, Laravel portals, and WordPress websites custom-tailored for schools, businesses, and startups.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={(e) => scrollTo(e, "work")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 bg-slate-900/30"
            >
              Consult Experts
            </a>
          </div>
        </div>

        {/* Right Column: Slanted Mock-up Device */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end hero-tablet">
          <TabletMockup />
        </div>

      </div>
    </section>
  );
}
