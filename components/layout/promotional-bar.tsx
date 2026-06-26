import { Phone } from "lucide-react";

export function PromotionalBar() {
  return (
    <div className="hidden border-b border-border/40 md:block">
      <div className="mx-auto flex h-9 max-w-350 items-center justify-center gap-3 px-10 text-caption uppercase tracking-label text-foreground/80">
        <span>Questions? Give us a call</span>
        <span aria-hidden>·</span>
        <a
          href="tel:+639083034095"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <Phone className="size-3" />
          +63 908 303 4095
        </a>
      </div>
    </div>
  );
}
