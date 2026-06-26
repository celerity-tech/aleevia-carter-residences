import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

export function Inquiry() {
  return (
    <section aria-labelledby="inquiry-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-350 px-6 py-24 md:px-10 md:py-36">
        <Reveal className="max-w-[20ch]">
          <h2
            id="inquiry-heading"
            className="font-heading text-h1 font-light text-balance text-foreground"
          >
            Come see if one feels like home.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[42ch] text-lead text-muted-foreground">
            Book a visit and we will show you around, no pressure. Or call and
            say hello.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/contacts"
              className="group inline-flex h-12 items-center gap-3 bg-primary px-7 text-caption font-medium uppercase tracking-label text-primary-foreground transition-colors duration-300 ease-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px"
            >
              Book a visit
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              />
            </Link>

            <a
              href="tel:+639083034095"
              className="group inline-flex items-center gap-2.5 text-small font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone aria-hidden className="size-4" />
              +63 908 303 4095
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
