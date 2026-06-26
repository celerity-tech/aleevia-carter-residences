import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

type HomeStory = {
  label: string;
  title: string;
  body: string;
  tenure: string;
  image: string;
  alt: string;
};

const HOME_STORIES: HomeStory[] = [
  {
    label: "By the water",
    title: "Homes that open to the shore",
    body: "A few of the residences sit right at the water's edge, with wide glass and porches built for long, slow mornings looking out.",
    tenure: "For sale, or to rent",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    alt: "A low, modern home with warm light in the windows, set near the shoreline at dusk.",
  },
  {
    label: "Among the trees",
    title: "Quieter homes, set back in the green",
    body: "Others are tucked into the older part of the estate, shaded by mature trees, with gardens that feel like they have always been there.",
    tenure: "For sale",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
    alt: "A timber-and-stone house resting among tall trees, soft afternoon light on the facade.",
  },
  {
    label: "Made to be lived in",
    title: "Finished to feel like yours",
    body: "Inside, every home is the work of Aleevia Studio and Patrick Carter: warm materials, honest proportions, and room to make it your own.",
    tenure: "A handful available to rent",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    alt: "A welcoming interior with a linen sofa, wood floors, and greenery by the window.",
  },
];

export function TheHomes() {
  return (
    <section
      aria-labelledby="homes-heading"
      className="bg-secondary/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <Reveal className="max-w-[52ch]">
          <p className="text-caption font-medium uppercase tracking-kicker text-muted-foreground">
            The Homes
          </p>
          <h2
            id="homes-heading"
            className="mt-6 font-heading text-h2 font-light text-balance text-foreground"
          >
            Twelve homes, no two quite the same.
          </h2>
          <p className="mt-8 text-body text-muted-foreground">
            Some sit low by the water; others rise among the trees. Each is
            built with the same care, then finished to feel like yours. Some are
            for sale, with financing we can help you arrange. A handful are open
            to rent.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {HOME_STORIES.map((story, index) => (
            <Reveal key={story.label}>
              <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <div
                  className={
                    index % 2 === 1
                      ? "md:col-span-6 md:col-start-7 md:order-last"
                      : "md:col-span-6"
                  }
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1
                      ? "md:col-span-5 md:col-start-1 md:row-start-1"
                      : "md:col-span-5 md:col-start-8"
                  }
                >
                  <p className="text-caption font-medium uppercase tracking-kicker text-muted-foreground">
                    {story.label}
                  </p>
                  <h3 className="mt-5 font-heading text-h3 font-normal text-balance text-foreground">
                    {story.title}
                  </h3>
                  <p className="mt-5 max-w-[44ch] text-body text-muted-foreground">
                    {story.body}
                  </p>
                  <p className="mt-6 text-caption font-medium uppercase tracking-label text-foreground/70">
                    {story.tenure}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
