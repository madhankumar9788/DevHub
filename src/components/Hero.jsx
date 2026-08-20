"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { Mail, ArrowRight, Zap, Star, Code2, Layers, Cpu, Flame } from "lucide-react";

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim-item", {
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-float-card", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-avatar-anim", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#070510] overflow-hidden flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 md:px-12 font-sans selection:bg-orange-500 selection:text-white"
    >
      {/* Radial Warm Orange Glow Atmosphere (Matching reference image background) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] sm:w-[800px] h-[650px] sm:h-[800px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_50%,transparent_100%)] pointer-events-none" />

      {/* Top-Right Glowing 3D Lightning Accent (Matching reference image) */}
      <div className="absolute top-16 right-8 sm:right-16 text-orange-500 z-30 animate-lightning-glow pointer-events-none">
        <Zap className="w-16 h-16 sm:w-24 sm:h-24 fill-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.9)]" />
      </div>

      {/* Bottom-Left Glowing 3D Lightning Accent (Matching reference image) */}
      <div className="absolute bottom-12 left-6 sm:left-12 text-orange-500 z-30 animate-lightning-glow pointer-events-none" style={{ animationDelay: "2s" }}>
        <Zap className="w-14 h-14 sm:w-20 sm:h-20 fill-orange-400 drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]" />
      </div>

      {/* Main Container Grid matching reference image layout */}
      <div className="max-w-7xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
        
        {/* LEFT COLUMN: Greeting, Giant Title, Subtitle, Action Buttons & Bottom Testimonial Card */}
        <div className="lg:col-span-6 space-y-7 text-left relative z-20">
          
          {/* Tagline Greeting */}
          <div className="hero-anim-item inline-flex items-center gap-2">
            <span className="text-base sm:text-lg font-medium text-slate-300">
              Hey, I am{" "}
              <span className="font-extrabold text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]">
                KG Agile
              </span>
            </span>
          </div>

          {/* Giant Prominent Headline */}
          <div className="hero-anim-item space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Web{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                Designer
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-orange-200/90">
              Website Development Services & Architecture
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="hero-anim-item text-sm sm:text-base text-slate-300/80 font-normal max-w-lg leading-relaxed">
            As an expert website development company, KG Agile builds fast, scalable websites and web applications that convert visitors into customers.
          </p>

          {/* Action Buttons Row (Primary Orange Pill CTA + Circular Glass Icon Button) */}
          <div className="hero-anim-item flex items-center gap-4 pt-1">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(249,115,22,0.6)] border border-orange-400/40"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:info@devhub.com"
              className="w-12 h-12 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 hover:border-orange-400/60 flex items-center justify-center text-slate-200 hover:text-orange-400 transition-all duration-300 shadow-lg hover:scale-110"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Horizontal Accent Line Separator */}
          <div className="hero-anim-item w-full max-w-lg h-[1px] bg-gradient-to-r from-slate-800 via-slate-700/60 to-transparent my-6" />

          {/* Bottom-Left Floating Glass Testimonial Card (Matching reference image) */}
          <div className="hero-float-card glass-card-testimonial p-5 rounded-2xl max-w-md relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
            <div className="text-3xl text-orange-400 font-serif font-black leading-none mb-1">“</div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-normal italic">
              KG Agile built our institutional portal with 99.9% uptime, incredible speed, and flawless responsive layout.
            </p>
            <div className="mt-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-orange-300">
                  CA
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Carolina Abott</h4>
                <p className="text-[10px] text-slate-400">Business Owner</p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="text-xs font-bold">5.0</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: 3D Developer Character Avatar with Orbital Rings & Tech Stack Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[460px] sm:h-[560px] w-full">
          
          {/* Radial Concentric Orbit Lines radiating behind character (Matching reference image) */}
          <div className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-orange-500/20 animate-spin-orbit pointer-events-none" />
          <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-orange-400/15 pointer-events-none" />

          {/* Floating Tech Stack Badges attached to orbit rings */}
          <div className="absolute top-10 right-8 sm:right-14 z-30 px-3 py-1.5 rounded-xl bg-orange-600 text-white font-black text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(249,115,22,0.7)] animate-bounce" style={{ animationDuration: "4s" }}>
            <Flame className="w-4 h-4" />
            <span>HTML5</span>
          </div>

          <div className="absolute top-1/3 left-2 sm:left-6 z-30 px-3 py-1.5 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.7)] animate-bounce" style={{ animationDuration: "5s" }}>
            <Code2 className="w-4 h-4" />
            <span>CSS3</span>
          </div>

          <div className="absolute bottom-20 left-12 sm:left-20 z-30 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.7)] animate-bounce" style={{ animationDuration: "4.5s" }}>
            <Cpu className="w-4 h-4" />
            <span>JS</span>
          </div>

          <div className="absolute bottom-16 right-10 sm:right-16 z-30 px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-black text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-bounce" style={{ animationDuration: "3.8s" }}>
            <Layers className="w-4 h-4" />
            <span>React</span>
          </div>

          {/* 3D Desktop Computer Setup Illustration Container */}
          <div className="hero-avatar-anim relative z-20 w-full max-w-[360px] sm:max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.4)] border border-orange-500/40 group hover:scale-[1.02] transition-transform duration-500 bg-slate-950">
            <img
              src="/images/desktop-3d.jpg"
              alt="3D Desktop Setup"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

        </div>

      </div>

    </section>
  );
}
