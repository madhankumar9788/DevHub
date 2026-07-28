import React from "react";
import { 
  BookOpen, 
  ShoppingCart, 
  Rocket, 
  ArrowUpRight, 
  Star,
  Bell, 
  Code, 
  Heart, 
  Search, 
  Camera, 
  Gift, 
  Clock, 
  Lightbulb, 
  Eye, 
  Folder, 
  Pen, 
  Wifi, 
  Mic, 
  Key, 
  Hexagon,
  Cloud,
  Flag
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

function OrbitingTechCircles() {
  const innerIcons = [
    { icon: Bell, top: "50%", left: "100%" },
    { icon: Code, top: "93.3013%", left: "75%" },
    { icon: Star, top: "93.3013%", left: "25%" },
    { icon: Heart, top: "50%", left: "0%" },
    { icon: Search, top: "6.69873%", left: "25%" },
    { icon: Hexagon, top: "6.69873%", left: "75%" }
  ];

  const middleIcons = [
    { icon: Camera, top: "50%", left: "100%" },
    { icon: Gift, top: "85.3553%", left: "85.3553%" },
    { icon: Clock, top: "100%", left: "50%" },
    { icon: Lightbulb, top: "85.3553%", left: "14.6447%" },
    { icon: Eye, top: "50%", left: "0%" },
    { icon: Folder, top: "14.6447%", left: "14.6447%" },
    { icon: Pen, top: "0%", left: "50%" },
    { icon: Wifi, top: "14.6447%", left: "85.3553%" }
  ];

  const outerIcons = [
    { icon: Mic, top: "50%", left: "100%" },
    { icon: Key, top: "75%", left: "93.3013%" },
    { icon: Cloud, top: "93.3013%", left: "75%" },
    { icon: Rocket, top: "100%", left: "50%" },
    { icon: Flag, top: "93.3013%", left: "25%" },
    { icon: BookOpen, top: "75%", left: "6.6987%" },
    { icon: ShoppingCart, top: "50%", left: "0%" },
    { icon: Star, top: "25%", left: "6.6987%" },
    { icon: Bell, top: "6.6987%", left: "25%" },
    { icon: Code, top: "0%", left: "50%" },
    { icon: Heart, top: "6.6987%", left: "75%" },
    { icon: Search, top: "25%", left: "93.3013%" }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto [mask-image:radial-gradient(circle,black_40%,transparent_72%)]">
      {/* Central Custom Leaf Emblem (Screenshot matched design) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#0b0f19] border border-slate-800 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
            {/* Stylized rounded "P" / "R" */}
            <path d="M35 25h20c12 0 20 8 20 20s-8 20-20 20H45v20H35V25zm10 10v20h10c7 0 11-4 11-10s-4-10-11-10H45z" fill="#ffffff" />
            {/* Leaf accent */}
          </svg>
        </div>
      </div>

      {/* Circle Border Overlays (Matching Width Percentages) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-indigo-500/10" style={{ width: "38%", opacity: 1 }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-indigo-500/10" style={{ width: "62%", opacity: 0.97 }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aspect-square rounded-full border border-indigo-500/10" style={{ width: "88%", opacity: 0.94 }} />
      </div>

      {/* Orbit 1: Inner (38%) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[38%] aspect-square animate-orbit-slow">
          {innerIcons.map((ico, idx) => {
            const IcoComp = ico.icon;
            return (
              <div
                key={`inner-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ top: ico.top, left: ico.left }}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-900/60 border border-slate-700/30 flex items-center justify-center shadow-lg text-slate-400 animate-orbit-counter-slow">
                  <IcoComp className="w-5 h-5 stroke-[1.5]" />
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
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ top: ico.top, left: ico.left }}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-900/60 border border-slate-700/30 flex items-center justify-center shadow-lg text-slate-400 animate-orbit-counter-mid">
                  <IcoComp className="w-5 h-5 stroke-[1.5]" />
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
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ top: ico.top, left: ico.left }}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-900/60 border border-slate-700/30 flex items-center justify-center shadow-lg text-slate-400 animate-orbit-counter-fast">
                  <IcoComp className="w-5 h-5 stroke-[1.5]" />
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
                      <p className="text-slate-400 text-xs leading-relaxed font-light">
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
