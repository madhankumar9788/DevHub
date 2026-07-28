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
                C
              </div>
              <span style={{ color: "#ffffff" }} className="text-xs font-bold font-mono tracking-tight">
                cloudpulse
              </span>
            </div>

            <div className="flex items-center gap-4 text-[9px] font-mono" style={{ color: "#94a3b8" }}>
              <span>Contact</span>
              <span>Services</span>
              <span>Reviews</span>
            </div>

            <button className="bg-blue-600/90 text-white font-mono text-[9px] font-bold px-2.5 py-1 rounded-md hover:bg-blue-500 transition-colors">
              $PROPOSAL
            </button>
          </div>

          {/* Main Area */}
          <div className="grid grid-cols-12 gap-4 items-center my-auto relative z-20">
            {/* Left copy block */}
            <div className="col-span-7 space-y-4 text-left">
              <h2 style={{ color: "#ffffff" }} className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                CloudPulse,<br />
                the Blueprint<br />
                for tomorrow
              </h2>
              <p style={{ color: "#64748b" }} className="text-[10px] leading-relaxed font-light">
                Secure, scalable access to computing resources via cloud consulting.
              </p>
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-mono text-[9px] px-3 py-1.5 rounded-full border border-slate-700 transition-all">
                Documentation
              </button>
            </div>

            {/* Right microchip */}
            <div className="col-span-5 flex justify-center">
              <CpuChip />
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="flex items-center justify-between text-[7px] font-mono border-t border-slate-900/60 pt-3" style={{ color: "#475569" }}>
            <span>Status: Operational</span>
            <span>v1.0.4-beta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeInsects, setActiveInsects] = useState([
    { id: 1, color: "text-indigo-500/35 hover:text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" },
    { id: 2, color: "text-cyan-500/35 hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
    { id: 3, color: "text-emerald-500/35 hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
    { id: 4, color: "text-yellow-500/35 hover:text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" },
    { id: 5, color: "text-rose-500/35 hover:text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]" },
    { id: 6, color: "text-purple-500/35 hover:text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" },
    { id: 7, color: "text-orange-500/35 hover:text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" },
    { id: 8, color: "text-pink-500/35 hover:text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" },
    { id: 9, color: "text-teal-500/35 hover:text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" },
    { id: 10, color: "text-sky-500/35 hover:text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" },
  ]);
  const insectsRef = useRef([
    { id: 1, x: 100, y: 150, angle: 45, speed: 0.8 },
    { id: 2, x: 250, y: 300, angle: 120, speed: 1.1 },
    { id: 3, x: 400, y: 100, angle: 210, speed: 0.9 },
    { id: 4, x: 550, y: 450, angle: 330, speed: 1.3 },
    { id: 5, x: 700, y: 200, angle: 15, speed: 1.0 },
    { id: 6, x: 120, y: 500, angle: 80, speed: 0.7 },
    { id: 7, x: 300, y: 600, angle: 160, speed: 1.2 },
    { id: 8, x: 800, y: 400, angle: 270, speed: 1.0 },
    { id: 9, x: 450, y: 350, angle: 190, speed: 0.9 },
    { id: 10, x: 650, y: 550, angle: 290, speed: 1.1 },
  ]);

  const removeInsect = (id) => {
    setActiveInsects(prev => prev.filter(bug => bug.id !== id));
    insectsRef.current = insectsRef.current.filter(item => item.id !== id);
  };

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

  // Animation Loop for Insects Crawling
  useEffect(() => {
    let frameId;
    const updatePhysics = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const width = hero.offsetWidth;
      const height = hero.offsetHeight;

      insectsRef.current.forEach(bug => {
        const el = document.getElementById(`insect-${bug.id}`);
        if (!el) return;

        // Random walk pathing
        bug.angle += (Math.random() - 0.5) * 15; // smooth turn adjustment
        const rad = (bug.angle * Math.PI) / 180;
        bug.x += Math.cos(rad) * bug.speed;
        bug.y += Math.sin(rad) * bug.speed;

        // Wrap around edge boundaries
        if (bug.x < -30) bug.x = width + 30;
        if (bug.x > width + 30) bug.x = -30;
        if (bug.y < -30) bug.y = height + 30;
        if (bug.y > height + 30) bug.y = -30;

        // Direct DOM update for performance (bypasses React render bottlenecks)
        el.style.transform = `translate3d(${bug.x}px, ${bug.y}px, 0) rotate(${bug.angle + 90}deg)`;
      });

      frameId = requestAnimationFrame(updatePhysics);
    };

    frameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(frameId);
  }, [activeInsects]);

  return (
    <section
      id="hero"
      style={{ colorScheme: "dark" }}
      className="bg-[#0b0f19] pt-32 pb-28 px-6 md:px-10 relative overflow-hidden border-b border-slate-950 flex items-center justify-center min-h-[90vh]"
    >
      {/* Interactive Crawling Insects Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {activeInsects.map((bug) => (
          <div
            key={bug.id}
            id={`insect-${bug.id}`}
            onClick={() => removeInsect(bug.id)}
            className="absolute w-7 h-7 pointer-events-auto cursor-crosshair group active:scale-75 transition-all duration-300"
            style={{ left: 0, top: 0, transform: "translate(-100px, -100px)" }}
            title="Click to Squash!"
          >
            {/* Insect Body SVG */}
            <svg
              className={`w-full h-full ${bug.color} transition-colors`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* Antennae */}
              <path d="M10 4C10 2 11 1 12 1M14 4C14 2 13 1 12 1" stroke="currentColor" strokeWidth="1" fill="none" />
              {/* Legs */}
              <path d="M6 9h12M4 13h16M6 17h12" stroke="currentColor" strokeWidth="1.5" />
              {/* Main Shell/Body */}
              <rect x="9" y="5" width="6" height="13" rx="3" />
              {/* Head */}
              <circle cx="12" cy="3.5" r="2" />
            </svg>
          </div>
        ))}
      </div>

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
              Engineering Future Scale
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.85]">

            <div className="flex">
              <span className="solid-glow-letter">F</span>
              <span className="outline-glow-text">UTURE</span>
            </div>

            <div className="flex">
              <span className="solid-glow-letter">R</span>
              <span className="outline-glow-text">EADY</span>
            </div>

            <div className="flex">
              <span className="solid-glow-letter">P</span>
              <span className="outline-glow-text">RODUCTS</span>
            </div>

          </h1>
          <p
            style={{ color: "#ffffff" }}
            className="text-base sm:text-lg leading-relaxed font-light text-slate-400"
          >
            Secure, scalable access to vetted developers, custom enterprise software engineering, and high-performance cloud architectures.
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
