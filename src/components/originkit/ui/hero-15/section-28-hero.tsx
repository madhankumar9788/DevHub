// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

"use client";

import { DotHalo } from "@/components/originkit/ui/hero-15/dot-halo";
import { GridColumns, GridRows } from "@/components/originkit/ui/hero-15/grid-pattern";
import { MarqueeBand } from "@/components/originkit/ui/hero-15/marquee-band";
import { StickerTile } from "@/components/originkit/ui/hero-15/sticker-tile";

/** Public asset under /sections/hero-15/assets */
function asset(file: string) {
  return `/originkit/hero-15/${file}`;
}

/**
 * Figma "Frame 2147262014" (1:1306) — Creatora mobile hero, 402 x 779.
 *
 * The whole screen is pinned to the background grid: the nav plate, the copy
 * plate and the creator tiles all start on a column rule, and the vertical
 * rhythm is the 73px row pitch. So the flow below is a single column laid out
 * with the grid's own numbers — nav 25 -> 96, dot band 97 -> 170, copy
 * 290 -> 514, tiles 546 -> 618 and 671 -> 743, then the 36px tail that closes
 * the frame at 779.
 *
 * Content padding is 18/17 rather than a flat 16 because Figma's plates span
 * 18 -> 385: they stop just inside the outer column rules so those two rules
 * stay visible through the nav and the headline block, which is what reads as
 * the frame's left and right edge.
 *
 * Only the decoration Figma itself places absolutely stays absolute — the grid,
 * the two #f5f5f5 washes, the dot halo, and the markers that sit *on* rule
 * intersections rather than in the flow.
 */

/** The upper tile pair straddles the band, one in grid column 1, one in 5. */
const TILE_ROW_TOP = [
  { id: "creator-1", src: asset("creator-1.png"), cell: "col-start-1" },
  {
    id: "creator-2",
    src: asset("creator-2.png"),
    cell: "col-start-5 ipad:justify-self-end",
  },
];

/**
 * Desktop column geometry. The 14 rules run 63 -> width-63 over a 13-cell band,
 * so a rule is `63 + k * cell` and a cell centre is half a cell past it. Every
 * desktop marker is expressed against a rule rather than a 1440-only pixel:
 * the stage is fluid between `desktop-sm` (1280) and its 1440 cap, and at 1300
 * a hard-coded 1175 would sit 60px past the rule it is meant to stand on.
 *
 * Only the desktop-only markers can be driven this way. Anything shared with
 * the smaller breakpoints has to stay a literal Tailwind class, since the
 * compiler only generates class names it can read in the source.
 */
const CELL = "(100% - 126px) / 13";
const rule = (k: number) => `calc(63px + ${k} * ${CELL})`;
const cellCentre = (k: number) => `calc(63px + ${k} * ${CELL} + (${CELL}) / 2)`;

/**
 * Desktop tiles (1:2268 / 1:2277 / 1:2280 / 1:2278 / 1:2279) — five, scattered
 * on rule intersections rather than sitting in a flow row, so they are placed
 * absolutely the way Figma has them. The first is Figma's "Post-it-1", drawn
 * there already peeled and tilted 1.96deg; here it is the same sticker as the
 * rest and peels on hover, so only the tilt carries over.
 *
 * The two left-hand tiles peel at 300 rather than the default 240, so the flap
 * lifts away from the frame edge instead of over it.
 *
 * All five hang off a rule intersection, top-left on the rule. Figma floats the
 * first one 11px above its row line, but that reads as a misplaced tile rather
 * than a deliberate float once the peel is live, so it sits on the line with
 * the rest and keeps only the tilt.
 */
const DESKTOP_TILES = [
  {
    id: "d1",
    src: asset("creator-4.png"),
    col: 1,
    top: 236,
    tilt: true,
    curl: 300,
  },
  { id: "d2", src: asset("creator-5.png"), col: 11, top: 236 },
  { id: "d3", src: asset("creator-1.png"), col: 2, top: 538, curl: 300 },
  { id: "d4", src: asset("creator-2.png"), col: 10, top: 538 },
  { id: "d5", src: asset("creator-3.png"), col: 6, top: 741 },
];

/**
 * Desktop diamonds (1:2225-1:2238, 1:2258-1:2267, 1:2366-1:2368) — 8px markers
 * centred on rule intersections, so every value here is a rule minus 4. Columns
 * sit on the 101 pitch at 63/164/265/366 and 1174/1275/1376; rows on the same
 * pitch from 33. They cluster at the two outer corners of the grid and leave
 * the middle clear for the copy.
 */
const DESKTOP_DIAMONDS = [
  ...[29, 130, 231, 332, 433, 534, 635].map((t) => [1, t]),
  ...[231, 332, 433, 534, 635].map((t) => [2, t]),
  ...[231, 332, 433, 534, 635].map((t) => [11, t]),
  ...[29, 130, 231, 332, 433, 534, 635].map((t) => [12, t]),
  [3, 332],
  [0, 130],
  [13, 130],
] as [number, number][];

/**
 * Desktop dots (1:2207-1:2215, 1:2239-1:2246) — 6px markers on cell *centres*,
 * not on the rules. Four columns by four row bands, framing the copy plate on
 * both sides. The band directly under the nav gets its own full run in the flow
 * below; this block is the four bands beneath it.
 */
const DESKTOP_DOT_COLS = [1, 2, 10, 11];
const DESKTOP_DOT_Y = [282.5, 383.5, 484.5, 585.5];

/** Desktop nav links (1:2199-1:2202). */
const NAV_LINKS = [
  { label: "Discover", href: "#discover" },
  { label: "Creators", href: "#creators" },
  { label: "Community", href: "#community" },
  { label: "Stories", href: "#stories" },
] as const;

/** Nav-box corners — 8px diamonds centred on the four rule intersections. */
const NAV_CORNERS = [
  { id: "tl", className: "top-[19.5px] left-[12.5px]" },
  { id: "tr", className: "top-[19.5px] right-[12.5px]" },
  { id: "bl", className: "top-[92.5px] left-[12.5px]" },
  { id: "br", className: "top-[92.5px] right-[12.5px]" },
];

export const Section28Hero = () => (
  <main className="flex min-h-dvh w-full flex-col bg-[#0B1120] text-[#F8FAFC]">
    {/* The row rules bleed the full viewport, matching Figma's 1440-wide row
        frame, so they always reach both screen edges. Everything else lives in
        the phone stage — capped at 430 (the widest phone), or 744 from `ipad`
        up, which is the tablet frame. Capping is what keeps the headline and
        sub on Figma's line breaks instead of unwrapping on a wide window. */}
    <section className="relative w-full overflow-hidden bg-[#0B1120]">
      <GridRows />

      <div className="relative mx-auto w-full max-w-[430px] overflow-hidden pb-9 ipad:max-w-[744px] desktop-sm:max-w-[1440px] desktop-sm:pb-[213px]">
        <GridColumns />

        {/* Figma "Ellipse 46834" (1:1329) — a blurred #0B1120 disc that dissolves
          the grid under the tile row so the dot halo has a clean field. */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-[448px] left-1/2 z-[1] h-[494px] w-[190.8%] -translate-x-1/2 rounded-[50%] bg-[#0B1120] blur-[25px] ipad:top-[810px] ipad:h-[914px] desktop-sm:top-[667px] desktop-sm:h-[242px] desktop-sm:w-[115.21%]"
        />

        {/* Figma "Rectangle 1430106931" (1:1330) — the plate that blanks the grid
          behind the headline: rows 169 -> 534 on mobile, 295 -> 821 on tablet. */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-[171px] right-[17px] left-[18px] z-[2] h-[363px] bg-[#0B1120] ipad:top-[298px] ipad:right-[58px] ipad:left-[53px] ipad:h-[523px] desktop-sm:top-[237px] desktop-sm:right-[calc(63px_+_3_*_(100%_-_126px)_/_13_+_1px)] desktop-sm:left-[calc(63px_+_3_*_(100%_-_126px)_/_13_+_1px)] desktop-sm:h-[449px]"
        />

        <MarqueeBand />

        <DotHalo />

        <div className="relative z-10 flex flex-col pt-[25px] pr-[17px] pl-[18px] ipad:pt-[43px] ipad:pr-[57px] ipad:pl-[53px] desktop-sm:pt-[34px] desktop-sm:pr-[calc(63px_+_(100%_-_126px)_/_13_+_1px)] desktop-sm:pl-[calc(63px_+_(100%_-_126px)_/_13_+_1px)]">
          {/* Figma "Nav" (1:1423) — opaque dark plate */}
          <nav className="flex h-[71px] w-full items-center justify-between bg-[#111827]/90 border border-[#334155] rounded-2xl p-4 shadow-xl backdrop-blur-md ipad:h-[125px] ipad:p-[30px] desktop-sm:h-[100px] desktop-sm:px-[30px] desktop-sm:pt-[30px] desktop-sm:pb-[28px]">
            <div className="flex items-center gap-2 desktop-sm:w-[299px] desktop-sm:py-[5px]">
              <img
                src={asset("logo.svg")}
                alt=""
                aria-hidden
                className="block h-[24.32px] w-[20.85px] max-w-none"
              />
              <span className="text-[20px] leading-[1.1] font-semibold tracking-[-0.6px] text-[#F8FAFC]">
                DEV HUB
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden font-tight text-[17px] leading-[25.5px] tracking-[-0.34px] text-[#94A3B8] desktop-sm:flex desktop-sm:items-center desktop-sm:gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap transition-colors duration-200 ease-out hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-end desktop-sm:w-[299px]">
              <button
                type="button"
                aria-label="Open menu"
                className="block size-6 cursor-pointer transition-opacity duration-200 ease-out ipad:size-8 desktop-sm:hidden [@media(hover:hover)]:hover:opacity-70 text-white"
              >
                <img
                  src={asset("menu.svg")}
                  alt=""
                  className="block size-full max-w-none invert"
                />
              </button>

              <a
                href="#contact"
                className="hidden cursor-pointer items-center justify-center rounded-[36px] border border-[#334155] bg-[#0B1120] px-[23px] py-[11px] transition-colors duration-200 ease-out desktop-sm:flex hover:bg-[#1E293B]"
              >
                <span className="text-[15px] leading-[18px] font-medium tracking-[-0.6px] whitespace-nowrap text-[#F8FAFC]">
                  Book a Call
                </span>
              </a>
            </div>
          </nav>

          {/* Glowing Grid Dots */}
          <div
            aria-hidden
            className="mt-px grid h-[73px] w-full grid-cols-5 ipad:mt-0 ipad:h-[127px] desktop-sm:hidden"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={`dot-${i}`}
                className="flex items-center justify-center"
              >
                <span className="block size-1.5 rounded-full bg-[#38BDF8] opacity-75 ipad:size-2" />
              </span>
            ))}
          </div>

          <div
            aria-hidden
            className="hidden h-[101px] desktop-sm:grid desktop-sm:grid-cols-11"
          >
            {Array.from({ length: 11 }, (_, i) => (
              <span
                key={`ddot-${i}`}
                className="flex items-center justify-center"
              >
                <span className="block size-1.5 rounded-full bg-[#38BDF8] opacity-75" />
              </span>
            ))}
          </div>

          {/* Headline & Description */}
          <div className="mt-[120px] flex w-full flex-col items-center text-center text-[#F8FAFC] ipad:mt-[182.59px] ipad:w-[498px] ipad:self-center desktop-sm:mt-[140px] desktop-sm:w-[637px]">
            <h1 className="w-full font-instrument-serif text-[48px] leading-[1.1] tracking-[-1.44px] text-[#F8FAFC] ipad:w-[446px] ipad:text-[65px] ipad:leading-[81.9px] ipad:tracking-[-1.95px] desktop-sm:w-[637px] desktop-sm:text-[74px] desktop-sm:leading-[81px] desktop-sm:tracking-[-2.22px]">
              DEV HUB AGILE — Where Innovation Meets Design.
            </h1>
            <p className="mt-2 w-full text-[16px] leading-[1.4] tracking-[-0.32px] text-[#94A3B8] ipad:mt-[20.32px] ipad:font-tight ipad:text-[18px] ipad:leading-[32.39px] ipad:tracking-[-0.36px] desktop-sm:mt-4 desktop-sm:w-[501px] desktop-sm:text-[17px] desktop-sm:leading-[25.5px] desktop-sm:tracking-[-0.34px] max-w-[300x] mx-auto">
              We implement high-performance React web applications, institutional portals, and custom web solutions correctly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex items-start justify-center gap-6 ipad:mt-[40.65px] desktop-sm:mt-8">
              <a
                href="#contact"
                className="flex cursor-pointer items-center justify-center rounded-[36px] border border-solid border-[#3B82F6] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-[23px] py-[11px] shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-transform duration-200 ease-out hover:scale-105"
              >
                <span className="text-[15px] leading-[18px] font-medium tracking-[-0.6px] whitespace-nowrap text-white">
                  Book a Call
                </span>
              </a>

              <a
                href="#work"
                className="flex cursor-pointer items-center justify-center rounded-[36px] border border-solid border-[#334155] bg-[#111827] px-[23px] py-[11px] transition-colors duration-200 ease-out hover:bg-[#1E293B]"
              >
                <span className="text-[15px] leading-[18px] font-medium tracking-[-0.6px] whitespace-nowrap text-[#F8FAFC]">
                  Our Work
                </span>
              </a>
            </div>
          </div>

          {/* Creator tiles — Figma 1:1452 / 1:1453 / 1:1454, one grid cell each
            in columns 1, 5 and 3. Peelable stickers rather than flat crops, so
            nothing clips here — the curl and its shadow ride outside the cell. */}
          <div className="mt-8 grid w-full grid-cols-5 ipad:mt-[41.44px] desktop-sm:hidden">
            {TILE_ROW_TOP.map(({ id, src, cell }) => (
              <StickerTile key={id} src={src} className={cell} />
            ))}
          </div>

          <div className="mt-[53px] grid w-full grid-cols-5 ipad:mt-[62px] desktop-sm:hidden">
            <StickerTile
              src={asset("creator-3.png")}
              className="col-start-3 ipad:justify-self-center"
            />
          </div>
        </div>

        {/* Desktop tiles sit outside the flow entirely — see DESKTOP_TILES.
          z-30 goes on each tile, not the wrapper: the wrapper is a static
          block so z-index is ignored there, and making it relative would
          re-anchor every tile to it. Above the wash (z-1) so the bottom tile
          does not vanish into it, and above the marker layer (z-20) so the
          cell-centre dots stop showing through the photos — Figma paints the
          tiles after every dot and diamond too. */}
        <div className="hidden desktop-sm:block">
          {DESKTOP_TILES.map(({ id, src, col, top, tilt, curl }) => (
            <div
              key={id}
              style={{ left: rule(col), top }}
              className={`absolute z-30 w-[101px] ${tilt ? "rotate-[1.96deg]" : ""}`}
            >
              <StickerTile src={src} curlRotation={curl} />
            </div>
          ))}
        </div>

        {/* Rule-intersection markers — Figma "corners" (1:1429) and
          "Polygon 28-31" (1:1437-1440). They mark points on the grid rather
          than occupying flow, so they stay absolute like Figma has them.

          Tablet (1:979 / 1:960) keeps only the badges, at 42px on the third
          row rule; it drops the four nav-corner diamonds entirely. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
          {NAV_CORNERS.map(({ id, className }) => (
            <img
              key={id}
              src={asset("diamond.svg")}
              alt=""
              className={`absolute block size-2 max-w-none ipad:hidden ${className}`}
            />
          ))}

          <img
            src={asset("corner-badge.svg")}
            alt=""
            className="absolute top-[153.5px] left-[0.5px] block size-8 max-w-none ipad:top-[276px] ipad:left-[32px] ipad:size-[42px] desktop-sm:top-[215px] desktop-sm:left-[calc(63px_+_3_*_(100%_-_126px)_/_13_-_21px)]"
          />
          <img
            src={asset("corner-badge.svg")}
            alt=""
            className="absolute top-[153.5px] right-[0.5px] block size-8 max-w-none ipad:top-[276px] ipad:right-[35px] ipad:size-[42px] desktop-sm:top-[215px] desktop-sm:right-[calc(63px_+_3_*_(100%_-_126px)_/_13_-_21px)]"
          />

          {DESKTOP_DIAMONDS.map(([col, top]) => (
            <img
              key={`dd-${col}-${top}`}
              src={asset("diamond.svg")}
              alt=""
              style={{ left: `calc(${rule(col)} - 4px)`, top }}
              className="absolute hidden size-2 max-w-none desktop-sm:block"
            />
          ))}

          {DESKTOP_DOT_Y.map((top) =>
            DESKTOP_DOT_COLS.map((col) => (
              <span
                key={`dpt-${col}-${top}`}
                style={{ left: `calc(${cellCentre(col)} - 3px)`, top }}
                className="absolute hidden size-1.5 rounded-full bg-[#d9d9d9] desktop-sm:block"
              />
            )),
          )}
        </div>
      </div>
    </section>
  </main>
);
