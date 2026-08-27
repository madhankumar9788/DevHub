import { useState, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Restricted to 5deg max tilt
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.2s ease-out" }}
        data-cursor="view"
        className="project-card bg-[#111827] rounded-3xl overflow-hidden border border-[#334155] hover:border-[#3B82F6] transition-all duration-300 group flex flex-col justify-between shadow-2xl cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <div>
          <div className="overflow-hidden relative h-56 bg-[#0B1120] [clip-path:inset(0_0_0_0)]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.classList.add("bg-gradient-to-br", "from-blue-950", "to-cyan-950");
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
            <span className="absolute top-4 right-4 bg-[#0B1120]/80 backdrop-blur-md border border-[#334155] text-[#06B6D4] text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category || "Web App"}
            </span>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors font-space">
              {project.name}
            </h3>
            <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed font-sans font-normal line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.tech.map((t, idx) => (
                <span
                  key={t}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className="text-xs bg-[#0B1120] text-[#06B6D4] border border-[#334155] px-3 py-1 rounded-full font-mono font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 pt-0 flex items-center justify-between font-mono text-xs">
          <span className="text-[#3B82F6] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>Explore Case Study</span>
            <span>→</span>
          </span>
          <span className="text-[#94A3B8]">2026</span>
        </div>
      </div>

      {/* Full Screen Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#0B1120]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div
            className="bg-[#111827] border border-[#334155] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative animate-scale-up text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#0B1120] border border-[#334155] text-[#94A3B8] hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-[#334155] relative">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
            </div>

            <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest bg-[#0B1120] border border-[#334155] px-3.5 py-1.5 rounded-full">
              {project.category || "Full-Stack Project"}
            </span>

            <h2 className="text-3xl font-bold text-[#F8FAFC] mt-4 mb-3 font-space">
              {project.name}
            </h2>

            <p className="text-[#94A3B8] text-base leading-relaxed mb-6 font-sans">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider mb-3">
                TECH STACK USED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-[#0B1120] border border-[#334155] text-[#F8FAFC] text-xs font-mono px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#334155] flex items-center justify-between">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 transition shadow-lg"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setModalOpen(false)}
                className="text-xs font-mono text-[#94A3B8] hover:text-white"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}