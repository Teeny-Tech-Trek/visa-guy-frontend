import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Why Study Abroad" Section
  - Background: SAME as previous — cream + gold radial washes (right side)
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #0e1730
  - Left: eyebrow + bold serif heading (2 lines)
  - Right: 4 clean white cards — designed GOLD line icons + title + desc
  - NO custom font-family (project universal + font-heading utility)
  ─────────────────────────────────────────────────────────
*/

/* ── Palette ── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";

/* ──────────────── Designed line icons (gold) ──────────────── */

// World-Class Education → graduation cap
const EducationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <path d="M2 9l10-4.5L22 9l-10 4.5L2 9z" />
    <path d="M6 11v4.2c0 1.2 2.7 2.3 6 2.3s6-1.1 6-2.3V11" />
    <path d="M22 9v4.5" />
  </svg>
);

// Global Exposure → globe
const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z" />
  </svg>
);

// Better Career Opportunities → briefcase + upward step
const CareerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
    <path d="M3 12.5h18" />
    <path d="M10 12.5v1.5h4v-1.5" />
  </svg>
);

// Personal Growth → sprout
const GrowthIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <path d="M12 21v-9" />
    <path d="M12 12c0-3.3-2.7-6-6.5-6C5.5 9.3 8.2 12 12 12z" />
    <path d="M12 13.5c0-2.6 2.2-4.8 5.5-4.8C17.5 11.3 15.3 13.5 12 13.5z" />
  </svg>
);

/* ── Data ── */
interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: FeatureCard[] = [
  {
    icon: <EducationIcon />,
    title: "World-Class Education",
    desc: "Access top-ranked universities and quality education.",
  },
  {
    icon: <GlobeIcon />,
    title: "Global Exposure",
    desc: "Experience diverse cultures and build global network.",
  },
  {
    icon: <CareerIcon />,
    title: "Better Career Opportunities",
    desc: "Enhance your skills and boost your global career prospects.",
  },
  {
    icon: <GrowthIcon />,
    title: "Personal Growth",
    desc: "Build confidence, independence and leadership skills.",
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

const WhyStudyAbroad: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.65 },
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.fromTo(".wsa-eyebrow", { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
        .fromTo(".wsa-heading", { opacity: 0, y: 28 }, { opacity: 1, y: 0 }, "-=0.42")
        .fromTo(
          ".wsa-card",
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, stagger: 0.11 },
          "-=0.4"
        );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="w-full overflow-hidden"
      style={{
        // ✅ SAME as previous — cream base + gold radial washes on the right
        background: `radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%), radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%), ${CREAM}`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-14 lg:px-12 lg:py-20">

        {/* ── Left: Text ── */}
        <div className="flex-shrink-0 lg:w-[330px] xl:w-[360px]">
          {/* Eyebrow — no divider line (image jaisa) */}
          <p
            className="wsa-eyebrow m-0 mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: GOLD_TEXT }}
          >
            Why Study Abroad
          </p>

          {/* Heading — 2 lines, serif (font-heading) */}
          <h2
            className="font-heading wsa-heading m-0 text-[2rem] font-bold leading-[1.12] tracking-[-0.3px] sm:text-[2.4rem] lg:text-[2.6rem]"
            style={{ color: NAVY }}
          >
            More Than A Degree,
            <br />
            <span style={{ color: GOLD_TEXT }}>It&rsquo;s A Life Experience</span>
          </h2>
        </div>

        {/* ── Right: 4 Feature Cards ── */}
        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="wsa-card group flex flex-col rounded-2xl bg-white px-5 py-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(35,31,32,0.05)",
                boxShadow: "0 6px 22px -12px rgba(35,31,32,0.18)",
              }}
            >
              {/* Designed gold line icon */}
              <div
                className="mb-4 flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color: GOLD }}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                className="m-0 mb-2 text-[15px] font-bold leading-snug"
                style={{ color: NAVY }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p
                className="m-0 text-[13px] leading-relaxed"
                style={{ color: "#5a6170" }}
              >
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudyAbroad;