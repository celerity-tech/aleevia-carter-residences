import { CalendarClock, Mail, Phone } from "lucide-react";

import { CtaLink } from "@/components/ui/cta-link";
import { BOOKING, CONTACT } from "@/lib/site";

/**
 * Google Calendar Appointment Scheduling embed.
 *
 * When NEXT_PUBLIC_BOOKING_EMBED_URL is set to a real appointment-schedule embed
 * link, this renders Google's native scheduler (which attaches a Google Meet
 * link to every confirmed booking). Until then it shows a branded fallback so no
 * broken iframe ships.
 */
export function BookingEmbed() {
  if (!BOOKING.isConfigured) {
    return (
      <div className="flex min-h-[28rem] flex-col items-start justify-center rounded-md border border-border bg-card p-8 md:p-12">
        <span className="inline-flex size-11 items-center justify-center rounded-sm bg-secondary text-primary">
          <CalendarClock className="size-5" />
        </span>
        <h3 className="mt-6 font-heading text-h4 font-normal text-foreground">
          Online booking is being set up.
        </h3>
        <p className="mt-3 max-w-[44ch] text-body text-muted-foreground">
          Our Google Calendar scheduler goes live shortly — every booking comes
          with a Google Meet link. In the meantime, reach {CONTACT.contactName}{" "}
          directly and we'll lock in a time that suits you.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaLink href={CONTACT.phoneHref} variant="solid" arrow={false}>
            <Phone className="size-4" />
            {CONTACT.phone}
          </CtaLink>
          <CtaLink href={CONTACT.emailHref} variant="outline" arrow={false}>
            <Mail className="size-4" />
            Email us
          </CtaLink>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-card">
      <iframe
        src={BOOKING.embedUrl}
        title={`Book a viewing with ${CONTACT.contactName} at Aleevia Carter Residences`}
        className="h-[40rem] w-full"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
