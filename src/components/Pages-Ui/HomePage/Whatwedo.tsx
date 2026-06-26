import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal, revealProps } from "../../common/Reveal";
import { motion } from "framer-motion";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "What We Do" Section
  - Background: same cream->gold gradient (gold right side)
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #184068 | dark #231F20
  - Left: eyebrow + 2-tone heading + desc + dark expertise card
  - Center: CENTER_IMAGE (random — baad me path change karna)
  - Right: 5 numbered chevron cards + curvy gold connector line
  - NO custom font-family — project ka universal font hi use hoga
  ─────────────────────────────────────────────────────────
*/

// 👇 Center video — apna video ka path yahan laga dena (e.g. "/Whatwedo-Video.mp4")
const CENTER_VIDEO =
  "/Globe-Video.webm";

/* ──────────────── Palette ──────────────── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";

/* ──────────────── Icons ──────────────── */

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5z" strokeLinejoin="round" />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 9 12 4 2 9l10 5 10-5z" strokeLinejoin="round" />
    <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" strokeLinejoin="round" />
    <path d="M22 9v5" strokeLinecap="round" />
  </svg>
);

const BankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 10l9-6 9 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 10h16" strokeLinecap="round" />
    <path d="M6 10v8M10 10v8M14 10v8M18 10v8" strokeLinecap="round" />
    <path d="M3 20h18" strokeLinecap="round" />
  </svg>
);

const SuitcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="7" width="16" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    <path d="M12 7v13" strokeLinecap="round" />
  </svg>
);

const PassportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="M9.5 10h5M12 7.2v5.6" strokeLinecap="round" />
    <path d="M9.5 17h5" strokeLinecap="round" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeLinejoin="round" />
    <path d="M18 10h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v3l-3-3" strokeLinejoin="round" />
  </svg>
);

/* ──────────────── Data ──────────────── */

interface Step {
  no: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    no: "01",
    icon: <PassportIcon />,
    title: "Study Visas",
    desc: "Complete guidance for student visa applications with higher success and minimal delays.",
  },
  {
    no: "02",
    icon: <BankIcon />,
    title: " Permanent Residency",
    desc: "Expert assistance for Permanent Residency pathways and a secure future for you and your family.",
  },
  {
    no: "03",
    icon: <SuitcaseIcon />,
    title: "Tourist Visas",
    desc: "Hassle-free tourist visa support for your dream holidays and family visits.",
  },
  {
    no: "04",
    icon: <ChatIcon />,
    title: "IELTS",
    desc: "Expert IELTS coaching and practice to help you score high with confidence.",
  },
  {
    no: "05",
    icon: <CapIcon />,
    title: "PTE",
    desc: "Focused PTE training and mock tests to help you reach your target score faster.",
  },
];

// chevron (right pointing) card shape
const CHEVRON =
  "polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 0% 100%)";

/* ──────────────────────────── Component ──────────────────────────── */

const WhatWeDo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full"
      style={{
        // same gold-right mix — top-right + bottom-right gold corners blend
        background: `
          radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%),
          ${CREAM}
        `,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* ───────── Left column ───────── */}
          <div className="lg:col-span-4">
            {/* Eyebrow */}
            <Reveal direction="down" delay={0}>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em]" style={{ color: GOLD_TEXT }}>
                  WHAT WE DO
                </span>
                <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
              </div>
            </Reveal>

            {/* Heading — 2-tone */}
            <Reveal direction="left" delay={0.08}>
              <h2 className="font-heading text-3xl font-semibold leading-[1.20] sm:text-4xl lg:text-5xl">
                <span style={{ color: NAVY }}>Guiding You.</span>
                <br />
                <span style={{ color: GOLD_TEXT }}>Every Step <br /> of the Way.</span>
              </h2>

              {/* Divider */}
              <span className="mt-6 block h-px w-12" style={{ backgroundColor: GOLD }} />
            </Reveal>

            {/* Description */}
            <Reveal direction="left" delay={0.16}>
              <p className="mt-6 max-w-sm text-sm leading-relaxed sm:text-base" style={{ color: "#4a5160" }}>
                From choosing the right path to achieving your dreams, we provide
                expert support for every step of your immigration journey.
              </p>
            </Reveal>

            {/* Dark expertise card */}
            <Reveal direction="up" delay={0.24}>
              <div className="mt-8 max-w-sm rounded-2xl p-5 sm:p-6" style={{ backgroundColor: NAVY }}>
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    <CompassIcon />
                  </span>
                  <h3 className="text-lg font-bold leading-tight text-white">
                    Your Journey,
                    <br />
                    Our Expertise.
                  </h3>
                </div>
                <span className="mt-4 block h-px w-10" style={{ backgroundColor: GOLD }} />
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Personalized guidance, transparent processes, and end-to-end
                  support &mdash; that&rsquo;s what we do.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ───────── Center video ───────── */}
          <Reveal direction="up" delay={0.1} className="flex items-center justify-center lg:col-span-3">
            <video
              src={CENTER_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              onContextMenu={(e) => e.preventDefault()}
              aria-hidden="true"
              className="pointer-events-none mx-auto w-2/3 max-w-xs select-none object-contain sm:w-1/2 lg:w-full lg:max-w-none lg:scale-125"
            />
          </Reveal>

          {/* ───────── Right timeline ───────── */}
          <div className="relative lg:col-span-5">
            {/* Curvy gold connector line (decorative) */}
            <svg
              className="pointer-events-none absolute left-0 top-0 hidden h-full w-12 lg:block"
              viewBox="0 0 60 760"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M30 60 C 6 130, 54 170, 30 230 C 6 290, 54 320, 30 380 C 6 440, 54 470, 30 530 C 6 590, 54 620, 30 690"
                stroke={GOLD}
                strokeWidth="2"
              />
              {[70, 224, 380, 536, 690].map((cy, i) => (
                <circle key={i} cx="30" cy={cy} r="7" fill={NAVY} />
              ))}
            </svg>

            {/* Cards */}
            <div className="flex flex-col gap-4 lg:pl-14">
              {steps.map((step, i) => {
                const isOdd = i % 2 === 0; // 0,2,4 -> white ; 1,3 -> cream tint
                const isStudyVisa = step.title === "Study Visas";
                return (
                  <div
                    key={step.no}
                    onClick={isStudyVisa ? () => navigate("/study-abroad") : undefined}
                    className={`relative flex items-center gap-3 py-4 pl-4 pr-10 shadow-[0_10px_28px_-16px_rgba(35,31,32,0.3)] sm:gap-4 sm:py-5 sm:pl-5 sm:pr-16${isStudyVisa ? " cursor-pointer" : ""}`}
                    style={{
                      clipPath: CHEVRON,
                      backgroundColor: isOdd ? "#ffffff" : "rgba(224,191,148,0.28)",
                    }}
                  >
                    {/* Icon */}
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
                      style={{ backgroundColor: NAVY, color: GOLD }}
                    >
                      {step.icon}
                    </span>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="text-base font-bold sm:text-lg" style={{ color: NAVY }}>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "#5a6170" }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Big number */}
                    <span
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl font-bold sm:right-10 sm:text-5xl"
                      style={{ color: "rgba(224,191,148,0.55)" }}
                    >
                      {step.no}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;