import React, { useState } from "react";

const testimonials = [
  {
    id: "arul",
    author: "Dr. K. Arul",
    handle: "@karul_kgisl",
    role: "Director, KGiSL Educational Institutions",
    avatarColor: "bg-orange-500 text-white",
    initials: "KA",
    rating: 5,
    quote:
      "DEV HUB delivered our institution portals ahead of schedule. Clean code, pixel-perfect design, and zero revision headaches. Their team transformed our digital presence completely.",
  },
  {
    id: "meenakshi",
    author: "R. Meenakshi",
    handle: "@meenakshi_skillryt",
    role: "Head of Operations, SkillRyt",
    avatarColor: "bg-amber-500 text-white",
    initials: "RM",
    rating: 5,
    quote:
      "Completely transformed our skill training portal. Modern, fast, and exactly what our students needed. Highly recommended for any educational or enterprise web platform!",
  },
  {
    id: "venkatesh",
    author: "S. Venkatesh",
    handle: "@s_venkatesh_tsa",
    role: "Principal, TSA College",
    avatarColor: "bg-orange-600 text-white",
    initials: "SV",
    rating: 5,
    quote:
      "Professional, agile, and extremely reliable. Turned our complex institutional requirements into a seamless, high-performance web experience for students and staff.",
  },
  {
    id: "ashok",
    author: "Dr. Ashok Kumar",
    handle: "@ashok_kgcas",
    role: "Dean of Academics, KGCAS",
    avatarColor: "bg-purple-600 text-white",
    initials: "AK",
    rating: 5,
    quote:
      "The attention to detail and user experience is outstanding. Our portal bounce rates dropped significantly, and parents praised the intuitive navigation.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const activeTestimonial = testimonials[activeIndex];
  const nextTestimonial = testimonials[(activeIndex + 1) % testimonials.length];

  const handleTabChange = (index) => {
    if (index === activeIndex || isFlipping) return;
    setIsFlipping(true);

    setTimeout(() => {
      setActiveIndex(index);
    }, 220);

    setTimeout(() => {
      setIsFlipping(false);
    }, 480);
  };

  const handleNextPage = () => {
    const nextIdx = (activeIndex + 1) % testimonials.length;
    handleTabChange(nextIdx);
  };

  const handlePrevPage = () => {
    const prevIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
    handleTabChange(prevIdx);
  };

  return (
    <section id="testimonials" className="bg-white py-24 pb-80 px-6 md:px-10 overflow-hidden font-sans scroll-section relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with signature 2-tone Title format */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-orange-600 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-orange-50 border border-orange-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
            ✦ Client Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-gray-900">What Clients </span>
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto font-light">
            Real feedback from educational institutions, directors, and business partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Card Stack Flip Container */}
          <div className="lg:col-span-7 relative flex justify-center py-6">
            {/* Backdrop Card */}
            <div className="absolute inset-0 max-w-lg mx-auto bg-gray-100/80 rounded-3xl border border-gray-200 shadow-sm transform rotate-[-4deg] scale-[0.96] pointer-events-none transition-all duration-500" />

            <div className="absolute inset-0 max-w-lg mx-auto bg-gray-50/95 rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-md transform rotate-[3deg] scale-[0.98] pointer-events-none transition-all duration-500 overflow-hidden flex flex-col justify-between opacity-95">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${nextTestimonial.avatarColor} font-black text-base flex items-center justify-center shadow-sm shrink-0`}>
                    {nextTestimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">{nextTestimonial.author}</h4>
                    <p className="text-xs text-gray-400 font-mono">{nextTestimonial.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-3">
                  "{nextTestimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                  NEXT PAGE: {nextTestimonial.role}
                </span>
                <span className="text-amber-400 text-xs">{"★".repeat(nextTestimonial.rating)}</span>
              </div>
            </div>

            {/* Active Card */}
            <div
              className={`relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 origin-left ${
                isFlipping
                  ? "rotate-y-[-80deg] scale-95 opacity-10 shadow-none -translate-x-6"
                  : "rotate-y-0 scale-100 opacity-100 translate-x-0"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${activeTestimonial.avatarColor} font-black text-lg flex items-center justify-center shadow-md shrink-0`}>
                  {activeTestimonial.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      {activeTestimonial.author}
                    </h3>
                    <svg className="w-5 h-5 text-orange-500 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <p className="text-sm font-mono text-gray-400 mt-0.5">
                    {activeTestimonial.handle}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-sans font-normal min-h-[90px]">
                "{activeTestimonial.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    VERIFIED CLIENT
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {activeTestimonial.role}
                  </p>
                </div>

                <div className="flex gap-1 text-amber-400 text-sm">
                  {"★".repeat(activeTestimonial.rating)}
                </div>
              </div>

              {/* Pagination Controls */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={handlePrevPage}
                  disabled={isFlipping}
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-orange-600 bg-gray-100 hover:bg-orange-50 px-3.5 py-2 rounded-xl border border-gray-200 transition cursor-pointer disabled:opacity-50"
                >
                  <span>←</span>
                  <span>Prev Page</span>
                </button>

                <span className="text-xs font-mono font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-200/60">
                  Page {activeIndex + 1} of {testimonials.length}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={isFlipping}
                  className="flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-orange-600 px-4 py-2 rounded-xl shadow-md transition cursor-pointer disabled:opacity-50"
                >
                  <span>Next Page</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Side Sidebar Tabs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Testimonies
              </h3>
              <p className="text-gray-500 text-sm mt-1 font-sans">
                Endless happy clients
              </p>
            </div>

            <div className="space-y-3">
              {testimonials.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleTabChange(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border cursor-pointer ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-xl translate-x-1"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-center w-4 shrink-0">
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-gray-300" />
                      )}
                    </div>

                    <div className={`w-10 h-10 rounded-xl ${t.avatarColor} font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {t.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-gray-900"}`}>
                        {t.author}
                      </p>
                      <p className={`text-xs truncate ${isActive ? "text-slate-400" : "text-gray-500"}`}>
                        {t.role}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
