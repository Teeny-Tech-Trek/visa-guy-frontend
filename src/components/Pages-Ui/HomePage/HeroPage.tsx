import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Navbar from "./Navbar";
import HeroWorldMap from "./HeroWorldMap";

const BG_IMAGE = "/Hero-Image.webp";
const PLANE_IMAGE = "/Plane-Image1.webp";

const HEADING_TEXT = "Planning your next step abroad is simpler here.";

/* ──────────────── Icons ──────────────── */

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5 7.5 22l4.5-2.5L16.5 22 15 14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6.5 12.9 8.3l2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3L12 6.5z" fill="currentColor" stroke="none" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1z" />
    <path d="M18 18v1a2 2 0 0 1-2 2h-3" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14.5c2.6.2 4.4 1.8 5 4.5" strokeLinecap="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
  </svg>
);

/* ──────────────── Stats ──────────────── */

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

const heroStats: StatItem[] = [
  { icon: <MedalIcon />, value: "7+", label: "Years Experience" },
  { icon: <PinIcon />, value: "Jammu & Mohali", label: "Offices" },
  { icon: <HeadsetIcon />, value: "Digital Assistance", label: "Across North India" },
];

/* ──────────────────────────── Component ──────────────────────────── */

const HeroPage: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Intro overlay & intro plane setup ──
      gsap.set(".intro-overlay", { opacity: 1 });
      gsap.set(".intro-plane", {
        opacity: 0,
        x: "-60vw",
        y: "-50%",
        rotation: -6,
        scale: 0.9,
      });

      // ── Hero loop plane — fully hidden before loop starts ──
      gsap.set(".hero-plane", {
        opacity: 0,
        xPercent: -140,
        y: 120,
        rotation: -10,
        scale: 0.82,
      });

      const introTl = gsap.timeline();

      introTl
        .to({}, { duration: 0.6 })

        // loader fade out
        .to(".intro-loader", {
          opacity: 0,
          scale: 0.85,
          duration: 0.35,
          ease: "power2.in",
        })

        // intro plane flies across screen
        .to(".intro-plane", {
          opacity: 1,
          x: "110vw",
          y: "-50%",
          rotation: -3,
          scale: 1,
          duration: 2.0,
          ease: "power1.inOut",
        })

        // overlay fade out
        .to(".intro-overlay", {
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            const el = document.querySelector(".intro-overlay") as HTMLElement;
            if (el) el.style.pointerEvents = "none";
          },
        }, "-=0.25")

        .set(".intro-plane", { display: "none" })

        // hero content animations
        .fromTo(
          ".hero-eyebrow-line",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".hero-eyebrow-text",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.45"
        )
        .fromTo(
          ".hero-heading",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(
          ".hero-divider",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", stagger: 0.15 },
          "-=0.4"
        )

        // ── Start hero plane loop AFTER intro is fully done ──
        .add(() => {
          const planeTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

          planeTl
            .fromTo(
              ".hero-plane",
              {
                xPercent: -140,
                y: 120,
                rotation: -10,
                scale: 0.82,
                opacity: 0,
              },
              {
                xPercent: -25,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
                duration: 2.4,
                ease: "power2.out",
              }
            )
            .to(".hero-plane", { duration: 1.0 })
            .to(".hero-plane", {
              xPercent: 140,
              y: -80,
              rotation: -8,
              scale: 0.88,
              opacity: 0,
              duration: 2.2,
              ease: "power2.in",
            });
        });

    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0e1730]"
    >
      {/* BLACK INTRO OVERLAY */}
      <div
        className="intro-overlay fixed inset-0 z-[9999] bg-black pointer-events-auto"
        aria-hidden="true"
      >
        {/* Loading spinner */}
        <div
          className="intro-loader"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            style={{ animation: "visaguy-spin 1.1s linear infinite" }}
          >
            <circle cx="28" cy="28" r="23" stroke="#2a3a5c" strokeWidth="4" />
            <path
              d="M28 5 a23 23 0 0 1 23 23"
              stroke="#d4af6a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g transform="translate(28,28)">
              <path d="M-7 0 L7 0 M0-7 L0 7" stroke="none" />
              <path
                d="M-6-2 L2-5 L8 0 L2 5 L-6 2 Z"
                fill="#d4af6a"
                transform="rotate(-30)"
              />
              <path
                d="M-2 1 L-6 4 L-4 1 Z"
                fill="#d4af6a"
                transform="rotate(-30)"
              />
            </g>
          </svg>

          <span
            style={{
              color: "#d4af6a",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              opacity: 0.85,
            }}
          >
            VISA GUY
          </span>
        </div>

        {/* Intro plane — flies across overlay */}
        <img
          src={PLANE_IMAGE}
          alt=""
          aria-hidden="true"
          className="intro-plane pointer-events-none select-none drop-shadow-2xl w-[28vw] max-w-[460px]"
          style={{ position: "absolute", top: "50%", left: 0 }}
        />
      </div>

      {/* Spinner keyframe */}
      <style>{`
        @keyframes visaguy-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden="true"
      />

      <HeroWorldMap />
      <Navbar />

      {/* Hero Plane — loop wala (opacity-0 by default, GSAP controls it) */}
      <img
        src={PLANE_IMAGE}
        alt=""
        aria-hidden="true"
        className="hero-plane pointer-events-none absolute right-[8%] top-[10%] z-60 hidden w-[26vw] max-w-[490px] -rotate-6 select-none drop-shadow-2xl md:block lg:right-[2%] lg:top-[9%]"
        style={{ opacity: 0 }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 sm:px-8 lg:px-12">
        <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-10 mt-24 sm:mt-28">
          <div className="w-full max-w-xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="hero-eyebrow-line h-px w-8 bg-[#d4af6a]" />
              <span className="hero-eyebrow-text text-xs font-semibold tracking-[0.3em] text-[#e9cf9c]">
                FOR THOSE WHO DREAM BIG
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-heading hero-heading text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              aria-label={HEADING_TEXT}
            >
              {HEADING_TEXT.split(" ").map((word, wi) => (
                <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
                  {word.split("").map((char, ci) => (
                    <span key={ci} className="hero-char inline-block">{char}</span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </h1>

            {/* Divider */}
            <span className="hero-divider mt-7 block h-px w-10 bg-[#d4af6a]" />

            {/* Description */}
            <p className="hero-desc mt-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg">
              Expert guidance for study visas, permanent residency, tourist
              visas, IELTS &amp; PTE. We make your journey clear, smooth and
              successful.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/coming-soon"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/coming-soon");
                }}
                className="hero-cta group flex items-center gap-3 rounded-lg bg-[#f0dcb4] px-7 py-4 text-sm font-bold tracking-wide text-[#0e1730] transition-all hover:bg-[#e9cf9c] hover:shadow-lg hover:shadow-[#d4af6a]/20"
              >
                FREE ASSESSMENT
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="https://wa.me/919888889625"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta flex items-center gap-3 rounded-lg border border-[#d4af6a]/50 bg-[#0e1730]/60 px-7 py-4 text-sm font-bold tracking-wide text-[#e9cf9c] backdrop-blur-sm transition-all hover:border-[#d4af6a] hover:bg-[#0e1730]/80"
              >
                TALK TO VISA GUY
                <WhatsAppIcon />
              </a>
            </div>

            {/* Stats Row */}
            <div className="hero-cta mt-10 flex flex-wrap items-center gap-x-4 gap-y-4 sm:flex-nowrap sm:gap-x-7">
              {heroStats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && (
                    <span
                      className="hidden h-9 w-px shrink-0 self-center bg-white/12 sm:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#d4af6a]">{stat.icon}</span>
                    <div className="leading-tight">
                      <p className="text-sm font-bold text-white sm:text-[15px]">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;











// import React from "react";

// /*
//   ─────────────────────────────────────────────────────────
//   VISA GUY — Hero Section
//   - Full background image (replace BG_IMAGE with your Image 2)
//   - Left-side text overlay (same content as Image 1)
//   - React + TypeScript + Tailwind CSS
  
//   NOTE: Heading "Playfair Display" font use karta hai.
//   index.html me yeh add kar lena:
//   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
//   ─────────────────────────────────────────────────────────
// */

// // 👇 Yahan apni Image 2 ka path daal dena (e.g. "/images/hero-bg.png")
// const BG_IMAGE =
//   "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop";

// interface StatItem {
//   icon: React.ReactNode;
//   value: string;
//   label: string;
// }

// const navLinks = [
//   "About Us",
//   "Services",
//   "How We Work",
//   "Success Stories",
//   "Reviews",
//   "Contact Us",
// ];

// /* ──────────────── Small inline icons (no external lib needed) ──────────────── */

// const PhoneIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
//     <path
//       d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
//     <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const MedalIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
//     <circle cx="12" cy="9" r="6" />
//     <path d="M9 14.5 7.5 22l4.5-2.5L16.5 22 15 14.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 6.5 12.9 8.3l2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3L12 6.5z" fill="currentColor" stroke="none" />
//   </svg>
// );

// const PinIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const HeadsetIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
//     <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" />
//     <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1z" />
//     <path d="M18 18v1a2 2 0 0 1-2 2h-3" strokeLinecap="round" />
//   </svg>
// );

// const UsersIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
//     <circle cx="9" cy="8" r="3.5" />
//     <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" strokeLinecap="round" />
//     <circle cx="17" cy="9" r="2.5" />
//     <path d="M16.5 14.5c2.6.2 4.4 1.8 5 4.5" strokeLinecap="round" />
//   </svg>
// );

// const WhatsAppIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//     <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
//   </svg>
// );

// /* ──────────────── Stats data (Image 1 bottom bar) ──────────────── */

// const stats: StatItem[] = [
//   { icon: <MedalIcon />, value: "7+", label: "Years Experience" },
//   { icon: <PinIcon />, value: "Jammu & Mohali", label: "Offices" },
//   { icon: <HeadsetIcon />, value: "Digital Assistance", label: "Across North India" },
//   { icon: <UsersIcon />, value: "1000+", label: "Happy Clients" },
// ];

// /* ──────────────────────────── Component ──────────────────────────── */

// const HeroPage: React.FC = () => {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#0e1730]">
//       {/* ── Full Background Image (Image 2) ── */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${BG_IMAGE})` }}
//         aria-hidden="true"
//       />

//       {/* ── Dark overlay gradient — left side text readable rahe ── */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r from-[#0e1730]/95 via-[#0e1730]/70 to-transparent"
//         aria-hidden="true"
//       />

//       {/* ── Content ── */}
//       <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 sm:px-8 lg:px-12">
//         {/* ───────── Navbar ───────── */}
//         <header className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0e1730]/80 px-5 py-3 backdrop-blur-md sm:px-7">
//           {/* Logo */}
//           <a href="#" className="flex flex-col leading-none">
//             <span className="font-serif text-2xl font-semibold tracking-tight text-white">
//               V<span className="text-[#d4af6a]">G</span>
//             </span>
//             <span className="mt-0.5 text-[10px] font-bold tracking-[0.18em] text-[#d4af6a]">
//               VISA GUY
//             </span>
//           </a>

//           {/* Nav Links */}
//           <nav className="hidden items-center gap-8 lg:flex">
//             {navLinks.map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="text-sm font-medium text-gray-200 transition-colors hover:text-[#e9cf9c]"
//               >
//                 {link}
//               </a>
//             ))}
//           </nav>

//           {/* Phone CTA */}
//           <a
//             href="tel:9888889625"
//             className="flex items-center gap-2 rounded-xl bg-[#f0dcb4] px-4 py-2.5 text-sm font-bold text-[#0e1730] transition-transform hover:scale-[1.03]"
//           >
//             <PhoneIcon />
//             <span className="hidden sm:inline">98888 89625</span>
//           </a>
//         </header>

//         {/* ───────── Hero Text — Left Side (Image 1 content) ───────── */}
//         <div className="flex flex-1 items-center py-16 lg:py-10">
//           <div className="max-w-xl">
//             {/* Eyebrow */}
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-8 bg-[#d4af6a]" />
//               <span className="text-xs font-semibold tracking-[0.3em] text-[#e9cf9c]">
//                 FOR THOSE WHO DREAM BIG
//               </span>
//             </div>

//             {/* Heading */}
//             <h1
//               className="text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.9rem]"
//               style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//             >
//               Planning your next step abroad is simpler here.
//             </h1>

//             {/* Divider */}
//             <span className="mt-7 block h-px w-10 bg-[#d4af6a]" />

//             {/* Description */}
//             <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg">
//               Expert guidance for study visas, permanent residency, tourist
//               visas, IELTS &amp; PTE. We make your journey clear, smooth and
//               successful.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <a
//                 href="#assessment"
//                 className="group flex items-center gap-3 rounded-lg bg-[#f0dcb4] px-7 py-4 text-sm font-bold tracking-wide text-[#0e1730] transition-all hover:bg-[#e9cf9c] hover:shadow-lg hover:shadow-[#d4af6a]/20"
//               >
//                 FREE ASSESSMENT
//                 <span className="transition-transform group-hover:translate-x-1">
//                   <ArrowIcon />
//                 </span>
//               </a>

//               <a
//                 href="https://wa.me/919888889625"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 rounded-lg border border-[#d4af6a]/50 bg-[#0e1730]/60 px-7 py-4 text-sm font-bold tracking-wide text-[#e9cf9c] backdrop-blur-sm transition-all hover:border-[#d4af6a] hover:bg-[#0e1730]/80"
//               >
//                 TALK TO VISA GUY
//                 <WhatsAppIcon />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ───────── Bottom Stats Bar ───────── */}
//         <div className="mb-8 grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#101a38]/85 backdrop-blur-md sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
//           {stats.map((stat) => (
//             <div key={stat.label} className="flex items-center gap-4 px-6 py-5">
//               <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0dcb4] text-[#0e1730]">
//                 {stat.icon}
//               </span>
//               <div>
//                 <p className="text-base font-bold text-white">{stat.value}</p>
//                 <p className="text-sm text-gray-400">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroPage;