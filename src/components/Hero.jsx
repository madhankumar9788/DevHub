import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Animate hero left and right elements immediately on mount
    gsap.from('.hero-left', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.hero-right', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Animate other scroll sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="bg-white pt-28 pb-16 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Dynamic Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f6_1px,transparent_1px),linear-gradient(to_bottom,#eef2f6_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Floating Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-pulse duration-7000 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-300/15 rounded-full blur-3xl animate-pulse duration-10000 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Text */}
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-indigo-700 text-xs font-bold uppercase tracking-widest">
              Available for Freelance Work
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
            I Build <span className="text-indigo-600">Fast </span><br />
            <span className="text-indigo-600">Beautiful</span> Websites
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
            Freelance Frontend Developer helping colleges, institutes, and growing businesses launch professional, high-performance websites that convert visitors.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              onClick={(e) => scrollTo(e, "work")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-indigo-200 hover:scale-105"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="border-2 border-gray-200 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100">
            <div>
              <p className="text-3xl font-black text-gray-900">11+</p>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Live Sites</p>
            </div>
            <div>
              <p className="text-3xl font-black text-indigo-600">60+</p>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Pages Built</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">2+</p>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-black text-indigo-600">100%</p>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Responsive</p>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/5]">
            {/* Shadow Offset Card */}
            <div className="absolute inset-0 bg-indigo-100 rounded-3xl translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-indigo-200/60 rounded-3xl translate-x-2 translate-y-2" />

            {/* Main Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-white">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Freelance Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Open to Projects</p>
                      <p className="text-xs text-gray-400">Frontend Developer · React · Tailwind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

