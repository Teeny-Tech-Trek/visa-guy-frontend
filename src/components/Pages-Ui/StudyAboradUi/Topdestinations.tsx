import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Top Destinations" Section
  - Poora section EK laptop viewport (100vh) me fit hota hai
  - Background: NAVY (#0e1730) — dark section + decorative dotted corners
  - Cards: FULL-BLEED landmark image + bottom gradient + overlaid text
  - Palette constants only — zero Tailwind color class dependency
  - NO custom font-family (project ka universal + font-heading utility)
  ─────────────────────────────────────────────────────────
*/

/* ── Palette ── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";

/* ── Landmark images — baad me apne paths daal dena ── */
const IMG_CANADA = "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=700&q=80"; // Toronto / CN Tower
const IMG_UK = "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80";     // Big Ben
const IMG_AUS = "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=700&q=80";    // Sydney Opera House
const IMG_USA = "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?w=700&q=80";    // Statue of Liberty

/* ── Flags (rectangular) — flagcdn placeholder, baad me swap karna ── */
const FLAG_CA = "https://flagcdn.com/w40/ca.png";
const FLAG_UK = "https://flagcdn.com/w40/gb.png";
const FLAG_AU = "https://flagcdn.com/w40/au.png";
const FLAG_US = "https://flagcdn.com/w40/us.png";

/* ── Data ── */
interface Destination {
  id: string;
  image: string;
  flag: string;
  country: string;
  highlights: string[];
  cta: string;
  badge: string | null;
}

const destinations: Destination[] = [
  {
    id: "canada",
    image: IMG_CANADA,
    flag: FLAG_CA,
    country: "Canada",
    highlights: ["Quality Education", "Affordable Living"],
    cta: "Explore Canada",
    badge: null,
  },
  {
    id: "uk",
    image: IMG_UK,
    flag: FLAG_UK,
    country: "United Kingdom",
    highlights: ["World-Class Universities", "2 Years PSW"],
    cta: "Explore UK",
    badge: "HOT",
  },
  {
    id: "australia",
    image: IMG_AUS,
    flag: FLAG_AU,
    country: "Australia",
    highlights: ["Top Universities", "Post Study Work Visa"],
    cta: "Explore Australia",
    badge: null,
  },
  {
    id: "usa",
    image: IMG_USA,
    flag: FLAG_US,
    country: "USA",
    highlights: ["Global Leaders in Education", "Unlimited Opportunities"],
    cta: "Explore USA",
    badge: null,
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

const TopDestinations: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".td-eyebrow", { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
        .fromTo(".td-heading", { opacity: 0, y: 24 }, { opacity: 1, y: 0 }, "-=0.45")
        .fromTo(
          ".td-divider",
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          ".td-card",
          { opacity: 0, y: 44 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8 },
          "-=0.3"
        );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative flex min-h-96 w-full flex-col items-center justify-center overflow-hidden px-6 py-16 sm:px-10"
      style={{ backgroundColor: NAVY }}
    >
      {/* ── Decorative dotted corner — top-left ── */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-44 w-64"
        style={{
          backgroundImage: `radial-gradient(${GOLD}33 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(ellipse at top left, #000 10%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at top left, #000 10%, transparent 72%)",
        }}
      />
      {/* ── Decorative dotted corner — top-right ── */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-44 w-64"
        style={{
          backgroundImage: `radial-gradient(${GOLD}33 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(ellipse at top right, #000 10%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at top right, #000 10%, transparent 72%)",
        }}
      />
      {/* ── Soft center glow behind heading ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 8%, ${GOLD}10, transparent 70%)`,
        }}
      />

      {/* ── Content wrap ── */}
      <div className="relative z-10 flex w-full max-w-[1140px] flex-col items-center">
        {/* Eyebrow */}
        <p
          className="td-eyebrow m-0 mb-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: GOLD_TEXT }}
        >
          Top Destinations
        </p>

        {/* Heading */}
        <h2
          className="font-heading td-heading m-0 text-center text-[clamp(26px,3.4vw,42px)] font-bold leading-[1.1] tracking-[-0.3px]"
          style={{ color: CREAM }}
        >
          Where Do You Want To Study?
        </h2>

        {/* Gold divider */}
        <div
          className="td-divider mx-auto mt-4 mb-11 h-[3px] w-[46px] origin-center rounded-full"
          style={{ backgroundColor: GOLD }}
        />

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <DestCard key={d.id} dest={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────── Card sub-component ──────────────── */

const DestCard: React.FC<{ dest: Destination }> = ({ dest }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="td-card group relative h-[300px] cursor-pointer overflow-hidden rounded-[14px] transition-all duration-300 sm:h-[320px]"
      style={{
        border: `1px solid ${hovered ? `${GOLD}99` : `${GOLD}1f`}`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 18px 40px rgba(0,0,0,0.5)"
          : "0 6px 18px rgba(0,0,0,0.32)",
      }}
    >
      {/* Full-bleed landmark image */}
      <img
        src={dest.image}
        alt={dest.country}
        className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-[600ms]"
        style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
      />

      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${NAVY}f5 0%, ${NAVY}e0 22%, ${NAVY}40 52%, transparent 78%)`,
        }}
      />

      {/* HOT badge (top-right) */}
      {dest.badge && (
        <span
          className="absolute right-3 top-3 rounded-[4px] px-2 py-[3px] text-[9px] font-bold uppercase tracking-[1.5px]"
          style={{ backgroundColor: "#e0552e", color: "#fff" }}
        >
          {dest.badge}
        </span>
      )}

      {/* Overlaid content */}
      <div className="absolute inset-x-0 bottom-0 p-4 pb-[18px]">
        {/* Flag */}
        <img
          src={dest.flag}
          alt={`${dest.country} flag`}
          className="mb-2.5 h-[22px] w-[32px] select-none rounded-[3px] object-cover shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        />

        {/* Country */}
        <h3
          className="m-0 mb-2 text-[17px] font-bold leading-none tracking-[0.2px]"
          style={{ color: CREAM }}
        >
          {dest.country}
        </h3>

        {/* Highlights */}
        <div className="mb-3.5">
          {dest.highlights.map((h) => (
            <p
              key={h}
              className="m-0 mb-[3px] text-[11.5px] leading-[1.5]"
              style={{ color: "rgba(240,235,228,0.7)" }}
            >
              {h}
            </p>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-[12px] font-semibold tracking-[0.3px]"
          style={{ color: GOLD_TEXT }}
        >
          {dest.cta}
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopDestinations;