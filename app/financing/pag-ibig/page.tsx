import { PagIbigCalculator } from "@/components/pag-ibig-calculator";

export const metadata = {
  title: "Pag-IBIG Affordability Calculator | Aleevia Carter",
  description: "Calculate your estimated maximum home loan amount based on your gross monthly income.",
};

export default function PagIbigPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-background pt-20">
      <PagIbigCalculator />
    </main>
  );
}
