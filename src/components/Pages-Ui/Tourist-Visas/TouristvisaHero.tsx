import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Tourist Visa" Hero Section
  - Left: eyebrow + 2-line heading + divider + desc + 2 buttons + 3 stats
  - Right: traveller image masked into a curved ARC with a gold stroke,
           dotted airplane path (top) + faint approved stamp (bottom-right)
  - Palette constants only — CREAM #F0EBE4 | GOLD #E0BF94 | NAVY #0e1730
  - GSAP ScrollTrigger animations
  - NO custom font-family
  ─────────────────────────────────────────────────────────
*/

/* ── Palette ── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";

/* ── Image constant — swap path as needed ── */
const IMG_TRAVELLER =
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1100&q=80"; // traveller w/ backpack (Santorini vibe)

/* ──────────────── Small icons ──────────────── */

const GlobeMini = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.7-4-9s1.5-6.4 4-9z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 1z" />
    <path d="M18 18v1a2 2 0 0 1-2 2h-3" />
  </svg>
);

/* ── Stat icons (gold) ── */
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="8.5" cy="9" r="3" />
    <path d="M3 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="10" r="2.4" />
    <path d="M15.5 14.5c2.7.1 4.5 1.9 5 4.5" />
  </svg>
);

const stats = [
  { icon: <ClockIcon />, title: "Fast Processing", sub: "Quick & Efficient" },
  { icon: <ShieldIcon />, title: "High Success Rate", sub: "Trusted Expertise" },
  { icon: <PeopleIcon />, title: "End to End Support", sub: "We're with you always" },
];

/* ──────────────── Right curved visual ──────────────── */

const RightVisual: React.FC = () => (
  <svg viewBox="0 0 700 560" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
    <defs>
      {/* Arc clip — curved left edge, fills to the right */}
      <clipPath id="tv-arc">
        <path d="M185 0 C 55 150, 55 410, 215 560 L 700 560 L 700 0 Z" />
      </clipPath>
    </defs>

    {/* Traveller image clipped into the arc */}
    <image
      href={IMG_TRAVELLER}
      x="0"
      y="0"
      width="700"
      height="560"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#tv-arc)"
    />

    {/* Gold arc stroke (double line) */}
    <path d="M185 0 C 55 150, 55 410, 215 560" fill="none" stroke={GOLD} strokeWidth="3.5" />
    <path d="M205 0 C 78 150, 78 405, 233 560" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />

    {/* Dotted airplane path + plane */}
    <path
      d="M55 215 C 130 100, 250 95, 300 155 C 332 193, 288 220, 263 178 C 244 145, 300 102, 388 96"
      fill="none"
      stroke="rgba(14,23,48,0.45)"
      strokeWidth="2"
      strokeDasharray="2 8"
      strokeLinecap="round"
    />
    <g transform="translate(388 96) rotate(38)">
      <path
        d="M0 -10 L 3 -2 L 11 0 L 3 2 L 2 4 L 6 9 L 3 9 L -1 5 L -4 9 L -6 9 L -4 3 L -10 0 L -3 -2 Z"
        fill={NAVY}
      />
    </g>

    {/* Faint approved stamp (bottom-right) */}
    <g transform="translate(575 455) rotate(-12)" fill="none" stroke={GOLD} opacity="0.28">
      <circle cx="0" cy="0" r="52" strokeWidth="2" />
      <circle cx="0" cy="0" r="44" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M0 -14 L4 -4 L15 -4 L6 3 L9 14 L0 7 L-9 14 L-6 3 L-15 -4 L-4 -4 Z" strokeWidth="1.2" />
      <text x="0" y="30" textAnchor="middle" fontSize="9" fill={GOLD} stroke="none" letterSpacing="1.5">
        APPROVED
      </text>
      <text x="0" y="-24" textAnchor="middle" fontSize="8" fill={GOLD} stroke="none" letterSpacing="1.5">
        VISA GUY
      </text>
    </g>
  </svg>
);

/* ──────────────────────────── Hero Component ──────────────────────────── */

const TouristVisaHero: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: { trigger: scopeRef.current, start: "top 80%", once: true },
      });

      tl.fromTo(".tv-visual", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1 })
        .fromTo(".tv-eyebrow", { opacity: 0, y: 22 }, { opacity: 1, y: 0 }, "-=0.75")
        .fromTo(".tv-h1", { opacity: 0, y: 26 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(".tv-h2", { opacity: 0, y: 26 }, { opacity: 1, y: 0 }, "-=0.55")
        .fromTo(".tv-divider", { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.5 }, "-=0.45")
        .fromTo(".tv-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.4")
        .fromTo(".tv-btn", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.12 }, "-=0.4")
        .fromTo(".tv-stat", { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.35");
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      {/* Right curved visual — absolute on desktop */}
      <div className="tv-visual absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <RightVisual />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-24 pb-12 sm:px-10 sm:pt-28 sm:pb-14 lg:px-14 lg:py-24">
        {/* ── Left content ── */}
        <div className="lg:w-[52%] lg:pr-10">
          {/* Eyebrow */}
          <div className="tv-eyebrow mb-5 flex items-center gap-2">
            <GlobeMini />
            <span className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD_TEXT }}>
              Tourist Visa
            </span>
          </div>

          {/* Heading */}
          <h1 className="m-0 font-bold leading-[1.05] tracking-[-0.5px]" style={{ fontSize: "clamp(34px,4.6vw,56px)" }}>
            <span className="tv-h1 block" style={{ color: NAVY }}>
              Explore The World.
            </span>
            <span className="tv-h2 block" style={{ color: GOLD_TEXT }}>
              Create Memories.
            </span>
          </h1>

          {/* Gold divider */}
          <div className="tv-divider mt-6 h-[3px] w-16 origin-left rounded-full" style={{ backgroundColor: GOLD }} />

          {/* Description */}
          <p
            className="tv-desc mt-6 max-w-md text-[15px] leading-relaxed"
            style={{ color: "rgba(14,23,48,0.6)" }}
          >
            From dream destinations to unforgettable experiences, we make your travel
            simple, smooth and stress-free.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="tv-btn flex items-center gap-2 rounded-[10px] px-7 py-3.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${NAVY} 0%, #1b2c4d 100%)`,
                color: CREAM,
                boxShadow: "0 12px 26px -12px rgba(14,23,48,0.55)",
              }}
            >
              Explore Destinations
              <ArrowRight />
            </button>

            <button
              type="button"
              className="tv-btn flex items-center gap-2 rounded-[10px] px-7 py-3.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ border: `1.5px solid ${GOLD}`, color: GOLD_TEXT, backgroundColor: "transparent" }}
            >
              Talk To An Expert
              <HeadsetIcon />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((s) => (
              <div key={s.title} className="tv-stat flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ border: `1.5px solid ${GOLD}55` }}
                >
                  {s.icon}
                </span>
                <div>
                  <p className="m-0 text-[13.5px] font-bold leading-tight" style={{ color: NAVY }}>
                    {s.title}
                  </p>
                  <p className="m-0 text-[12px]" style={{ color: "rgba(14,23,48,0.5)" }}>
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile visual (below content) */}
        <div className="tv-visual mt-10 h-[300px] w-full overflow-hidden rounded-[20px] lg:hidden">
          <RightVisual />
        </div>
      </div>
    </section>
  );
};

export default TouristVisaHero;