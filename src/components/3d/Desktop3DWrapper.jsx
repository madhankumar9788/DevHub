import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Desktop3DCanvas from "./Desktop3DCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Desktop3DWrapper() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      const heroAnchor = document.getElementById("hero-desktop-anchor");
      const targetAnchor = document.getElementById("ready-to-build-cta");

      if (!heroAnchor || !targetAnchor) return;

      const updatePositions = () => {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
          gsap.set(wrapper, { clearProps: "all" });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            endTrigger: "#ready-to-build-cta",
            start: "top top",
            end: "bottom center",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.to(wrapper, {
          y: () => {
            const currentHero = heroAnchor.getBoundingClientRect();
            const currentTarget = targetAnchor.getBoundingClientRect();
            return currentTarget.top - currentHero.top;
          },
          x: () => {
            const currentHero = heroAnchor.getBoundingClientRect();
            const currentTarget = targetAnchor.getBoundingClientRect();
            return currentTarget.left - currentHero.left;
          },
          scale: 0.9,
          rotationY: 360,
          ease: "power2.inOut",
        });
      };

      updatePositions();
      ScrollTrigger.addEventListener("refresh", updatePositions);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full relative z-30 transition-transform duration-300 ease-out"
    >
      <Desktop3DCanvas />
    </div>
  );
}
