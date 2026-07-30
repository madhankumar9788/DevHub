import React from "react";

export default function Logo({ light = false, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Emblem Box with Cyber Code Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0">
        <svg className="w-5 h-5 text-white fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
          DEV<span className="text-indigo-500">HUB</span>
        </span>
        <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-500 uppercase mt-0.5">
          AGILITY & CODE
        </span>
      </div>
    </div>
  );
}
