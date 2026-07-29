import React from "react";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-slate-950 py-24 px-6 md:px-10 overflow-hidden font-sans scroll-section">
      {/* Subtle Dark Grid Pattern with Reduced Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span
              className="inline-block mb-3"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "14px",
                fontWeight: 600,
                color: "#2563EB",
                background: "#EFF6FF",
                padding: "8px 16px",
                borderRadius: "999px",
              }}
            >
              Portfolio
            </span>

            <h2
              className="text-4xl sm:text-5xl text-white tracking-tight"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Live Projects
            </h2>
          </div>

          <p
            className="text-slate-400 text-base sm:text-lg"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
              maxWidth: "680px",
            }}
          >
            Production websites developed for colleges, educational institutions,
            and business organizations.
          </p>
        </div>

        {/* Dark Theme Projects Grid with Clean Non-Glowing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const defaultImg = project.image || `https://picsum.photos/600/400?random=${index + 1}`;
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between block cursor-pointer"
              >
                {/* Official Logo Header Container */}
                {project.logo && (
                  <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-center h-20 shadow-xs">
                    <img
                      src={project.logo}
                      alt={`${project.name} Logo`}
                      className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Clean Image Preview (No Glow, No Hover Image Border) */}
                <div className="relative overflow-hidden h-64 bg-slate-950">
                  <img
                    src={defaultImg}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50" />
                </div>

                {/* Content & Description */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4 bg-slate-900">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-slate-800 text-indigo-300 border border-slate-700/60 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}