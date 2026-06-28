import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { CtaBand } from "@/components/sections/cta-band";
import { LocationSection } from "@/components/sections/location-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the developer behind Aleevia Carter Residences — a Pasay City team building a small, deliberate portfolio of homes around the people who live in them.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <LocationSection />
      <CtaBand
        title="Want to see it in person?"
        body="Book a private viewing and we'll show you the model unit, the amenities, and the neighbourhood — no pressure."
      />
    </>
  );
}
