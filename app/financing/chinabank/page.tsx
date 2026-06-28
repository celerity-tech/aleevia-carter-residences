import type { Metadata } from "next";

import { ChinabankLoan } from "@/components/financing/chinabank-loan";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Chinabank housing loan",
  description:
    "Eligibility, required documents, rates, and process for financing a home at Aleevia Carter Residences through a Chinabank housing loan.",
};

export default function ChinabankPage() {
  return (
    <>
      <ChinabankLoan />
      <CtaBand
        title="Ready to start?"
        body="Book a viewing and our specialists will guide you through pre-qualification, step by step."
      />
    </>
  );
}
