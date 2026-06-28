"use client";

import { useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export type CalculatorConfig = {
  /** Anchor id so a CTA can scroll straight to the calculator. */
  id?: string;
  lenderName: string;
  /** Annual interest rate as a decimal, e.g. 0.0625 for 6.25%. */
  interestRate: number;
  /** Share of gross monthly income usable for amortization, e.g. 0.35. */
  maxAmortizationRatio: number;
  loanTerms: number[];
  defaultTerm: number;
  /** Optional loan-to-value ceiling note, e.g. 0.8 for 80%. */
  maxLtv?: number;
  rateNote?: string;
};

const INCOME_MIN = 15_000;
const INCOME_MAX = 250_000;
const INCOME_STEP = 1_000;
const DEFAULT_INCOME = 50_000;

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

function maxLoanFromIncome(
  income: number,
  years: number,
  rate: number,
  ratio: number,
) {
  const monthlyPayment = income * ratio;
  const monthlyRate = rate / 12;
  const totalPayments = years * 12;
  if (monthlyRate === 0) return monthlyPayment * totalPayments;
  return (
    monthlyPayment * ((1 - (1 + monthlyRate) ** -totalPayments) / monthlyRate)
  );
}

function readSliderValue(val: number | readonly number[]): number | null {
  if (typeof val === "number") return Number.isFinite(val) ? val : null;
  const first = val[0];
  return typeof first === "number" && Number.isFinite(first) ? first : null;
}

export function AffordabilityCalculator(config: CalculatorConfig) {
  const {
    id = "calculator",
    lenderName,
    interestRate,
    maxAmortizationRatio,
    loanTerms,
    defaultTerm,
    maxLtv,
    rateNote,
  } = config;

  const [income, setIncome] = useState(DEFAULT_INCOME);
  const [years, setYears] = useState(defaultTerm);

  const monthlyAmortization = income * maxAmortizationRatio;
  const maxLoan = maxLoanFromIncome(
    income,
    years,
    interestRate,
    maxAmortizationRatio,
  );

  return (
    <div id={id} className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Inputs */}
      <div className="flex flex-col gap-10">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <Label className="text-body font-medium text-foreground">
              Gross monthly income
            </Label>
            <span className="text-lead font-medium tabular-nums text-foreground">
              {peso.format(income)}
            </span>
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
            aria-label="Gross monthly income"
            className="py-2"
          />
          <div className="flex justify-between text-caption tabular-nums text-muted-foreground">
            <span>₱15k</span>
            <span>₱250k+</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-body font-medium text-foreground">
            Preferred loan term
          </Label>
          <Select
            value={String(years)}
            onValueChange={(val) => setYears(Number(val))}
          >
            <SelectTrigger className="h-12 w-full text-body">
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent>
              {loanTerms.map((term) => (
                <SelectItem
                  key={term}
                  value={String(term)}
                  className="text-body"
                >
                  {term} years
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border border-border bg-secondary/40 p-5">
          <p className="text-caption font-medium uppercase tracking-label text-muted-foreground">
            Assumptions
          </p>
          <ul className="mt-3 space-y-2 text-small text-muted-foreground">
            <li>
              Interest rate{" "}
              <span className="font-semibold text-foreground">
                {(interestRate * 100).toFixed(2)}%
              </span>
              {rateNote ? ` (${rateNote})` : ""}
            </li>
            <li>
              Up to{" "}
              <span className="font-semibold text-foreground">
                {(maxAmortizationRatio * 100).toFixed(0)}%
              </span>{" "}
              of gross income toward amortization
            </li>
            {maxLtv ? (
              <li>
                Financing up to{" "}
                <span className="font-semibold text-foreground">
                  {(maxLtv * 100).toFixed(0)}%
                </span>{" "}
                of the property value
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col justify-center gap-10 rounded-md bg-emerald p-8 text-emerald-foreground md:p-12">
        <div>
          <p className="text-caption font-medium uppercase tracking-label text-emerald-foreground/60">
            Estimated maximum loan
          </p>
          <p className="mt-3 font-heading text-h2 font-light tabular-nums text-gold">
            {peso.format(maxLoan)}
          </p>
        </div>
        <div>
          <p className="text-caption font-medium uppercase tracking-label text-emerald-foreground/60">
            Estimated monthly amortization
          </p>
          <p className="mt-3 font-heading text-h4 font-light tabular-nums text-emerald-foreground">
            {peso.format(monthlyAmortization)}
          </p>
        </div>
        <div className="border-t border-emerald-foreground/15 pt-8">
          <p className="text-caption text-emerald-foreground/60">
            Estimates only, using the standard {lenderName} computation — not a
            loan offer.
          </p>
          <CtaLink href="/contacts" variant="outlineLight" className="mt-6">
            Talk to a specialist
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
