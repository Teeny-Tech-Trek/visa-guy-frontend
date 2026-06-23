import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

/*
  Shared scroll-reveal helpers (framer-motion).
  - <Reveal>  → wrapper for standalone blocks (headings, paragraphs, single images).
  - revealProps() → spread onto an existing element turned into motion.* so the
                    element's own layout classes (grid/flex item, col-span, etc.)
                    are fully preserved while it still fades + slides in on scroll.

  Direction = the side the element travels in FROM:
    "left"  → starts shifted left,  slides right into place
    "right" → starts shifted right, slides left into place
    "up"    → starts lower (from bottom), rises into place
    "down"  → starts higher (from top), drops into place
*/

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

const DISTANCE = 48;

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: DISTANCE },
  down: { x: 0, y: -DISTANCE },
  left: { x: -DISTANCE, y: 0 },
  right: { x: DISTANCE, y: 0 },
  none: { x: 0, y: 0 },
};

export const fadeVariants = (
  direction: RevealDirection = "up",
  distance = DISTANCE,
  duration = 0.6,
  delay = 0,
): Variants => {
  const base = directionOffset[direction] ?? directionOffset.up;
  const scale = distance / DISTANCE;
  return {
    hidden: { opacity: 0, x: base.x * scale, y: base.y * scale },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 0.61, 0.36, 1] },
    },
  };
};

/** Spread onto a `motion.*` element to give it a scroll-triggered reveal. */
export const revealProps = (
  direction: RevealDirection = "up",
  delay = 0,
  amount = 0.2,
) => ({
  variants: fadeVariants(direction, DISTANCE, 0.6, delay),
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount },
});

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

/** Wrapper that fades + slides its children in when scrolled into view. */
export const Reveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = DISTANCE,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : fadeVariants(direction, distance, duration, delay);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
