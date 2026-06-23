import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — Coming Soon page
  Hero section ke same theme me: dark navy bg + gold accents,
  same font (heading = "The Seasons" via .font-heading, body = Poppins).
  Hero ki "FREE ASSESSMENT" button isi page ko open karti hai.
  ─────────────────────────────────────────────────────────
*/

const BG_IMAGE = "/Hero-Image.webp";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] as const },
});

const ComingSoon: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0e1730]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0e1730]/85 via-[#0e1730]/80 to-[#0e1730]/95"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        {/* Globe badge */}
        <motion.div
          {...fade(0)}
          className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af6a]/40 text-[#d4af6a]"
          style={{ background: "rgba(212,175,106,0.06)" }}
        >
          <GlobeIcon />
        </motion.div>

        {/* Eyebrow */}
        <motion.div {...fade(0.08)} className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#d4af6a]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e9cf9c]">
            Something Exciting Is On The Way
          </span>
          <span className="h-px w-8 bg-[#d4af6a]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fade(0.16)}
          className="font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Coming <span className="text-[#d4af6a]">Soon</span>
        </motion.h1>

        {/* Divider */}
        <motion.span {...fade(0.22)} className="mt-7 block h-px w-12 bg-[#d4af6a]" />

        {/* Description */}
        <motion.p
          {...fade(0.28)}
          className="mt-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Our online Free Assessment experience is being crafted to make your visa
          journey even simpler. In the meantime, our experts are just a message away.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fade(0.36)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-lg bg-[#f0dcb4] px-7 py-4 text-sm font-bold tracking-wide text-[#0e1730] transition-all hover:bg-[#e9cf9c] hover:shadow-lg hover:shadow-[#d4af6a]/20"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              <ArrowLeftIcon />
            </span>
            BACK TO HOME
          </Link>

          <a
            href="https://wa.me/919888889625"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-[#d4af6a]/50 bg-[#0e1730]/60 px-7 py-4 text-sm font-bold tracking-wide text-[#e9cf9c] backdrop-blur-sm transition-all hover:border-[#d4af6a] hover:bg-[#0e1730]/80"
          >
            TALK TO VISA GUY
            <WhatsAppIcon />
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p {...fade(0.44)} className="mt-12 text-xs tracking-wide text-gray-400">
          © 2026 Visa Guy. All Rights Reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ComingSoon;
