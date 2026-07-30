import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Mail, Phone, MapPin, Globe } from "lucide-react";
import Logo from "./Logo";

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
      className="bg-[#030712] text-white pt-24 pb-12 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* White Theme CTA Banner with Animated Laptop Moving Scrolling Preview */}
        <div className="relative bg-white text-neutral-900 border -mt-80 border-neutral-200/90 rounded-3xl p-8 sm:p-12 md:p-14 mb-16 sm:mb-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

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

        {/* Nur/ui Reference Styled Footer Card */}
        <div className="relative bg-[#07090e] border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px]">
          
          {/* Ambient Lighting Flares inside card */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top 4-Column Grid (Matching Reference Image) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12">
            
            {/* Col 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <Logo light={true} />

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
                DEV HUB is a modern React, Tailwind CSS and Next.js based UI & web development studio.
              </p>
            </div>

            {/* Col 2: About Us (Span 2) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wide">About Us</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm font-sans">
                <li>
                  <a href="#hero" onClick={(e) => scrollTo(e, "hero")} className="hover:text-white transition">
                    Company History
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollTo(e, "about")} className="hover:text-white transition">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollTo(e, "services")} className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" onClick={(e) => scrollTo(e, "work")} className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Helpful Links (Span 3) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wide">Helpful Links</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm font-sans">
                <li>
                  <a href="#faqs" onClick={(e) => scrollTo(e, "work")} className="hover:text-white transition">
                    FAQs & Case Studies
                  </a>
                </li>
                <li>
                  <a href="#support" onClick={(e) => scrollTo(e, "contact")} className="hover:text-white transition">
                    24/7 Client Support
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="mailto:info@devhub.com" className="hover:text-white transition">
                    Live Chat
                  </a>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us (Span 3) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wide">Contact Us</h4>
              <div className="space-y-2.5 text-slate-400 text-xs sm:text-sm font-sans">
                <a href="mailto:info@devhub.com" className="flex items-center gap-2.5 hover:text-white transition">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate">info@devhub.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-white transition">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Coimbatore, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* GIANT OUTLINED BRAND WATERMARK TYPOGRAPHY (Matching Reference Image Exact Style) */}
          <div className="relative my-4 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <style>{`
              .watermark-text-stroke {
                -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.12);
                color: transparent;
              }
            `}</style>
            <h2 className="watermark-text-stroke text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold uppercase tracking-widest text-center whitespace-nowrap leading-none transition-all">
              DEV HUB
            </h2>
          </div>

          {/* Bottom Bar inside Card (Social Icons + Copyright) */}
          <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Social Media Round Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-indigo-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-pink-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-purple-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            {/* Right Copyright Text */}
            <p className="text-slate-500 text-xs sm:text-sm font-sans text-center sm:text-right">
              © {new Date().getFullYear()} DEVHUB. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}