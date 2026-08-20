import { GraduationCap, Building2, BookOpen, Atom, ArrowRight } from "lucide-react";

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
    <section id="services" className="bg-white py-24 px-6 md:px-10 scroll-section relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with signature 2-tone Title format */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="inline-block text-orange-600 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-orange-50 border border-orange-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
              ✦ Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-lg">
              <span className="text-gray-900">What I Can </span>
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Build for You
              </span>
            </h2>
          </div>
          <p className="text-gray-600 text-base max-w-sm leading-relaxed font-light">
            End-to-end frontend solutions tailored for educational institutions, businesses, and digital platforms.
          </p>
        </div>

        {/* Cards Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="lg:col-span-4 bg-white border border-gray-200/90 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-5 shadow-sm">
                <Icon0 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s[0].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{s[0].description}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 font-mono">{s[0].price}</span>
              <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-8 bg-white border border-gray-200/90 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-5 shadow-sm">
                <Icon1 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s[1].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xl">{s[1].description}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 font-mono">{s[1].price}</span>
              <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-8 bg-white border border-gray-200/90 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-5 shadow-sm">
                <Icon2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s[2].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xl">{s[2].description}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 font-mono">{s[2].price}</span>
              <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-4 bg-white border border-gray-200/90 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-5 shadow-sm">
                <Icon3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s[3].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{s[3].description}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 font-mono">{s[3].price}</span>
              <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
