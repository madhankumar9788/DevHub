import { GraduationCap, Building2, BookOpen, Atom } from "lucide-react";

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

  return (
    <section id="services" className="bg-white py-24 px-6 md:px-10 scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight max-w-lg">
              What I Can Build for You
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            End-to-end frontend solutions tailored for educational institutions, businesses, and digital platforms.
          </p>
        </div>

        {/* Cards Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: College & Institute Websites (bg-amber-50/50, col-span-4) */}
          <div className="lg:col-span-4 bg-[#fbf9f4] border border-[#ebdcb9]/40 rounded-3xl p-8 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-white/80 backdrop-blur-md border border-[#ebdcb9]/30 rounded-xl flex items-center justify-center text-amber-600 mb-5 shadow-sm">
                <Icon0 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s[0].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s[0].description}
              </p>
            </div>

            {/* Admission Mockup Panel */}
            <div className="mt-8 bg-white border border-[#ebdcb9]/30 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-gray-50 pb-2.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Admission Portal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-7 bg-gray-50 rounded border border-gray-100 flex items-center px-2.5 text-[9px] text-gray-400 font-bold uppercase tracking-wider">Select Department</div>
                <div className="h-7 bg-gray-50 rounded border border-gray-100 flex items-center px-2.5 text-[9px] text-gray-400 font-bold uppercase tracking-wider">Upload Marksheet</div>
              </div>
              <button className="w-full py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl font-bold text-[9px] uppercase tracking-wider transition-colors">
                Submit Application
              </button>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-black text-indigo-600">{s[0].price}</span>
            </div>
          </div>

          {/* Column 2: Stacked Middle Cards (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Service 2 Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-grow group shadow-sm">
              <div>
                <div className="w-12 h-12 bg-indigo-50/50 backdrop-blur-md border border-indigo-100/50 rounded-xl flex items-center justify-center text-indigo-600 mb-5 shadow-sm">
                  <Icon1 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {s[1].title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s[1].description}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-black text-indigo-600">{s[1].price}</span>
              </div>
            </div>

            {/* Service 3 Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-grow group shadow-sm">
              <div>
                <div className="w-12 h-12 bg-indigo-50/50 backdrop-blur-md border border-indigo-100/50 rounded-xl flex items-center justify-center text-indigo-600 mb-5 shadow-sm">
                  <Icon2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {s[2].title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s[2].description}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-black text-indigo-600">{s[2].price}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Custom React Apps (bg-white/50, col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 bg-indigo-50/50 backdrop-blur-md border border-indigo-100/50 rounded-xl flex items-center justify-center text-indigo-600 mb-5 shadow-sm">
                <Icon3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s[3].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s[3].description}
              </p>
            </div>

            {/* React Speed Dashboard Panel */}
            <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-inner space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200/50 pb-2.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Vitals Dashboard</span>
                <span className="bg-emerald-50 text-emerald-700 text-[8px] font-bold px-1.5 py-0.5 rounded">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xl font-black text-gray-900">99<span className="text-xs font-bold text-gray-400"> / 100</span></div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Performance Score</div>
                </div>
                {/* Circular indicator simulating loading gauge */}
                <div className="w-10 h-10 rounded-full border-4 border-indigo-600 border-r-transparent flex items-center justify-center font-bold text-[9px] text-indigo-600">
                  99%
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200/40 flex justify-between text-[9px] font-bold text-gray-400 uppercase">
                <span>Speed Index: 0.4s</span>
                <span>TTFB: 12ms</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-black text-indigo-600">{s[3].price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
