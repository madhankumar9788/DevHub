import { GraduationCap, Building2, BookOpen, Atom, ArrowRight } from "lucide-react";
import BorderGlow from "./BorderGlow";

const services = [
  {
    icon: GraduationCap,
    title: "College & Institute Websites",
    description: "Responsive institutional portals with admission forms, department pages, event galleries, and faculty listings.",
    price: "Starting ₹15,000",
  },
  {
    icon: Building2,
    title: "Business & Corporate Sites",
    description: "Modern, high-converting business landing pages and multi-page corporate sites built for brand credibility.",
    price: "Starting ₹12,000",
  },
  {
    icon: BookOpen,
    title: "EdTech & Skill Platforms",
    description: "Interactive course listing portals, learning dashboards, and student-facing educational platforms.",
    price: "Starting ₹20,000",
  },
  {
    icon: Atom,
    title: "Custom React Applications",
    description: "High-performance SPAs built with React 19, Tailwind, and modern state management patterns.",
    price: "Starting ₹18,000",
  },
];

export default function Services() {
  const s = services;
  const Icon0 = s[0].icon;
  const Icon1 = s[1].icon;
  const Icon2 = s[2].icon;
  const Icon3 = s[3].icon;

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-slate-50 text-slate-900 py-24 px-6 sm:px-10 lg:px-12 scroll-section relative overflow-hidden border-t border-slate-200 font-sans">
      {/* Light Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 font-space">
          <div className="space-y-3">
            <span className="inline-block text-[#3B82F6] text-xs font-mono font-bold uppercase tracking-[0.2em] bg-white border border-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
              ✦ Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-lg text-slate-900">
              <span>What I Can </span>
              <span className="text-[#3B82F6]">
                Build for You
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-sm leading-relaxed font-sans font-normal">
            End-to-end frontend solutions tailored for educational institutions, businesses, and digital platforms.
          </p>
        </div>

        {/* Cards Asymmetric Layout with BorderGlow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="lg:col-span-4 h-full">
            <BorderGlow borderRadius={24} backgroundColor="#ffffff" colors={['#3B82F6', '#06B6D4', '#60A5FA']} className="h-full">
              <div className="p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl flex items-center justify-center text-[#3B82F6] mb-5 shadow-sm">
                    <Icon0 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">{s[0].title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal">{s[0].description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3B82F6] font-mono">{s[0].price}</span>
                  <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-8 h-full">
            <BorderGlow borderRadius={24} backgroundColor="#ffffff" colors={['#3B82F6', '#06B6D4', '#60A5FA']} className="h-full">
              <div className="p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl flex items-center justify-center text-[#3B82F6] mb-5 shadow-sm">
                    <Icon1 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">{s[1].title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal max-w-xl">{s[1].description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3B82F6] font-mono">{s[1].price}</span>
                  <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-8 h-full">
            <BorderGlow borderRadius={24} backgroundColor="#ffffff" colors={['#3B82F6', '#06B6D4', '#60A5FA']} className="h-full">
              <div className="p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl flex items-center justify-center text-[#3B82F6] mb-5 shadow-sm">
                    <Icon2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">{s[2].title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal max-w-xl">{s[2].description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3B82F6] font-mono">{s[2].price}</span>
                  <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-4 h-full">
            <BorderGlow borderRadius={24} backgroundColor="#ffffff" colors={['#3B82F6', '#06B6D4', '#60A5FA']} className="h-full">
              <div className="p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl flex items-center justify-center text-[#3B82F6] mb-5 shadow-sm">
                    <Icon3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">{s[3].title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal">{s[3].description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3B82F6] font-mono">{s[3].price}</span>
                  <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
