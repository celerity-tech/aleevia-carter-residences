"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INTEREST_RATE = 0.0625;
const MAX_AMORTIZATION_RATIO = 0.35;
const LOAN_TERMS = [5, 10, 15, 20, 25, 30] as const;

const INCOME_MIN = 15000;
const INCOME_MAX = 250000;
const INCOME_STEP = 1000;
const DEFAULT_INCOME = 40000;
const DEFAULT_TERM_YEARS = 30;

const currencyFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

function calculateMaxLoan(income: number, years: number): number {
  const monthlyPayment = income * MAX_AMORTIZATION_RATIO;
  const monthlyRate = INTEREST_RATE / 12;
  const totalPayments = years * 12;
  if (monthlyRate === 0) return monthlyPayment * totalPayments;
  return (
    monthlyPayment *
    ((1 - Math.pow(1 + monthlyRate, -totalPayments)) / monthlyRate)
  );
}

function readSliderValue(val: number | number[] | readonly number[]): number | null {
  if (typeof val === "number") return Number.isFinite(val) ? val : null;
  const first = val[0];
  return typeof first === "number" && Number.isFinite(first) ? first : null;
}

export function PagIbigCalculator() {
  const [income, setIncome] = useState<number>(DEFAULT_INCOME);
  const [years, setYears] = useState<number>(DEFAULT_TERM_YEARS);

  const monthlyAmortization = income * MAX_AMORTIZATION_RATIO;
  const maxLoanAmount = calculateMaxLoan(income, years);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="main-container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
            Affordability Calculator
          </h1>
          <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto">
            Discover how much you can borrow based on your gross monthly income
            using the classic Pag-IBIG standard computation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Inputs Section */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Label className="text-foreground font-medium text-base">
                  Gross Monthly Income
                </Label>
                <div className="text-lg font-semibold text-foreground/80">
                  {formatCurrency(income)}
                </div>
              </div>
              <Slider
                min={INCOME_MIN}
                max={INCOME_MAX}
                step={INCOME_STEP}
                value={[income]}
                onValueChange={(val) => {
                  const next = readSliderValue(val);
                  if (next !== null) setIncome(next);
                }}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-foreground/40 font-mono">
                <span>₱15k</span>
                <span>₱250k+</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-foreground font-medium text-base">
                Preferred Loan Term
              </Label>
              <Select
                value={years.toString()}
                onValueChange={(val) => setYears(Number(val))}
              >
                <SelectTrigger className="w-full text-base h-12 bg-white/50 border-foreground/10 rounded-none focus:ring-0 focus:border-foreground/30 transition-all">
                  <SelectValue placeholder="Select years" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-foreground/10">
                  {LOAN_TERMS.map((term) => (
                    <SelectItem key={term} value={term.toString()}>
                      {term} Years
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-5 border border-foreground/5 bg-foreground/2">
              <h4 className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
                Fixed Assumptions
              </h4>
              <ul className="text-sm text-foreground/70 space-y-2">
                <li>
                  Interest Rate:{" "}
                  <span className="font-semibold text-foreground">
                    {(INTEREST_RATE * 100).toFixed(2)}%
                  </span>{" "}
                  (3-Year Fixing)
                </li>
                <li>
                  Max Amortization:{" "}
                  <span className="font-semibold text-foreground">
                    {(MAX_AMORTIZATION_RATIO * 100).toFixed(0)}%
                  </span>{" "}
                  of Gross Income
                </li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-foreground text-background p-8 md:p-12 flex flex-col justify-center relative overflow-hidden h-full min-h-100">
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/hero-exterior.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent" />

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                  Estimated Max Loan
                </h3>
                <div className="font-heading text-4xl md:text-5xl text-white">
                  {formatCurrency(maxLoanAmount)}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                  Est. Monthly Amortization
                </h3>
                <div className="text-2xl md:text-3xl font-light text-white">
                  {formatCurrency(monthlyAmortization)}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <a
                  href="/contacts"
                  className="inline-block border border-white text-white px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-foreground transition-colors duration-400"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
