import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — "Documents + Why Choose" Section
  - Two rounded CREAM panels on a lighter page
  - Both side images sit BEHIND the text (text overlay) with a cream fade
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

/* ── Image constants — swap paths as needed ── */
const IMG_PASSPORT = "/StudyAbroad-Assets/Required-Documents-Image.webp";
const IMG_STUDENT = "/StudyAbroad-Assets/Student-Image.webp";

/* ── Documents list ── */
const documents = [
  "Academic Transcripts",
  "English Proficiency Test Scores (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (LOR)",
  "Valid Passport",
  "Financial Documents",
];

/* ──────────────── Why-choose gold line icons ──────────────── */

// Expert Guidance → award medal
const ExpertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.3 8 21l4-2.4L16 21l-1-7.7" />
  </svg>
);

// Personalized Support → user
const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
    <circle cx="12" cy="8" r="3.8" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </svg>
);

// High Visa Success Rate → verified document
const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8.3 8.2 9.8 9.7 12.8 6.4" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="16.5" x2="13.5" y2="16.5" />
  </svg>
);

// End-to-End Assistance → connected route
const EndToEndIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
    <circle cx="5.5" cy="6" r="2.2" />
    <circle cx="18.5" cy="18" r="2.2" />
    <path d="M5.5 8.2v3.3a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3" />
  </svg>
);

// Post-Landing Support → destination pin
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
    <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

/* ── Why choose items ── */
const whyItems = [
  { title: "Expert Guidance", desc: "From industry experienced counselors", icon: <ExpertIcon /> },
  { title: "Personalized Support", desc: "Tailored solutions for your unique profile", icon: <SupportIcon /> },
  { title: "High Visa Success Rate", desc: "Proven results with thousands of successful visas", icon: <SuccessIcon /> },
  { title: "End-to-End Assistance", desc: "We are with you at every step", icon: <EndToEndIcon /> },
  { title: "Post-Landing Support", desc: "Guidance even after you reach your destination.", icon: <PinIcon /> },
];

/* ── CheckIcon (docs list) ── */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="9" cy="9" r="8.5" stroke={GOLD} strokeWidth="1.3" />
    <path d="M5.5 9l2.5 2.5 4.5-5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Shared panel styling ── */
const panelStyle: React.CSSProperties = {
  backgroundColor: CREAM,
  boxShadow: "0 14px 44px -26px rgba(35,31,32,0.30)",
  border: "1px solid rgba(224,191,148,0.20)",
};

/* ──────────────────────────── Main Component ──────────────────────────── */

const DocumentsAndWhyChoose: React.FC = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left panel
      const tl1 = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.65 },
        scrollTrigger: { trigger: ".dw-left", start: "top 80%", once: true },
      });
      tl1
        .fromTo(".dw-passport-img", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.8 })
        .fromTo(".dw-left-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(".dw-left-heading", { opacity: 0, y: 24 }, { opacity: 1, y: 0 }, "-=0.4")
        .fromTo(".dw-doc-item", { opacity: 0, x: -16 }, { opacity: 1, x: 0, stagger: 0.08 }, "-=0.35");

      // Right panel
      const tl2 = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.65 },
        scrollTrigger: { trigger: ".dw-right", start: "top 80%", once: true },
      });
      tl2
        .fromTo(".dw-student-img", { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.8 })
        .fromTo(".dw-right-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(".dw-right-heading", { opacity: 0, y: 24 }, { opacity: 1, y: 0 }, "-=0.4")
        .fromTo(".dw-why-item", { opacity: 0, x: 16 }, { opacity: 1, x: 0, stagger: 0.09 }, "-=0.35");
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={scopeRef}
      className="w-full"
      style={{
        // ✅ Same as previous (original) — cream base + gold radial washes
        background: `radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%), radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%), ${CREAM}`,
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">

        {/* ══════ LEFT PANEL — Required Documents ══════ */}
        <div
          className="dw-left relative overflow-hidden rounded-[24px] p-6 sm:p-10"
          style={panelStyle}
        >
          {/* Passport image — BIG, sits BEHIND the text */}
          <div className="dw-passport-img pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 sm:block">
            <img
              src={IMG_PASSPORT}
              alt=""
              aria-hidden="true"
              className="w-[300px] select-none object-contain lg:w-[370px]"
            />
          </div>

          {/* Cream fade — keeps text readable, lets passport peek on the right */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${CREAM} 40%, ${CREAM}00 82%)` }}
          />

          {/* Text — overlaid on top of the image */}
          <div className="relative z-10">
            <p
              className="dw-left-eyebrow m-0 mb-2 text-[10.5px] font-semibold uppercase tracking-[2.5px]"
              style={{ color: GOLD_TEXT }}
            >
              Required Documents
            </p>

            <h2
              className="dw-left-heading m-0 mb-6 text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.25]"
              style={{ color: NAVY }}
            >
              Get Your <span style={{ color: GOLD_TEXT }}>Documents Ready</span>
            </h2>

            <ul className="m-0 flex list-none flex-col gap-[13px] p-0">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="dw-doc-item flex items-start gap-2.5 text-[13px] leading-[1.4]"
                  style={{ color: "rgba(14,23,48,0.85)" }}
                >
                  <CheckIcon />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══════ RIGHT PANEL — Why Choose Visa Guy ══════ */}
        <div
          className="dw-right relative overflow-hidden rounded-[24px] p-6 sm:p-10"
          style={panelStyle}
        >
          {/* Student image — BIG, sits BEHIND the text, flush right & clipped at bottom */}
          <div className="dw-student-img pointer-events-none absolute bottom-0 right-0 hidden h-full w-[230px] sm:block lg:w-[250px]">
            <img
              src={IMG_STUDENT}
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-full w-full select-none object-cover object-top"
            />
          </div>

          {/* Cream fade — keeps text readable, student stays clear on the right */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${CREAM} 46%, ${CREAM}00 80%)` }}
          />

          {/* Text — overlaid on top of the image */}
          <div className="relative z-10 sm:pr-24 lg:pr-28">
            <p
              className="dw-right-eyebrow m-0 mb-2 text-[10.5px] font-semibold uppercase tracking-[2.5px]"
              style={{ color: GOLD_TEXT }}
            >
              Why Choose Visa Guy
            </p>

            <h2
              className="dw-right-heading m-0 mb-6 text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.25]"
              style={{ color: NAVY }}
            >
              Your Success Is <span style={{ color: GOLD_TEXT }}>Our Priority</span>
            </h2>

            <div className="flex flex-col gap-[18px]">
              {whyItems.map((item) => (
                <div key={item.title} className="dw-why-item flex items-start gap-3.5">
                  {/* Framed gold icon */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
                    style={{ border: `1px solid rgba(224,191,148,0.45)`, backgroundColor: "rgba(255,255,255,0.45)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="m-0 mb-0.5 text-[13.5px] font-bold leading-[1.3]" style={{ color: NAVY }}>
                      {item.title}
                    </p>
                    <p className="m-0 text-[12px] leading-[1.45]" style={{ color: "rgba(14,23,48,0.55)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsAndWhyChoose;