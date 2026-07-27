const services = [
  {
    emoji: "🎓",
    title: "College & Institute Websites",
    description: "Responsive institutional portals with admission forms, department pages, event galleries, and faculty listings.",
    price: "Starting ₹15,000",
  },
  {
    emoji: "🏢",
    title: "Business & Corporate Sites",
    description: "Modern, high-converting business landing pages and multi-page corporate sites built for brand credibility.",
    price: "Starting ₹12,000",
  },
  {
    emoji: "📚",
    title: "EdTech & Skill Platforms",
    description: "Interactive course listing portals, learning dashboards, and student-facing educational platforms.",
    price: "Starting ₹20,000",
  },
  {
    emoji: "⚛️",
    title: "Custom React Applications",
    description: "High-performance SPAs built with React 19, Tailwind, and modern state management patterns.",
    price: "Starting ₹18,000",
  },
];

export default function Services() {
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group flex flex-col bg-white"
            >
              <div className="text-3xl mb-5">{s.emoji}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {s.description}
              </p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <span className="text-sm font-black text-indigo-600">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
