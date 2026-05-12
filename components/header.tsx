"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href?: string;
  megaMenu?: {
    groups: {
      category: string;
      links: { label: string; href: string }[];
    }[];
  };
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Financing", 
    megaMenu: {
      groups: [
        {
          category: "Affordability Calculators",
          links: [
            { label: "Pag-IBIG Calculator", href: "/financing/pag-ibig" },
          ]
        },
        {
          category: "Bank Partners & Loans",
          links: [
            { label: "Chinabank Requirements", href: "/financing/chinabank" },
          ]
        }
      ]
    }
  },
  { label: "Projects", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<NavLink["megaMenu"] | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        onMouseLeave={() => setActiveMegaMenu(null)}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled || activeMegaMenu
            ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm shadow-zinc-100/50"
            : "bg-transparent",
          // Padding transition
          scrolled || activeMegaMenu ? "py-0" : "py-4 md:py-5 lg:py-6"
        )}
      >
        <div className={cn(
          "main-container flex items-center justify-between transition-all duration-500",
          scrolled || activeMegaMenu ? "py-4" : "py-0"
        )}>
          {/* Logo */}
          <a
            href="/"
            className="font-heading text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] font-semibold tracking-[0.3em] uppercase text-foreground transition-colors duration-500 relative z-10"
            aria-label="Aleevia Carter Residences — Home"
          >
            Aleevia Carter
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-10 relative z-10 h-full"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label}
                onMouseEnter={() => setActiveMegaMenu(link.megaMenu || null)}
                className="h-full flex items-center"
              >
                {link.href ? (
                  <a
                    href={link.href}
                    className="relative text-[0.75rem] tracking-[0.14em] uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    className={cn(
                      "relative text-[0.75rem] tracking-[0.14em] uppercase transition-colors duration-300 flex items-center gap-1.5",
                      activeMegaMenu === link.megaMenu ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <svg
                      className={cn("w-3 h-3 transition-transform duration-300", activeMegaMenu === link.megaMenu ? "rotate-180" : "rotate-0")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            <a
              href="/#contact"
              className="text-[0.75rem] tracking-[0.14em] uppercase transition-all duration-400 px-5 lg:px-6 py-2.5 border border-foreground/20 text-foreground hover:bg-foreground hover:text-white hover:border-foreground"
            >
              Schedule Viewing
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-foreground -mr-1.5 z-10"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block w-6 h-[1.5px] bg-current transition-all duration-300 origin-center",
                mobileOpen && "rotate-45 translate-y-[4.5px]"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[1.5px] bg-current transition-all duration-300 origin-center",
                mobileOpen && "-rotate-45 -translate-y-[4.5px]"
              )}
            />
          </button>
        </div>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t border-zinc-200/60 shadow-sm"
            >
              <div className="main-container py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
                  {activeMegaMenu.groups.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-foreground/50 font-medium mb-5">
                        {group.category}
                      </h4>
                      <ul className="space-y-3">
                        {group.links.map((subLink) => (
                          <li key={subLink.label}>
                            <a
                              href={subLink.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-150 block"
                            >
                              {subLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 pb-12 overflow-y-auto md:hidden"
          >
            <div className="main-container flex flex-col gap-8">
              <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                    className="border-b border-zinc-100 pb-4"
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        className="font-heading text-xl font-medium tracking-wide text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <div className="space-y-4">
                        <span className="font-heading text-xl font-medium tracking-wide text-foreground/50">
                          {link.label}
                        </span>
                        {link.megaMenu && (
                          <div className="pl-4 space-y-6 mt-4">
                            {link.megaMenu.groups.map(group => (
                              <div key={group.category} className="space-y-3">
                                <h5 className="text-sm font-semibold tracking-wider text-foreground">{group.category}</h5>
                                <ul className="space-y-3 pl-2 border-l border-zinc-200">
                                  {group.links.map(subLink => (
                                    <li key={subLink.label}>
                                      <a
                                        href={subLink.href}
                                        className="text-sm text-foreground/70"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {subLink.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4 w-full text-center px-8 py-4 bg-foreground text-white text-sm tracking-[0.12em] uppercase transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Viewing
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
