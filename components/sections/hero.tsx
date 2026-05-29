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
        alt="The Carter Residences estate, viewed from the eastern shore."
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
          Plate 01
          <span aria-hidden className="mx-3 text-background/45">
            /
          </span>
          XII
        </p>
      </div>

      <div className="absolute inset-x-6 bottom-10 z-10 flex flex-col gap-10 md:inset-x-10 md:bottom-14 md:flex-row md:items-end md:justify-between md:gap-16 lg:bottom-16">
        <div className="max-w-[42rem] animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-700 fill-mode-both">
          <p className="text-caption font-medium uppercase tracking-kicker text-background/90">
            Eastern Shore
            <span aria-hidden className="mx-3 text-background/45">
              ·
            </span>
            Tower II
            <span aria-hidden className="mx-3 text-background/45">
              ·
            </span>
            Releasing Q3
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-heading text-h2 font-light leading-[1.02] text-background md:mt-8 md:text-h1 lg:text-display lg:leading-[0.96]"
          >
            Twelve homes,
            <br className="hidden md:inline" />
            {" "}eleven acres.
          </h1>
          <p className="mt-6 max-w-[38ch] text-small font-light text-background/85 md:mt-8 md:text-body">
            A private estate shaped by Aleevia Studio and Patrick Carter,
            released slowly and by invitation.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-1000 fill-mode-both">
          <Link
            href="/contacts"
            className="group inline-flex h-12 items-center gap-3 border border-background/55 px-7 text-caption font-medium uppercase tracking-label text-background transition-[background-color,color,border-color] duration-300 ease-out hover:border-background hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground/30 active:translate-y-px"
          >
            Arrange a Private Viewing
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
