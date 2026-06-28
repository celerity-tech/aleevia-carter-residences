"use client";

import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Classic back-to-top control. Appears after the visitor scrolls past the first
 * screen and rides Lenis back up (native smooth fallback when Lenis is off).
 * Sits above the concierge badge in the bottom-right control stack.
 */
export function ScrollToTop() {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: reduceMotion ? 0 : 1 });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-[5.75rem] right-5 z-40 inline-flex size-11 items-center justify-center rounded-sm bg-emerald text-gold shadow-lg shadow-emerald/30 ring-1 ring-gold/30 transition-colors hover:bg-emerald/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-[6.75rem] sm:right-7"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
