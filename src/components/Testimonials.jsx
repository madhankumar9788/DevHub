import React, { useState } from "react";

const testimonials = [
  {
    id: "arul",
    author: "Dr. K. Arul",
    handle: "@karul_kgisl",
    role: "Director, KGiSL Educational Institutions",
    avatarColor: "bg-indigo-600 text-white",
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
    avatarColor: "bg-purple-600 text-white",
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
    avatarColor: "bg-emerald-600 text-white",
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
    avatarColor: "bg-blue-600 text-white",
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

    // Smooth page content transition at midpoint
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
    <section id="testimonials" className="bg-white py-24 pb-80 px-6 md:px-10 overflow-hidden font-sans scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Header - Matching Exact Typography Specs of Previous Sections */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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
            Client Reviews
          </span>

          <h2
            className="text-3xl sm:text-4xl text-[#0F172A]"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            What Clients Say
          </h2>

          <p
            className="mt-3 text-[#64748B] mx-auto"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.8,
              maxWidth: "680px",
            }}
          >
            Real feedback from educational leaders and business owners I've partnered with.
          </p>
        </div>

        {/* 2-Column Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Stacked Testimonial Card Display with Real Underneath Page Content */}
          <div className="lg:col-span-7 relative flex justify-center py-6">
            
            {/* Background Stacked Card Layer 2 (Bottom layer) */}
            <div className="absolute inset-0 max-w-lg mx-auto bg-slate-100/80 rounded-3xl border border-slate-200 shadow-sm transform rotate-[-4deg] scale-[0.96] pointer-events-none transition-all duration-500" />
            
            {/* Background Stacked Card Layer 1 (Displays actual Next Testimonial Page content underneath!) */}
            <div className="absolute inset-0 max-w-lg mx-auto bg-slate-50/95 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md transform rotate-[3deg] scale-[0.98] pointer-events-none transition-all duration-500 overflow-hidden flex flex-col justify-between opacity-95">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${nextTestimonial.avatarColor} font-black text-base flex items-center justify-center shadow-sm shrink-0`}>
                    {nextTestimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{nextTestimonial.author}</h4>
                    <p className="text-xs text-slate-400 font-mono">{nextTestimonial.handle}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic line-clamp-3">
                  "{nextTestimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase">
                  NEXT PAGE: {nextTestimonial.role}
                </span>
                <span className="text-amber-400 text-xs">{"★".repeat(nextTestimonial.rating)}</span>
              </div>
            </div>

            {/* ACTIVE FRONT TESTIMONIAL CARD (Top layer with Paperclip & Animated Page Turn) */}
            <div
              className={`relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500 origin-left ${
                isFlipping
                  ? "rotate-y-[-80deg] scale-95 opacity-10 shadow-none -translate-x-6"
                  : "rotate-y-0 scale-100 opacity-100 translate-x-0"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Paperclip Icon Clipped to Top Right Edge */}
              <div className="absolute -top-4 right-8 z-30 pointer-events-none drop-shadow-md">
                <svg className="w-10 h-12 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
              </div>

              {/* Author Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${activeTestimonial.avatarColor} font-black text-lg flex items-center justify-center shadow-md shrink-0`}>
                  {activeTestimonial.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {activeTestimonial.author}
                    </h3>
                    {/* Blue Verified Badge */}
                    <svg className="w-5 h-5 text-blue-500 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <p className="text-sm font-mono text-slate-400 mt-0.5">
                    {activeTestimonial.handle}
                  </p>
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans font-normal min-h-[90px]">
                "{activeTestimonial.quote}"
              </p>

              {/* Footer Role Info */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                    VERIFIED CLIENT
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {activeTestimonial.role}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 text-amber-400 text-sm">
                  {"★".repeat(activeTestimonial.rating)}
                </div>
              </div>

              {/* Next Page / Prev Page Book Controls Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handlePrevPage}
                  disabled={isFlipping}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-3.5 py-2 rounded-xl border border-slate-200/80 transition cursor-pointer disabled:opacity-50"
                >
                  <span>←</span>
                  <span>Prev Page</span>
                </button>

                <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60">
                  Page {activeIndex + 1} of {testimonials.length}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={isFlipping}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-white bg-slate-900 hover:bg-indigo-600 px-4 py-2 rounded-xl shadow-md transition cursor-pointer disabled:opacity-50"
                >
                  <span>Next Page</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Client Tabs List */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Testimonies
              </h3>
              <p className="text-slate-400 text-sm mt-1 font-sans">
                Endless happy clients
              </p>
            </div>

            {/* Vertical Tab Item Buttons */}
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
                        : "bg-slate-50/80 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    {/* Active Blue Indicator Dot */}
                    <div className="flex items-center justify-center w-4 shrink-0">
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>

                    {/* Avatar Circle */}
                    <div className={`w-10 h-10 rounded-xl ${t.avatarColor} font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {t.initials}
                    </div>

                    {/* Client Name & Role */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                        {t.author}
                      </p>
                      <p className={`text-xs truncate ${isActive ? "text-slate-400" : "text-slate-500"}`}>
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
