import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToTarget } from "../../../lib/smoothScroll";

gsap.registerPlugin(ScrollTrigger);

// WhatsApp contact for the "Talk To An Expert" CTA.
const WHATSAPP_URL = "https://wa.me/919888889625";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Study Abroad" Hero Section
  Styling system: ChooseYourGoal ke saath 1:1 match
  - Background: same cream→gold diagonal gradient
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #0e1730 | dark #231F20
  - GSAP ScrollTrigger animations (once, stagger)
  - NO custom font-family
  ─────────────────────────────────────────────────────────
*/

// 👇 Hero image path — baad me apna path daal dena
const HERO_IMAGE = "/StudyAbroad-Assets/StudyAbroad-HeroPage-Image.webp";

/* ── Palette ── */
const CREAM = "#F0EBE4";
const GOLD  = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY  = "#0e1730";
const DARK  = "#231F20";

/* ── Icons ── */
const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke={GOLD} strokeWidth="2">
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.79 12 19.79 19.79 0 011.72 3.38 2 2 0 013.69 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.69a16 16 0 006.29 6.29l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={NAVY} strokeWidth="1.8">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14.5c2.6.2 4.4 1.8 5 4.5" strokeLinecap="round" />
  </svg>
);

/* ── Main Component ── */
const StudyAbroad: React.FC = () => {
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

      tl.fromTo(".sa-eyebrow",  { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .fromTo(".sa-heading",  { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.45")
        .fromTo(".sa-desc",     { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(".sa-ctas",     { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.45")
        .fromTo(
          ".sa-image",
          { opacity: 0, scale: 0.93 },
          { opacity: 1, scale: 1, duration: 0.9 },
          "-=0.55"
        )
        .fromTo(".sa-badge",    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="flex min-h-screen w-full flex-col overflow-hidden"
      style={{
        background: `radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%), radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%), ${CREAM}`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-4 py-8 sm:px-8 sm:py-5 lg:px-12 lg:py-6">

        {/* ── Main Grid: Left text | Right image ── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[48px]">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-6 max-w-xl">

            {/* Eyebrow — exact same as ChooseYourGoal */}
            <div className="sa-eyebrow flex items-center gap-3">
              <PlaneIcon />
              <span
                className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: GOLD_TEXT }}
              >
                Study Abroad
              </span>
              <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>

            {/* Heading */}
            <h1
              className="sa-heading m-0 text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em]"
              style={{ color: NAVY }}
            >
              Your Dream
              <br />
              Education.
              <br />
              <span style={{ color: GOLD_TEXT }}>Your Global</span>
              <br />
              Future.
            </h1>

            {/* Description */}
            <p
              className="sa-desc m-0 text-[15px] leading-[1.7] max-w-[420px]"
              style={{ color: "#4a5160" }}
            >
              Unlock world-class education and life-changing opportunities.
              We help you study in top universities across the globe.
            </p>

            {/* CTAs */}
            <div className="sa-ctas flex flex-wrap gap-3 mt-2">
              {/* Primary */}
              <button
                type="button"
                onClick={() => scrollToTarget("#top-destinations")}
                className="flex items-center gap-2 rounded-[8px] border-none px-7 py-[14px] text-[14px] font-semibold tracking-[0.01em] cursor-pointer transition-opacity hover:opacity-85"
                style={{ backgroundColor: NAVY, color: CREAM }}
              >
                Explore Countries
                <ArrowIcon />
              </button>

              {/* Secondary */}
              <button
                type="button"
                onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
                className="flex items-center gap-2 rounded-[8px] bg-transparent px-7 py-[14px] text-[14px] font-semibold tracking-[0.01em] cursor-pointer transition-opacity hover:opacity-70"
                style={{
                  color: NAVY,
                  border: `1.5px solid rgba(14,23,48,0.35)`,
                }}
              >
                Talk To An Expert
                <PhoneIcon />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Image + floating badge ── */}
          <div className="sa-image relative flex justify-center lg:justify-end">

            {/* Decorative faint plane watermark */}
            <div
              className="pointer-events-none absolute -top-5 right-10 select-none"
              style={{ color: NAVY, opacity: 0.12 }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill={NAVY}>
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>

            {/* Hero image */}
            <img
              src={HERO_IMAGE}
              alt="Study abroad"
              className="w-full max-w-[520px] max-h-[60vh] select-none object-contain rounded-[20px] lg:max-w-[920px] lg:max-h-[75vh] lg:scale-125"
            />

            {/* Floating glass badge — same style as ChooseYourGoal cards */}
            <div
              className="sa-badge absolute bottom-4 right-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(14,23,48,0.13)] sm:bottom-7 sm:px-5 sm:py-3.5 lg:-right-2"
              style={{ backgroundColor: "rgba(255,255,255,0.78)", backdropFilter: "blur(10px)" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${GOLD}33` }}
              >
                <UsersIcon />
              </div>
              <div>
                <p className="m-0 text-[19px] font-extrabold leading-none" style={{ color: NAVY }}>
                  50+
                </p>
                <p className="m-0 mt-0.5 text-[11.5px]" style={{ color: "#4a5160" }}>
                  Students Placed Abroad
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudyAbroad;