import React from "react";
import styles from "./HeroWorldMap.module.css";

/*
  ─────────────────────────────────────────────────────────────
  VISA GUY — Premium Animated World-Map Network
  ─────────────────────────────────────────────────────────────
  Pure CSS + React. NO canvas, NO SVG, NO three.js, NO Lottie.
  Built only from <div>s + CSS gradients / transforms / keyframes.

  Layer order inside HeroPage:
    Background Image -> Dark Overlay -> [THIS LAYER] -> Hero Content

  All motion lives in the CSS module. React only places the nodes /
  arcs and feeds per-element timing via CSS custom properties, so
  there are zero per-frame JS calculations (won't touch hero perf).
  Sits behind the text, pointer-events:none, low z-index.
  ─────────────────────────────────────────────────────────────
*/

type Node = {
  top: string;
  left: string;
  /* animation duration 3–5s + stagger so glow intensity varies */
  dur: string;
  delay: string;
  hub?: boolean;
};

type Arc = {
  left: string;
  top: string;
  width: string;
  height: string;
  /* rotation orients the curve between node clusters */
  rotate: number;
  /* trail travel time — different per path */
  dur: string;
  delay: string;
};

/* Glowing connection nodes (percentages are relative to the layer box) */
const NODES: Node[] = [
  { top: "20%", left: "12%", dur: "4.2s", delay: "0s", hub: true },
  { top: "55%", left: "28%", dur: "3.4s", delay: "0.6s" },
  { top: "30%", left: "47%", dur: "4.8s", delay: "0.3s" },
  { top: "72%", left: "58%", dur: "3.8s", delay: "1.1s" },
  { top: "18%", left: "73%", dur: "4.5s", delay: "0.2s", hub: true },
  { top: "48%", left: "86%", dur: "3.2s", delay: "0.9s" },
  { top: "82%", left: "38%", dur: "5s", delay: "0.5s" },
];

/* Curved flight-path connections, each with its own light trail timing */
const ARCS: Arc[] = [
  { left: "8%", top: "16%", width: "44%", height: "26%", rotate: 7, dur: "4.6s", delay: "0s" },
  { left: "26%", top: "30%", width: "52%", height: "30%", rotate: -9, dur: "5.8s", delay: "0.9s" },
  { left: "40%", top: "20%", width: "40%", height: "24%", rotate: 15, dur: "6.2s", delay: "0.4s" },
  { left: "20%", top: "50%", width: "46%", height: "24%", rotate: -5, dur: "5.1s", delay: "1.4s" },
  { left: "48%", top: "40%", width: "38%", height: "30%", rotate: 22, dur: "6.8s", delay: "0.7s" },
];

/* half the duration as a NEGATIVE delay -> a 2nd comet starts mid-cycle,
   so every arc always has a light travelling on it (no idle gap). */
const halfDelay = (dur: string) => `-${parseFloat(dur) / 2}s`;

const HeroWorldMap: React.FC = () => {
  return (
    <div className={styles.layer} aria-hidden="true">
      {/* Dotted world-map pattern (breathing glow) */}
      <div className={styles.dots} />

      {/* Curved connection arcs + travelling light trails */}
      {ARCS.map((a, i) => (
        <div
          key={`arc-${i}`}
          className={styles.arc}
          style={{
            left: a.left,
            top: a.top,
            width: a.width,
            height: a.height,
            transform: `rotate(${a.rotate}deg)`,
          }}
        >
          <span
            className={styles.trail}
            style={
              {
                "--dur": a.dur,
                "--delay": a.delay,
              } as React.CSSProperties
            }
          />
          {/* 2nd comet (offset half a cycle) -> path is never idle */}
          <span
            className={styles.trail}
            style={
              {
                "--dur": a.dur,
                "--delay": halfDelay(a.dur),
              } as React.CSSProperties
            }
          />
        </div>
      ))}

      {/* Glowing pulse nodes */}
      {NODES.map((n, i) => (
        <span
          key={`node-${i}`}
          className={`${styles.node} ${n.hub ? styles.hub : ""}`}
          style={
            {
              top: n.top,
              left: n.left,
              "--dur": n.dur,
              "--delay": n.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default HeroWorldMap;
