import React from "react";

const CREAM = "#F0EBE4";
const GOLD  = "#E0BF94";
const NAVY  = "#184068";

const CENTER_IMAGE =
  "/Team-Image.webp";

/* ── Icons ── */
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="8" cy="10" r="1" fill="currentColor" /><circle cx="12" cy="10" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" />
  </svg>
);
const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="10" r="3" />
    <path d="M6 20c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round" />
  </svg>
);
const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" strokeLinecap="round" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);
const StampIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path d="M6 20h12M8 20V14a4 4 0 0 1 8 0v6" /><path d="M12 14V10" strokeLinecap="round" />
    <rect x="7" y="4" width="10" height="6" rx="2" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5C8 19.3 5 15.5 5 11V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
    <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 3h8" strokeLinecap="round" />
  </svg>
);
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
  </svg>
);
const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
    <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H5a1 1 0 0 0-1 1zM20 13v3a2 2 0 0 1-2 2h-1v-5h2a1 1 0 0 1 1 1z" />
  </svg>
);

/* ── Radial Step (desktop, borderless) ── */
const RadialStep = ({
  id, title, desc, icon, x, y,
}: { id: string; title: string; desc: string; icon: React.ReactNode; x: number; y: number }) => (
  <div
    className="absolute flex flex-col items-center text-center"
    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", width: 200 }}
  >
    <div className="relative mb-2">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: NAVY, color: GOLD }}>
        {icon}
      </div>
      <span
        className="absolute -right-1.5 -bottom-1 text-[11px] font-bold w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: GOLD, color: NAVY, border: `2px solid ${CREAM}` }}
      >
        {id}
      </span>
    </div>
    <h3 className="text-sm font-bold mb-1" style={{ color: NAVY }}>{title}</h3>
    <span className="block w-8 h-px mb-2" style={{ background: GOLD }} />
    <p className="text-[11px] leading-relaxed text-black" style={{ color: "" }}>{desc}</p>
  </div>
);

/* ── Step Row (mobile, borderless) ── */
const StepRow = ({ id, title, desc, icon }: { id: string; title: string; desc: string; icon: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="relative flex-shrink-0">
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: NAVY, color: GOLD }}>
        {icon}
      </div>
      <span
        className="absolute -right-1 -bottom-1 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: GOLD, color: NAVY, border: `2px solid ${CREAM}` }}
      >
        {id}
      </span>
    </div>
    <div>
      <h3 className="text-sm font-bold mb-1" style={{ color: NAVY }}>{title}</h3>
      <span className="block w-8 h-px mb-2" style={{ background: GOLD }} />
      <p className="text-xs leading-relaxed" style={{ color: "#4a5160" }}>{desc}</p>
    </div>
  </div>
);

/* Steps with radial positions (x / y as % of the desktop stage) */
const steps = [
  { id: "01", title: "Consultation",       desc: "We understand your goals and evaluate the best options for you.",                       icon: <ChatIcon />,    x: 12.5, y: 27 },
  { id: "02", title: "Profile Evaluation", desc: "Our experts analyze your profile and create a personalized strategy.",                  icon: <ProfileIcon />,  x: 12.5, y: 73 },
  { id: "03", title: "Documentation",      desc: "We guide you in preparing and reviewing all required documents with precision.",        icon: <DocIcon />,      x: 50,   y: 90  },
  { id: "04", title: "Application",        desc: "We submit your application and manage the entire process on your behalf.",              icon: <GlobeIcon />,   x: 87.5, y: 73 },
  { id: "05", title: "Approval & Beyond",  desc: "We help you receive your visa and support you even after you reach your destination.",   icon: <StampIcon />,  x: 87.5, y: 27 },
];

const features = [
  { icon: <ShieldIcon />, title: "Expert Guidance",    desc: "Every step backed by years of experience." },
  { icon: <ClockIcon />,  title: "Time Efficient",      desc: "Streamlined process for faster results." },
  { icon: <SearchIcon />, title: "Transparent Process", desc: "Clear updates and complete transparency at every stage." },
  { icon: <HeadsetIcon />,title: "Personal Support",    desc: "Dedicated support whenever you need us." },
];

export default function HowWeWork() {
  return (
    <section
      className="w-full"
      style={{
        background: `
          radial-gradient(135% 135% at 100% 0%,   ${GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%),
          ${CREAM}
        `,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="w-full mx-auto px-6 py-8 lg:px-10" style={{ maxWidth: 1320 }}>

        {/* ── Header ── */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span className="text-[11px] font-semibold tracking-[0.25em]" style={{ color: GOLD }}>OUR PROCESS</span>
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
            <span style={{ color: NAVY }}>How We Work,</span>
            <br />
            <span style={{ color: GOLD }}>For Your Success</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3 mb-3">
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span style={{ color: GOLD }}><GlobeIcon /></span>
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
          </div>
          <p className="text-xs sm:text-sm max-w-sm mx-auto" style={{ color: "#4a5160" }}>
            A clear, transparent and efficient process to turn your immigration dreams into reality.
          </p>
        </div>

        {/* ── Desktop radial ── */}
        <div className="hidden lg:block relative mx-auto" style={{ height: 560, maxWidth: 1200 }}>

          {/* Connector lines + image frame */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 560" fill="none" preserveAspectRatio="none" style={{ pointerEvents: "none" }}>
            {/* dashed frame around image */}
            <rect x="300" y="90" width="600" height="340" rx="60" stroke={GOLD} strokeWidth="1.5" strokeDasharray="5 7" opacity="0.8" />
            {/* anchor dots on the frame */}
            <circle cx="300" cy="90"  r="5" fill={GOLD} />
            <circle cx="900" cy="90"  r="5" fill={GOLD} />
            <circle cx="300" cy="430" r="5" fill={GOLD} />
            <circle cx="900" cy="430" r="5" fill={GOLD} />
            <circle cx="600" cy="430" r="5" fill={GOLD} />
            {/* solid snake connectors from frame to each step */}
            <path d="M300 90  C 268 48, 196 70, 226 124 S 150 138, 182 150"      stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M900 90  C 932 48, 1004 70, 974 124 S 1050 138, 1018 150"   stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M300 430 C 268 472, 196 450, 226 396 S 150 382, 182 408"    stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M900 430 C 932 472, 1004 450, 974 396 S 1050 382, 1018 408" stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M600 430 C 560 448, 640 462, 600 478"                       stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>

          {/* Center image */}
          <div className="absolute overflow-hidden" style={{ left: "26%", width: "48%", top: "18%", height: "57%", borderRadius: 48 }}>
            <img src={CENTER_IMAGE} alt="Our team" className="w-full h-full object-cover" />
          </div>

          {/* Steps */}
          {steps.map(s => <RadialStep key={s.id} {...s} />)}
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden flex flex-col gap-5">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 200, border: `1.5px dashed ${GOLD}` }}>
            <img src={CENTER_IMAGE} alt="Our team" className="w-full h-full object-cover" />
          </div>
          {steps.map(s => <StepRow key={s.id} {...s} />)}
        </div>

        {/* ── Features Bar ── */}
        {/* <div
          className="mt-5 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden"
          style={{ background: "rgba(35,31,32,0.08)" }}
        >
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 px-5 py-4" style={{ background: CREAM }}>
              <span style={{ color: GOLD, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
              <div>
                <p className="text-xs font-bold mb-0.5" style={{ color: NAVY }}>{f.title}</p>
                <p className="text-[11px] leading-relaxed" style={{ color: "#4a5160" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}