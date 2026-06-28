import type { Metadata } from "next";

import { AffordabilityCalculator } from "@/components/financing/affordability-calculator";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/kicker";

export const metadata: Metadata = {
  title: "Pag-IBIG calculator",
  description:
    "Estimate your maximum Pag-IBIG home loan and monthly amortization based on your gross monthly income.",
};

export default function PagIbigPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="main-container pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-[48ch]">
            <Kicker tone="gold">Pag-IBIG financing</Kicker>
            <h1 className="mt-6 font-heading text-h1 font-light text-balance text-foreground">
              Affordability{" "}
              <span className="italic text-primary">calculator.</span>
            </h1>
            <p className="mt-6 text-body text-muted-foreground">
              See roughly how much you could borrow toward a home at Aleevia
              Carter, based on your gross monthly income and the standard
              Pag-IBIG computation.
            </p>
          </div>
        </div>
      </section>

      <section className="main-container py-16 md:py-24">
        <AffordabilityCalculator
          lenderName="Pag-IBIG"
          interestRate={0.0625}
          maxAmortizationRatio={0.35}
          loanTerms={[5, 10, 15, 20, 25, 30]}
          defaultTerm={30}
          rateNote="3-year fixing"
        />
      </section>

      <CtaBand
        title="Found a number that works?"
        body="Book a viewing and we'll walk you through the homes — and the financing — in person."
      />
    </>
  );
}
