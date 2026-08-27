import React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end bg-[#0B1120] font-sans overflow-hidden">
      {/* Background Motion Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20 filter contrast-125 saturate-150 will-change-transform"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
            type="video/mp4"
          />
        </video>

        {/* 3D Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(248, 250, 252, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 250, 252, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(1000px) rotateX(25deg)",
          }}
        />

        {/* Primary Blue & Cyan Radial Lighting */}
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#3B82F6]/15 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-[#06B6D4]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/80" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1120]/40 z-[1] pointer-events-none" />

      {/* Content Container (Anchored at bottom-left) */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-3xl px-6 md:px-10 pb-12 md:pb-16 pt-32 text-left">
        
        {/* Freelance Badge */}
        <div
          className="inline-flex items-center gap-2 bg-[#111827]/90 border border-[#334155] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#06B6D4] shadow-lg mb-4 opacity-0 animate-fade-up pointer-events-auto"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Web Designer & Developer</span>
        </div>

        {/* Heading (Space Grotesk Font) */}
        <h1
          className="font-space text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#F8FAFC] mb-2 md:mb-4 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          DEV HUB <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]">AGILE</span>
        </h1>

        {/* Subheading */}
        <p
          className="font-space text-[#F8FAFC]/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-medium mb-3 md:mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          We implement web applications correctly.
        </p>

        {/* Description */}
        <p
          className="text-[#94A3B8] text-[clamp(0.875rem,1.4vw,1.15rem)] font-normal mb-6 md:mb-8 opacity-0 animate-fade-up max-w-2xl leading-relaxed"
          style={{ animationDelay: "0.55s" }}
        >
          Crafting high-performance websites, institutional portals, and custom React applications for schools, businesses, and digital startups. Designed with clean architecture, motion design, and responsive code.
        </p>

        {/* Two CTA Buttons */}
        <div
          className="flex flex-wrap items-center gap-4 font-space opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="group inline-flex items-center justify-center gap-2.5 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold px-7 py-3.5 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-[0.97] pointer-events-auto shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-[#3B82F6]/50"
          >
            <span>Book a Call</span>
            <PhoneCall className="w-4 h-4 fill-white" />
          </a>

          <a
            href="#work"
            onClick={(e) => scrollTo(e, "work")}
            className="group inline-flex items-center justify-center gap-2.5 bg-[#F8FAFC] hover:bg-white text-[#0B1120] font-bold px-7 py-3.5 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-[0.97] pointer-events-auto shadow-md"
          >
            <span>Our Work</span>
            <ArrowRight className="w-4 h-4 text-[#0B1120] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Line */}
        <div
          className="flex items-center gap-2 text-[#94A3B8] text-xs font-normal mt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
          <span>Trusted web partner. 100+ systems & portals deployed. 99.9% uptime.</span>
        </div>

      </div>
    </section>
  );
}
