---
name: frontend-development
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

# Frontend Development Skill

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Core Principle

Respect the existing project design system first.

Do not redesign the whole visual language unless the user explicitly asks for a full redesign.

Before making UI changes, inspect the existing files and follow the current:

- layout structure
- spacing style
- typography scale
- component patterns
- shadcn/ui usage
- Tailwind conventions
- color/theme tokens

## Languages and Frameworks

Expert in React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, Shadcn, Base UI.

Use TypeScript by default.

Prioritize TailwindCSS utility classes for styling. Avoid separate CSS files for component-specific styles. Use CSS modules or global styles only for truly global definitions.

Name functions based on what they do, not the event they respond to. Be specific and semantic.

Good: `submitForm`, `deleteUser`, `closeModal`, `toggleSidebar`
Avoid: `handleClick`, `handleSubmit`, `handleChange`

Exception: Generic event handlers in reusable components can use `onEvent` pattern for props (onSelect, onClick, onChange) to match React conventions.

Use descriptive names that reveal intent. Prefer clarity over brevity.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Next.js, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Server Components and Client Components

Default to Server Components in Next.js. Use Client Components only when needed:
- User interactivity (onClick, onChange, etc.)
- Browser-only APIs (localStorage, window, document)
- React hooks (useState, useEffect, useContext)
- Event listeners

Mark Client Components with "use client" directive at the top of the file.

Check for `typeof window !== 'undefined'` before accessing browser APIs in components that might render on server.

All dynamic code runs at request time by default. Opt into caching where it makes sense.

Use updateTag() for immediate cache updates after mutations (read-your-writes semantics).

Use revalidateTag() to invalidate cached data for future requests.

Use refresh() to refresh client router from Server Actions.

## Effects and Side Effects

Use useEffect sparingly. Most data fetching should happen server-side in Next.js.

Always include all dependencies in useEffect arrays. Fix warnings, don't suppress them.

Clean up side effects properly (event listeners, subscriptions, timers).

Avoid useEffect for derived state. Calculate during render or use useMemo for expensive computations.

Consider using useEffectEvent (React 19.2) for extracting non-reactive logic from effects.

## UI/UX Best Practices

Design mobile-first, enhance for larger screens.

Provide clear visual feedback for all user actions (hover states, loading, success).

Make error states helpful. Tell users what went wrong and how to fix it.

Use consistent spacing, typography, and colors throughout the app.

Anticipate and prevent user errors through good UX design.

Keep forms simple and progressively disclose complexity.

## Code Quality

Write self-documenting code. Use clear names over comments when possible.

Keep functions small and focused. If over 20-30 lines, consider refactoring.

Avoid magic numbers and strings. Use named constants.

Remove unused code, imports, and console.logs before committing.

## File Organization

Group related files by feature or module, not by file type.

Keep components, hooks, and utilities close to where they're used.

Use index files sparingly. Explicit imports are clearer than barrel exports.

Name files consistently: kebab-case for file names

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. This project uses shadcn/ui and theme tokens. Use the existing theme variables and Tailwind/shadcn color tokens.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.