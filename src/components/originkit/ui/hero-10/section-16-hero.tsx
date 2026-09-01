// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { GlowBackground } from "@/components/originkit/ui/hero-10/glow-background";
import { HeroContent } from "@/components/originkit/ui/hero-10/hero-content";
import featuredVideo from "@/assets/Featured_Live_Projects_Real_in.mp4";

export const Section16Hero = () => {
  const handleExploreAi = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSales = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Dev Hub Agile Featured Hero"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#0B1120] flex items-center justify-center pt-20 pb-16"
    >
      {/* FEATURED LIVE PROJECTS BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80 filter brightness-95 contrast-110 scale-105"
        >
          <source src={featuredVideo} type="video/mp4" />
        </video>
        
        {/* Multi-layer Dark Gradient Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/40 to-[#0B1120]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/85 via-transparent to-[#0B1120]/85 pointer-events-none" />
      </div>

      {/* Subtle Ambient Atmosphere Glow */}
      <GlowBackground />

      {/* Hero Content Container */}
      <div className="pointer-events-none relative z-10 mx-auto flex w-full flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="flex w-full flex-1 flex-col items-center justify-center pb-10 max-w-[420px] ipad:max-w-[760px] desktop-sm:max-w-[1000px] px-4">
          <HeroContent
            onExploreAi={handleExploreAi}
            onContactSales={handleContactSales}
          />
        </div>
      </div>
    </section>
  );
};
