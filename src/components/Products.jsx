import React from "react";
import { BookOpen, ShoppingCart, Rocket, ArrowUpRight, Star } from "lucide-react";

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
      <path d="M1.5 0h21l-1.91 21.63L12 24l-8.59-2.37L1.5 0Zm14.28 7.37H7.76l.16 1.77h8.18l-.29 3.23-3.81 1.05-3.81-1.05-.26-2.92H6.31l.43 4.8 5.26 1.46 5.26-1.46.56-6.18h-.04Z" />
    </svg>
  ),
  css: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1572b6">
      <path d="M1.5 0h21l-1.91 21.63L12 24l-8.59-2.37L1.5 0Zm17.08 3.55h-13.3l.16 1.77h12.98l-.13 1.48H5.21l.16 1.77h12.78l-.34 3.78-5.81 1.61-5.81-1.61-.39-4.26h-1.62l.53 5.76 7.29 2.02 7.29-2.02.66-7.29H5.53l-.16-1.77h13.38l-.16-1.77Z" />
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
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center scale-90 sm:scale-100">
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
              className="absolute top-1/2 left-1/2 pointer-events-auto"
              style={{
                transform: `translate(-50%, -50%) rotate(${ico.angle}deg) translate(70px) rotate(-${ico.angle}deg)`
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
              className="absolute top-1/2 left-1/2 pointer-events-auto"
              style={{
                transform: `translate(-50%, -50%) rotate(${ico.angle}deg) translate(135px) rotate(-${ico.angle}deg)`
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
              className="absolute top-1/2 left-1/2 pointer-events-auto"
              style={{
                transform: `translate(-50%, -50%) rotate(${ico.angle}deg) translate(200px) rotate(-${ico.angle}deg)`
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
