"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STATS = [
  {
    value: "120+",
    label: "Curated Residences",
    note: "Delivered across our portfolio since 2009.",
  },
  {
    value: "15",
    label: "Years of Building",
    note: "Two cycles of the Metro Manila skyline — and counting.",
  },
  {
    value: "5★",
    label: "Average Resident Rating",
    note: "Drawn from anonymous, post-handover surveys.",
  },
];

const PHASES = [
  {
    image: "/assets/amenities/lobby-entrance.png",
    title: "Site & Story",
    description:
      "Before we draw a line, we walk the neighborhood, study the light, and meet the people the building will sit beside.",
  },
  {
    image: "/assets/interior/hallway.png",
    title: "Plan & Prototype",
    description:
      "Every floorplan is mocked up at full scale on plywood and tape. If a hallway feels narrow, we know before it’s poured.",
  },
  {
    image: "/assets/interior/reception.png",
    title: "Finish & Hand-Off",
    description:
      "Each unit is walked, inspected, and signed off in person. We’d rather miss a deadline than rush a finish.",
  },
];

export function AboutSection() {
  return (
    <>
      {/* 1 — Editorial opener: typography only, no image */}
      <section className="bg-white pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="main-container max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-10"
          >
            — About Aleevia Carter
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-light tracking-tight text-foreground leading-[0.98]"
          >
            We build
            <span className="italic font-normal text-muted-foreground"> slowly</span>,
            <br />
            deliberately,
            <br />
            and{" "}
            <span className="italic font-normal text-muted-foreground">
              for people
            </span>{" "}
            —
            <br />
            not portfolios.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-12 gap-8 border-t border-zinc-200 pt-10"
          >
            <p className="md:col-span-3 text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground font-medium">
              In short
            </p>
            <p className="md:col-span-9 text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl">
              A Pasay City developer building a small, deliberate portfolio of
              homes. Fewer projects. Longer timelines. Tighter craftsmanship —
              because the difference between a good apartment and a great one
              hides in details most developers don&rsquo;t bother with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2 — Founder's note: small portrait-style image left, narrow text right */}
      <section className="bg-zinc-50 border-y border-zinc-200/70 py-20 md:py-28">
        <div className="main-container max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden bg-zinc-100">
                <Image
                  src="/assets/amenities/lounge-area.png"
                  alt="A quiet corner of the residence"
                  fill
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-cover grayscale"
                />
              </div>
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mt-5">
                — A note from the founders
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 lg:col-start-6 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed"
            >
              <p>
                We started Aleevia Carter because we kept walking through
                condos in the metro that looked impressive in renders, but
                lived poorly day-to-day. Awkward kitchens. Hallways that wasted
                square meters. Amenities that no one ever used.
              </p>
              <p>
                Our team partners with architects, engineers, and interior
                specialists who&rsquo;ve spent decades building in Manila. We
                review every floor plate before it&rsquo;s approved. We walk
                every unit before it&rsquo;s handed over.
              </p>
              <p className="text-foreground font-medium">
                We&rsquo;re not the biggest developer in Pasay. That&rsquo;s
                the point.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 — Numbers as full-width horizontal rows */}
      <section className="bg-foreground text-background">
        <div className="main-container max-w-6xl py-20 md:py-28">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-white/55 font-medium mb-12">
            — By the numbers
          </p>
          <div className="divide-y divide-white/15">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-baseline py-10 md:py-14 first:pt-0 last:pb-0"
              >
                <div className="md:col-span-2 text-xs tracking-[0.25em] uppercase text-white/45 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-5">
                  <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-none">
                    {stat.value}
                  </p>
                </div>
                <div className="md:col-span-5 space-y-2">
                  <p className="text-sm tracking-[0.2em] uppercase text-white font-medium">
                    {stat.label}
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {stat.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Behind the craft: three-column gallery with captions */}
      <section className="bg-white">
        <div className="main-container max-w-6xl py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
            <div className="lg:col-span-4">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
                — How we build
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight">
                Three phases.
                <br />
                <span className="italic text-muted-foreground">
                  No shortcuts.
                </span>
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-base md:text-lg text-foreground/70 leading-relaxed self-end">
              Our process is intentionally unhurried. Every decision is made in
              the room, on the floor, or in the unit — never from a spreadsheet
              alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-12">
            {PHASES.map((phase, idx) => (
              <motion.article
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-100 mb-6">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Phase {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {phase.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
