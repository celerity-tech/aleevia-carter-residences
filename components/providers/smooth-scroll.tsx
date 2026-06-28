"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide smooth scrolling via Lenis.
 *
 * With `root`, Lenis drives the native document scroll (no extra DOM wrapper),
 * so `position: sticky` and scroll-linked motion keep working. Visitors who ask
 * for reduced motion get plain native scrolling instead.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
