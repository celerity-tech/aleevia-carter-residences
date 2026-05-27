export default function Home() {
  return (
    <main>
      <section className="relative isolate flex min-h-[calc(100svh-7.25rem)] items-end overflow-hidden bg-secondary-10">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_70%_30%,var(--color-primary-10),transparent_60%),radial-gradient(80%_60%_at_20%_80%,var(--color-secondary-10),transparent_70%)]"
        />
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <p className="text-caption uppercase tracking-kicker text-primary">
            Tower Two · Crescent Wing · Releasing Q3
          </p>
          <h1 className="mt-10 max-w-[18ch] font-heading text-h1 font-normal text-foreground md:text-display">
            A private estate on the eastern shore, designed to be lived in
            slowly.
          </h1>
          <p className="mt-10 max-w-[44ch] text-lead font-light text-muted-foreground">
            Twelve residences. Eleven acres. One enduring address. Shaped by
            Aleevia Studio and Patrick Carter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              eyebrow: "01",
              title: "The Marina Penthouses",
              body: "Floor-to-ceiling glass, private elevators, and 1,800 sqft terraces over the harbour.",
            },
            {
              eyebrow: "02",
              title: "Skyline Townhomes",
              body: "Three storeys of vertical living with rooftop pools and chef-grade kitchens.",
            },
            {
              eyebrow: "03",
              title: "Garden Villas",
              body: "Single-level residences set within Aleevia's signature sculpted gardens.",
            },
          ].map((item) => (
            <article
              key={item.eyebrow}
              className="border-t border-border/60 pt-8"
            >
              <span className="text-caption uppercase tracking-kicker text-muted-foreground">
                {item.eyebrow}
              </span>
              <h3 className="mt-6 font-heading text-h3 font-normal text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[42ch] text-small text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
