"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Concierge presence badge.
 *
 * Display-only for now — the live chat backend is not wired up yet, so this is
 * intentionally non-interactive (no panel, not a button). It signals that a real
 * person is reachable; the actual chat will be attached later.
 */
export function ConciergeChat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
      className="pointer-events-none fixed bottom-5 right-5 z-40 select-none sm:bottom-7 sm:right-7"
    >
      <div className="inline-flex items-center gap-3 rounded-sm bg-emerald px-5 py-3.5 text-emerald-foreground shadow-lg shadow-emerald/30 ring-1 ring-gold/30">
        <span className="relative flex items-center justify-center text-gold">
          <MessageCircle className="size-4" />
          <span className="absolute -right-1 -top-1 flex size-2">
            {!reduceMotion && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/70" />
            )}
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>
        </span>
        <span className="text-caption font-medium uppercase tracking-label">
          Concierge
        </span>
      </div>
    </motion.div>
  );
}
