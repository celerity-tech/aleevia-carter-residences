import { AboutSection } from "@/components/about-section";
import { LocationSection } from "@/components/location-section";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "About | Aleevia Carter Residences",
  description:
    "Meet the team behind Aleevia Carter Residences — a Pasay City developer focused on a small, deliberate portfolio of homes built around the people who live in them.",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-background pt-20">
      <AboutSection />
      <LocationSection />
      <CtaSection />
    </main>
  );
}
