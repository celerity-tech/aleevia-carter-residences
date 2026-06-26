import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

export function TheShore() {
  return (
    <section
      aria-labelledby="shore-heading"
      className="relative isolate flex min-h-[80svh] items-end overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="The eastern shore at golden hour: still water meeting a quiet, tree-lined coast."
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 pb-14 md:px-10 md:pb-20">
        <Reveal className="max-w-[42rem]">
          <p className="text-caption font-medium uppercase tracking-kicker text-background/90">
            The Eastern Shore
          </p>
          <h2
            id="shore-heading"
            className="mt-6 font-heading text-h2 font-light text-balance text-background"
          >
            Eleven acres on the water's edge.
          </h2>
          <p className="mt-6 max-w-[48ch] text-body text-background/90">
            The estate runs down to the shoreline, with quiet lanes, old trees,
            and open ground left as it is. Town is a short drive. The water is
            at your doorstep.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
