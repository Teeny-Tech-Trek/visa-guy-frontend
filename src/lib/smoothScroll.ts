/*
  Smooth-scroll singleton.
  Holds the app-wide Locomotive Scroll (v5 / Lenis-based) instance so any
  component (e.g. the Navbar) can trigger a smooth scroll-to-section without
  prop-drilling the instance. Falls back to native smooth scroll if Locomotive
  hasn't initialised yet.
*/

import type LocomotiveScroll from "locomotive-scroll";

let instance: LocomotiveScroll | null = null;

/** Offset for the fixed navbar so section tops aren't hidden under it. */
const NAV_OFFSET = -90;

export function setSmoothScroll(i: LocomotiveScroll | null) {
  instance = i;
}

/** Smoothly scroll to a section by CSS selector (e.g. "#about"). */
export function scrollToTarget(target: string) {
  const el = document.querySelector(target);
  if (!el) return;

  if (instance) {
    instance.scrollTo(el as HTMLElement, { offset: NAV_OFFSET, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Jump to the very top of the page instantly (used on route changes). */
export function scrollToTop() {
  if (instance) {
    // Locomotive v5 (Lenis): duration 0 = no animation, just snap to top.
    instance.scrollTo(0, { duration: 0, immediate: true });
  }
  // Also reset the native scroll position as a fallback / belt-and-braces.
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}
