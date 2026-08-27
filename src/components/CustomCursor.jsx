import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const badgeRef = useRef(null);
  const [badgeText, setBadgeText] = useState("");

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const badge = badgeRef.current;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // GSAP smooth lerp 0.15
      gsap.to(dot, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(ring, {
        x,
        y,
        duration: 0.25,
        ease: "power3.out",
      });

      if (badge) {
        gsap.to(badge, {
          x,
          y,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const onPointerOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isButton = target.closest("button, a, [role='button']");
      const isProject = target.closest(".project-card, [data-cursor='view']");
      const is3D = target.closest("canvas, [data-cursor='explore']");

      if (isProject) {
        setBadgeText("VIEW");
        gsap.to(ring, { scale: 2.4, backgroundColor: "rgba(6,182,212,0.9)", borderColor: "#06B6D4", opacity: 0.9, duration: 0.25 });
        gsap.to(badge, { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(1.7)" });
      } else if (is3D) {
        setBadgeText("EXPLORE");
        gsap.to(ring, { scale: 2.6, backgroundColor: "rgba(59,130,246,0.9)", borderColor: "#3B82F6", opacity: 0.9, duration: 0.25 });
        gsap.to(badge, { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(1.7)" });
      } else if (isButton) {
        setBadgeText("");
        gsap.to(ring, { scale: 1.8, backgroundColor: "transparent", borderColor: "#06B6D4", mixBlendMode: "difference", opacity: 0.9, duration: 0.25 });
        gsap.to(badge, { scale: 0, opacity: 0, duration: 0.2 });
      } else {
        setBadgeText("");
        gsap.to(ring, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(6,182,212,0.5)", mixBlendMode: "normal", opacity: 0.6, duration: 0.25 });
        gsap.to(badge, { scale: 0, opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onPointerOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onPointerOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      {/* Inner Blue Dot (#3B82F6) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#3B82F6] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      />

      {/* Outer Cyan Ring (#06B6D4) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-[#06B6D4]/60 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
      />

      {/* Glass Morph Badge ("VIEW" / "EXPLORE") */}
      <div
        ref={badgeRef}
        className="fixed top-0 left-0 bg-[#06B6D4] text-[#0B1120] text-[9px] font-mono font-extrabold px-2.5 py-0.5 rounded-full -translate-x-1/2 -translate-y-9 scale-0 opacity-0 shadow-lg tracking-widest uppercase pointer-events-none z-10"
      >
        {badgeText}
      </div>
    </div>
  );
}
