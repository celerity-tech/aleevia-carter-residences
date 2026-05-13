import Image from "next/image";
import { ArrowRight, BadgeCheck, FileText, Briefcase, Building2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HIGHLIGHTS = [
  { label: "Interest Rate", value: "From 6.25%", note: "3-Year Fixing" },
  { label: "Loan Term", value: "Up to 25 yrs", note: "Flexible amortization" },
  { label: "Max Loanable", value: "Up to 80%", note: "Of property value" },
];

const ELIGIBILITY = [
  "Must be a Filipino citizen (or foreign national allowed by law)",
  "At least 21 years old upon application but not exceeding 65 years old upon loan maturity",
  "Minimum gross monthly income of ₱50,000",
  "If employed: at least 2 years regular or permanent employment",
  "If self-employed: business operating profitably for at least 3 years",
];

const DOCUMENT_CATEGORIES = [
  {
    title: "Employed Applicants",
    icon: Briefcase,
    items: [
      "Duly accomplished Loan Application Form",
      "Two (2) valid government-issued IDs",
      "Certificate of Employment (COE) with compensation",
      "Latest Income Tax Return (ITR) or BIR Form 2316",
      "Payslips for the last 3 months",
    ],
  },
  {
    title: "Self-Employed / Business Owners",
    icon: Building2,
    items: [
      "Duly accomplished Loan Application Form",
      "Two (2) valid government-issued IDs",
      "DTI Registration or SEC Registration",
      "Audited Financial Statements for the last 2 years",
      "Bank statements for the last 6 months",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Pre-Qualification",
    description:
      "Submit your basic information to determine your borrowing capacity.",
  },
  {
    title: "Application & Submission",
    description:
      "Complete the application form and submit the required documents.",
  },
  {
    title: "Credit Evaluation",
    description:
      "The bank reviews your financial capacity, credit history, and appraises the property.",
  },
  {
    title: "Loan Approval",
    description:
      "Once approved, you will receive a Letter of Guaranty or Notice of Approval.",
  },
  {
    title: "Signing & Release",
    description:
      "Sign the loan documents, pay applicable fees, and the proceeds are released.",
  },
];

export function ChinabankLoanRequirements() {
  return (
    <section className="bg-zinc-50">
      {/* Hero */}
      <div className="border-b border-zinc-200/80 bg-white">
        <div className="main-container max-w-6xl py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 border border-foreground/10 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-foreground/60 mb-7 bg-zinc-50">
                <BadgeCheck className="w-3.5 h-3.5" />
                Accredited Partner
              </div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.2rem] text-foreground font-light leading-[1.1] tracking-tight mb-6">
                Chinabank
                <br />
                <span className="italic text-foreground/60">Housing Loan</span>
              </h1>
              <p className="text-foreground/70 text-sm md:text-base max-w-xl leading-relaxed">
                Secure your dream residence through one of the Philippines&rsquo;
                most trusted banking institutions. Review the eligibility,
                required documents, and process below before reaching out to our
                property specialists.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/contacts"
                  className="inline-flex items-center gap-2 bg-foreground text-white px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-foreground/85 transition-colors"
                >
                  Get Pre-Qualified
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/financing/pag-ibig"
                  className="inline-flex items-center gap-2 border border-foreground/15 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-foreground hover:border-foreground/40 transition-colors"
                >
                  Try the Calculator
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-100">
                <Image
                  src="/assets/chinabank-hero.jpeg"
                  alt="Chinabank housing loan partnership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Highlights strip */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border border-foreground/10 divide-y sm:divide-y-0 sm:divide-x divide-foreground/10 bg-white">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight.label} className="p-6 md:p-8">
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium mb-3">
                  {highlight.label}
                </p>
                <p className="font-heading text-2xl md:text-3xl font-light text-foreground mb-1">
                  {highlight.value}
                </p>
                <p className="text-xs text-foreground/55">{highlight.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="main-container max-w-6xl py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-12">
            <header className="space-y-3">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium">
                What You&rsquo;ll Need
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-light text-foreground leading-tight">
                Eligibility &amp; Documentation
              </h2>
            </header>

            <Accordion defaultValue={["eligibility"]} className="w-full">
              <AccordionItem value="eligibility" className="border-foreground/10">
                <AccordionTrigger className="font-heading text-lg md:text-xl font-light hover:no-underline hover:text-foreground/80 py-6">
                  Eligibility Criteria
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm leading-relaxed pb-6">
                  <ul className="space-y-3">
                    {ELIGIBILITY.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 flex-none w-1 h-1 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents" className="border-foreground/10">
                <AccordionTrigger className="font-heading text-lg md:text-xl font-light hover:no-underline hover:text-foreground/80 py-6">
                  Required Documents
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-5 mt-2">
                    {DOCUMENT_CATEGORIES.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div
                          key={category.title}
                          className="bg-white border border-foreground/10 p-6 hover:border-foreground/25 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-5">
                            <span className="flex-none w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/70">
                              <Icon className="w-4 h-4" />
                            </span>
                            <h4 className="font-semibold text-foreground tracking-wide uppercase text-[0.7rem]">
                              {category.title}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {category.items.map((item) => (
                              <li
                                key={item}
                                className="text-sm text-foreground/70 flex items-start gap-3"
                              >
                                <FileText className="w-3.5 h-3.5 mt-0.5 text-foreground/30 flex-none" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white border border-foreground/10">
                <header className="px-6 py-5 border-b border-foreground/10">
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/50 font-medium mb-1">
                    Step-by-Step
                  </p>
                  <h3 className="font-heading text-lg font-light text-foreground">
                    The Process
                  </h3>
                </header>
                <ol className="p-6 space-y-6">
                  {PROCESS_STEPS.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="flex-none w-6 h-6 border border-foreground/20 text-[0.65rem] font-semibold tracking-wider flex items-center justify-center text-foreground/70 mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-foreground/60 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-8 bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/hero-exterior.jpg')] bg-cover bg-center" />
                <div className="relative z-10">
                  <h3 className="font-heading text-xl mb-3 font-light">
                    Ready to start?
                  </h3>
                  <p className="text-xs text-white/60 mb-8 leading-relaxed">
                    Send us a message and our property specialists will guide
                    you through the pre-qualification process.
                  </p>
                  <a
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 w-full border border-white text-white px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-foreground transition-colors duration-300"
                  >
                    Get Pre-Qualified
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
