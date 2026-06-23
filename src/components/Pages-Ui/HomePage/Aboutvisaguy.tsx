import React from "react";
import { Reveal, revealProps } from "../../common/Reveal";
import { motion } from "framer-motion";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "About Visa Guy" Section
  - Background: same cream->gold gradient (ChooseYourGoal jaisa)
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #184068 | dark #231F20
  - Left: eyebrow + 2-tone heading + description + 3 feature items
  - Right: ABOUT_IMAGE (abhi random, baad me path change karna)
  - NO custom font-family — project ka universal font hi use hoga
  ─────────────────────────────────────────────────────────
*/

// 👇 Right side image — baad me change karna
const ABOUT_IMAGE =
  "/AboutVisaGuy.webp";

/* ──────────────── Palette ──────────────── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const NAVY = "#184068";

/* ──────────────── Feature icons ──────────────── */

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5-4-1.2-7-5-7-9.5V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M12 3l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.1l5.9-.8L12 3z"
      strokeLinejoin="round"
    />
  </svg>
);

/* ──────────────── Data ──────────────── */

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <ClientIcon />,
    title: "Client First Approach",
    desc: "Your goals become our priority. We believe in building lasting relationships through trust.",
  },
  {
    icon: <ShieldIcon />,
    title: "Honest & Transparent",
    desc: "Clear guidance, realistic solutions and complete transparency at every stage.",
  },
  {
    icon: <StarIcon />,
    title: "Expert Guidance",
    desc: "Experienced consultants with in-depth knowledge of immigration laws and global requirements.",
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

const AboutVisaGuy: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        // gold dono RIGHT corners me (top-right + bottom-right) —
        // taaki upar/neeche ke sections ke gold se smoothly blend ho, koi line na dikhe
        background: `
          radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%),
          ${CREAM}
        `,
      }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 overflow-hidden px-4 py-10 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:px-12 lg:py-16">
        {/* ───────── Left content ───────── */}
        <div className="max-w-xl">
          {/* Eyebrow */}
            {/* <div className="mb-5 flex items-center gap-3">
                <span
                className="text-xs font-semibold tracking-[0.25em]"
                style={{ color: GOLD }}
                >
                ABOUT VISA GUY
                </span>
                <span className="h-px w-12" style={{ backgroundColor: GOLD }} />
            </div> */}

          {/* Heading — 2-tone */}
          <Reveal direction="left" delay={0}>
            <h2 className="font-heading text-3xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              <span style={{ color: NAVY }}>Your Dreams.</span>
              <br />
              <span style={{ color: GOLD }}>Our Commitment.</span>
            </h2>

            {/* Divider */}
            <span className="mt-4 block h-px w-12" style={{ backgroundColor: GOLD }} />
          </Reveal>

          {/* Description */}
          <Reveal direction="left" delay={0.1}>
            <p
              className="mt-6 max-w-md text-sm leading-relaxed sm:text-base"
              style={{ color: "#4a5160" }}
            >
              Visa Guy was founded with a simple mission &ndash; to make
              immigration simple, transparent and stress&ndash;free. We&rsquo;re
              here to guide you at every step with honesty, expertise and
              personalized care.
            </p>
          </Reveal>

          {/* Feature list */}
          <div className="mt-9 space-y-5">
            {features.map((f, i) => (
              <motion.div key={i} {...revealProps("left", Math.min(i * 0.08, 0.4))}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2"
                    style={{ backgroundColor: NAVY, borderColor: GOLD, color: GOLD }}
                  >
                    {f.icon}
                  </span>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold sm:text-lg" style={{ color: NAVY }}>
                      {f.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed" style={{ color: "#5a6170" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* Divider line below each feature (last ke baad nahi) */}
                {i < features.length - 1 && (
                  <span
                    className="mt-5 ml-16 block h-px"
                    style={{ backgroundColor: "rgba(35,31,32,0.12)" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────── Right image (random for now) ───────── */}
        <Reveal direction="right" delay={0.1} className="relative flex justify-center lg:justify-end">
          <img
            src={ABOUT_IMAGE}
            alt=""
            aria-hidden="true"
            className="w-full max-w-md scale-110 select-none object-contain sm:max-w-lg sm:scale-125 lg:max-w-none"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutVisaGuy;