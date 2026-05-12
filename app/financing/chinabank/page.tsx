import { ChinabankLoanRequirements } from "@/components/chinabank-loan-requirements";

export const metadata = {
  title: "Chinabank Housing Loan | Aleevia Carter Residences",
  description: "Review the eligibility criteria, required documents, and process steps for a Chinabank Housing Loan.",
};

export default function ChinabankPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-background pt-[80px]">
      <ChinabankLoanRequirements />
    </main>
  );
}
