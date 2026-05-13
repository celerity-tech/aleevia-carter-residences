"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const NAMESPACE = "aleevia-viewing";

export function BookingEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#18181b",
            "cal-brand-emphasis": "#27272a",
            "cal-brand-text": "#ffffff",
            "cal-bg": "#ffffff",
            "cal-bg-emphasis": "#fafafa",
            "cal-bg-muted": "#f4f4f5",
            "cal-border": "#e4e4e7",
            "cal-border-subtle": "#f4f4f5",
            "cal-border-emphasis": "#a1a1aa",
            "cal-text": "#18181b",
            "cal-text-emphasis": "#09090b",
            "cal-text-muted": "#71717a",
          },
          dark: {
            "cal-brand": "#fafafa",
            "cal-brand-emphasis": "#e4e4e7",
            "cal-brand-text": "#09090b",
            "cal-bg": "#09090b",
            "cal-bg-emphasis": "#18181b",
            "cal-bg-muted": "#27272a",
            "cal-border": "#27272a",
            "cal-border-subtle": "#18181b",
            "cal-border-emphasis": "#52525b",
            "cal-text": "#fafafa",
            "cal-text-emphasis": "#ffffff",
            "cal-text-muted": "#a1a1aa",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="cal-embed-wrapper bg-white border border-foreground/10">
      <Cal
        namespace={NAMESPACE}
        calLink="acethekawaii/30min"
        config={{ layout: "month_view", theme: "light" }}
        style={{ width: "100%", height: "100%", minHeight: "640px" }}
      />
    </div>
  );
}
