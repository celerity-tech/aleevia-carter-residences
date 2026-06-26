"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds of delay, for gentle staggering within a section. */
  delay?: number;
  /** Vertical travel distance in px. Defaults to a small lift. */
  distance?: number;
};

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps a block in a single gentle, scroll-triggered reveal.
 * Honors prefers-reduced-motion by crossfading in place, no travel.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: EASE_OUT_QUINT, delay }}
    >
      {children}
    </motion.div>
  );
}
