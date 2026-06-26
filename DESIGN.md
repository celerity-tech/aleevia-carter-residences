---
name: Aleevia Carter Residences
description: Warm, editorial, unhurried marketing site that turns curiosity into rental inquiries.
colors:
  background: "oklch(0.970 0.008 83)"
  foreground: "oklch(0.255 0.013 55)"
  primary: "oklch(0.455 0.120 42)"
  primary-foreground: "oklch(0.985 0.010 85)"
  secondary: "oklch(0.918 0.016 80)"
  secondary-foreground: "oklch(0.295 0.014 58)"
  muted: "oklch(0.930 0.013 80)"
  muted-foreground: "oklch(0.450 0.020 62)"
  accent: "oklch(0.916 0.018 78)"
  accent-foreground: "oklch(0.295 0.014 58)"
  card: "oklch(0.988 0.006 85)"
  border: "oklch(0.870 0.015 76)"
  input: "oklch(0.855 0.016 75)"
  ring: "oklch(0.455 0.120 42)"
  destructive: "oklch(0.545 0.170 28)"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3.75rem, 10vw + 1rem, 9rem)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.026em"
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
  none: "0px"
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
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "2.5rem"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.none}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
---

# Design System: Aleevia Carter Residences

## 1. Overview

**Creative North Star: "The Unhurried Welcome"**

This system feels like being shown around a beautiful home by someone who genuinely wants you to stay. It borrows the calm editorial warmth of Kinfolk and Cereal: generous whitespace, soft warm light, and type that reads like a printed page rather than an app screen. Color is restrained. Warm cream and sand neutrals carry nearly every surface, and a single terracotta voice appears only where the visitor is invited to act. The page breathes; photography and space are the loudest elements, never chrome.

It is built on shadcn (Tailwind v4, base-ui primitives) with a `taupe` warm-neutral base. The semantic tokens here are the contract: components consume `primary`, `secondary`, `muted`, `accent`, `border`, and friends, and the palette is tuned so the same components read as warm and hospitable rather than cool and corporate.

It explicitly rejects four things, carried from PRODUCT.md: it must not look like generic SaaS / proptech (gradient heroes, geometric-sans-on-gradient, friendly-app voice, hero-metric templates), like a listings portal (filter rails, repeated card grids, price tags, clutter), like luxury-flex (gold-on-black, oversized "INVEST NOW" CTAs, gradient text), or like corporate sterile templates (stock handshakes, navy-and-gray). If a screen reads as software, a database, a flex, or an enterprise template, it has failed.

**Key Characteristics:**
- Warm cream surfaces, one rare terracotta voice (restrained strategy)
- Editorial whitespace and an unhurried reading rhythm
- Spectral serif display paired with Albert Sans body
- Sharp, frameless edges (zero radius) inherited from the current build
- Photography and space carry the emotion, not borders or buttons

## 2. Colors

A warm-neutral palette built on cream and sand, with a single terracotta accent. Values are OKLCH (the project's canonical format); chroma stays low on the neutrals so they read as warm, never muddy.

### Primary
- **Terracotta** (`oklch(0.455 0.120 42)`): The only true color in the system. Primary buttons, links, and focus rings (`ring` shares this value). A deep clay tone chosen so cream text clears WCAG AA on it. Appears on under 10% of any screen.

### Neutral
- **Cream** (`background`, `oklch(0.970 0.008 83)`): Default page surface. The warm room the content lives in. Never pure white.
- **Paper** (`card` / `popover`, `oklch(0.988 0.006 85)`): Slightly brighter raised surfaces for menus, sheets, and cards.
- **Sand** (`secondary`, `oklch(0.918 0.016 80)`): Quiet secondary-button and section-wash surface.
- **Warm Stone** (`accent`, `oklch(0.916 0.018 78)`): shadcn's `accent` role, the subtle hover/active wash for nav items and ghost buttons. A neutral, not the brand color.
- **Mist** (`muted`, `oklch(0.930 0.013 80)`) with **Slate-Warm** text (`muted-foreground`, `oklch(0.450 0.020 62)`): captions, metadata, secondary copy. Foreground tuned to clear AA on cream.
- **Ink** (`foreground`, `oklch(0.255 0.013 55)`): Body and heading text. Warm near-black, tinted toward the palette, never `#000`.

### Named Rules
**The One Warm Voice Rule.** Exactly one accent color exists (terracotta), and it appears only where the visitor is invited to act: primary CTA, links, focus. If terracotta is carrying decoration instead of action, remove it. Its rarity is what makes a call to action feel like an open door.

**The Neutral-Accent Rule.** shadcn's `accent` token is a warm-stone hover wash, not the brand color. Never repaint `accent` terracotta to "add color"; that breaks every menu and ghost-button hover state and dilutes the one voice.

## 3. Typography

**Display Font:** Spectral (with Georgia, serif fallback)
**Body Font:** Albert Sans (with system-ui, sans-serif fallback)

**Character:** Spectral gives the warmth and editorial confidence of a printed magazine; Albert Sans keeps long reading comfortable and plain-spoken. The pairing should feel hospitable and human, never corporate.

### Hierarchy
- **Display** (300, `clamp(3.75rem, 10vw + 1rem, 9rem)`, lh 0.94): Hero statement. One large, well-cut idea per view.
- **Headline** (300, `clamp(3rem, 7vw + 1.25rem, 6.5rem)`, lh 1.02): Major section openers.
- **Title** (400, `clamp(2rem, 2.5vw + 1.25rem, 2.75rem)`, lh 1.12): Sub-section structure.
- **Body** (400, `1.0625rem` / 17px, lh 1.65): The unhurried read. Sized large for an age-spanning audience; cap lines at 65-75ch.
- **Label** (500, `0.8125rem`, tracking 0.16em): Buttons, eyebrows, metadata. Uppercase with measured tracking, not aggressive SaaS tracking.

### Named Rules
**The Printed-Page Rule.** Body type is set for sustained, comfortable reading: 17px, line-height 1.65, lines capped at 65-75ch. If it reads like dense app UI, it is wrong.

**The Three-Tracking Rule.** Only three tracking values exist for uppercase labels: `label` (0.16em), `kicker` (0.22em), `monogram` (0.28em). No arbitrary tracking in markup.

## 4. Elevation

Choreographed motion, calm surfaces. The system is flat and warm at rest; radius is zero, so surfaces are separated by tonal shifts (cream vs. paper vs. sand) rather than shadows. Depth and life come from gentle, orchestrated entrances and scroll-driven reveals on exponential ease-out curves (the `motion` library is available), never from heavy drop-shadows, bounce, or elastic. All motion respects `prefers-reduced-motion`.

### Named Rules
**The Tonal-Layer Rule.** Separate surfaces with warm tone steps (cream → paper → sand), not shadows. A shadow appears only as a genuine response to state (an open menu, a lifted sheet), never as default decoration.

**The Gentle Arrival Rule.** Elements ease in; they never bounce, snap, or slide aggressively. Motion is choreography, not decoration, and must degrade to static for reduced-motion visitors.

## 5. Components

Built on shadcn (base-ui primitives, `class-variance-authority` variants). Components consume semantic tokens only; restyle by retuning tokens, not by hardcoding colors.

### Buttons
- **Shape:** Frameless, sharp (`rounded-none`, 0px). Uppercase label type, tracking 0.16em, semibold, size-default height 2.5rem / px-6.
- **Primary (`default`):** Terracotta surface (`bg-primary`) with cream text (`text-primary-foreground`); hover drops to `bg-primary/80`.
- **Secondary:** Sand surface (`bg-secondary`) with ink text; hover `bg-secondary/80`.
- **Outline:** Transparent on a `border-border` stroke; hover fills with warm-stone `bg-muted`.
- **Ghost:** No surface at rest; hover fills `bg-muted`.
- **Link:** Terracotta text, underline offset 4.
- **Focus:** `border-ring` plus a terracotta `ring/30` halo. Active state nudges `translate-y-px`.

### Navigation
- **Style:** Sticky header on cream (`bg-background`) over a hairline `border-border/60`, with a thin promotional bar above. Nav items are uppercase `label` type at `text-foreground/70`, resolving to full `text-foreground` on hover. Mega-menu panels open on `popover`/paper surfaces.
- **Mobile:** A `Sheet` drawer (3/4 width) with `details`-based disclosure groups; large 44px tap targets throughout.

### Inputs / Fields
- **Style:** `border-input` stroke on `background`, sharp corners, comfortable height.
- **Focus:** terracotta `ring` halo and `border-ring`, matching buttons.
- **Error:** `aria-invalid` triggers a `destructive` border and ring.

### Signature: The Inquiry CTA
The whole site exists to drive inquiries, so the primary CTA is the signature component. It must be reachable from anywhere on the page, read unmistakably as the warm next step, and never compete with a second terracotta element on the same screen.

## 6. Do's and Don'ts

### Do:
- **Do** lead with warmth, photography, and space; let tonal cream/sand layers carry structure.
- **Do** reserve terracotta (`primary`) for inquiry actions, links, and focus, on under 10% of any screen.
- **Do** set body type at 17px with line-height 1.65 and 65-75ch line length for a broad, age-spanning audience.
- **Do** keep a low-friction way to inquire within reach from anywhere on the page.
- **Do** restyle by retuning the shadcn semantic tokens, and keep `accent` a neutral hover wash.
- **Do** ease motion in gently on exponential curves and honor `prefers-reduced-motion`.

### Don't:
- **Don't** look like generic SaaS / proptech: no gradient heroes, geometric-sans-on-gradient, friendly-app voice, or hero-metric templates.
- **Don't** adopt listings-portal grammar: no filter rails, repeated card grids, price tags everywhere, or clutter. This site is a feeling, not a database.
- **Don't** flex luxury: no gold-on-black, no oversized "INVEST NOW" CTAs, no gradient text, no opulent excess.
- **Don't** go corporate sterile: no stock-photo handshakes, no navy-and-gray, no lifeless enterprise template feel.
- **Don't** use pure `#000` or `#fff`, side-stripe accent borders, gradient text, or decorative glassmorphism.
- **Don't** repaint shadcn's `accent` token terracotta; it is the neutral hover wash, not the brand voice.
