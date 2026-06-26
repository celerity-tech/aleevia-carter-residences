import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

export function Welcome() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="mx-auto max-w-350 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <p className="text-caption font-medium uppercase tracking-kicker text-muted-foreground">
            Welcome
          </p>
          <h2
            id="welcome-heading"
            className="mt-6 max-w-[14ch] font-heading text-h2 font-light text-balance text-foreground"
          >
            A quieter way to live, close to the water.
          </h2>
          <p className="mt-8 max-w-[46ch] text-body text-muted-foreground">
            Carter Residences is a small place by design: twelve homes set
            across eleven acres on the eastern shore. Wide skies, old trees, and
            the kind of evenings that make you slow down.
          </p>
          <p className="mt-5 max-w-[46ch] text-body text-muted-foreground">
            Whether you are looking to buy or to rent, there is room here to
            feel at home.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="A calm, light-filled living room with warm wood and linen, looking out to the trees."
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
