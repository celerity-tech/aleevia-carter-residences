import Image from "next/image";

import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

const STATS = [
  {
    value: "85",
    label: "Residences",
    note: "One- and two-bedroom loft homes.",
  },
  {
    value: "7",
    label: "Storeys",
    note: "A boutique building on E. Rodriguez Street.",
  },
  {
    value: "40–60",
    label: "Square metres",
    note: "Per loft home, across two layouts.",
  },
  {
    value: "38",
    label: "Parking slots",
    note: "Across two dedicated parking levels.",
  },
];

const PHASES = [
  {
    image: "/assets/interior/reception.png",
    alt: "The Aleevia Carter reception, Japandi plaster and oak.",
    title: "Site & story",
    description:
      "We start by walking the neighbourhood, studying the light, and understanding who the building will sit beside.",
  },
  {
    image: "/assets/interior/hallway.png",
    alt: "A calm residential hallway with warm wood niches.",
    title: "Plan & prototype",
    description:
      "Every floor plan is tested at full scale before anything is poured. If a hallway feels narrow, we know early.",
  },
  {
    image: "/assets/interior/unit-7/kitchen.png",
    alt: "A finished kitchen with integrated cabinetry and timber detailing.",
    title: "Finish & hand-off",
    description:
      "Each home is walked, inspected, and signed off in person. We'd rather take longer than rush a finish.",
  },
];

export function AboutSection() {
  return (
    <>
      {/* Opener */}
      <section className="main-container pt-32 pb-20 md:pt-40 md:pb-28">
        <Reveal>
          <Kicker tone="gold">About Aleevia Carter</Kicker>
          <h1 className="mt-8 max-w-[16ch] font-heading text-h1 font-light text-balance text-foreground">
            We build slowly, deliberately, and{" "}
            <span className="italic text-primary">for people.</span>
          </h1>
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-12"
        >
          <p className="text-caption font-medium uppercase tracking-label text-muted-foreground md:col-span-3">
            In short
          </p>
          <p className="max-w-[60ch] text-lead font-light text-foreground/80 md:col-span-9">
            A Pasay City developer building a small, deliberate portfolio of
            homes. Fewer projects, longer timelines, tighter craftsmanship —
            because the difference between a good home and a great one hides in
            details most developers don't bother with.
          </p>
        </Reveal>
      </section>

      {/* The building / founders' note */}
      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="main-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative aspect-4/5 w-full overflow-hidden rounded-md border border-border bg-card">
              <Image
                src="/assets/hero-exterior.jpg"
                alt="An illustrated portrait of the Aleevia Carter Residences tower against a bright sky."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className="mt-5 text-caption uppercase tracking-kicker text-muted-foreground">
              A note from the founders
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-6 self-center text-body text-foreground/80 lg:col-span-6 lg:col-start-7"
          >
            <p>
              We started Aleevia Carter because too many condos look impressive
              in renders and live poorly day to day — awkward kitchens, wasted
              hallways, amenities nobody ever uses.
            </p>
            <p>
              So we kept it small. One building, eighty-five homes, every floor
              plan reviewed and every unit walked before hand-over.
            </p>
            <p className="font-medium text-foreground">
              We're not the biggest developer in Pasay. That's the point.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-emerald py-20 text-emerald-foreground md:py-28">
        <div className="main-container">
          <Reveal>
            <Kicker tone="light">By the numbers</Kicker>
          </Reveal>
          <div className="mt-10 divide-y divide-emerald-foreground/15">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="grid items-baseline gap-4 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                  <p className="text-caption uppercase tracking-label tabular-nums text-emerald-foreground/55 md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-heading text-6xl font-light leading-none text-gold md:col-span-5 md:text-7xl">
                    {stat.value}
                  </p>
                  <div className="md:col-span-6">
                    <p className="text-caption font-medium uppercase tracking-label text-emerald-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-small text-emerald-foreground/75">
                      {stat.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="main-container py-20 md:py-28">
        <Reveal className="max-w-[44ch]">
          <Kicker tone="gold">How we build</Kicker>
          <h2 className="mt-6 font-heading text-h2 font-light text-balance text-foreground">
            Three phases. No shortcuts.
          </h2>
          <p className="mt-6 text-body text-muted-foreground">
            Our process is intentionally unhurried. Decisions are made in the
            room, on the floor, or in the unit — never from a spreadsheet alone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-x-8">
          {PHASES.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 0.08}>
              <article>
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={phase.image}
                    alt={phase.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-caption uppercase tracking-kicker text-muted-foreground">
                  Phase {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-h4 font-normal text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-3 text-body text-muted-foreground">
                  {phase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
