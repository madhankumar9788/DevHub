const testimonials = [
  {
    quote: "DEV HUB delivered our college site ahead of schedule. Clean code, pixel-perfect design, and zero revision headaches.",
    author: "Dr. K. Arul",
    role: "Director, KGiSL Education",
    initials: "KA",
    rating: 5,
  },
  {
    quote: "Completely transformed our skill training portal. Modern, fast, and exactly what our students needed. Highly recommended!",
    author: "R. Meenakshi",
    role: "Head of Operations, SkillRyt",
    initials: "RM",
    rating: 5,
  },
  {
    quote: "Professional, agile, and reliable. Turned our complex institutional requirements into a seamless user experience.",
    author: "S. Venkatesh",
    role: "Principal, TSA College",
    initials: "SV",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-amber-400 text-base">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white mb-60 py-24 px-6 md:px-10 scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Real feedback from educational leaders and business owners I've partnered with.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Stars count={t.rating} />

              <p className="text-gray-700 text-base leading-relaxed mt-5 flex-grow font-light italic">
                "{t.quote}"
              </p>

              <div className="mt-7 pt-6 border-t border-gray-200 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-indigo-700 font-black text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
