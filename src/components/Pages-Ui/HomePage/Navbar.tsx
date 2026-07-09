import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToTarget } from "../../../lib/smoothScroll";

/*
  ─────────────────────────────────────────────
  VISA GUY — Navbar (separate component)
  ─────────────────────────────────────────────
*/

// Only links whose sections actually exist on the page (each scrolls to its id).
const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

// "Our Services" dropdown — each item opens a dedicated page.
const serviceLinks = [
  { label: "Study Visas", to: "/study-abroad" },
  { label: "Permanent Residency", to: "/coming-soon" },
  { label: "Tourist Visas", to: "/tourist-visas" },
  { label: "IELTS", to: "/coming-soon" },
  { label: "PTE", to: "/coming-soon" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Smoothly scroll to the target section via Locomotive Scroll.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToTarget(href);
    setMenuOpen(false);
  };

  // Logo always returns to the home page (and scrolls to top when already there).
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    scrollToTarget("#home");
    setMenuOpen(false);
  };

  // Each service opens its own page route.
  const handleServiceClick = (to: string) => {
    navigate(to);
    setServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed top-3 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-[#0e1730]/80 px-4 py-3 backdrop-blur-md sm:left-8 sm:right-8 sm:px-7 lg:left-20 lg:right-20"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="flex flex-col leading-none">
          <img src="/Visa Guy Logo.webp" alt="Visa Guy Logo" className="h-10 w-12" />
        </a>

        {/* Nav Links (desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key="services"
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-gray-200 transition-colors hover:text-[#e9cf9c]"
                >
                  Our Services
                  <ChevronDown open={servicesOpen} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      key="services-dropdown"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      // pt-3 acts as a hover "bridge" so the menu stays open
                      // while the pointer moves from the button to the panel.
                      className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
                    >
                      <ul className="overflow-hidden rounded-xl border border-white/10 bg-[#0e1730]/95 p-2 shadow-xl backdrop-blur-md">
                        {serviceLinks.map((s) => (
                          <li key={s.label}>
                            <button
                              type="button"
                              onClick={() => handleServiceClick(s.to)}
                              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-[#e9cf9c]"
                            >
                              {s.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-200 transition-colors hover:text-[#e9cf9c]"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919888889625"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#f0dcb4] px-3 py-2.5 text-sm font-bold text-[#0e1730] transition-transform hover:scale-[1.03] sm:px-4"
          >
            <span className="text-[#25D366]">
              <WhatsAppIcon />
            </span>
            <span className="hidden sm:inline">98888 89625</span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-200 transition-colors hover:text-[#e9cf9c] lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key="services-mobile" className="flex flex-col">
                    <span className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-[#e9cf9c]">
                      Our Services
                    </span>
                    {serviceLinks.map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => handleServiceClick(s.to)}
                        className="rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-[#e9cf9c]"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="rounded-lg px-2 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-[#e9cf9c]"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
