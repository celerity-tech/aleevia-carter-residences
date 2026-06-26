import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex h-svh w-full overflow-hidden bg-foreground/5"
    >
      <Image
        src="/assets/hero-exterior.jpg"
        alt="The homes at Carter Residences, set among trees on the eastern shore."
        fill
        priority
        sizes="100vw"
        className="object-cover animate-in fade-in duration-[1400ms] ease-out"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-foreground/45 via-foreground/10 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-foreground/70 via-foreground/22 to-transparent"
      />

      <div className="absolute inset-x-6 top-6 z-10 flex items-start justify-between gap-6 md:inset-x-10 md:top-10">
        <p className="text-caption font-medium uppercase tracking-monogram text-background animate-in fade-in duration-1000 delay-300 fill-mode-both">
          Carter Residences
        </p>
        <p className="hidden text-caption font-medium uppercase tracking-kicker text-background/85 animate-in fade-in duration-1000 delay-500 fill-mode-both sm:block">
          Now welcoming visitors
        </p>
      </div>

      <div className="absolute inset-x-6 bottom-10 z-10 flex flex-col gap-10 md:inset-x-10 md:bottom-14 md:flex-row md:items-end md:justify-between md:gap-16 lg:bottom-16">
        <div className="max-w-[42rem] animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-700 fill-mode-both">
          <p className="text-caption font-medium uppercase tracking-kicker text-background/90">
            Homes on the eastern shore
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-heading text-h2 font-light leading-[1.02] text-background md:mt-8 md:text-h1 lg:text-display lg:leading-[0.96]"
          >
            Twelve homes by the water,
            <br className="hidden md:inline" />
            {" "}one could be yours.
          </h1>
          <p className="mt-6 max-w-[42ch] text-small font-light text-background/85 md:mt-8 md:text-body">
            A small neighborhood on the eastern shore, designed by Aleevia
            Studio and Patrick Carter. Come see if one feels like home.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-1000 fill-mode-both">
          <Link
            href="/contacts"
            className="group inline-flex h-12 items-center gap-3 border border-background/55 px-7 text-caption font-medium uppercase tracking-label text-background transition-[background-color,color,border-color] duration-300 ease-out hover:border-background hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground/30 active:translate-y-px"
          >
            Book a visit
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
