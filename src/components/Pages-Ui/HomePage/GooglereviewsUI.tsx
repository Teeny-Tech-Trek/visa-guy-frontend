import React from "react";
import { reviews } from "../../Data/Reviewsdata";

/*
  ─────────────────────────────────────────────────────────
  VISA GUY — Google Reviews Section
  - Background: same cream->gold gradient (gold corners) as
    the "Why Choose Us" / Industries components
  - Palette: cream #F0EBE4 | gold #E0BF94 | navy #184068 | dark #231F20
  - Eyebrow + 2-tone heading + sub-text
  - Google rating badge row
  - Continuous, infinite horizontal auto-scroll of review cards
    (same marquee pattern as Industries.tsx)
  - Section made shorter overall (reduced paddings/sizes)
  - NO custom font-family — project ka universal font hi use hoga
  ─────────────────────────────────────────────────────────
*/

/* ──────────────── Palette ──────────────── */
const CREAM = "#F0EBE4";
const GOLD = "#E0BF94";
const NAVY = "#184068";
const DARK = "#231F20";

/* ──────────────── Icons ──────────────── */

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill={filled ? "#E0BF94" : "none"}
    stroke={filled ? "#E0BF94" : "#c9c2b8"}
    strokeWidth="1.4"
  >
    <path
      d="M12 2.5l2.95 6.32 6.97.94-5.06 4.86 1.27 6.9L12 17.9l-6.13 3.62 1.27-6.9-5.06-4.86 6.97-.94L12 2.5z"
      strokeLinejoin="round"
    />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3z" strokeLinejoin="round" />
    <path
      d="M7 11l3.5-7a2 2 0 0 1 2 2v3h5.2a2 2 0 0 1 1.95 2.45l-1.2 5A2 2 0 0 1 16.5 18H7"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const GoogleIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

/* ──────────────── Review card ──────────────── */

const ReviewCard: React.FC<{ review: (typeof reviews)[number]; ariaHidden?: boolean }> = ({
  review,
  ariaHidden,
}) => (
  <div className="flex-shrink-0 w-[260px] sm:w-[300px] px-2 sm:px-3" aria-hidden={ariaHidden}>
    <div
      className="flex h-[180px] sm:h-[190px] flex-col gap-2.5 rounded-2xl bg-white/55 p-4 sm:p-5 shadow-[0_18px_50px_-28px_rgba(35,31,32,0.35)]"
      style={{ border: "1px solid rgba(35,31,32,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: DARK }}>
            {review.name}
          </p>
          <p className="text-xs" style={{ color: "#9aa0ab" }}>
            {review.timeAgo}
          </p>
        </div>
        <GoogleIcon className="h-5 w-5 shrink-0" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>

      {/* Text */}
      <p className="text-xs sm:text-sm leading-relaxed line-clamp-3" style={{ color: "#4a5160" }}>
        {review.text}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-center gap-2 pt-1" style={{ color: "#9aa0ab" }}>
        <ThumbsUpIcon />
        <span className="text-xs font-medium">Helpful ({review.helpfulCount})</span>
      </div>
    </div>
  </div>
);

/* ──────────────────────────── Component ──────────────────────────── */

const GoogleReviews: React.FC = () => {
  return (
    <div
      className="w-full py-8 md:py-10"
      style={{
        background: `
          radial-gradient(135% 135% at 100% 0%, ${GOLD} 0%, transparent 50%),
          radial-gradient(135% 135% at 100% 100%, ${GOLD} 0%, transparent 50%),
          ${CREAM}
        `,
      }}
    >
      {/* ───────── Heading block ───────── */}
      <div className="px-4 mb-6 md:mb-8 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
          <span className="text-xs font-semibold tracking-[0.25em]" style={{ color: GOLD }}>
            GOOGLE REVIEWS
          </span>
          <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
        </div>

        {/* Heading — 2-tone */}
        <h2 className="text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-5xl">
          <span style={{ color: NAVY }}>Trusted by 500+ </span>
          <span style={{ color: GOLD }}>Happy Clients</span>
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#4a5160" }}>
          Our commitment to excellence has helped thousands of students and
          families achieve their immigration dreams.
        </p>

        {/* Rating badge */}
        <div
          className="mt-4 flex items-center gap-3 rounded-full bg-white/60 px-5 py-2.5 shadow-[0_12px_30px_-18px_rgba(35,31,32,0.35)]"
          style={{ border: "1px solid rgba(35,31,32,0.06)" }}
        >
          <GoogleIcon className="h-5 w-5" />
          <span className="text-lg font-bold" style={{ color: DARK }}>
            4.9
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="h-5 w-px" style={{ backgroundColor: "rgba(35,31,32,0.12)" }} />
          <span className="text-sm font-medium" style={{ color: "#6b7280" }}>
            500+ Reviews
          </span>
        </div>
      </div>

      {/* ───────── Continuous marquee ───────── */}
      <div className="googlereviews-marquee relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
          style={{ background: `linear-gradient(to right, ${CREAM}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
          style={{ background: `linear-gradient(to left, ${CREAM}, transparent)` }}
        />

        <div className="googlereviews-marquee-track flex w-max py-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Duplicated set for a seamless loop */}
          {reviews.map((review) => (
            <ReviewCard key={`${review.id}-dup`} review={review} ariaHidden />
          ))}
        </div>
      </div>

      {/* ───────── Bottom tagline ───────── */}
      <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
        <ShieldBadge />
        <span className="text-sm font-medium tracking-wide" style={{ color: NAVY }}>
          Real people. Real stories. Real success.
        </span>
        <ShieldBadge />
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes googlereviews-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }   
        }

        .googlereviews-marquee-track {
          animation: googlereviews-marquee 28s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .googlereviews-marquee-track {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

/* small shield-check badge used in the tagline row */
const ShieldBadge: React.FC = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={GOLD} strokeWidth="1.6">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5-4-1.2-7-5-7-9.5V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default GoogleReviews;
