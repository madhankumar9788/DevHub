// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

/**
 * Top-of-screen Dark Space Glow — Blue, Cyan & Indigo (#3B82F6 → #06B6D4 → #818CF8)
 * Soft-blends into #0B1120 with NO green overlay.
 */
export const GlowBackground = () => {
  const curveMask =
    "radial-gradient(ellipse 130% 100% at 50% 0%, #000 0%, #000 42%, rgba(0,0,0,0.55) 62%, transparent 78%)";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Curved top wash — Blue to Cyan to Indigo */}
      <div
        className="absolute inset-x-0 top-0 h-[360px] desktop-sm:h-[420px]"
        style={{
          background:
            "linear-gradient(to bottom, #1E3A8A 0%, #0284C7 28%, #38BDF8 55%, #0B1120 100%)",
          opacity: 0.35,
          maskImage: curveMask,
          WebkitMaskImage: curveMask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      {/* Soft elliptical bloom — Deep Cyan & Blue */}
      <div
        className="absolute top-[-40px] left-1/2 h-[280px] w-[160%] max-w-none -translate-x-1/2 blur-[80px] desktop-sm:h-[340px] desktop-sm:blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse 85% 90% at 50% 0%, #3B82F6 0%, #06B6D4 32%, #818CF8 58%, transparent 76%)",
          opacity: 0.35,
        }}
      />

      {/* Deeper mid atmosphere — Dark Indigo */}
      <div className="absolute top-[180px] left-1/2 h-[298px] w-[587px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)] blur-[45px]" />
      <div className="absolute top-[260px] left-1/2 h-[294px] w-[1826px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_65%)] blur-[65px]" />
    </div>
  );
};
