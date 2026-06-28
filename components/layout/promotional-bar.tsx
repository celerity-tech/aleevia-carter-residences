import { Phone } from "lucide-react";

import { CONTACT } from "@/lib/site";

export function PromotionalBar() {
  return (
    <div className="hidden bg-emerald text-emerald-foreground md:block">
      <div className="main-container flex h-9 items-center justify-center gap-3 text-caption tracking-label">
        <span className="text-emerald-foreground/80">
          Now welcoming private viewings
        </span>
        <span aria-hidden className="text-gold">
          ·
        </span>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 transition-colors hover:text-gold"
        >
          <Phone className="size-3" />
          {CONTACT.phone}
        </a>
      </div>
    </div>
  );
}
