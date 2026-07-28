"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

/**
 * CpuChip Component
 * Represents the glowing, animated CPU microchip inside the tablet mockup.
 */
function CpuChip() {
  return (
    <div className="relative w-36 h-36 bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] animate-chip-glow">
      {/* Horizontal pins */}
      <div className="absolute inset-x-[-10px] top-1/3 bottom-1/3 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between w-full">
          <div className="w-2.5 h-[1.5px] bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
          <div className="w-2.5 h-[1.5px] bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
        </div>
        <div className="flex justify-between w-full">
          <div className="w-2.5 h-[1.5px] bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
          <div className="w-2.5 h-[1.5px] bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
        </div>
      </div>

      {/* Vertical pins */}
      <div className="absolute inset-y-[-10px] left-1/3 right-1/3 flex justify-between pointer-events-none">
        <div className="flex flex-col justify-between h-full">
          <div className="w-[1.5px] h-2.5 bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
          <div className="w-[1.5px] h-2.5 bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="w-[1.5px] h-2.5 bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
          <div className="w-[1.5px] h-2.5 bg-indigo-500/40 shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
        </div>
      </div>

      {/* Main Silicon Body */}
      <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-lg p-2 flex items-center justify-center relative">
        {/* Core Logic Block */}
        <div className="w-16 h-16 bg-gradient-to-b from-slate-950 to-slate-900 border border-indigo-500/30 rounded flex flex-col items-center justify-center relative overflow-hidden">
          {/* LED pulse indicator */}
          <div className="absolute inset-0 bg-indigo-500/10 animate-led-pulse" />

          <svg className="w-6 h-6 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const techIcons = {
  react: (
    <svg className="w-5 h-5" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#00d8ff" strokeWidth="1.5">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1.5" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  node: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2L4.5 6.2v8.5L12 19l7.5-4.3V6.2L12 2zm5.7 12.1L12 17.4l-5.7-3.3V7.9L12 4.6l5.7 3.3v6.2z" />
    </svg>
  ),
  nestjs: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ea2849">
      <path d="M12 2l10 5.8v11.5L12 22 2 16.3V5.8L12 2zm0 3.2L5.2 9.1v5.8L12 18.8l6.8-3.9V9.1L12 5.2z" />
    </svg>
  ),
  nextjs: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5l-3.5-5v5H9v-7h1.5l3.5 5v-5h1.5v7H13z" />
    </svg>
  ),
  wordpress: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#21759b">
      <path d="M12.158 12.786l-2.698 7.84c1.825.565 3.774.58 5.61-.035l-2.912-7.805zm-1.89-4.887c0-.52-.187-.878-.346-1.164-.265-.436-.519-.81-.519-1.25 0-.493.38-.954.912-.954.025 0 .048.006.073.01C7.755 5.566 5.88 7.397 5.093 9.77c.07-.003.14-.006.21-.006.772 0 1.963.093 1.963.093.402.023.45.602.047.625 0 0-.404.032-.855.048l2.71 8.082 1.624-4.872-1.155-3.167c-.394-.016-.768-.048-.768-.048-.402-.023-.356-.602.046-.625 0 0 1.218.093 1.948.093.078 0 .178-.003.284-.007zm3.178 4.296l2.368 6.945c2.316-1.637 3.896-4.225 4.07-7.21l-1.026.046c-.402.016-.62-.323-.62-.625 0-.29.218-.62.62-.625l1.096-.048C21.72 13.905 21.05 16.32 19.8 18.258l-4.354-12.24c.45-.016.855-.048.855-.048.402-.023.356-.602-.047-.625 0 0-1.258.093-2.02.093-.659 0-1.782-.093-1.782-.093-.402-.023-.45.602-.047.625 0 0 .428.032.825.048l3.41 9.539zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.57c-3.623 0-6.732-2.42-7.737-5.753L9 6.208c.367 1.054.636 2.054.636 2.923 0 1.053-.524 1.782-.968 2.532l3.46 10.375c.024-.002.048-.008.072-.01z" />
    </svg>
  ),
  shopify: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#96bf48">
      <path d="M19 6.5h-3v-1c0-1.38-1.12-2.5-2.5-2.5h-3C9.12 3 8 4.12 8 5.5v1H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zM9.5 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1h-4v-1zm4.5 8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
    </svg>
  ),
  html: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#e34f26">
      <path d="M1.5 2L3 20.5l9 3.5 9-3.5L22.5 2H1.5zm16.5 6.5h-8l.2 1.8h7.6l-.6 6.2-3.2 1.2-3.2-1.2-.2-2.2H12l.1 1.2 1.9.7 1.9-.7.3-3.2H7.6l-.6-6h11.2l-.2 2.2z" />
    </svg>
  ),
  css: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1572b6">
      <path d="M1.5 2L3 20.5l9 3.5 9-3.5L22.5 2H1.5zm16.5 6.5h-8l.2 1.8h7.6l-.6 6.2-3.2 1.2-3.2-1.2-.2-2.2H12l.1 1.2 1.9.7 1.9-.7.3-3.2H7.6l-.6-6h11.2l-.2 2.2z" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#f7df1e">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M12 18c0 1.1-.9 2-2 2H6v-3h4v1H8v-1H6v-3h6v4zm8-6h-3v8h-3v-8h-2V9h7v3z" fill="#000000" />
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3178c6">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M8.5 8.5v1h-2v6h-1.5v-6h-2v-1h5.5zm4.5 3c0 1.1-.9 2-2 2h-1.5v2.5h-1.5V8.5H11c1.1 0 2 .9 2 2v1zm-3.5-.5h2v-1h-2v1z" fill="#ffffff" />
    </svg>
  ),
  redux: (
    <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#38bdf8">
      <path d="M12 6.086c-2.316-2.316-6.07-2.316-8.386 0-2.316 2.316-2.316 6.07 0 8.386l8.386 8.386 8.386-8.386c2.316-2.316 2.316-6.07 0-8.386-2.316-2.316-6.07-2.316-8.386 0z" />
    </svg>
  ),
};

function OrbitingTechCircles() {
  const innerIcons = [
    { name: 'react', angle: 0 },
    { name: 'nextjs', angle: 120 },
    { name: 'tailwind', angle: 240 }
  ];

  const middleIcons = [
    { name: 'node', angle: 0 },
    { name: 'nestjs', angle: 72 },
    { name: 'typescript', angle: 144 },
    { name: 'redux', angle: 216 },
    { name: 'javascript', angle: 288 }
  ];

  const outerIcons = [
    { name: 'html', angle: 0 },
    { name: 'css', angle: 72 },
    { name: 'wordpress', angle: 144 },
    { name: 'shopify', angle: 216 },
    { name: 'react', angle: 288 }
  ];

  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
      {/* Central Brand Emblem */}
      <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400/40 relative z-30 font-mono">
        D
      </div>

      {/* Inner Orbit (Radius 70px) */}
      <div className="absolute w-[140px] h-[140px] border border-indigo-500/10 rounded-full flex items-center justify-center z-10 pointer-events-none">
        <div className="absolute inset-0 animate-orbit-cw" style={{ '--orbit-duration': '22s' }}>
          {innerIcons.map((ico, idx) => (
            <div
              key={`inner-${idx}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                transform: `rotate(${ico.angle}deg) translate(70px) rotate(-${ico.angle}deg)`
              }}
            >
              <div className="w-10 h-10 bg-slate-900/60 border border-slate-700/30 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg text-white animate-orbit-ccw" style={{ '--orbit-duration': '22s' }}>
                {techIcons[ico.name]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Orbit (Radius 135px) */}
      <div className="absolute w-[270px] h-[270px] border border-indigo-500/10 rounded-full flex items-center justify-center z-10 pointer-events-none">
        <div className="absolute inset-0 animate-orbit-ccw" style={{ '--orbit-duration': '32s' }}>
          {middleIcons.map((ico, idx) => (
            <div
              key={`middle-${idx}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                transform: `rotate(${ico.angle}deg) translate(135px) rotate(-${ico.angle}deg)`
              }}
            >
              <div className="w-10 h-10 bg-slate-900/60 border border-slate-700/30 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg text-white animate-orbit-cw" style={{ '--orbit-duration': '32s' }}>
                {techIcons[ico.name]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outer Orbit (Radius 200px) */}
      <div className="absolute w-[400px] h-[400px] border border-indigo-500/10 rounded-full flex items-center justify-center z-10 pointer-events-none">
        <div className="absolute inset-0 animate-orbit-cw" style={{ '--orbit-duration': '42s' }}>
          {outerIcons.map((ico, idx) => (
            <div
              key={`outer-${idx}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                transform: `rotate(${ico.angle}deg) translate(200px) rotate(-${ico.angle}deg)`
              }}
            >
              <div className="w-10 h-10 bg-slate-900/60 border border-slate-700/30 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg text-white animate-orbit-ccw" style={{ '--orbit-duration': '42s' }}>
                {techIcons[ico.name]}
              </div>
            </div>
          ))}
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

      // Scrolling words rotator animation loop
      const tl = gsap.timeline({ repeat: -1 });
      const words = gsap.utils.toArray(".scrolling-word");

      words.forEach((word) => {
        tl.fromTo(word,
          { y: 40, opacity: 0, pointerEvents: "none" },
          { y: 0, opacity: 1, pointerEvents: "auto", duration: 0.5, ease: "power3.out" }
        )
          .to(word,
            { y: -40, opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power3.in", delay: 1.8 }
          );
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

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.2] flex flex-wrap items-center">
            <span className="mr-3">We Build</span>
            <span className="relative inline-flex items-center w-[240px] sm:w-[300px] lg:w-[360px] h-[1.3em] overflow-hidden text-left uppercase">
              <span className="scrolling-word absolute inset-y-0 left-0 flex items-center opacity-0" style={{ '--glow-color': '#22d3ee', '--glow-shadow': 'rgba(34, 211, 238, 0.3)' }}>
                <span className="solid-glow-letter" data-text="V">V</span>
                <span className="outline-glow-text" data-text="ISUALLY.">ISUALLY.</span>
              </span>
              <span className="scrolling-word absolute inset-y-0 left-0 flex items-center opacity-0" style={{ '--glow-color': '#f59e0b', '--glow-shadow': 'rgba(245, 158, 11, 0.3)' }}>
                <span className="solid-glow-letter" data-text="F">F</span>
                <span className="outline-glow-text" data-text="AST.">AST.</span>
              </span>
              <span className="scrolling-word absolute inset-y-0 left-0 flex items-center opacity-0" style={{ '--glow-color': '#10b981', '--glow-shadow': 'rgba(16, 185, 129, 0.3)' }}>
                <span className="solid-glow-letter" data-text="E">E</span>
                <span className="outline-glow-text" data-text="ASILY.">ASILY.</span>
              </span>
            </span>
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
          <OrbitingTechCircles />
        </div>

      </div>
    </section>
  );
}
