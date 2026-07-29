import React, { useState } from "react";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Award,
  Shield,
  Sparkles,
  Trophy,
  Bookmark,
  Globe,
  Lightbulb,
  Medal,
  Landmark,
  Library,
  Flame,
  Crown,
  Compass,
  Cpu,
  School,
  Star,
  CheckCircle2,
  Search,
  ShoppingCart,
  Rocket,
  ArrowUpRight
} from "lucide-react";

const productsList = [
  {
    icon: BookOpen,
    tag: "React 19 & Tailwind",
    title: "EduSphere LMS Portal Layout",
    description: "Complete student learning dashboard template with admissions modules, online exams, and responsive grade sheets.",
    price: "₹4,999",
    rating: "4.9",
    reviews: "54 reviews",
    badge: "Bestseller",
    color: "indigo"
  },
  {
    icon: ShoppingCart,
    tag: "Next.js & Stripe Ready",
    title: "SwiftStore Headless Storefront",
    description: "Super fast headless e-commerce store template with dynamic catalog lists, sliding cart drawers, and checkouts.",
    price: "₹6,499",
    rating: "4.8",
    reviews: "38 reviews",
    badge: "Popular",
    color: "cyan"
  },
  {
    icon: Rocket,
    tag: "Vite + Auth Boilerplate",
    title: "SaaS Launchpad Boilerplate",
    description: "Fully featured SaaS template containing authentication layouts, Stripe pricing grids, and custom settings forms.",
    price: "₹7,999",
    rating: "5.0",
    reviews: "72 reviews",
    badge: "Hot Release",
    color: "amber"
  }
];

// All 67+ School Clients requested by the user
const allSchoolNames = [
  "Ruby Matriculation Hr Sec School", "SMV School", "ALM School", "An-noor Matriculation School",
  "KMM Matriculation", "KGCAS (KG College of Arts & Science)", "STJMS School", "PNAMHS School (2025)",
  "Jezreel School", "Al-Ameen MHSS (Erode)", "SSM School", "AL-AMEEN MHSS", "AEMHSS School", "MMEG School",
  "Nanjappa School", "RGMHSS School", "BPM Matriculation", "MGMS School", "Pandian Matriculation School (PMS)",
  "Guhan School", "SVN School", "AMS School", "JAMES School", "Vidiyal Matriculation", "St. Mary's Matriculation",
  "NGP School", "Al-huda Matriculation", "Baptist CBSE School", "KG Matriculation School", "SRMHSS School",
  "LNMS School", "Falah School", "SAPS School", "Al-ameen Girls Higher School", "Variyar Matriculation School",
  "Mahajana Vidyalaya Matriculation", "Sri Balan Evergreen Matric", "Sarvodaya Matriculation HSS", "AGN School",
  "Vasavi Vidyalaya Matric HSS", "Srinivasa Public School", "Sarva Seva Sparrows Nest", "Appu School",
  "Sivakasi Hindu Nadar Matric HSS", "Unique Public School", "Sri Ragavendra Vidyalaya", "Sri Vaani International",
  "Kalaivani Model Matric HSS", "Sri Kamatchi Vidya Mandir", "Good Luck Matric High School", "Al-Huda Matric HSS",
  "Don Bosco Matric HSS", "Cambridge Group of Schools", "Shenbagam Matric HSS", "Dr. Krishna Vikas MHSS",
  "St. Joseph Matric Kodanagar", "Vivek Vidya Mandir (CBSE)", "Ideal Nursery & Primary", "Edison International School",
  "G P Matriculation School", "Vivekanthaa Vithyalayaa", "CAMBRIDGE PUBLIC e-SCHOOL", "JMJ English High School",
  "Madonna Matric Hr. Sec.", "Kids Park Matric Hr. Sec.", "S.V.Nagar Vidyalaya", "Holy Angels Matric HSS",
  "ST. THOMAS THE APOSTLE ICSE", "Mount Giris International", "Crea Children's Academy"
];

// Orbit 1: Inner (38%) - 6 colored school nodes
const innerIcons = [
  { icon: GraduationCap, name: "KGCAS", fullName: "KG College of Arts & Science", top: "50%", left: "100%", color: "#38bdf8", bg: "bg-sky-950/90 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]" },
  { icon: Award, name: "RUBY", fullName: "Ruby Matriculation Hr Sec School", top: "93.3%", left: "75%", color: "#f43f5e", bg: "bg-rose-950/90 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)]" },
  { icon: BookOpen, name: "SMV", fullName: "Sri Vaani International School", top: "93.3%", left: "25%", color: "#10b981", bg: "bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
  { icon: Shield, name: "DON BOSCO", fullName: "Don Bosco Matric HSS", top: "50%", left: "0%", color: "#f59e0b", bg: "bg-amber-950/90 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
  { icon: School, name: "CAMBRIDGE", fullName: "Cambridge Group of Schools", top: "6.7%", left: "25%", color: "#a855f7", bg: "bg-purple-950/90 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
  { icon: Building2, name: "AL-AMEEN", fullName: "Al-Ameen MHSS Erode", top: "6.7%", left: "75%", color: "#06b6d4", bg: "bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]" }
];

// Orbit 2: Middle (62%) - 8 colored school nodes
const middleIcons = [
  { icon: Sparkles, name: "ST. MARY'S", fullName: "St. Mary's Matriculation School", top: "50%", left: "100%", color: "#60a5fa", bg: "bg-blue-950/90 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.4)]" },
  { icon: Crown, name: "HOLY ANGELS", fullName: "Holy Angels Matric HSS", top: "85.4%", left: "85.4%", color: "#eab308", bg: "bg-yellow-950/90 border-yellow-400 text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.4)]" },
  { icon: Bookmark, name: "PNAMHS", fullName: "PNAMHS School (2025)", top: "100%", left: "50%", color: "#d946ef", bg: "bg-fuchsia-950/90 border-fuchsia-400 text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.4)]" },
  { icon: Trophy, name: "ANOOR", fullName: "An-Noor Matriculation School", top: "85.4%", left: "14.6%", color: "#84cc16", bg: "bg-lime-950/90 border-lime-400 text-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.4)]" },
  { icon: Medal, name: "KMM", fullName: "KMM Matriculation School", top: "50%", left: "0%", color: "#f97316", bg: "bg-orange-950/90 border-orange-400 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.4)]" },
  { icon: Globe, name: "VIDIYAL", fullName: "Vidiyal Matriculation School", top: "14.6%", left: "14.6%", color: "#14b8a6", bg: "bg-teal-950/90 border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.4)]" },
  { icon: Compass, name: "JEZREEL", fullName: "Jezreel International School", top: "0%", left: "50%", color: "#ec4899", bg: "bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
  { icon: Landmark, name: "SARVODAYA", fullName: "Sarvodaya Matriculation HSS", top: "14.6%", left: "85.4%", color: "#c084fc", bg: "bg-violet-950/90 border-violet-400 text-violet-300 shadow-[0_0_15px_rgba(192,132,252,0.4)]" }
];

// Orbit 3: Outer (88%) - 12 colored school nodes
const outerIcons = [
  { icon: Library, name: "NANJAPPA", fullName: "Nanjappa School", top: "50%", left: "100%", color: "#059669", bg: "bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(5,150,105,0.4)]" },
  { icon: Flame, name: "AGN", fullName: "AGN School", top: "75%", left: "93.3%", color: "#f43f5e", bg: "bg-rose-950/90 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)]" },
  { icon: GraduationCap, name: "PMS", fullName: "Pandian Matriculation School", top: "93.3%", left: "75%", color: "#3b82f6", bg: "bg-indigo-950/90 border-indigo-400 text-indigo-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  { icon: Lightbulb, name: "GUHAN", fullName: "Guhan School", top: "100%", left: "50%", color: "#d97706", bg: "bg-amber-950/90 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(217,119,6,0.4)]" },
  { icon: Star, name: "UNIQUE", fullName: "Unique Public School", top: "93.3%", left: "25%", color: "#a855f7", bg: "bg-purple-950/90 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
  { icon: Building2, name: "SHENBAGAM", fullName: "Shenbagam Matric HSS", top: "75%", left: "6.7%", color: "#6366f1", bg: "bg-indigo-950/90 border-indigo-400 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.4)]" },
  { icon: Shield, name: "BAPTIST", fullName: "Baptist CBSE School", top: "50%", left: "0%", color: "#06b6d4", bg: "bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
  { icon: BookOpen, name: "STJMS", fullName: "STJMS School", top: "25%", left: "6.7%", color: "#8b5cf6", bg: "bg-violet-950/90 border-violet-400 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.4)]" },
  { icon: Award, name: "KALAIVANI", fullName: "Kalaivani Model HSS", top: "6.7%", left: "25%", color: "#ec4899", bg: "bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
  { icon: Cpu, name: "EDISON", fullName: "Edison International School", top: "0%", left: "50%", color: "#14b8a6", bg: "bg-teal-950/90 border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.4)]" },
  { icon: School, name: "JMJ", fullName: "JMJ English High School", top: "6.7%", left: "75%", color: "#84cc16", bg: "bg-lime-950/90 border-lime-400 text-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.4)]" },
  { icon: Crown, name: "ST. THOMAS", fullName: "St. Thomas The Apostle ICSE", top: "25%", left: "93.3%", color: "#ef4444", bg: "bg-red-950/90 border-red-400 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]" }
];

function OrbitingTechCircles() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto [mask-image:radial-gradient(circle,black_45%,transparent_75%)]">
      {/* Central School Emblem Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-slate-950 border-2 border-indigo-500/50 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)]">
          <GraduationCap className="w-8 h-8 text-indigo-400 mb-0.5 animate-pulse" />
        </div>
      </div>

      {/* Circle Border Overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-indigo-500/20" style={{ width: "38%", opacity: 1 }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-cyan-500/20" style={{ width: "62%", opacity: 0.97 }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-purple-500/20" style={{ width: "88%", opacity: 0.94 }} />
      </div>

      {/* Orbit 1: Inner (38%) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[38%] aspect-square animate-orbit-slow">
          {innerIcons.map((ico, idx) => {
            const IcoComp = ico.icon;
            return (
              <div
                key={`inner-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
                style={{ top: ico.top, left: ico.left }}
                onMouseEnter={() => setActiveTooltip(ico.fullName)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer ${ico.bg} animate-orbit-counter-slow`}>
                  <IcoComp className="w-5 h-5 stroke-[2]" />
                  <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">{ico.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit 2: Middle (62%) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[62%] aspect-square animate-orbit-mid">
          {middleIcons.map((ico, idx) => {
            const IcoComp = ico.icon;
            return (
              <div
                key={`middle-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
                style={{ top: ico.top, left: ico.left }}
                onMouseEnter={() => setActiveTooltip(ico.fullName)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer ${ico.bg} animate-orbit-counter-mid`}>
                  <IcoComp className="w-5 h-5 stroke-[2]" />
                  <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">{ico.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit 3: Outer (88%) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[88%] aspect-square animate-orbit-fast">
          {outerIcons.map((ico, idx) => {
            const IcoComp = ico.icon;
            return (
              <div
                key={`outer-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
                style={{ top: ico.top, left: ico.left }}
                onMouseEnter={() => setActiveTooltip(ico.fullName)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer ${ico.bg} animate-orbit-counter-fast`}>
                  <IcoComp className="w-5 h-5 stroke-[2]" />
                  <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">{ico.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-[#0b0f19] text-white py-24 px-6 md:px-10 scroll-section border-t border-slate-950 relative overflow-hidden">
      {/* Decorative background radial ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-3 py-1.5 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
              Digital Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-lg mt-3">
              Ready-Made Digital Assets
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm leading-relaxed font-light">
            Boost your development workflow with pre-built, pixel-perfect templates and developer boilerplate modules.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Stacked Cards (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {productsList.map((p, idx) => {
              const Icon = p.icon;

              // Glassy theme classes based on color config
              const bgClasses = p.color === "cyan"
                ? "bg-cyan-950/40 border-cyan-500/20 text-cyan-400"
                : p.color === "amber"
                  ? "bg-amber-950/40 border-amber-500/20 text-amber-400"
                  : "bg-indigo-950/40 border-indigo-500/20 text-indigo-400";

              return (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 hover:border-indigo-500/30 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden group shadow-lg"
                >
                  {/* Compact Info block */}
                  <div className="flex gap-4 items-start max-w-md">
                    {/* Glassy Theme Icon Box */}
                    <div className={`w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center shrink-0 border ${bgClasses}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">
                        {p.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-slate-400 text-[15px] leading-relaxed font-light">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing / CTA segment */}
                  <div className="flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                    <div className="text-left sm:text-right mb-0 sm:mb-3">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Single License</span>
                      <span className="text-xl font-black text-white">{p.price}</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-md shadow-indigo-900/20">
                      License
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Concentric Orbiting circles (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <OrbitingTechCircles />
          </div>
        </div>

       

      </div>
    </section>
  );
}
