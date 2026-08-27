import React from "react";

export default function Logo({ light = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Emblem Box with Code Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center text-white shadow-md shadow-[#3B82F6]/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
        <svg className="w-5 h-5 text-white fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none font-space">
        <span className={`text-xl font-bold tracking-tight ${light ? "text-[#F8FAFC]" : "text-white"}`}>
          DEV<span className="text-[#3B82F6]">HUB</span>
        </span>
        <span className="text-[9px] font-mono font-bold tracking-widest text-[#06B6D4] uppercase mt-0.5">
          AGILE & CODE
        </span>
      </div>
    </div>
  );
}
