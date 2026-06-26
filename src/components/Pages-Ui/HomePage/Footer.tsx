import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal, revealProps } from "../../common/Reveal";
import { motion } from "framer-motion";

const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";

const footerBg = {
  background: `
    radial-gradient(135% 135% at 100% 0%, #E0BF94 0%, transparent 50%),
    radial-gradient(135% 135% at 100% 100%, #E0BF94 0%, transparent 50%),
    ${CREAM}
  `,
};

// SVG Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .82h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 mt-0.5 flex-shrink-0">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 flex-shrink-0">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

// Country flag emojis / icons (simplified SVG outlines as circles with country code)
const CanadaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#E0BF94" strokeWidth="1.5" fill="none"/>
    <path d="M16 8 L18 14 L24 12 L20 17 L24 20 L17 18 L16 24 L15 18 L8 20 L12 17 L8 12 L14 14 Z" fill="#E0BF94" opacity="0.7"/>
  </svg>
);

const AustraliaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#E0BF94" strokeWidth="1.5" fill="none"/>
    <path d="M10 10 Q16 7 22 10 Q25 16 22 22 Q16 25 10 22 Q7 16 10 10Z" stroke="#E0BF94" strokeWidth="1" fill="none" opacity="0.6"/>
    <circle cx="16" cy="16" r="3" stroke="#E0BF94" strokeWidth="1" fill="none"/>
  </svg>
);

const UKIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#E0BF94" strokeWidth="1.5" fill="none"/>
    <rect x="10" y="8" width="4" height="16" fill="#E0BF94" opacity="0.5"/>
    <rect x="8" y="14" width="16" height="4" fill="#E0BF94" opacity="0.5"/>
    <path d="M10 10 L22 22 M22 10 L10 22" stroke="#E0BF94" strokeWidth="1" opacity="0.4"/>
  </svg>
);

const USAIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#E0BF94" strokeWidth="1.5" fill="none"/>
    <path d="M13 9 L16 6 L19 9 L16 12 Z" fill="#E0BF94" opacity="0.7"/>
    <path d="M9 13 L12 16 L9 19 L6 16 Z" fill="#E0BF94" opacity="0.5"/>
    <path d="M16 20 L19 23 L16 26 L13 23 Z" fill="#E0BF94" opacity="0.5"/>
    <circle cx="16" cy="16" r="4" stroke="#E0BF94" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
);

const EuropeIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#E0BF94" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
    <circle cx="16" cy="16" r="6" stroke="#E0BF94" strokeWidth="1" fill="none"/>
  </svg>
);

const quickLinks = ["Home", "About Us", "Our Services", "How We Work", "Success Stories", "Contact Us"];
const services = ["Study Visas", "Permanent Residency", "Tourist Visas", "IELTS", "PTE"];

const NavLink: React.FC<{ label: string; index?: number; onClick?: () => void }> = ({ label, index = 0, onClick }) => (
  <motion.li
    {...revealProps("up", Math.min(index * 0.08, 0.4))}
    onClick={onClick}
    className="flex items-center gap-2 group cursor-pointer"
  >
    <ChevronRight />
    <span
      className="text-sm transition-colors duration-200"
      style={{ color: NAVY, fontFamily: "Georgia, serif" }}
    >
      {label}
    </span>
  </motion.li>
);

const SocialButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:opacity-80"
    style={{ borderColor: GOLD, color: NAVY, backgroundColor: "transparent" }}
  >
    {children}
  </button>
);

const VisaGuyFooter: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Divider with plane */}
      <Reveal direction="up" delay={0}>
        <div
          className="flex items-center justify-center py-3"
          style={{ ...footerBg }}
        >
          <div className="flex-1 h-px mx-4 sm:mx-6" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }} />
          <span style={{ color: GOLD }}>
            <PlaneIcon />
          </span>
          <div className="flex-1 h-px mx-4 sm:mx-6" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }} />
        </div>
      </Reveal>

      {/* Main Footer Body */}
      <div style={footerBg} className="px-6 sm:px-8 md:px-10 py-10 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand Column */}
          <motion.div {...revealProps("left", Math.min(0 * 0.08, 0.4))} className="sm:col-span-2 md:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img src="/Visa Guy Logo.webp" alt="Visa Guy Logo" className="h-12 w-14 object-contain" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-widest" style={{ color: NAVY, letterSpacing: "0.15em" }}>
                  VISA GUY
                </div>
                <div className="text-xs italic" style={{ color: GOLD_TEXT }}>
                  Your Journey. Our Expertise.
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-relaxed" style={{ color: NAVY, opacity: 0.75 }}>
              Trusted by thousands of clients worldwide. We help you turn your dreams of a better future into reality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-1">
              <SocialButton><FacebookIcon /></SocialButton>
              <SocialButton><InstagramIcon /></SocialButton>
              <SocialButton><LinkedInIcon /></SocialButton>
              <SocialButton><YouTubeIcon /></SocialButton>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...revealProps("up", Math.min(1 * 0.08, 0.4))} className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: NAVY, letterSpacing: "0.12em" }}>
              QUICK LINKS
            </h3>
            <div className="w-8 h-0.5 mb-5" style={{ background: GOLD }} />
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <NavLink key={link} label={link} index={i} />
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div {...revealProps("up", Math.min(2 * 0.08, 0.4))} className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: NAVY, letterSpacing: "0.12em" }}>
              OUR SERVICES
            </h3>
            <div className="w-8 h-0.5 mb-5" style={{ background: GOLD }} />
            <ul className="flex flex-col gap-3">
              {services.map((s, i) => (
                <NavLink
                  key={s}
                  label={s}
                  index={i}
                  onClick={s === "Study Visas" ? () => navigate("/study-abroad") : undefined}
                />
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div {...revealProps("up", Math.min(3 * 0.08, 0.4))} className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: NAVY, letterSpacing: "0.12em" }}>
              POPULAR DESTINATIONS
            </h3>
            <div className="w-8 h-0.5 mb-5" style={{ background: GOLD }} />
            <ul className="flex flex-col gap-4">
              {[
                { label: "Canada", Icon: CanadaIcon },
                { label: "Australia", Icon: AustraliaIcon },
                { label: "United Kingdom", Icon: UKIcon },
                { label: "USA", Icon: USAIcon },
              ].map(({ label, Icon }, i) => (
                <motion.li
                  {...revealProps("up", Math.min(i * 0.08, 0.4))}
                  key={label}
                  className="flex items-center gap-3 cursor-pointer hover:opacity-75 transition-opacity"
                >
                  <Icon />
                  <span className="text-sm" style={{ color: NAVY }}>
                    {label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div {...revealProps("right", Math.min(4 * 0.08, 0.4))} className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: NAVY, letterSpacing: "0.12em" }}>
              GET IN TOUCH
            </h3>
            <div className="w-8 h-0.5 mb-5" style={{ background: GOLD }} />
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span style={{ color: GOLD }}><PhoneIcon /></span>
                <span className="flex flex-col text-sm" style={{ color: NAVY }}>
                  <a href="tel:+91888889625" className="hover:opacity-75 transition-opacity">+91 888889625</a>
                  <a href="tel:+918491061193" className="hover:opacity-75 transition-opacity">+91 8491061193</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: GOLD }}><MailIcon /></span>
                <div className="flex flex-col">
                <a href="mailto:sarthak@visaguyimm.com" className="text-sm hover:opacity-75 transition-opacity" style={{ color: NAVY }}>sarthak@visaguyimm.com</a>
                
                <a href="mailto:sarthak@visaguyimm.com" className="text-sm hover:opacity-75 transition-opacity" style={{ color: NAVY }}>spearheadjammu@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: GOLD }}><MapPinIcon /></span>
                <span className="text-sm leading-relaxed" style={{ color: NAVY }}>
                  Spearhead, 48 D/C,<br />
                  Opposite Salon Sprit, Gandhi Nagar,<br />
                  Jammu, 180004
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Reveal direction="up" delay={0}>
      <div
        className="px-6 sm:px-8 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
        style={{ background: NAVY, borderTop: `1px solid ${GOLD}55` }}
      >
        <span className="text-xs" style={{ color: CREAM, opacity: 0.65 }}>
          © 2026 Visa Guy. All Rights Reserved.
        </span>
        <div className="flex items-center gap-4">
          <span
            className="text-xs cursor-pointer hover:opacity-75 transition-opacity"
            style={{ color: CREAM, opacity: 0.65 }}
          >
            Privacy Policy
          </span>
          <span style={{ color: CREAM, opacity: 0.5 }}>|</span>
          <span
            className="text-xs cursor-pointer hover:opacity-75 transition-opacity"
            style={{ color: CREAM, opacity: 0.65 }}
          >
            Terms &amp; Conditions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: GOLD }}><HeartIcon /></span>
          <span className="text-xs font-medium" style={{ color: CREAM, opacity: 0.75 }}>
            Trusted by 50+ Happy Clients
          </span>
        </div>
      </div>
      </Reveal>
    </footer>
  );
};

export default VisaGuyFooter;