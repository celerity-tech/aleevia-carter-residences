import type { ElementType } from "react";

import { cn } from "@/lib/utils";

/**
 * The brochure's labelled-section device ("THE PROPERTY", "THE CONCEPT").
 * Used deliberately and sparingly — it is brand voice, not a per-section reflex.
 */
export function Kicker({
  children,
  className,
  as: Tag = "p",
  tone = "muted",
}: {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  tone?: "muted" | "gold" | "light";
}) {
  return (
    <Tag
      className={cn(
        "text-caption font-medium uppercase tracking-kicker",
        tone === "muted" && "text-muted-foreground",
        tone === "gold" && "text-gold",
        tone === "light" && "text-emerald-foreground/70",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
