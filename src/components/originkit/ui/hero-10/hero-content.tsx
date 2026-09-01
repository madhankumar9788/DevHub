// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { TextArc } from "@/components/originkit/ui/hero-10/text-arc";

type HeroContentProps = {
  onExploreAi: () => void;
  onContactSales: () => void;
};

export const HeroContent = ({
  onExploreAi,
  onContactSales,
}: HeroContentProps) => {
  return (
    <div className="relative z-20 mx-auto flex w-full flex-col items-center text-center">
      {/* Rotating Text Arc Header */}
      <TextArc />

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* 1. Glowing Animated Dark Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 bg-[#0B1120]/95 border border-cyan-500/30 px-5 py-2 rounded-full text-xs font-mono tracking-wider text-cyan-400 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.25)] pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping" />
          <Sparkles className="w-4 h-4 text-[#38BDF8] animate-spin-slow" />
          <span className="uppercase font-bold tracking-widest text-[#38BDF8]">
            Web Designer & Systems Developer
          </span>
        </motion.div>

        {/* 2. Headline with 3D Gradient Text & Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-3 max-w-4xl"
        >
          <h1 className="font-space text-4xl sm:text-6xl ipad:text-7xl desktop-sm:text-[84px] font-black uppercase leading-[1.02] tracking-tight text-white drop-shadow-2xl">
            DEV HUB{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(56,189,248,0.6)]">
              AGILE
            </span>
          </h1>

          <p className="font-space text-slate-100 text-lg sm:text-2xl ipad:text-3xl font-bold tracking-tight max-w-2xl mx-auto">
            Architecting Institutional Systems & High-Impact Digital Experiences.
          </p>
        </motion.div>

        {/* 3. Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="w-full max-w-2xl font-sans text-sm sm:text-base ipad:text-lg leading-relaxed text-slate-300/90 max-w-xl mx-auto font-normal"
        >
          We implement high-performance React web applications, institutional portals, custom 3D web solutions, and scalable digital platforms—all built correctly.
        </motion.p>

        {/* 4. Dark Theme Dual Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="pointer-events-auto flex flex-wrap items-center justify-center gap-4 pt-4 font-space"
        >
          {/* Primary Button */}
          <button
            type="button"
            onClick={onExploreAi}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#818CF8] bg-[length:200%_auto] hover:bg-right text-white font-extrabold px-8 py-3.5 text-sm sm:text-base rounded-full cursor-pointer shadow-[0_0_35px_rgba(6,182,212,0.5)] border border-cyan-400/40 transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span>Book a Call</span>
            <PhoneCall className="w-4 h-4 fill-white transition-transform group-hover:rotate-12" />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={onContactSales}
            className="group inline-flex items-center justify-center gap-3 bg-[#0B1120]/95 hover:bg-[#1E293B] text-white font-bold px-8 py-3.5 text-sm sm:text-base rounded-full border border-[#334155] hover:border-cyan-400/50 backdrop-blur-2xl shadow-[0_0_25px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Our Work</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
