import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * LaptopScrollingPreview Component
 * A realistic laptop device mockup with a continuous smooth vertical scrolling 
 * web browser preview animation on the right side of the CTA section.
 */
function LaptopScrollingPreview() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md shrink-0 z-10 flex flex-col items-center group my-2 lg:my-0">
      <style>{`
        @keyframes scrollVerticalPreview {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scrollVerticalPreview 12s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Laptop Screen Body Frame */}
      <div className="relative w-full bg-neutral-900 rounded-t-2xl border-4 border-neutral-800 p-2 shadow-2xl overflow-hidden aspect-[16/10]">
        
        {/* Webcam Lens Top Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-neutral-950 px-3 py-0.5 rounded-b-md border-b border-neutral-800">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
          <div className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
        </div>

        {/* Browser Top Header Bar */}
        <div className="bg-neutral-950 px-3 py-1.5 rounded-t-lg border-b border-neutral-800/80 flex items-center justify-between z-20 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="bg-neutral-900 border border-neutral-800 text-[9px] font-mono text-neutral-300 px-3 py-0.5 rounded-md flex items-center gap-1.5 w-40 sm:w-48 truncate">
            <span className="text-emerald-400">🔒</span>
            <span className="truncate">https://devhub.com/projects</span>
          </div>
          <div className="w-4" />
        </div>

        {/* Scrolling Inner Screen Window */}
        <div className="relative h-[calc(100%-28px)] overflow-hidden bg-slate-950 rounded-b-lg">
          {/* Vertical Infinite Scrolling Canvas */}
          <div className="space-y-3 p-3 animate-scroll-vertical">
            
            {/* Simulated Live Site Card 1: Micro College */}
            <div className="bg-gradient-to-r from-indigo-900/90 to-slate-900 border border-indigo-500/30 p-3 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">🎓 KGiSL MICRO COLLEGE</span>
                <span className="text-[9px] font-mono bg-indigo-500/20 text-indigo-200 px-1.5 py-0.5 rounded">LIVE SITE</span>
              </div>
              <div className="h-2 w-3/4 bg-white/40 rounded mb-1.5" />
              <div className="h-1.5 w-1/2 bg-white/20 rounded" />
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                <div className="h-8 bg-indigo-950/80 rounded border border-indigo-500/20" />
                <div className="h-8 bg-indigo-950/80 rounded border border-indigo-500/20" />
                <div className="h-8 bg-indigo-950/80 rounded border border-indigo-500/20" />
              </div>
            </div>

            {/* Simulated Live Site Card 2: KGiSL IIM */}
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">🏛️ KGiSL IIM INSTITUTION</span>
                <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">ONLINE</span>
              </div>
              <div className="h-2 w-2/3 bg-white/40 rounded mb-1.5" />
              <div className="h-1.5 w-5/6 bg-white/20 rounded mb-3" />
              <div className="h-10 bg-gradient-to-r from-emerald-950 to-slate-900 rounded border border-emerald-500/30 p-2 flex items-center justify-between">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <div className="h-2 w-16 bg-white/30 rounded" />
                <div className="h-4 w-10 bg-emerald-500/40 rounded-full" />
              </div>
            </div>

            {/* Simulated Live Site Card 3: SkillRyt */}
            <div className="bg-slate-900 border border-purple-500/30 p-3 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">⭐ SKILLRYT PLATFORM</span>
                <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">FAST</span>
              </div>
              <div className="h-2 w-4/5 bg-white/40 rounded mb-1.5" />
              <div className="h-1.5 w-1/3 bg-white/20 rounded mb-2" />
              <div className="h-9 bg-slate-950 rounded border border-purple-500/20 p-2 flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-purple-600/30" />
                <div className="space-y-1 flex-1">
                  <div className="h-1.5 w-full bg-white/30 rounded" />
                  <div className="h-1 w-2/3 bg-white/20 rounded" />
                </div>
              </div>
            </div>

            {/* Duplicate Loop Copy for Seamless Infinite Scrolling */}
            <div className="bg-gradient-to-r from-indigo-900/90 to-slate-900 border border-indigo-500/30 p-3 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">🎓 KGiSL MICRO COLLEGE</span>
                <span className="text-[9px] font-mono bg-indigo-500/20 text-indigo-200 px-1.5 py-0.5 rounded">LIVE SITE</span>
              </div>
              <div className="h-2 w-3/4 bg-white/40 rounded mb-1.5" />
              <div className="h-1.5 w-1/2 bg-white/20 rounded" />
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">🏛️ KGiSL IIM INSTITUTION</span>
                <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">ONLINE</span>
              </div>
              <div className="h-2 w-2/3 bg-white/40 rounded mb-1.5" />
              <div className="h-1.5 w-5/6 bg-white/20 rounded mb-3" />
            </div>

          </div>
        </div>

      </div>

      {/* Laptop Bottom Base Keyboard Deck */}
      <div className="relative w-[106%] h-3.5 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 rounded-b-xl border-t border-neutral-700 shadow-xl flex justify-center">
        {/* Laptop Opening Notch */}
        <div className="w-14 h-1 bg-neutral-700 rounded-b-md" />
      </div>

      {/* Laptop Ambient Glow Shadow Underneath */}
      <div className="w-[85%] h-3.5 bg-indigo-500/25 rounded-full blur-md -mt-1 pointer-events-none" />
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-gray-900 text-white pt-24 pb-10 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* White Theme CTA Banner with Animated Laptop Moving Scrolling Preview */}
        <div className="relative bg-white text-neutral-900 border -mt-80 border-neutral-200/90 rounded-3xl p-8 sm:p-12 md:p-14 mb-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Dot Matrix Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

          {/* Animated Background Infinite Scrolling Tech Marquee */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] overflow-hidden flex items-center">
            <div className="flex gap-8 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
              <span className="text-5xl sm:text-6xl font-mono font-black tracking-widest text-neutral-900 uppercase">
                REACT • LARAVEL • WORDPRESS • TAILWIND • FULLSTACK • WEB DEV • UI/UX •
              </span>
              <span className="text-5xl sm:text-6xl font-mono font-black tracking-widest text-neutral-900 uppercase">
                REACT • LARAVEL • WORDPRESS • TAILWIND • FULLSTACK • WEB DEV • UI/UX •
              </span>
            </div>
          </div>

          {/* Ambient Blue Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

          {/* Left Text Content & Action Buttons */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 font-serif font-medium leading-[1.15]">
              Ready to Build
              <br />
              Your Next Website?
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
              I develop modern React, Laravel and WordPress websites for colleges, institutes and businesses.
            </p>

            <div className="relative z-10 mt-6 flex flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
              {/* Primary Action Button */}
              <a
                href="mailto:info@devhub.com"
                className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-3.5 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>Email Me</span>
              </a>

              {/* Secondary Action Button */}
              <a
                href="tel:+919876543210"
                className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-8 py-3.5 rounded-full font-semibold text-sm shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>Call Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Laptop Moving Scrolling Preview */}
          <LaptopScrollingPreview />

        </div>

        {/* Original Dark Footer Links & Copyright */}
        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-black text-white">
              DEV<span className="text-indigo-400">HUB</span>
            </h2>

            <p className="mt-4 text-gray-400">
              Frontend Developer specializing in React, Tailwind CSS,
              Laravel and WordPress.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white">
              Navigation
            </h3>

            <div className="space-y-3">
              <button
                onClick={(e) => scrollTo(e, "hero")}
                className="block text-gray-400 hover:text-white transition"
              >
                Home
              </button>

              <button
                onClick={(e) => scrollTo(e, "services")}
                className="block text-gray-400 hover:text-white transition"
              >
                Services
              </button>

              <button
                onClick={(e) => scrollTo(e, "work")}
                className="block text-gray-400 hover:text-white transition"
              >
                Portfolio
              </button>

              <button
                onClick={(e) => scrollTo(e, "contact")}
                className="block text-gray-400 hover:text-white transition"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>React Development</p>
              <p>Laravel Development</p>
              <p>WordPress Websites</p>
              <p>UI / UX Design</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white">
              Contact
            </h3>

            <div className="space-y-3">
              <a
                href="mailto:info@devhub.com"
                className="block text-gray-400 hover:text-white transition"
              >
                info@devhub.com
              </a>

              <a
                href="tel:+919876543210"
                className="block text-indigo-400 font-semibold"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>
            © {new Date().getFullYear()} DEVHUB. All Rights Reserved.
          </p>

          <button
            onClick={(e) => scrollTo(e, "hero")}
            className="mt-4 md:mt-0 text-indigo-400 hover:text-indigo-300 font-medium transition"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}