import React from "react";

/*
  ─────────────────────────────────────────────
  VISA GUY — Navbar (separate component)
  ─────────────────────────────────────────────
*/

const navLinks = [
  "About Us",
  "Services",
  "How We Work",
  "Success Stories",
  "Reviews",
  "Contact Us",
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-3 left-4 right-4 z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0e1730]/80 px-5 py-3 backdrop-blur-md sm:left-8 sm:right-8 sm:px-7 lg:left-20 lg:right-20">
      {/* Logo */}
      <a href="#" className="flex flex-col leading-none">
        <img src="/Visa Guy Logo.webp" alt="Visa Guy Logo" className="h-10 w-12" />
      </a>

      {/* Nav Links */}
      <nav className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-gray-200 transition-colors hover:text-[#e9cf9c]"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919888889625"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#f0dcb4] px-4 py-2.5 text-sm font-bold text-[#0e1730] transition-transform hover:scale-[1.03]"
      >
        <span className="text-[#25D366]">
          <WhatsAppIcon />
        </span>
        <span className="hidden sm:inline">98888 89625</span>
      </a>
    </header>
  );
};

export default Navbar;