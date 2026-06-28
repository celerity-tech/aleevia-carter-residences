"use client";

import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Kicker } from "@/components/ui/kicker";
import { cn } from "@/lib/utils";

// Placeholder reel — replace with the project's own resident video when filmed.
const YOUTUBE_VIDEO_ID = "Obaq2ddTYRs";

type Testimonial =
  | {
      type: "video";
      videoId: string;
      videoLabel: string;
      videoTitle: string;
      author: string;
      role: string;
    }
  | {
      type: "text";
      quote: string;
      author: string;
      role: string;
    };

const TESTIMONIALS: Testimonial[] = [
  {
    type: "video",
    videoId: YOUTUBE_VIDEO_ID,
    videoLabel: "Homeowner Story",
    videoTitle: "Why we chose Aleevia Carter",
    author: "Jonathan Pierce",
    role: "Two-bedroom resident",
  },
  {
    type: "text",
    quote:
      "It feels less like a unit and more like a home that was thought through. The light, the wood, the way the loft is laid out — every corner has a reason to be there.",
    author: "Samantha Hayes",
    role: "One-bedroom resident",
  },
  {
    type: "video",
    videoId: YOUTUBE_VIDEO_ID,
    videoLabel: "Design Walkthrough",
    videoTitle: "A closer look inside",
    author: "David Lim",
    role: "Interior Design Weekly",
  },
  {
    type: "text",
    quote:
      "The mezzanine changes everything. Natural light pours down through the loft and the living area becomes somewhere you actually want to spend your evenings.",
    author: "Maria Santos",
    role: "Architectural Digest PH",
  },
];

function VideoThumbnail({
  videoId,
  label,
  title,
}: {
  videoId: string;
  label: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full bg-foreground"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group/video absolute inset-0 h-full w-full bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Play: ${title}`}
    >
      {/* YouTube thumbnail (plain img — third-party host, no next/image config needed). */}
      {/* biome-ignore lint/performance/noImgElement: external YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-300 group-hover/video:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center bg-background/90 text-foreground transition-colors group-hover/video:bg-background md:size-20">
          <Play className="ml-1 size-6 md:size-7" fill="currentColor" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 text-left md:p-8">
        <span className="block text-caption font-medium uppercase tracking-kicker text-gold">
          {label}
        </span>
        <span className="mt-1 block font-heading text-lead font-normal text-background">
          {title}
        </span>
      </span>
    </button>
  );
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-border bg-background py-24 md:py-32"
    >
      <div className="main-container mb-14 flex items-end justify-between gap-6 md:mb-20">
        <div>
          <Kicker tone="gold">Testimonials</Kicker>
          <h2
            id="testimonials-heading"
            className="mt-6 font-heading text-h2 font-light text-balance text-foreground"
          >
            In their own words.
          </h2>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="main-container">
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4 md:-ml-6">
            {TESTIMONIALS.map((item) => (
              <CarouselItem
                key={item.author}
                className="basis-[85%] pl-4 md:basis-[70%] md:pl-6 lg:basis-[55%]"
              >
                {item.type === "video" ? (
                  <figure>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
                      <VideoThumbnail
                        videoId={item.videoId}
                        label={item.videoLabel}
                        title={item.videoTitle}
                      />
                    </div>
                    <figcaption className="mt-5">
                      <p className="text-caption font-semibold uppercase tracking-label text-foreground">
                        {item.author}
                      </p>
                      <p className="mt-1 text-small text-muted-foreground">
                        {item.role}
                      </p>
                    </figcaption>
                  </figure>
                ) : (
                  <figure className="flex h-full flex-col justify-between rounded-md border border-border bg-secondary/40 p-8 md:p-10 lg:p-12">
                    <div>
                      <span
                        aria-hidden
                        className="block font-heading text-6xl leading-none text-gold/50 select-none"
                      >
                        &ldquo;
                      </span>
                      <blockquote className="mt-4 font-heading text-h4 font-light leading-snug text-foreground">
                        {item.quote}
                      </blockquote>
                    </div>
                    <figcaption className="mt-10 border-t border-border pt-6">
                      <p className="text-caption font-semibold uppercase tracking-label text-foreground">
                        {item.author}
                      </p>
                      <p className="mt-1 text-small text-muted-foreground">
                        {item.role}
                      </p>
                    </figcaption>
                  </figure>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <span
                key={`${item.author}-dot`}
                className={cn(
                  "h-1.5 transition-all duration-300",
                  index === current ? "w-6 bg-primary" : "w-1.5 bg-border",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Next testimonial"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
