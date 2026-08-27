import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counterObj = { val: 0 };

      // Number counter animation
      gsap.to(counterObj, {
        val: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => setPercent(Math.floor(counterObj.val)),
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Split-curtain slide-up exit
          gsap.to(containerRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: "power3.inOut" },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#0B1120] text-[#F8FAFC] flex flex-col items-center justify-center font-sans select-none [clip-path:inset(0_0_0_0)]"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[#3B82F6]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-4 font-space">
        <h1
          ref={logoRef}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F8FAFC]"
        >
          DEV HUB
        </h1>

        <p
          ref={subtitleRef}
          className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#06B6D4] font-bold"
        >
          WEB DESIGNER & DEVELOPER
        </p>

        <div
          ref={lineRef}
          className="w-48 sm:w-64 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] rounded-full origin-center shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        />

        <div className="text-sm font-mono text-[#94A3B8] font-bold pt-2">
          {percent}%
        </div>
      </div>
    </div>
  );
}
