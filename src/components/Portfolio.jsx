import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#0B1120] py-24 px-6 sm:px-10 lg:px-12 overflow-hidden font-sans scroll-section border-t border-[#334155]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-space">
          <span className="inline-block text-[#06B6D4] text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#111827] border border-[#334155] px-3.5 py-1.5 rounded-full shadow-md">
            ✦ Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-[#F8FAFC]">Featured </span>
            <span className="text-[#3B82F6]">
              Live Projects
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed font-sans font-normal">
            Real institutional portals, educational platforms, and business applications built for client growth.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id || idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}