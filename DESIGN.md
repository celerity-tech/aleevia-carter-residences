---
name: Aleevia Carter Residences
description: Warm, Japandi, unhurried marketing site that turns curiosity into viewing inquiries.
colors:
  background: "oklch(0.965 0.012 92)"
  foreground: "oklch(0.255 0.012 140)"
  primary: "oklch(0.42 0.058 162)"
  primary-foreground: "oklch(0.97 0.012 92)"
  secondary: "oklch(0.915 0.022 150)"
  secondary-foreground: "oklch(0.3 0.02 150)"
  muted: "oklch(0.925 0.016 132)"
  muted-foreground: "oklch(0.435 0.022 145)"
  accent: "oklch(0.915 0.02 146)"
  accent-foreground: "oklch(0.3 0.02 150)"
  gold: "oklch(0.72 0.105 86)"
  gold-foreground: "oklch(0.25 0.03 80)"
  sage: "oklch(0.55 0.046 150)"
  sage-foreground: "oklch(0.97 0.012 92)"
  emerald: "oklch(0.34 0.05 165)"
  emerald-foreground: "oklch(0.965 0.012 92)"
  card: "oklch(0.984 0.008 92)"
  border: "oklch(0.875 0.014 135)"
  input: "oklch(0.86 0.016 135)"
  ring: "oklch(0.42 0.058 162)"
  destructive: "oklch(0.545 0.17 28)"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3.75rem, 10vw + 1rem, 8.5rem)"
    fontWeight: 300
    lineHeight: 0.96
    letterSpacing: "-0.024em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3rem, 7vw + 1.25rem, 6.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2rem, 2.5vw + 1.25rem, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  control: "0.25rem"
  panel: "0.375rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.control}"
    padding: "0 1.75rem"
    height: "3rem"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.control}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
---

# Design System: Aleevia Carter Residences

## 1. Overview

**Creative North Star: "The Unhurried Welcome"**

This system feels like being shown around a beautiful home by someone who genuinely wants you to stay. It is **Japandi** — the calm meeting of Japanese restraint and Scandinavian warmth, drawn directly from the project's brochure: warm wood, organic textures, plaster-soft walls, and a spa-like quiet. Color is committed but never loud. A cream/marble canvas carries the page; **sage green** is the ambient brand voice; a single **deep-emerald** voice marks every place the visitor is invited to act; and a rare **brass-gold** (the brochure's logo metal) appears as a jewel accent, brightest on the dark sage and emerald surfaces.

It is built on shadcn (Tailwind v4, base-ui primitives). The semantic tokens here are the contract: components consume `primary`, `secondary`, `muted`, `accent`, `border`, and friends, plus three brand tokens — `gold`, `sage`, `emerald` — for the moments the page leans into color.

It explicitly rejects four things, carried from PRODUCT.md: it must not look like generic SaaS / proptech (gradient heroes, geometric-sans-on-gradient, hero-metric templates), like a listings portal (filter rails, repeated card grids, price tags, clutter), like luxury-flex (gold-on-black, oversized "INVEST NOW" CTAs, gradient text), or like corporate sterile templates (stock handshakes, navy-and-gray). Gold is handled with care precisely so it never tips into luxury-flex: it is a thin accent and a metal on dark green, never a shiny button on black.

**Key Characteristics:**
- Cream/marble canvas, sage ambient voice, one emerald action voice, rare brass-gold accent
- Sage- and emerald-drenched bands (footer, "by the numbers", CTA) keep the page from reading as cream monotone
- Editorial whitespace and an unhurried reading rhythm
- Spectral serif display (light, with italic emphasis) paired with Albert Sans body
- Uniformly soft corners: 4px on controls (buttons, inputs, chips), 6px on panels and imagery; only full-bleed bands (hero, CTA, footer) run edge-to-edge. No hard 0px corners — that consistency is the warmth.
- Photography and warm material carry the emotion, not borders or chrome

## 2. Colors

A warm-neutral palette built on cream and sage, with an emerald action voice and a brass-gold accent. Values are OKLCH; chroma stays low on the neutrals so they read as warm and calm, never muddy.

### Brand
- **Emerald** (`primary`, `oklch(0.42 0.058 162)`): The action voice. Primary buttons, links, focus rings, and active states. Cream text clears WCAG AA on it. Drawn from the brochure's deep-green accent walls.
- **Brass gold** (`gold`, `oklch(0.72 0.105 86)`): The brochure's logo metal. A rare jewel accent — kickers on imagery, numerals on dark bands, hairline flourishes, the footer wordmark. Low-contrast on cream by design, so it is reserved for dark sage/emerald surfaces and decorative use, never body text on cream.
- **Sage** (`sage`, `oklch(0.55 0.046 150)`) and **Emerald** (`emerald`, `oklch(0.34 0.05 165)`): brand surfaces for drenched bands. Sage carries large type only (headings/leads clear ≥3:1); emerald is deep enough for body copy (cream clears AA). The footer and key CTAs live here.

### Neutral
- **Cream/Marble** (`background`, `oklch(0.965 0.012 92)`): Default page surface. Warm, never pure white.
- **Paper** (`card` / `popover`, `oklch(0.984 0.008 92)`): Slightly brighter raised surfaces.
- **Pale sage** (`secondary`, `oklch(0.915 0.022 150)`): Quiet section washes and secondary buttons.
- **Sage-stone** (`accent`, `oklch(0.915 0.02 146)`): shadcn's `accent` hover/active wash. A neutral, not the brand voice.
- **Mist** (`muted`) with **Slate-sage** text (`muted-foreground`, `oklch(0.435 0.022 145)`): captions and secondary copy, tuned to clear AA on cream.
- **Ink** (`foreground`, `oklch(0.255 0.012 140)`): Body and heading text. Warm near-black, faintly green-tinted, never `#000`.

### Named Rules
**The One Action Voice Rule.** Emerald (`primary`) marks where the visitor acts: the inquiry CTA, links, and focus. Gold decorates; emerald acts. Don't repaint decoration emerald or buttons gold.

**The Gold-on-Dark Rule.** Gold is a metal: it sings on emerald and sage, and whispers (or disappears) on cream. Use it for accents and on dark surfaces, never for body text on the cream canvas.

**The Neutral-Accent Rule.** shadcn's `accent` is a sage-stone hover wash, not a brand color. Never repaint it emerald or gold.

## 3. Typography

**Display Font:** Spectral (with Georgia, serif fallback)
**Body Font:** Albert Sans (with system-ui, sans-serif fallback)

**Character:** Spectral gives the warmth and editorial confidence of a printed page; its light weights and italics echo the brochure's elegant serif. Albert Sans keeps long reading comfortable and plain-spoken. Italic Spectral carries emphasis words ("…in the *heart of the city*", "Living, without *boundaries*"), exactly as the brochure does.

### Hierarchy
- **Display** (300, `clamp(3.75rem, 10vw + 1rem, 8.5rem)`, lh 0.96): Hero statement.
- **Headline / h1** (300, up to `6.5rem`, lh 1.02): Page openers.
- **h2** (300, up to `4.75rem`): Major section openers.
- **Title / h3** (400, up to `2.75rem`): Sub-section structure.
- **Body** (400, `1.0625rem` / 17px, lh 1.65): The unhurried read. Sized large for a broad audience; cap lines at 65-75ch.
- **Label** (500, `0.8125rem`, tracking 0.16em): Buttons, kickers, metadata.

### Named Rules
**The Printed-Page Rule.** Body type is set for sustained reading: 17px, line-height 1.65, lines capped at 65-75ch.

**The Three-Tracking Rule.** Only three tracking values for uppercase labels: `label` (0.16em), `kicker` (0.22em), `monogram` (0.3em).

**The Kicker-as-Voice Rule.** The brochure's labelled-section device ("THE PROPERTY", "THE CONCEPT") is used deliberately and sparingly via the `Kicker` component — it is brand voice, not a reflex above every block.

## 4. Elevation & Motion

Choreographed motion, calm surfaces. The system is flat at rest; radius stays small and consistent — 4px on controls, 6px on panels and imagery, only full-bleed bands edge-to-edge — so surfaces separate by tonal shifts (cream → paper → pale-sage → sage → emerald) rather than shadows. Life comes from gentle, orchestrated entrances and scroll-driven reveals on exponential ease-out curves (the `motion` library), site-wide smooth scrolling (`lenis`), a top reading-progress bar, a back-to-top control, the amenities stacking-cards, and embla-driven carousels. All motion honors `prefers-reduced-motion` (Lenis is disabled; reveals crossfade in place).

### Named Rules
**The Tonal-Layer Rule.** Separate surfaces with warm tone steps, not shadows. A shadow appears only as a real response to state (an open menu, the concierge badge), never as default decoration.

**The Gentle Arrival Rule.** Elements ease in; they never bounce, snap, or slide aggressively.

## 5. Components

Built on shadcn (base-ui primitives, `class-variance-authority`). Components consume semantic tokens only; restyle by retuning tokens.

### Buttons & CTAs
- **Shape:** Softly rounded (`rounded-sm`, 4px). Uppercase `label` type, tracking 0.16em, height 3rem / px-7. The shared `CtaLink` carries the variants: `solid` (emerald), `outline` (light), `outlineLight` (for dark surfaces), and `link` / `linkLight`.
- **Primary (`solid`):** Emerald surface with cream text; hover `bg-primary/90`.
- **Focus:** terracotta-free — emerald `ring` halo. Active nudges `translate-y-px`.

### Navigation
- **Style:** Sticky, translucent-cream header (`bg-background/85` + backdrop blur) over a hairline border, with a thin emerald promotional bar above. **Left/right layout:** the wordmark sits alone on the left; the links (Home · About · Financing · Blog) and the `Book a viewing` CTA are grouped on the right. Links are compact uppercase (12px); the active page carries a gold underline. The row is kept low (h-14 / h-16).
- **Financing mega-menu:** a **full-width** (edge-to-edge) panel on a paper surface with content aligned to `main-container` — a bordered intro column plus the two categories (*Affordability Calculators*, *Bank Partners & Loans*) with one-line descriptions. Opens on hover, toggles on click, closes on Escape / outside-click / navigation; animated with `motion`.
- **Mobile:** A `Sheet` drawer with `details` disclosure groups; 44px tap targets.

### Footer
A **sticky reveal** footer (`sticky bottom-0 z-0`, content above it at `z-10`): the page scrolls up to unveil a deep-emerald footer with a gold wordmark, real contact, and link columns.

### Signature: The Inquiry CTA
The whole site exists to drive viewing inquiries, so the primary CTA ("Book a viewing", emerald) is the signature component — reachable from the header, hero, every closing band, and the footer, and never competing with a second emerald element on the same screen.

## 6. Do's and Don'ts

### Do:
- **Do** lead with warmth, photography, and material; let tonal cream → sage → emerald layers carry structure.
- **Do** reserve emerald (`primary`) for inquiry actions, links, and focus.
- **Do** use gold as a rare jewel accent, brightest on dark sage/emerald surfaces.
- **Do** set body type at 17px / lh 1.65 / 65-75ch.
- **Do** ease motion in gently and honor `prefers-reduced-motion`.

### Don't:
- **Don't** look like generic SaaS / proptech, a listings portal, luxury-flex, or corporate-sterile.
- **Don't** put gold body text on cream (low contrast) or gold buttons on black (luxury-flex).
- **Don't** use pure `#000`/`#fff`, side-stripe accent borders, gradient text, or decorative glassmorphism.
- **Don't** repaint shadcn's `accent`; it is the neutral sage-stone hover wash.
- **Don't** invent facts, prices, or contact details — the brochure (`/public/brochure.pdf`) and `lib/site.ts` are the source of truth.
