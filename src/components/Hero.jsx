"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

/**
 * GridBanner Component
 * Renders a row of grid cells with specific highlighted tiles.
 */
function GridBanner({ highlights = [], borderBottom = true, borderTop = false }) {
  return (
    <div
      className={`w-full grid grid-cols-12 md:grid-cols-24 bg-black h-12 sm:h-14 md:h-16 divide-x divide-neutral-900 ${borderBottom ? "border-b border-neutral-900" : ""
        } ${borderTop ? "border-t border-neutral-900" : ""}`}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const isHighlighted = highlights.includes(i);
        return (
          <div
            key={i}
            className={`h-full relative overflow-hidden transition-all duration-500 ${isHighlighted ? "bg-neutral-900/90" : "bg-black"
              }`}
          >
            {isHighlighted && (
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-700/60 via-neutral-800/40 to-neutral-900/60" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full flex flex-col bg-black overflow-hidden font-sans">

      {/* Top 2-Layer Grid Banner */}
      <GridBanner highlights={[3, 17]} borderBottom={true} />
      <GridBanner highlights={[3, 17]} borderBottom={true} />

      {/* Hero Central Section */}
      <section
        id="hero"
        style={{ colorScheme: "dark" }}
        className="relative bg-black pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center min-h-[60vh]"
      >
        {/* 24-Column Vertical Grid Lines matching GridBanner */}
        <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12 md:grid-cols-24 divide-x divide-neutral-900/60 pointer-events-none z-0" />

        {/* Subtle Horizontal grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4rem] pointer-events-none" />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Core Content */}
        <div className="max-w-5xl w-full mx-auto text-center z-20 hero-content space-y-6 sm:space-y-8">

          {/* Headline Stack matching exactly the reference design */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="text-white block font-extrabold">
              Website Development Services
            </div>

            {/* Row 2 */}
            <div className="block mt-1 sm:mt-2">
              <span className="text-[#00FF41] font-extrabold">Build a </span>

              {/* Inline Fast Badge */}
              <span className="inline-flex items-center mx-1.5 sm:mx-2 align-middle">
                <img
                  loading="eager"
                  src="/images/fast.png"
                  alt="Fast"
                  className="h-[1.1em] sm:h-[1.15em] w-auto object-contain shrink-0 drop-shadow-md"
                />
              </span>

              {/* Inline Scalable Badge */}
              <span className="inline-flex items-center mx-1.5 sm:mx-2 align-middle">
                <img
                  loading="eager"
                  src="/images/scalable.png"
                  alt="Scalable"
                  className="h-[1.1em] sm:h-[1.15em] w-auto object-contain shrink-0 drop-shadow-md"
                />
              </span>
            </div>

            {/* Row 3 */}
            <div className="block mt-1 sm:mt-2 text-white font-extrabold">
              User-First Website
            </div>
          </h1>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed px-4">
            As an expert website development company, KG Agile builds websites and web applications that convert visitors into customers.
          </p>

          {/* Action CTA Button */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="bg-white hover:bg-neutral-100 text-[#1a6ff8] px-7 py-3 sm:px-8 sm:py-3.5 rounded-md font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-white/10 inline-block"
            >
              Get Your Free Consultation
            </a>
          </div>

        </div>

      </section>

      {/* Bottom 2-Layer Grid Banner */}
      <GridBanner highlights={[3, 4, 11, 14, 18, 19]} borderTop={true} borderBottom={true} />
      {/* <GridBanner highlights={[4, 11, 18]} borderBottom={true} /> */}

    </div>
  );
}


