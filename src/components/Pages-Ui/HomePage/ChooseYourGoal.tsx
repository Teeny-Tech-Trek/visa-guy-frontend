import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Choose Your Goal" Section
  - Poora section EK laptop viewport (100vh) me fit hota hai — extra scroll nahi
  - Background: #F0EBE4 (cream)
  - Palette:  cream #F0EBE4 | gold #E0BF94 | navy #184068 | dark #231F20
  - Card icons + right hero = IMAGES (abhi random, baad me path change karna)
  - NO custom font-family — project ka universal font hi use hoga
  ─────────────────────────────────────────────────────────
*/

// 👇 Right side hero image (globe/passport/suitcase wali) — baad me change karna
const GOAL_IMAGE =
  "/ChooseYourGoal-Assets/Globe-Image.webp"; // abhi random image, baad me path change karna

// 👇 4 cards ke icon IMAGES — abhi random hain, baad me apne paths daal dena
const CARD_IMAGES = {
  study:
    "/ChooseYourGoal-Assets/Study-Image.webp",
  pr:
    "/ChooseYourGoal-Assets/Home-Image.webp",
  travel:
    "/ChooseYourGoal-Assets/Plane-Image.webp",      
  ielts:
    "/ChooseYourGoal-Assets/IELTS-Image.webp",
};

/* ──────────────── Palette ──────────────── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const NAVY = "#184068";
const DARK = "#231F20";

/* ──────────────── Arrow + Stat icons ──────────────── */

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5 7.5 22l4.5-2.5L16.5 22 15 14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6.5 12.9 8.3l2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3L12 6.5z" fill="currentColor" stroke="none" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1z" />
    <path d="M18 18v1a2 2 0 0 1-2 2h-3" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14.5c2.6.2 4.4 1.8 5 4.5" strokeLinecap="round" />
  </svg>
);

/* ──────────────── Data ──────────────── */

interface GoalCard {
  img: string;
  title: React.ReactNode;
  desc: string;
}

const goals: GoalCard[] = [
  {
    img: CARD_IMAGES.study,
    title: (
      <>
        I Want To
        <br />
        Study Abroad
      </>
    ),
    desc: "Get guidance for study visas and admissions to top universities.",
  },
  {
    img: CARD_IMAGES.pr,
    title: (
      <>
        I Want
        <br />
        Permanent Residency
      </>
    ),
    desc: "Move abroad permanently with the right PR visa options.",
  },
  {
    img: CARD_IMAGES.travel,
    title: (
      <>
        I Want To
        <br />
        Travel Abroad
      </>
    ),
    desc: "Explore the world with our tourist visa assistance.",
  },
  {
    img: CARD_IMAGES.ielts,
    title: (
      <>
        I Need IELTS /
        <br />
        PTE Preparation
      </>
    ),
    desc: "Prepare with expert trainers and achieve your desired scores.",
  },
];

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <MedalIcon />, value: "7+", label: "Years Experience" },
  { icon: <PinIcon />, value: "Jammu & Mohali", label: "Offices" },
  { icon: <HeadsetIcon />, value: "Digital Assistance", label: "Across North India" },
  { icon: <UsersIcon />, value: "1000+", label: "Happy Clients" },
];

/* ──────────────────────────── Component ──────────────────────────── */

const ChooseYourGoal: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Jab section scroll hoke screen par aata hai tab fade-in ──
      // text content + right image + 4 cards, sab baari-baari fade hote hain.
      // fromTo use kar rahe hain taaki StrictMode double-invoke par koi
      // element opacity:0 par na atak jaaye.
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 75%",
          once: true, // sirf pehli baar screen par aane par chale
        },
      });

      tl.fromTo(".goal-eyebrow", { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .fromTo(".goal-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.45")
        .fromTo(".goal-desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(
          ".goal-image",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          ".goal-card",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.12 },
          "-=0.5"
        );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="flex min-h-screen w-full flex-col overflow-hidden"
      style={{
        // dono colors ka soft mix — cream (#F0EBE4) se gold (#E0BF94) tak diagonal blend
        background: `linear-gradient(135deg, ${CREAM} 0%, ${CREAM} 45%, ${GOLD} 100%)`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center gap-6 px-4 py-8 sm:gap-5 sm:px-8 sm:py-5 lg:px-12 lg:py-6">
        {/* ───────── Top: Left text + Right image ───────── */}
        <div className="grid flex-1 items-center gap-6 lg:grid-cols-2">
          {/* Left text */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="goal-eyebrow mb-3 flex items-center gap-3">
              <span
                className="text-[11px] font-semibold tracking-[0.25em]"
                style={{ color: GOLD }}
              >
                CHOOSE YOUR GOAL
              </span>
              <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>

            {/* Heading */}
            <h2
              className="font-heading goal-heading text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ color: NAVY }}
            >
              What&rsquo;s your next step abroad?
            </h2>

            {/* Description */}
            <p
              className="goal-desc mt-4 max-w-md text-sm leading-relaxed lg:text-base"
              style={{ color: "#4a5160" }}
            >
              Choose your goal and let us guide you with the right path to turn
              your dreams into realities.
            </p>
          </div>

          {/* Right hero image (random for now) — height viewport ke hisaab se cap */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={GOAL_IMAGE}
              alt=""
              aria-hidden="true"
              className="goal-image max-h-[40vh] w-full max-w-[860px] select-none object-contain sm:max-h-[58vh]"
            />
          </div>
        </div>

        {/* ───────── 4 Goal Cards ───────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, i) => (
            <div
              key={i}
              className="goal-card flex flex-col items-center rounded-2xl bg-white/70 px-4 py-5 text-center shadow-[0_10px_28px_-14px_rgba(35,31,32,0.28)] backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              {/* Icon IMAGE */}
              <div className="mb-3 flex h-20 w-20 items-center justify-center overflow-hidden sm:h-24 sm:w-24">
                <img
                  src={goal.img}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full select-none object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold leading-snug lg:text-base" style={{ color: NAVY }}>
                {goal.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed lg:text-[13px]" style={{ color: "#5a6170" }}>
                {goal.desc}
              </p>

              {/* Arrow button */}
              <button
                type="button"
                aria-label="Learn more"
                className="mt-4 flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>

        {/* ───────── Bottom Stats Bar ───────── */}
        {/* <div
          className="grid grid-cols-2 divide-y rounded-2xl sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
          style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.08)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-4 py-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                {stat.icon}
              </span>
              <div>
                <p className="text-sm font-bold lg:text-base" style={{ color: GOLD }}>
                  {stat.value}
                </p>
                <p className="text-xs text-white/85 lg:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ChooseYourGoal;