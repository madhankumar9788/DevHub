import React, { useState } from "react";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Atom,
  ArrowUpRight,
  Award,
  Shield,
  School,
  Sparkles,
  Crown,
  Bookmark,
  Trophy,
  Medal,
  Globe,
  Compass,
  Landmark,
  Library,
  Flame,
  Lightbulb,
  Star,
  Cpu,
} from "lucide-react";

const productsList = [
  {
    id: 1,
    title: "KGiSL Campus Portal Theme",
    tag: "College Portal • Multi-Dept",
    price: "₹4,999",
    description: "Production-ready institution portal template with admission workflows, notice boards, and department layouts.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "SkillRyt EdTech Platform",
    tag: "LMS • Course Catalog",
    price: "₹6,499",
    description: "Modern learning portal UI with course listings, student dashboard design, and interactive video module layouts.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Enterprise Corporate React Kit",
    tag: "Business • SaaS Landing",
    price: "₹3,999",
    description: "Clean, high-converting corporate website kit with service showcases, team grids, and contact forms.",
    icon: Building2,
  },
  {
    id: 4,
    title: "React 19 Interactive Component Suite",
    tag: "UI Kit • Tailwind v4",
    price: "₹2,999",
    description: "Reusable component collection featuring animated marquees, bento grids, modal dialogs, and responsive navbar components.",
    icon: Atom,
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productsList[0]);

  return (
    <section id="products" className="bg-[#0B1120] text-[#F8FAFC] py-24 px-6 sm:px-10 lg:px-12 scroll-section border-t border-[#334155] relative overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-space">
          <span className="inline-block text-[#06B6D4] text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#111827] border border-[#334155] px-3.5 py-1.5 rounded-full shadow-md">
            ✦ Digital Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-[#F8FAFC]">Ready-to-Deploy </span>
            <span className="text-[#3B82F6]">
              Web Assets
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed font-sans font-normal">
            Pre-built React templates and UI kits crafted specifically for educational portals, business websites, and enterprise web apps.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Product List */}
          <div className="lg:col-span-7 space-y-4">
            {productsList.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = selectedProduct.id === p.id;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedProduct(p)}
                  className={`border rounded-3xl p-6 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden cursor-pointer shadow-lg ${
                    isSelected
                      ? "bg-[#111827] border-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                      : "bg-[#111827]/60 border-[#334155] hover:border-[#3B82F6]/60"
                  }`}
                >
                  <div className="flex gap-4 items-start max-w-md">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                        : "bg-[#3B82F6]/15 border-[#3B82F6]/30 text-[#3B82F6]"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest block font-mono">
                        {p.tag}
                      </span>
                      <h3 className={`text-lg font-bold font-space transition-colors ${
                        isSelected ? "text-[#3B82F6]" : "text-[#F8FAFC]"
                      }`}>
                        {p.title}
                      </h3>
                      <p className="text-[#94A3B8] text-[15px] leading-relaxed font-sans font-normal">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-[#334155]/60">
                    <div className="text-left sm:text-right mb-0 sm:mb-3 font-space">
                      <span className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider block font-mono">Single License</span>
                      <span className="text-xl font-bold text-[#F8FAFC]">{p.price}</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[#3B82F6] hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md font-space">
                      License
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Animated Concentric School Badge Orbit Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[540px] mx-auto [mask-image:radial-gradient(circle,black_45%,transparent_75%)]">
              
              {/* Center Cap Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-slate-950 border-2 border-indigo-500/50 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                  <GraduationCap className="w-8 h-8 text-indigo-400 mb-0.5 animate-pulse" />
                </div>
              </div>

              {/* Orbit Ring Background Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="aspect-square rounded-full border border-indigo-500/20" style={{ width: "38%", opacity: 1 }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="aspect-square rounded-full border border-cyan-500/20" style={{ width: "62%", opacity: 0.97 }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="aspect-square rounded-full border border-purple-500/20" style={{ width: "88%", opacity: 0.94 }} />
              </div>

              {/* Inner Orbit (38% width) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[38%] aspect-square animate-orbit-slow">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "100%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-sky-950/90 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] animate-orbit-counter-slow">
                      <GraduationCap className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">KGCAS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "93.3%", left: "75%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-rose-950/90 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-orbit-counter-slow">
                      <Award className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">RUBY</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "93.3%", left: "25%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-orbit-counter-slow">
                      <BookOpen className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">SMV</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "0%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-amber-950/90 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-orbit-counter-slow">
                      <Shield className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">DBMS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "6.7%", left: "25%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-purple-950/90 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] animate-orbit-counter-slow">
                      <School className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">CAMBRIDGE</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "6.7%", left: "75%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-orbit-counter-slow">
                      <Building2 className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">AL-AMEEN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Orbit (62% width) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[62%] aspect-square animate-orbit-mid">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "100%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-blue-950/90 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.4)] animate-orbit-counter-mid">
                      <Sparkles className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">ST.MS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "85.4%", left: "85.4%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-yellow-950/90 border-yellow-400 text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.4)] animate-orbit-counter-mid">
                      <Crown className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">HAMHS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "100%", left: "50%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-fuchsia-950/90 border-fuchsia-400 text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.4)] animate-orbit-counter-mid">
                      <Bookmark className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">PNAMHS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "85.4%", left: "14.6%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-lime-950/90 border-lime-400 text-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.4)] animate-orbit-counter-mid">
                      <Trophy className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">ANOOR</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "0%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-orange-950/90 border-orange-400 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.4)] animate-orbit-counter-mid">
                      <Medal className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">KMM</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "14.6%", left: "14.6%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-teal-950/90 border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.4)] animate-orbit-counter-mid">
                      <Globe className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">VIDIYAL</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "0%", left: "50%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-orbit-counter-mid">
                      <Compass className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">JEZREEL</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "14.6%", left: "85.4%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-violet-950/90 border-violet-400 text-violet-300 shadow-[0_0_15px_rgba(192,132,252,0.4)] animate-orbit-counter-mid">
                      <Landmark className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">SMHS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer Orbit (88% width) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[88%] aspect-square animate-orbit-fast">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "100%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(5,150,105,0.4)] animate-orbit-counter-fast">
                      <Library className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">NANJAPPA</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "75%", left: "93.3%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-rose-950/90 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-orbit-counter-fast">
                      <Flame className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">AGN</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "93.3%", left: "75%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-indigo-950/90 border-indigo-400 text-indigo-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] animate-orbit-counter-fast">
                      <GraduationCap className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">PMS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "100%", left: "50%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-amber-950/90 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(217,119,6,0.4)] animate-orbit-counter-fast">
                      <Lightbulb className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">GUHAN</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "93.3%", left: "25%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-purple-950/90 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] animate-orbit-counter-fast">
                      <Star className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">UNIQUE</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "75%", left: "6.7%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-indigo-950/90 border-indigo-400 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.4)] animate-orbit-counter-fast">
                      <Building2 className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">SMHS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "50%", left: "0%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-orbit-counter-fast">
                      <Shield className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">BAPTIST</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "25%", left: "6.7%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-violet-950/90 border-violet-400 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.4)] animate-orbit-counter-fast">
                      <BookOpen className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">STJMS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "6.7%", left: "25%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-orbit-counter-fast">
                      <Award className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">KMS</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "0%", left: "50%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-teal-950/90 border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.4)] animate-orbit-counter-fast">
                      <Cpu className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">EDISON</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "6.7%", left: "75%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-lime-950/90 border-lime-400 text-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.4)] animate-orbit-counter-fast">
                      <School className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">JMJ</span>
                    </div>
                  </div>
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ top: "25%", left: "93.3%" }}>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer bg-red-950/90 border-red-400 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-orbit-counter-fast">
                      <Crown className="w-5 h-5 stroke-[2]" />
                      <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">ST.AICSE</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
