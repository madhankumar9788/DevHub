import React from "react";

export default function ThreeDCardStack({ size = "w-48 h-48" }) {
  return (
    <div className={`relative ${size} perspective-[1000px] flex items-center justify-center`}>
      <div className="absolute w-full h-full transform-style-3d animate-[stack-rotate_12s_ease-in-out_infinite] flex items-center justify-center">
        {/* Layer 1 - Top Card (Glassmorphic White/Indigo) */}
        <div className="absolute w-40 h-28 bg-white/20 border border-white/40 rounded-2xl backdrop-blur-[4px] shadow-[0_15px_35px_rgba(0,0,0,0.15)] card-stack-top flex flex-col p-4">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/50 mb-3 flex items-center justify-center text-sm font-bold text-white">
            ⚡
          </div>
          <div className="w-20 h-2.5 bg-indigo-200/80 rounded-full" />
          <div className="w-12 h-2 bg-indigo-200/50 rounded-full mt-2" />
        </div>

        {/* Layer 2 - Middle Card (Indigo tint) */}
        <div className="absolute w-40 h-28 bg-indigo-600/15 border border-indigo-500/30 rounded-2xl backdrop-blur-[4px] shadow-[0_10px_25px_rgba(99,102,241,0.2)] card-stack-middle flex flex-col p-4">
          <div className="w-8 h-8 rounded-xl bg-indigo-400/30 mb-3 flex items-center justify-center text-sm font-bold text-indigo-400">
            📊
          </div>
          <div className="w-24 h-2.5 bg-indigo-300/60 rounded-full" />
          <div className="w-16 h-2 bg-indigo-300/40 rounded-full mt-2" />
        </div>

        {/* Layer 3 - Bottom Card (Violet tint) */}
        <div className="absolute w-40 h-28 bg-violet-600/15 border border-violet-500/30 rounded-2xl backdrop-blur-[4px] shadow-[0_10px_20px_rgba(139,92,246,0.2)] card-stack-bottom flex flex-col p-4">
          <div className="w-8 h-8 rounded-xl bg-violet-400/30 mb-3 flex items-center justify-center text-sm font-bold text-violet-400">
            💻
          </div>
          <div className="w-16 h-2.5 bg-violet-300/60 rounded-full" />
          <div className="w-10 h-2 bg-violet-300/40 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
}
