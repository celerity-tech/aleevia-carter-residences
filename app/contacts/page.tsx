import type { Metadata } from "next";
import { CalendarClock, MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { BookingEmbed } from "@/components/booking-embed";

export const metadata: Metadata = {
  title: "Schedule a Private Viewing — Aleevia Carter Residences",
  description:
    "Book a 30-minute private viewing with an Aleevia Carter property specialist. Choose a time that suits you — we'll take care of the rest.",
};

const WHAT_TO_EXPECT = [
  {
    icon: CalendarClock,
    title: "30-Minute Walkthrough",
    description:
      "An unhurried tour of the model unit, common amenities, and the surrounding neighborhood with your dedicated specialist.",
  },
  {
    icon: Clock3,
    title: "Flexible Timing",
    description:
      "Bookings can be moved or cancelled up to 24 hours before your scheduled time — no questions asked.",
  },
  {
    icon: MapPin,
    title: "On-Site or Virtual",
    description:
      "Prefer to stay home? Indicate it in the booking notes and we will host the tour over a live video walkthrough.",
  },
];

const DIRECT_CONTACT = [
  {
    icon: Phone,
    label: "Sales Hotline",
    value: "+63 917 000 0000",
    href: "tel:+639170000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "viewings@aleeviacarter.com",
    href: "mailto:viewings@aleeviacarter.com",
  },
  {
    icon: MapPin,
    label: "Showroom",
    value: "Aleevia Carter Residences, Pasay City",
    href: "https://maps.google.com/?q=Pasay+City",
  },
];

export default function ContactsPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-background pt-[80px]">
      {/* Hero */}
      <section className="bg-white border-b border-zinc-200/80">
        <div className="main-container max-w-6xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-foreground/10 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-foreground/60 mb-7 bg-zinc-50">
              <CalendarClock className="w-3.5 h-3.5" />
              Book a Viewing
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.2rem] text-foreground font-light leading-[1.1] tracking-tight mb-6">
              Schedule a private
              <br />
              <span className="italic text-foreground/60">
                tour of the residences.
              </span>
            </h1>
            <p className="text-foreground/70 text-sm md:text-base max-w-xl leading-relaxed">
              Select a 30-minute window below and one of our property
              specialists will walk you through the model unit, amenities, and
              the lifestyle that defines Aleevia Carter.
            </p>
          </div>
        </div>
      </section>

      {/* Booking + Sidebar */}
      <section className="main-container max-w-6xl py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium mb-5">
                What to Expect
              </p>
              <ul className="space-y-7">
                {WHAT_TO_EXPECT.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex-none w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/70">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1.5 tracking-wide">
                        {title}
                      </h3>
                      <p className="text-xs text-foreground/60 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-foreground/10 pt-10">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium mb-5">
                Prefer to talk first?
              </p>
              <ul className="space-y-5">
                {DIRECT_CONTACT.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-start gap-4 -m-2 p-2 hover:bg-white transition-colors"
                    >
                      <span className="flex-none w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/70 group-hover:border-foreground/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="flex-1">
                        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/45 font-medium mb-1">
                          {label}
                        </p>
                        <p className="text-sm text-foreground group-hover:text-foreground/70 transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Embed */}
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-baseline justify-between">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium">
                Select a Time
              </p>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/40">
                Asia / Manila
              </p>
            </div>
            <BookingEmbed />
            <p className="mt-6 text-xs text-foreground/50 leading-relaxed">
              Bookings are managed via Cal.com. A confirmation email with the
              meeting details will be sent immediately after you complete the
              form.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
