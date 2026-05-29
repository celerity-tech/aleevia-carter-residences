import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />

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
