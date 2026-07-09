import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Popular Courses + Study Abroad Journey" Section
  - Background: same cream→gold diagonal gradient as ChooseYourGoal
  - Palette constants only — zero Tailwind color class dependency
  - GSAP ScrollTrigger animations
  - NO custom font-family
  ─────────────────────────────────────────────────────────
*/

/* ── Palette ── */
const CREAM = "#F0EBE4";
const GOLD  = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY  = "#0e1730";

/* ── Course data ── */
const courses = [
  {
    id: "business",
    label: "Business &\nManagement",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="24" height="16" rx="1.5" stroke={GOLD} strokeWidth="1.6" />
        <path d="M10 12V9a6 6 0 0112 0v3" stroke={GOLD} strokeWidth="1.6" />
        <line x1="16" y1="18" x2="16" y2="22" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="12" y1="20" x2="20" y2="20" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "engineering",
    label: "Engineering",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke={GOLD} strokeWidth="1.6" />
        <circle cx="16" cy="16" r="10" stroke={GOLD} strokeWidth="1.6" strokeDasharray="3 3" />
        <line x1="16" y1="4" x2="16" y2="8" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="4" y1="16" x2="8" y2="16" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="24" y1="16" x2="28" y2="16" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "it",
    label: "Information\nTechnology",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke={GOLD} strokeWidth="1.6" />
        <path d="M10 26h12" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 22v4" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 14l3-3 3 3 3-5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "health",
    label: "Health Sciences",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 27S5 20.5 5 12.5a7 7 0 0111-5.74A7 7 0 0127 12.5C27 20.5 16 27 16 27z" stroke={GOLD} strokeWidth="1.6" />
        <line x1="16" y1="10" x2="16" y2="16" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="13" y1="13" x2="19" y2="13" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "hospitality",
    label: "Hospitality &\nTourism",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V14" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 14c0-4 6-4 6-8" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="20" cy="18" r="6" stroke={GOLD} strokeWidth="1.6" />
        <line x1="20" y1="12" x2="20" y2="10" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="20" y1="24" x2="20" y2="26" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="14" y1="18" x2="12" y2="18" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="28" y1="18" x2="26" y2="18" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "data",
    label: "Data Science &\nAnalytics",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="1.5" stroke={GOLD} strokeWidth="1.6" />
        <rect x="18" y="4" width="10" height="10" rx="1.5" stroke={GOLD} strokeWidth="1.6" />
        <rect x="4" y="18" width="10" height="10" rx="1.5" stroke={GOLD} strokeWidth="1.6" />
        <path d="M18 23h10M23 18v10" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "design",
    label: "Design &\nMedia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26l4-4 12-12-4-4L6 18l-2 6 2-6z" stroke={GOLD} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M18 6l4 4" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="24" cy="8" r="3" stroke={GOLD} strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "others",
    label: "Others",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8"  cy="16" r="2.5" fill={GOLD} />
        <circle cx="16" cy="16" r="2.5" fill={GOLD} />
        <circle cx="24" cy="16" r="2.5" fill={GOLD} />
      </svg>
    ),
  },
];

/* ── Journey steps ── */
const steps = [
  {
    num: "01",
    title: "Career Counseling",
    desc: "We understand your goals and suggest the best study options.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="14" cy="12" r="5" stroke={GOLD} strokeWidth="1.6" />
        <path d="M6 28c0-4.4 3.6-8 8-8h1" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="26" cy="22" r="5" stroke={GOLD} strokeWidth="1.6" />
        <path d="M23 22l2 2 4-4" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Choose Country",
    desc: "We help you choose the right country and university.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke={GOLD} strokeWidth="1.6" />
        <path d="M6 18h24M18 6c-3 4-5 8-5 12s2 8 5 12M18 6c3 4 5 8 5 12s-2 8-5 12" stroke={GOLD} strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Application",
    desc: "Our experts assist you in complete application process.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="4" width="20" height="28" rx="2" stroke={GOLD} strokeWidth="1.6" />
        <line x1="13" y1="12" x2="23" y2="12" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="13" y1="17" x2="23" y2="17" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="13" y1="22" x2="19" y2="22" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 26l2 2 4-4" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Offer Letter",
    desc: "Get offer letter from your dream university.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke={GOLD} strokeWidth="1.6" />
        <path d="M12 18l4 4 8-8" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6v2M18 28v2M6 18H4M32 18h-2" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Visa Assistance",
    desc: "We guide you through visa filing and Interview.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="8" width="26" height="20" rx="2" stroke={GOLD} strokeWidth="1.6" />
        <line x1="5" y1="14" x2="31" y2="14" stroke={GOLD} strokeWidth="1.4" />
        <circle cx="12" cy="22" r="2" stroke={GOLD} strokeWidth="1.4" />
        <line x1="18" y1="21" x2="26" y2="21" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18" y1="24" x2="23" y2="24" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Fly Abroad",
    desc: "Pack your bags and start your journey towards success.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 22l6-6 4 2 8-10-2 8 4 1-8 5-1 4-4-2-4 4-3-6z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="6" y1="28" x2="30" y2="28" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ── CourseCard — hover state via React ── */
const CourseCard: React.FC<{ c: typeof courses[0] }> = ({ c }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      key={c.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cj-card flex flex-col items-center gap-2.5 rounded-[10px] px-2 pb-[18px] pt-5 cursor-pointer transition-transform duration-200"
      style={{
        backgroundColor: "#ffffff",
        border: `1.5px solid ${hovered ? GOLD : "rgba(14,23,48,0.10)"}`,
        boxShadow: hovered
          ? "0 6px 20px rgba(224,191,148,0.25)"
          : "0 1px 6px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {c.icon}
      <span
        className="whitespace-pre-line text-center text-[11.5px] font-semibold leading-[1.4]"
        style={{ color: NAVY }}
      >
        {c.label}
      </span>
    </button>
  );
};

/* ── Main Component ── */
const CoursesAndJourney: React.FC = () => {
  const sec1Ref = useRef<HTMLElement>(null);
  const sec2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1 — courses
      const tl1 = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.65 },
        scrollTrigger: { trigger: sec1Ref.current, start: "top 78%", once: true },
      });
      tl1
        .fromTo(".cj-eyebrow-1", { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
        .fromTo(".cj-heading-1", { opacity: 0, y: 28 }, { opacity: 1, y: 0 }, "-=0.42")
        .fromTo(".cj-card",      { opacity: 0, y: 32 }, { opacity: 1, y: 0, stagger: 0.07 }, "-=0.38");

      // Section 2 — journey
      const tl2 = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.65 },
        scrollTrigger: { trigger: sec2Ref.current, start: "top 78%", once: true },
      });
      tl2
        .fromTo(".cj-eyebrow-2", { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
        .fromTo(".cj-heading-2", { opacity: 0, y: 28 }, { opacity: 1, y: 0 }, "-=0.42")
        .fromTo(".cj-step",      { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.38");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full"
      style={{
        // ✅ Same gradient as ChooseYourGoal
        background: `radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%), radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%), ${CREAM}`,
      }}
    >
      {/* ════════ SECTION 1: Popular Courses ════════ */}
      <section
        ref={sec1Ref}
        className="relative mx-auto max-w-[1200px] px-5 pt-12 pb-10 sm:px-10 sm:pt-16 sm:pb-14"
      >
        {/* nav arrows top-right */}
        <div className="absolute right-5 top-12 hidden gap-2 sm:right-10 sm:top-16 sm:flex">
          {["‹", "›"].map((ch) => (
            <button
              key={ch}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-[16px] transition-opacity hover:opacity-60"
              style={{
                border: `1px solid rgba(14,23,48,0.20)`,
                color: NAVY,
              }}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* Eyebrow */}
        <p
          className="cj-eyebrow-1 mb-2 text-center text-[11px] font-semibold uppercase tracking-[3px]"
          style={{ color: NAVY, opacity: 0.5 }}
        >
          Popular Courses
        </p>

        {/* Heading */}
        <h2
          className="cj-heading-1 mb-9 text-center text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.25]"
          style={{ color: NAVY }}
        >
          Choose From{" "}
          <span style={{ color: GOLD_TEXT }}>In-Demand Programs</span>
        </h2>

        {/* Cards row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {courses.map((c) => (
            <CourseCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      {/* ════════ SECTION 2: Study Abroad Journey ════════ */}
      <section
        ref={sec2Ref}
        className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:px-10 sm:pb-20 sm:pt-14"
      >
        {/* Eyebrow */}
        <p
          className="cj-eyebrow-2 mb-2 text-center text-[11px] font-semibold uppercase tracking-[3px]"
          style={{ color: NAVY, opacity: 0.5 }}
        >
          Study Abroad Journey
        </p>

        {/* Heading */}
        <h2
          className="cj-heading-2 mb-12 text-center text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.25]"
          style={{ color: NAVY }}
        >
          From Dream To{" "}
          <span style={{ color: GOLD_TEXT }}>Destination</span>
        </h2>

        {/* Steps row */}
        <div className="relative grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-6 lg:gap-y-0">
          {/* Connecting dashed line */}
          <div
            className="pointer-events-none absolute top-9 z-0 hidden lg:block"
            style={{
              left: "calc(100% / 12)",
              right: "calc(100% / 12)",
              height: "1px",
              borderTop: `2px dashed rgba(224,191,148,0.5)`,
            }}
          />

          {steps.map((s) => (
            <div
              key={s.num}
              className="cj-step relative z-10 flex flex-col items-center px-2 text-center"
            >
              {/* Circle icon */}
              <div
                className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#ffffff",
                  border: `1.5px solid rgba(224,191,148,0.5)`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                }}
              >
                {s.icon}
              </div>

              {/* Step number */}
              <p
                className="mb-1 text-[11px] font-bold tracking-[1px]"
                style={{ color: GOLD_TEXT }}
              >
                {s.num}
              </p>

              {/* Title */}
              <p
                className="mb-1.5 text-[13px] font-bold leading-[1.3]"
                style={{ color: NAVY }}
              >
                {s.title}
              </p>

              {/* Description */}
              <p
                className="m-0 text-[11px] leading-[1.55]"
                style={{ color: "rgba(14,23,48,0.55)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesAndJourney;