import React from "react";

export default function ThreeDCube({ size = "w-32 h-32" }) {
  return (
    <div className={`relative ${size} perspective-[1000px] flex items-center justify-center`}>
      <div className="absolute w-full h-full transform-style-3d animate-[cube-spin_12s_linear_infinite]">
        {/* Front */}
        <div className="absolute inset-0 bg-indigo-500/10 border-2 border-indigo-500/40 rounded-xl backdrop-blur-[2px] cube-face-front flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <div className="w-4 h-4 rounded-full bg-indigo-500/30" />
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-violet-500/10 border-2 border-violet-500/40 rounded-xl backdrop-blur-[2px] cube-face-back flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          <div className="w-4 h-4 rounded-full bg-violet-500/30" />
        </div>
        {/* Left */}
        <div className="absolute inset-0 bg-fuchsia-500/10 border-2 border-fuchsia-500/40 rounded-xl backdrop-blur-[2px] cube-face-left flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.2)]">
          <div className="w-4 h-4 rounded-full bg-fuchsia-500/30" />
        </div>
        {/* Right */}
        <div className="absolute inset-0 bg-blue-500/10 border-2 border-blue-500/40 rounded-xl backdrop-blur-[2px] cube-face-right flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <div className="w-4 h-4 rounded-full bg-blue-500/30" />
        </div>
        {/* Top */}
        <div className="absolute inset-0 bg-pink-500/10 border-2 border-pink-500/40 rounded-xl backdrop-blur-[2px] cube-face-top flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.2)]">
          <div className="w-4 h-4 rounded-full bg-pink-500/30" />
        </div>
        {/* Bottom */}
        <div className="absolute inset-0 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-xl backdrop-blur-[2px] cube-face-bottom flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <div className="w-4 h-4 rounded-full bg-cyan-500/30" />
        </div>
      </div>
    </div>
  );
}
