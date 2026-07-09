import { useState } from "react";
import { Reveal, revealProps } from "../../common/Reveal";
import { motion } from "framer-motion";
import { submitContactForm } from "../../../services/contactService";
import type { ContactFormPayload } from "../../../services/contactService";
import { validateContactForm } from "../../../services/contactValidation";
import type { ContactErrors } from "../../../services/contactValidation";

const GOLD = "#E0BF94";
const GOLD_TEXT = "#C5A028";
const NAVY = "#0e1730";
const CREAM = "#F5F0E8";
const HOW_WE_WORK_GOLD = "#E0BF94";
const HOW_WE_WORK_CREAM = "#F0EBE4";
const CARD_BG = "#FDFCFA";
const BORDER = "#DDD5C4";
const PLACEHOLDER = "#C2B8A8";
const MUTED = "#B0A596";
const BODY_TEXT = "#6B6357";

type InterestOption = "study" | "pr" | "tourist";
type IeltsOption = "yes" | "no" | "awaiting";

interface RadioOption<T extends string> {
  value: T;
  label: string;
  icon: string; // SVG path or inline SVG string
}

// --- Inline SVG Icons (matching original design) ---
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 9 9l1.07-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconSchool = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconGlobe = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" />
    <path d="M2 12h20" />
  </svg>
);

const IconCheck = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconX = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6M9 9l6 6" />
  </svg>
);

const IconClock = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconPencil = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
);

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconMessage = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// --- Dot Grid Decoration ---
const DotGrid = () => (
  <div
    style={{
      position: "absolute",
      top: 32,
      left: 24,
      display: "grid",
      gridTemplateColumns: "repeat(5, 6px)",
      gap: 7,
      opacity: 0.22,
      pointerEvents: "none",
    }}
    aria-hidden="true"
  >
    {Array.from({ length: 30 }).map((_, i) => (
      <span
        key={i}
        style={{
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: GOLD,
          display: "block",
        }}
      />
    ))}
  </div>
);

// --- Radio Button ---
function RadioOption({
  selected,
  icon,
  label,
  onClick,
}: {
  selected: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        border: `1.5px solid ${selected ? GOLD : BORDER}`,
        borderRadius: 10,
        padding: "13px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        gap: 8,
        background: CARD_BG,
        transition: "border-color 0.15s",
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        {icon}
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: NAVY,
            lineHeight: 1.3,
          }}
        >
          {label}
        </span>
      </div>
      {/* Radio dot */}
      <div
        style={{
          width: 17,
          height: 17,
          borderRadius: "50%",
          border: `1.5px solid ${GOLD}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: CARD_BG,
        }}
      >
        {selected && (
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: GOLD,
            }}
          />
        )}
      </div>
    </div>
  );
}

// --- Input Field ---
function InputField({
  label,
  placeholder,
  icon,
  type = "text",
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label
        style={{ fontSize: 13, fontWeight: 500, color: NAVY }}
      >
        {label}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: `1.5px solid ${error ? "#c0392b" : BORDER}`,
          paddingBottom: 9,
        }}
      >
        {icon}
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14,
            color: NAVY,
            width: "100%",
            fontFamily: "inherit",
          }}
        />
      </div>
      {error && (
        <span style={{ fontSize: 11.5, color: "#c0392b" }}>{error}</span>
      )}
    </div>
  );
}

// --- Main Component ---
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FIELDS = { fullName: "", phone: "", email: "", city: "" };

export default function TalkToVisaGuy() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [interest, setInterest] = useState<InterestOption>("study");
  const [ielts, setIelts] = useState<IeltsOption | null>(null);
  const [profileText, setProfileText] = useState("");

  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const interestOptions: { value: InterestOption; label: string; icon: React.ReactNode }[] = [
    { value: "study", label: "Study Visa", icon: <IconSchool /> },
    { value: "pr", label: "PR / Permanent Residency", icon: <IconGlobe /> },
    { value: "tourist", label: "Tourist / Visitor Visa", icon: <IconBriefcase /> },
  ];

  const ieltsOptions: { value: IeltsOption; label: string; icon: React.ReactNode }[] = [
    { value: "yes", label: "Yes", icon: <IconCheck /> },
    { value: "no", label: "No", icon: <IconX /> },
    { value: "awaiting", label: "Awaiting Result", icon: <IconClock /> },
  ];

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const payload: ContactFormPayload = {
      fullName: fields.fullName,
      phone: fields.phone,
      email: fields.email,
      city: fields.city,
      interest:
        interestOptions.find((o) => o.value === interest)?.label ?? interest,
      ielts: ielts
        ? ieltsOptions.find((o) => o.value === ielts)?.label ?? ielts
        : "Not specified",
      message: profileText.trim(),
    };

    const validationErrors = validateContactForm(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setFeedback("Please fill in the required fields correctly.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await submitContactForm(payload);
      setStatus("success");
      setFeedback(res.message);
      setFields(INITIAL_FIELDS);
      setInterest("study");
      setIelts(null);
      setProfileText("");
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 24px) clamp(40px, 6vw, 60px)",
        boxSizing: "border-box",
        overflowX: "hidden",
        background: `
          radial-gradient(135% 135% at 100% 0%,   ${HOW_WE_WORK_GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${HOW_WE_WORK_GOLD} 0%, transparent 50%),
          ${HOW_WE_WORK_CREAM}
        `,
      }}
    >
      <DotGrid />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 32,
          width: "100%",
          maxWidth: 640,
        }}
      >
        {/* Eyebrow */}
        <Reveal direction="down" delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: "2.5px",
              color: GOLD_TEXT,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            <span style={{ display: "block", height: 1, width: 48, background: GOLD }} />
            <IconMessage />
            Let&apos;s get &nbsp; started
            <span style={{ display: "block", height: 1, width: 48, background: GOLD }} />
          </div>
        </Reveal>

        {/* Title */}
        <Reveal direction="up" delay={0.08}>
          <h1
            style={{
              fontFamily: "'The Seasons', 'Cormorant Garamond', 'Poppins', serif",
              fontSize: "clamp(34px, 8vw, 52px)",
              fontWeight: 700,
              margin: "0 0 12px",
              lineHeight: 1.1,
              color: NAVY,
            }}
          >
            Talk To{" "}
            <span style={{ color: GOLD_TEXT }}>Visa Guy</span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.16}>
          <p style={{ fontSize: "clamp(14px, 3.5vw, 15px)", color: BODY_TEXT, lineHeight: 1.65, margin: 0 }}>
            Planning a move abroad? Share a few details and our{" "}
            <br className="hidden sm:inline" />
            experts will guide you through the right path.
          </p>
        </Reveal>
      </div>

      {/* Card */}
      <Reveal direction="up" delay={0.24} className="w-full max-w-[680px]">
      <div
        style={{
          background: CARD_BG,
          borderRadius: 18,
          padding: "clamp(24px, 5vw, 38px) clamp(20px, 5vw, 44px) clamp(24px, 5vw, 36px)",
          width: "100%",
          maxWidth: 680,
          boxSizing: "border-box",
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Full Name + Phone */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            gap: "28px 32px",
            marginBottom: 28,
          }}
        >
          <InputField label="Full Name" placeholder="Enter your full name" icon={<IconUser />} name="fullName" value={fields.fullName} onChange={handleFieldChange} error={errors.fullName} />
          <InputField label="Phone Number" placeholder="Enter your phone number" icon={<IconPhone />} type="tel" name="phone" value={fields.phone} onChange={handleFieldChange} error={errors.phone} />
        </div>

        {/* Row 2: Email + City */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            gap: "28px 32px",
            marginBottom: 30,
          }}
        >
          <InputField label="Email Address" placeholder="Enter your email address" icon={<IconMail />} type="email" name="email" value={fields.email} onChange={handleFieldChange} error={errors.email} />
          <InputField label="City" placeholder="Enter your city" icon={<IconMapPin />} name="city" value={fields.city} onChange={handleFieldChange} error={errors.city} />
        </div>

        {/* Interested In */}
        <p style={{ fontSize: 14, fontWeight: 500, color: NAVY, marginBottom: 13 }}>
          I&apos;m interested in
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{
            gap: 10,
            marginBottom: 26,
          }}
        >
          {interestOptions.map((opt, i) => (
            <motion.div key={opt.value} {...revealProps("up", Math.min(i * 0.08, 0.4))}>
              <RadioOption
                selected={interest === opt.value}
                icon={opt.icon}
                label={opt.label}
                onClick={() => setInterest(opt.value)}
              />
            </motion.div>
          ))}
        </div>

        {/* IELTS / PTE */}
        <p style={{ fontSize: 14, fontWeight: 500, color: NAVY, marginBottom: 13 }}>
          Have you taken IELTS / PTE?
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{
            gap: 10,
            marginBottom: 26,
          }}
        >
          {ieltsOptions.map((opt, i) => (
            <motion.div key={opt.value} {...revealProps("up", Math.min(i * 0.08, 0.4))}>
              <RadioOption
                selected={ielts === opt.value}
                icon={opt.icon}
                label={opt.label}
                onClick={() => setIelts(opt.value)}
              />
            </motion.div>
          ))}
        </div>

        {/* Profile Textarea */}
        <p style={{ fontSize: 14, fontWeight: 500, color: NAVY, marginBottom: 10 }}>
          Tell us about your profile{" "}
          <span style={{ fontWeight: 400, color: PLACEHOLDER, fontSize: 13 }}>(Optional)</span>
        </p>
        <div
          style={{
            border: `1.5px solid ${BORDER}`,
            borderRadius: 10,
            padding: "12px 14px 8px 36px",
            marginBottom: 30,
            position: "relative",
            background: CARD_BG,
          }}
        >
          <div style={{ position: "absolute", top: 13, left: 13 }}>
            <IconPencil />
          </div>
          <textarea
            value={profileText}
            onChange={(e) => setProfileText(e.target.value.slice(0, 500))}
            placeholder="Write a few lines about your education, work experience, destination preference or any other details..."
            maxLength={500}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 13.5,
              color: "#555",
              fontFamily: "inherit",
              resize: "none",
              height: 82,
              lineHeight: 1.6,
              boxSizing: "border-box",
            }}
          />
          <div
            style={{ fontSize: 12, color: PLACEHOLDER, textAlign: "right", marginTop: 2 }}
          >
            {profileText.length}/500
          </div>
        </div>

        {/* Status / feedback message */}
        {status !== "idle" && status !== "submitting" && feedback && (
          <div
            role="status"
            style={{
              marginBottom: 18,
              padding: "12px 16px",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 500,
              border: `1.5px solid ${status === "success" ? "#2e7d32" : "#c0392b"}`,
              background: status === "success" ? "rgba(46,125,50,0.08)" : "rgba(192,57,43,0.07)",
              color: status === "success" ? "#2e7d32" : "#c0392b",
            }}
          >
            {feedback}
          </div>
        )}

        {/* Footer */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          style={{
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              color: "black",
            }}
          >
            <IconShield />
            Your information is safe with us.
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto justify-center sm:justify-start"
            style={{
              background: NAVY,
              color: CREAM,
              border: "none",
              borderRadius: 10,
              padding: "15px 30px",
              fontSize: 15,
              fontWeight: 500,
              fontFamily: "inherit",
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              opacity: status === "submitting" ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              gap: 10,
              whiteSpace: "nowrap",
              letterSpacing: "0.2px",
            }}
            onMouseEnter={(e) => {
              if (status !== "submitting") e.currentTarget.style.background = "#222d50";
            }}
            onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
          >
            {status === "submitting" ? "Sending..." : "Start Your Visa Journey"}
            <IconArrowRight />
          </button>
        </div>
        </form>
      </div>
      </Reveal>
    </div>
  );
}
