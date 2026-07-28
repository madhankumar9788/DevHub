import React from "react";

const icons = {
  star: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17l-6 3.4 1.4-6.8L2.3 9l6.9-.7z" />
    </svg>
  ),
  ring: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  bolt: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </svg>
  ),
  hex: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
    </svg>
  ),
  tri: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3l9 16H3z" />
    </svg>
  ),
  dots: (
    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="18" cy="12" r="2.4" />
    </svg>
  ),
};

const rowA = [
  { icon: 'star', name: 'React' },
  { icon: 'ring', name: 'Node.js' },
  { icon: 'bolt', name: 'NestJS' },
  { icon: 'hex', name: 'ExpressJS' },
  { icon: 'tri', name: 'NextJS' },
  { icon: 'dots', name: 'Wordpress' },
  { icon: 'ring', name: 'Shopify' },
];

const rowB = [
  { icon: 'bolt', name: 'HTMl' },
  { icon: 'hex', name: 'CSS' },
  { icon: 'dots', name: 'JavaScript' },
  { icon: 'tri', name: 'TypeScript' },
  { icon: 'star', name: 'Redux' },
  { icon: 'ring', name: 'Tailwind' },
  { icon: 'hex', name: 'Wordpress' }
];

export default function Marquee() {
  return (
    <div className="bg-[#fafafc] py-16 flex flex-col items-center justify-center gap-10 overflow-hidden border-b border-slate-100">
      
      {/* Intro Header */}
      <div className="text-center px-6">
        <p className="text-[11px] font-mono tracking-[0.24em] uppercase text-indigo-600 mb-3 font-bold">
          Trusted by teams everywhere
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Powering modern products
        </h2>
      </div>

      {/* Scrolling Marquees */}
      <div 
        className="relative w-full flex flex-col gap-3 overflow-hidden py-2"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)'
        }}
      >
        {/* Row A: Left Scrolling */}
        <div className="row flex overflow-hidden group">
          <div className="track flex shrink-0 gap-5 p-5 pr-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((item, idx) => (
              <span
                key={`a-${idx}`}
                className="logo flex items-center gap-3 shrink-0 px-6 py-3.5 bg-white border border-slate-200/80 rounded-2xl text-slate-500 hover:text-slate-900 hover:border-indigo-600 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-sm whitespace-nowrap cursor-pointer"
              >
                {icons[item.icon]}
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row B: Right Scrolling */}
        <div className="row flex overflow-hidden group">
          <div className="track flex shrink-0 gap-5 p-5 pr-5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((item, idx) => (
              <span
                key={`b-${idx}`}
                className="logo flex items-center gap-3 shrink-0 px-6 py-3.5 bg-white border border-slate-200/80 rounded-2xl text-slate-500 hover:text-slate-900 hover:border-indigo-600 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-sm whitespace-nowrap cursor-pointer"
              >
                {icons[item.icon]}
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
