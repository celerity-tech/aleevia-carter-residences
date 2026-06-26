import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

export function OwnOrRent() {
  return (
    <section
      aria-labelledby="tenure-heading"
      className="mx-auto max-w-350 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal className="max-w-[40ch]">
        <p className="text-caption font-medium uppercase tracking-kicker text-muted-foreground">
          Owning or Renting
        </p>
        <h2
          id="tenure-heading"
          className="mt-6 font-heading text-h2 font-light text-balance text-foreground"
        >
          Two ways to make it home.
        </h2>
      </Reveal>

      <Reveal className="mt-14 md:mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-0">
          <div className="md:pr-16">
            <h3 className="font-heading text-h4 font-normal text-foreground">
              Buy your home
            </h3>
            <p className="mt-5 max-w-[44ch] text-body text-muted-foreground">
              Own one of the residences outright. We can help you arrange
              financing through Pag-IBIG or our bank partners, and walk you
              through the requirements one step at a time.
            </p>
            <Link
              href="/financing/pag-ibig"
              className="group mt-7 inline-flex items-center gap-2 text-small font-medium text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              See financing options
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>

          <div className="md:border-l md:border-border md:pl-16">
            <h3 className="font-heading text-h4 font-normal text-foreground">
              Rent your home
            </h3>
            <p className="mt-5 max-w-[44ch] text-body text-muted-foreground">
              Prefer to lease? A limited number of homes are open to rent. Tell
              us what you are looking for and we will let you know what is
              available.
            </p>
            <Link
              href="/contacts"
              className="group mt-7 inline-flex items-center gap-2 text-small font-medium text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ask about rentals
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        <p className="mt-14 max-w-[40ch] text-body text-muted-foreground md:mt-20">
          Not sure which suits you? Come visit and we will talk it through.
        </p>
      </Reveal>
    </section>
  );
}
