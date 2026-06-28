import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { CtaLink } from "@/components/ui/cta-link";
import { Kicker } from "@/components/ui/kicker";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Design notes, neighbourhood guides, and life at Aleevia Carter Residences — our journal is on the way.",
};

const TOPICS = [
  "Design notes",
  "The neighbourhood",
  "Homeowner stories",
  "Financing tips",
];

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="main-container pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-[44ch]">
            <Kicker tone="gold">The Journal</Kicker>
            <h1 className="mt-6 font-heading text-h1 font-light text-balance text-foreground">
              Stories from{" "}
              <span className="italic text-primary">Aleevia Carter.</span>
            </h1>
            <p className="mt-6 text-body text-muted-foreground">
              Design notes, neighbourhood guides, and a closer look at life
              inside the residence.
            </p>
          </div>
        </div>
      </section>

      <section className="main-container py-20 md:py-28">
        <div className="max-w-[52ch]">
          <span className="flex size-12 items-center justify-center rounded-sm bg-secondary text-primary">
            <BookOpen className="size-5" />
          </span>
          <h2 className="mt-7 font-heading text-h3 font-normal text-foreground">
            The first stories are on their way.
          </h2>
          <p className="mt-5 text-body text-muted-foreground">
            We're putting together our first set of articles. In the meantime,
            follow along on Facebook or come see the homes in person — we'd love
            to show you around.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink href="/contacts" variant="solid">
              Book a viewing
            </CtaLink>
            <CtaLink href={CONTACT.facebook} variant="link">
              Follow on Facebook
            </CtaLink>
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <p className="text-caption font-medium uppercase tracking-label text-muted-foreground">
              Coming soon
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {TOPICS.map((topic) => (
                <li
                  key={topic}
                  className="rounded-sm border border-border bg-card px-3.5 py-1.5 text-small text-foreground/80"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
