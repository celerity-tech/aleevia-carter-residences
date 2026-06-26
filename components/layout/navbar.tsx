"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { PromotionalBar } from "./promotional-bar";

type NavLinkLeaf = { label: string; href: string };
type NavMenuGroup = { category: string; links: NavLinkLeaf[] };
type NavLink =
  | NavLinkLeaf
  | { label: string; megaMenu: { groups: NavMenuGroup[] } };

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
          ],
        },
        {
          category: "Bank Partners & Loans",
          links: [
            { label: "Chinabank Requirements", href: "/financing/chinabank" },
          ],
        },
      ],
    },
  },
  { label: "Blog", href: "/#blog" },
];

const NAV_ITEM_CLASSES =
  "h-10 bg-transparent text-caption font-medium uppercase tracking-label text-foreground/70 hover:bg-transparent hover:text-foreground focus:bg-transparent data-popup-open:bg-transparent data-popup-open:text-foreground";

function hasMegaMenu(
  entry: NavLink,
): entry is { label: string; megaMenu: { groups: NavMenuGroup[] } } {
  return "megaMenu" in entry;
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background">
      <PromotionalBar />

      <div className="mx-auto flex h-16 max-w-350 items-center justify-between gap-6 px-6 md:h-20 md:px-10">
        <Link
          href="/"
          className="text-small font-semibold uppercase tracking-monogram text-foreground"
          aria-label="Aleevia Carter Residences, home"
        >
          Aleevia Carter
        </Link>

        <NavigationMenu align="center" className="hidden lg:flex">
          <NavigationMenuList>
            {NAV_LINKS.map((entry) =>
              hasMegaMenu(entry) ? (
                <NavigationMenuItem key={entry.label}>
                  <NavigationMenuTrigger className={NAV_ITEM_CLASSES}>
                    {entry.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0">
                    <FinancingPanel groups={entry.megaMenu.groups} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={entry.label}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      NAV_ITEM_CLASSES,
                    )}
                    render={<Link href={entry.href} />}
                  >
                    {entry.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Link
            href="/contacts"
            className="hidden h-10 items-center border border-foreground/25 px-6 text-caption font-medium uppercase tracking-label text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            Book a visit
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function FinancingPanel({ groups }: { groups: NavMenuGroup[] }) {
  return (
    <div className="grid w-[clamp(20rem,28vw,26rem)] gap-8 p-8">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-caption font-medium uppercase tracking-label text-muted-foreground">
            {group.category}
          </h3>
          <ul className="mt-3 space-y-1">
            {group.links.map((item) => (
              <li key={item.href}>
                <NavigationMenuLink
                  className="block p-0 py-1.5 text-body text-foreground/85 hover:bg-transparent hover:text-foreground focus:bg-transparent"
                  render={<Link href={item.href} />}
                >
                  {item.label}
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex h-11 w-11 items-center justify-center text-foreground/80 transition-colors hover:text-foreground lg:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent className="flex w-3/4 flex-col p-0 sm:max-w-sm">
        <div className="border-b border-border/60 px-8 py-6">
          <SheetTitle>Menu</SheetTitle>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-8 py-2">
          {NAV_LINKS.map((entry) =>
            hasMegaMenu(entry) ? (
              <details
                key={entry.label}
                className="group border-b border-border/60 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-caption font-medium uppercase tracking-label text-foreground">
                  {entry.label}
                  <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-4 space-y-4 pl-1">
                  {entry.megaMenu.groups.map((group) => (
                    <div key={group.category}>
                      <p className="text-caption uppercase tracking-label text-muted-foreground">
                        {group.category}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {group.links.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={close}
                              className="block py-1 text-small text-foreground/80 transition-colors hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={close}
                className="block border-b border-border/60 py-5 text-caption font-medium uppercase tracking-label text-foreground transition-colors hover:text-primary"
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>
        <div className="border-t border-border/60 p-8">
          <Link
            href="/contacts"
            onClick={close}
            className="inline-flex h-11 w-full items-center justify-center border border-foreground/25 px-5 text-caption font-medium uppercase tracking-label text-foreground"
          >
            Book a visit
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
