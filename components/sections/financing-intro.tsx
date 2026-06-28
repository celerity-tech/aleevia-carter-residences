import { CtaLink } from "@/components/ui/cta-link";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

export function FinancingIntro() {
  return (
    <section
      aria-labelledby="financing-heading"
      className="main-container py-24 md:py-32"
    >
      <Reveal className="max-w-[40ch]">
        <Kicker tone="gold">Financing</Kicker>
        <h2
          id="financing-heading"
          className="mt-6 font-heading text-h2 font-light text-balance text-foreground"
        >
          Owning here, made simple.
        </h2>
        <p className="mt-8 max-w-[52ch] text-body text-muted-foreground">
          Most homes are available to purchase, and we'll help you arrange
          financing — through Pag-IBIG or our bank partners — one clear step at
          a time.
        </p>
      </Reveal>

      <Reveal className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
        <div className="md:pr-16">
          <h3 className="font-heading text-h4 font-normal text-foreground">
            Pag-IBIG financing
          </h3>
          <p className="mt-5 max-w-[44ch] text-body text-muted-foreground">
            See roughly how much you could borrow based on your monthly income,
            using the standard Pag-IBIG computation.
          </p>
          <CtaLink href="/financing/pag-ibig" variant="link" className="mt-7">
            Try the calculator
          </CtaLink>
        </div>

        <div className="md:border-l md:border-border md:pl-16">
          <h3 className="font-heading text-h4 font-normal text-foreground">
            Chinabank housing loan
          </h3>
          <p className="mt-5 max-w-[44ch] text-body text-muted-foreground">
            Review the eligibility, documents, rates, and process for a
            Chinabank home loan with our accredited partner.
          </p>
          <CtaLink href="/financing/chinabank" variant="link" className="mt-7">
            See the requirements
          </CtaLink>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-14 max-w-[46ch] text-body text-muted-foreground md:mt-20">
          Prefer to rent? A limited number of homes are open to lease — tell us
          what you're looking for and we'll let you know what's available.
        </p>
      </Reveal>
    </section>
  );
}
