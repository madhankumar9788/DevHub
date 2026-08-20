import React from "react";
import { projects } from "../data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#070510] py-24 px-6 md:px-10 overflow-hidden font-sans scroll-section border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with signature 2-tone Title format */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="inline-block text-orange-400 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-orange-950/60 border border-orange-500/30 px-3.5 py-1.5 rounded-full shadow-md">
              ✦ Portfolio
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Live Projects
              </span>
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg font-light">
            Production websites developed for colleges, educational institutions, and business organizations.
          </p>
        </div>

        {/* Dark Theme Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const defaultImg = project.image || `https://picsum.photos/600/400?random=${index + 1}`;

            return (
              <div
                key={project.id || index}
                className="bg-[#0e0a1f]/90 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Project Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={defaultImg}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a1f] via-transparent to-transparent opacity-80" />
                  
                  {project.category && (
                    <span className="absolute top-4 left-4 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2 font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                    <span className="text-xs font-mono font-semibold text-orange-300">
                      {project.tags ? project.tags.slice(0, 2).join(" • ") : "React • Responsive"}
                    </span>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}