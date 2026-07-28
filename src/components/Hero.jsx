"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
      duration: 1.2,
      ease: "power3.out",
      delay: 0.15,
    });
  }, []);

  return (
    <section
      id="hero"
      className="bg-[#0b0f19] pt-32 pb-28 px-6 md:px-10 relative overflow-hidden border-b border-slate-950 flex items-center justify-center min-h-[90vh]"
    >
      {/* Diagonal Beam of Light (Matching the reference image) */}
      <div className="absolute top-[-20%] left-[30%] w-16 h-[160%] bg-white/20 blur-2xl rotate-[35deg] origin-top pointer-events-none z-10" />
      <div className="absolute top-[-20%] left-[30%] w-4 h-[160%] bg-white/40 blur-lg rotate-[35deg] origin-top pointer-events-none z-10" />

      {/* Dark Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">
        
        {/* Left Content (Matches the external page structure) */}
        <div className="lg:col-span-5 space-y-8 hero-left text-left">
          
          <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-indigo-200 text-xs font-mono uppercase tracking-widest font-bold">
              Engineering Future Scale
            </span>
          </div>

          <h1 
            style={{ color: "#ffffff" }}
            className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight"
          >
            CloudPulse,<br />
            the Blueprint<br />
            for tomorrow
          </h1>

          <p 
            style={{ color: "#94a3b8" }}
            className="text-base sm:text-lg leading-relaxed font-light"
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

        {/* Right Content: 3D Tablet Mock-up (Perfect copy of reference image) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end hero-tablet">
          
          {/* Outer perspective wrapper */}
          <div className="relative w-full max-w-[620px] aspect-[4/3] perspective-[1500px]">
            
            {/* Concrete Slabs / Stands underneath the tablet */}
            <div className="absolute bottom-[-40px] left-[-20px] w-[50%] h-[30px] bg-slate-800/80 border border-slate-700 rounded-lg transform -rotate-x-12 -rotate-y-12 rotate-z-6 shadow-2xl pointer-events-none" />
            <div className="absolute bottom-[-60px] right-[40px] w-[60%] h-[40px] bg-slate-900 border border-slate-800 rounded-lg transform -rotate-x-12 -rotate-y-12 rotate-z-6 shadow-2xl pointer-events-none" />

            {/* The Slanted Tablet Device */}
            <div className="w-full h-full bg-[#1e293b] border-[6px] border-[#334155] rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-3.5 transform -rotate-x-12 -rotate-y-12 rotate-z-6 relative overflow-hidden group">
              
              {/* Glossy sheen reflection overlay across the tablet screen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30" />

              {/* Tablet Screen */}
              <div className="w-full h-full bg-[#05070c] rounded-[1.8rem] relative overflow-hidden p-6 flex flex-col justify-between border border-slate-950 z-20">
                
                {/* Tablet Screen Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                {/* Tablet Header/Navbar */}
                <div className="flex items-center justify-between relative z-20 border-b border-slate-900/80 pb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white font-black text-xs">
                      C
                    </div>
                    <span 
                      style={{ color: "#ffffff" }}
                      className="text-xs font-bold font-mono tracking-tight"
                    >
                      cloudpulse
                    </span>
                  </div>
                  
                  {/* Inner screen nav links */}
                  <div className="flex items-center gap-4 text-[9px] font-mono" style={{ color: "#94a3b8" }}>
                    <span>Contact</span>
                    <span>Services</span>
                    <span>Reviews</span>
                  </div>

                  <button className="bg-blue-600/90 text-white font-mono text-[9px] font-bold px-2.5 py-1 rounded-md hover:bg-blue-500 transition-colors">
                    $PROPOSAL
                  </button>
                </div>

                {/* Tablet Main Screen Area */}
                <div className="grid grid-cols-12 gap-4 items-center my-auto relative z-20">
                  
                  {/* Left Side text inside tablet */}
                  <div className="col-span-7 space-y-4 text-left">
                    <h2 
                      style={{ color: "#ffffff" }}
                      className="text-2xl sm:text-3xl font-black leading-tight tracking-tight"
                    >
                      CloudPulse,<br />
                      the Blueprint<br />
                      for tomorrow
                    </h2>
                    
                    <p 
                      style={{ color: "#64748b" }}
                      className="text-[10px] leading-relaxed font-light"
                    >
                      Secure, scalable access to computing resources via cloud consulting.
                    </p>

                    <button className="bg-slate-800 hover:bg-slate-700 text-white font-mono text-[9px] px-3 py-1.5 rounded-full border border-slate-700 transition-all">
                      Documentation
                    </button>
                  </div>

                  {/* Right Side CPU Microchip inside tablet (Matches the reference image exactly) */}
                  <div className="col-span-5 flex justify-center">
                    
                    {/* Glowing outer core shadow */}
                    <div className="relative w-36 h-36 bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-chip-glow">
                      
                      {/* Grid Lines running under the chip */}
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

                      {/* Main silicon body */}
                      <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-lg p-2 flex items-center justify-center relative">
                        
                        {/* Glowing core block */}
                        <div className="w-16 h-16 bg-gradient-to-b from-slate-950 to-slate-900 border border-blue-500/40 rounded flex flex-col items-center justify-center relative overflow-hidden">
                          
                          {/* Pulsing blue glow overlays */}
                          <div className="absolute inset-0 bg-blue-500/10 animate-led-pulse" />
                          
                          {/* Inner custom logo/symbol (Double triangles or chip logic icon) */}
                          <svg className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Tablet Screen Footer Bar */}
                <div className="flex items-center justify-between text-[7px] font-mono border-t border-slate-900/60 pt-3" style={{ color: "#475569" }}>
                  <span>Status: Operational</span>
                  <span>v1.0.4-beta</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
