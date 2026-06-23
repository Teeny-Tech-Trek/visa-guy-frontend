import React from "react";
import { Reveal, revealProps } from "../../common/Reveal";
import { motion } from "framer-motion";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Why Choose Us" Section
  - Background: same cream->gold gradient (gold right side)
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #184068 | dark #231F20
  - Left: eyebrow + 2-tone heading + desc + button + image
  - Right: Others vs Visa Guy comparison card + stats bar
  - SIDE_IMAGE — random (baad me path change karna)
  - NO custom font-family — project ka universal font hi use hoga
  ─────────────────────────────────────────────────────────
*/

// 👇 Left bottom image (passport/boarding pass wali) — baad me change karna
const SIDE_IMAGE =
  "/WhyChooseUs-Image.webp";

/* ──────────────── Palette ──────────────── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const NAVY = "#184068";
const DARK = "#231F20";

// gold gradient (center icon circles)
const GOLD_RADIAL =
  "radial-gradient(circle at 35% 30%, #f0d9b0 0%, #E0BF94 55%, #c9a368 100%)";

/* ──────────────── Center row icons ──────────────── */

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" strokeLinecap="round" />
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 3h8l4 4v14H6z" strokeLinejoin="round" />
    <path d="M14 3v4h4" strokeLinejoin="round" />
    <path d="M8.5 12h7M8.5 15h7M8.5 18h4" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeadsetIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1z" />
    <path d="M18 18v1a2 2 0 0 1-2 2h-3" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5-4-1.2-7-5-7-9.5V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────── Small status / misc icons ──────────────── */

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="9" r="5" />
    <path d="M8 13l-2 8 6-3 6 3-2-8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7l.7 1.5 1.6.2-1.2 1.1.3 1.6L12 10.7l-1.4.7.3-1.6L9.7 8.7l1.6-.2L12 7z" fill="currentColor" stroke="none" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14.5c2.6.2 4.4 1.8 5 4.5" strokeLinecap="round" />
  </svg>
);

/* ──────────────── Data ──────────────── */

interface Row {
  icon: React.ReactNode;
  others: string;
  visaguy: string;
}

const rows: Row[] = [
  {
    icon: <PersonIcon />,
    others: "One-size-fits-all solutions",
    visaguy: "Personalized guidance based on your profile",
  },
  {
    icon: <DocIcon />,
    others: "Unclear information and hidden steps",
    visaguy: "Transparent process with clear updates",
  },
  {
    icon: <ClockIcon />,
    others: "Delayed responses and long wait times",
    visaguy: "Quick turnaround and on-time updates",
  },
  {
    icon: <HeadsetIcon />,
    others: "Limited support before & after visa",
    visaguy: "Dedicated support throughout your journey",
  },
  {
    icon: <ShieldIcon />,
    others: "Uncertain outcomes and low success rate",
    visaguy: "Proven strategies with high success rate",
  },
];

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <MedalIcon />, value: "7+", label: "Years of\nExperience" },
  { icon: <PinIcon />, value: "2", label: "Offices in\nJammu & Mohali" },
  { icon: <UsersIcon />, value: "1000+", label: "Successful\nConsultations" },
  { icon: <HeadsetIcon className="h-7 w-7" />, value: "24/7", label: "Support Across\nNorth India" },
];

/* ──────────────────────────── Component ──────────────────────────── */

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        background: `
          radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%),
          ${CREAM}
        `,
      }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-16">
        {/* ───────── Left column ───────── */}
        <div>
          {/* Eyebrow */}
          <Reveal direction="down" delay={0}>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.25em]" style={{ color: GOLD }}>
                WHY CHOOSE US
              </span>
              <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>
          </Reveal>

          {/* Heading — 2-tone */}
          <Reveal direction="left" delay={0.08}>
            <h2 className="font-heading text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              <span style={{ color: NAVY }}>Why Choose</span>
              <br />
              <span style={{ color: GOLD }}>Visa Guy</span>
            </h2>
          </Reveal>

          {/* Divider */}
          <Reveal direction="left" delay={0.16}>
            <span className="mt-5 block h-px w-12" style={{ backgroundColor: GOLD }} />
          </Reveal>

          {/* Description */}
          <Reveal direction="left" delay={0.2}>
            <p className="mt-6 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: "#4a5160" }}>
              We go beyond paperwork. Our commitment, expertise and personalized
              support make your immigration journey smooth and successful.
            </p>
          </Reveal>

          {/* Button */}
          <Reveal direction="up" delay={0.28}>
            <button
              type="button"
              className="mt-8 flex items-center gap-4 rounded-full py-2 pl-7 pr-2 transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: NAVY }}
            >
              <span className="text-sm font-bold tracking-wide" style={{ color: CREAM }}>
                LET&rsquo;S GET STARTED
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                <ArrowIcon />
              </span>
            </button>
          </Reveal>

          {/* Image (random for now) */}
          <Reveal direction="up" delay={0.36}>
            <div className="mt-8 flex justify-center lg:ml-48 lg:mt-0 lg:justify-start">
              <img
                src={SIDE_IMAGE}
                alt=""
                aria-hidden="true"
                className="w-full max-w-[300px] select-none object-contain sm:max-w-[380px]"
              />
            </div>
          </Reveal>
        </div>

        {/* ───────── Right column ───────── */}
        <div className="flex flex-col gap-6">
          {/* Comparison card */}
          <Reveal direction="right" delay={0.1} className="relative rounded-3xl bg-white/55 p-5 shadow-[0_18px_50px_-24px_rgba(35,31,32,0.35)] sm:p-8">
            {/* Headers */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <p className="text-center text-sm font-bold tracking-[0.2em]" style={{ color: "#9aa0ab" }}>
                OTHERS
              </p>
              <span className="w-14" />
              <p className="text-center text-sm font-bold tracking-[0.2em]" style={{ color: NAVY }}>
                VISA GUY
              </p>
            </div>

            {/* Center vertical divider */}
            <span
              className="pointer-events-none absolute bottom-8 left-1/2 top-20 -translate-x-1/2"
              style={{ width: 1, backgroundColor: "rgba(35,31,32,0.12)" }}
              aria-hidden="true"
            />

            {/* Rows */}
            <div className="mt-2">
              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  {...revealProps("up", Math.min(i * 0.08, 0.4))}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 py-5 sm:gap-4"
                  style={
                    i < rows.length - 1
                      ? { borderBottom: "1px solid rgba(35,31,32,0.08)" }
                      : undefined
                  }
                >
                  {/* Others (left) */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(35,31,32,0.06)", color: "#b89b6e" }}
                    >
                      <XIcon />
                    </span>
                    <span className="text-xs leading-snug sm:text-sm" style={{ color: "#6b7280" }}>
                      {row.others}
                    </span>
                  </div>

                  {/* Center gold icon */}
                  <span
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-md sm:h-14 sm:w-14"
                    style={{ background: GOLD_RADIAL, color: DARK }}
                  >
                    {row.icon}
                  </span>

                  {/* Visa Guy (right) */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(224,191,148,0.25)", color: "#b89b6e" }}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-xs font-medium leading-snug sm:text-sm" style={{ color: NAVY }}>
                      {row.visaguy}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Stats bar */}
          {/* <div className="rounded-3xl bg-white/45 p-6 shadow-[0_18px_50px_-28px_rgba(35,31,32,0.35)] sm:p-8">
            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0 sm:divide-x" style={{ borderColor: "rgba(35,31,32,0.1)" }}>
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center px-2 text-center" style={{ borderColor: "rgba(35,31,32,0.1)" }}>
                  <span style={{ color: GOLD }}>{stat.icon}</span>
                  <p className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: NAVY }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-xs leading-snug sm:text-sm" style={{ color: "#5a6170" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;