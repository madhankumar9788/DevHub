import React, { useRef, useState } from "react";
import Logo from "./Logo";
import ElectricBorder from "./ElectricBorder";

function LaptopScrollingPreview() {
  const [activeTab, setActiveTab] = useState("kgisl");

  const previews = {
    kgisl: {
      name: "KGiSL Educational Portal",
      tag: "College Website • Live",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    },
    skillryt: {
      name: "SkillRyt EdTech Platform",
      tag: "Learning Management System",
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    tsa: {
      name: "TSA College Portal",
      tag: "Institutional Portal",
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    },
  };

  const current = previews[activeTab];

  return (
    <div className="relative max-w-sm w-full mx-auto lg:mx-0 font-sans">
      <div className="relative bg-[#111827] border border-[#334155] rounded-t-2xl p-2.5 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-2 pb-2 border-b border-[#334155] text-[10px] text-[#94A3B8] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="truncate max-w-[140px] text-[#F8FAFC] font-bold">{current.name}</span>
          <span className="text-[#3B82F6] font-bold">● LIVE</span>
        </div>

        <div className="relative h-48 sm:h-56 overflow-hidden rounded-b-lg bg-[#0B1120] group">
          <img
            src={current.url}
            alt={current.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/20 to-transparent" />

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#111827]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#334155]">
            <div>
              <p className="text-[10px] font-mono text-[#06B6D4] font-bold uppercase">{current.tag}</p>
              <p className="text-xs font-bold text-[#F8FAFC] truncate max-w-[160px] font-space">{current.name}</p>
            </div>
            <a
              href="#work"
              className="text-[10px] bg-[#3B82F6] text-white px-2.5 py-1 rounded-md font-bold hover:bg-blue-600 transition font-space"
            >
              View
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] h-3 rounded-b-xl max-w-[85%] mx-auto shadow-md flex items-center justify-center border-x border-b border-[#334155]">
        <div className="w-12 h-1 bg-[#334155] rounded-full" />
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 font-mono">
        {Object.keys(previews).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase transition ${
              activeTab === key
                ? "bg-[#3B82F6] text-white shadow-sm"
                : "bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#334155]"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-[#0B1120] text-[#F8FAFC] py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-t border-[#334155] font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Banner with ElectricBorder */}
        <div className="mb-16 sm:mb-20">
          <ElectricBorder color="#3B82F6" speed={1} chaos={0.12} borderRadius={24}>
            <div className="relative bg-[#111827] text-[#F8FAFC] border border-[#334155] rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 max-w-xl space-y-4 font-space">
                <div className="inline-flex items-center gap-2 bg-[#0B1120] border border-[#334155] px-3.5 py-1.5 rounded-full text-xs font-mono text-[#06B6D4] font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
                  LET'S CREATE SOMETHING EXTRAORDINARY
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                  <span className="text-[#F8FAFC]">Ready to Build </span>
                  <br />
                  <span className="text-[#3B82F6]">
                    Your Next Website?
                  </span>
                </h2>

                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-lg font-sans font-normal">
                  I develop modern React, Three.js, Laravel and WordPress websites for colleges, institutes, and ambitious businesses.
                </p>

                <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3.5 shrink-0 w-full sm:w-auto font-space">
                  <a
                    href="mailto:info@devhub.com"
                    className="bg-[#3B82F6] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03]"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email Me</span>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="bg-[#0B1120] hover:bg-[#0B1120]/80 text-white border border-[#334155] px-8 py-3.5 rounded-full font-semibold text-sm shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03]"
                  >
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Call Me</span>
                  </a>
                </div>
              </div>

              <LaptopScrollingPreview />
            </div>
          </ElectricBorder>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#334155]">
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" onClick={(e) => scrollTo(e, "hero")}>
              <Logo light={true} />
            </a>
            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm font-sans font-normal">
              DEV HUB — Freelance Frontend Developer specializing in institutional college portals, business websites, and React web apps.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wide font-space">Quick Links</h4>
            <ul className="space-y-2 text-[#94A3B8] text-xs sm:text-sm font-sans">
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, "about")} className="hover:text-[#3B82F6] transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, "services")} className="hover:text-[#3B82F6] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => scrollTo(e, "products")} className="hover:text-[#3B82F6] transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => scrollTo(e, "work")} className="hover:text-[#3B82F6] transition">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wide font-space">Helpful Links</h4>
            <ul className="space-y-2 text-[#94A3B8] text-xs sm:text-sm font-sans">
              <li>
                <a href="#work" onClick={(e) => scrollTo(e, "work")} className="hover:text-[#3B82F6] transition">
                  FAQs & Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="hover:text-[#3B82F6] transition">
                  24/7 Client Support
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:info@devhub.com" className="hover:text-[#3B82F6] transition">
                  info@devhub.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wide font-space">Contact Information</h4>
            <div className="space-y-2 text-[#94A3B8] text-xs sm:text-sm font-sans">
              <p>Coimbatore, Tamil Nadu, India</p>
              <p className="text-[#06B6D4] font-bold font-mono">Available for Freelance Projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#94A3B8] text-xs font-sans">
          <p>© {new Date().getFullYear()} DEV HUB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" onClick={(e) => scrollTo(e, "hero")} className="hover:text-[#F8FAFC] transition">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}