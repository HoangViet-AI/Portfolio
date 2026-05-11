# Phase 2: Design System & Animation Infrastructure - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the Ghibli visual identity (pastel color palette, handwriting + body fonts, spacing tokens) via Tailwind CSS v4 `@theme` directives, set up the three-library animation infrastructure (GSAP ScrollTrigger for scroll/parallax, Motion for UI micro-interactions, Lottie for ambient loops), build the image optimization pipeline (sharp → WebP at responsive breakpoints), and implement motion accessibility (`prefers-reduced-motion`, tab visibility pause, mobile degradation). Demo components prove each system works before content phases begin.

</domain>

<decisions>
## Implementation Decisions

### Color Palette
- **D-01:** Use Mixed Ghibli palette — draws from multiple films for a rich, diverse feel
- **D-02:** Primary: `#7BAE7F` (xanh lá Totoro), Secondary: `#F4A7BB` (hồng Ponyo), Accent: `#87CEEB` (xanh Howl's), Warm: `#F5DEB3` (vàng lúa mì), Background: `#FAFAF5` (trắng ấm), Text: `#3B3B3B` (xám đậm)
- **D-03:** Define all colors as Tailwind `@theme` tokens for consistent usage across components

### Typography
- **D-04:** Headings: Patrick Hand (Google Fonts) — clean handwriting style, thanh lịch, hơi retro
- **D-05:** Body: Noto Sans (Google Fonts) — nhỏ gọn, dễ đọc, contrast tốt với handwriting headings
- **D-06:** Load via `next/font/google` for zero layout shift and automatic optimization

### Animation Style
- **D-07:** Hybrid animation approach — cinematic/slow for scroll transitions (easing smooth, 0.6-1.2s), playful/quick for hover/click interactions (spring/bounce, 0.3-0.6s)
- **D-08:** Library boundary: GSAP controls scroll-driven motion (parallax, scene transitions), Motion controls component-level interactions (hover, tap, enter/exit), Lottie plays pre-built ambient loops
- **D-09:** Mobile: Minimal — disable parallax, keep only fade-in/slide-in entrance animations
- **D-10:** Respect `prefers-reduced-motion` — disable/simplify all animations when enabled
- **D-11:** Pause ambient animations when browser tab is hidden (Page Visibility API)

### Image Pipeline
- **D-12:** 3 responsive breakpoints: 640px (mobile), 1024px (tablet), 1920px (desktop)
- **D-13:** Output format: WebP only — broad support, good quality, simpler than AVIF+fallback
- **D-14:** Build-time optimization with sharp (dev dependency) — convert source PNG/JPG to WebP at each breakpoint

### Lottie / Ambient Animations
- **D-15:** Source Lottie assets from LottieFiles marketplace (free, high quality)
- **D-16:** Ambient animation types: floating clouds + subtle character motion (soot sprites, Totoro-like)

### Claude's Discretion
- Exact Tailwind `@theme` token names and organization
- GSAP ScrollTrigger configuration details (pin, scrub, trigger offsets)
- Motion animation presets and component patterns
- Sharp build script structure and npm script integration
- Spacing scale values and naming convention
- `prefers-reduced-motion` implementation pattern
- Page Visibility API integration approach

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Project vision, core value, constraints
- `.planning/REQUIREMENTS.md` — FOUND-03, FOUND-04, FOUND-05, ANIM-01, ANIM-04, ANIM-05, ANIM-06 define this phase's scope
- `.planning/ROADMAP.md` — Phase 2 success criteria (5 criteria)

### Research Findings
- `.planning/research/STACK.md` — GSAP 3.15, Motion 12.x, Lottie, Tailwind v4 versions and setup
- `.planning/research/PITFALLS.md` — Animation performance pitfalls, mobile issues, library conflicts
- `.planning/research/ARCHITECTURE.md` — Scene-based architecture, component boundaries, GSAP/Motion separation

### Prior Phase Context
- `.planning/phases/01-foundation-deployment/01-CONTEXT.md` — Phase 1 decisions (App Router, src/ dir, basePath, npm)

### Existing Code
- `src/app/globals.css` — Tailwind v4 `@import "tailwindcss"` already configured, `@theme` tokens go here
- `src/app/layout.tsx` — Root layout, fonts will be added here
- `next.config.ts` — Static export config with basePath/assetPrefix
- `postcss.config.mjs` — `@tailwindcss/postcss` already configured

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/app/globals.css` — Already has `@import "tailwindcss"`, ready for `@theme` token additions
- `src/app/layout.tsx` — Minimal root layout, ready for font imports via `next/font/google`
- `postcss.config.mjs` — Tailwind v4 PostCSS plugin already configured

### Established Patterns
- Tailwind CSS v4 CSS-first configuration (no `tailwind.config.js`)
- Next.js App Router with `src/` directory structure
- Static export with `output: "export"`

### Integration Points
- `globals.css` — All `@theme` color/typography/spacing tokens defined here
- `layout.tsx` — Font loading and CSS variable injection
- `package.json` — New dependencies (gsap, @gsap/react, motion, lottie-react, sharp) and build scripts

</code_context>

<specifics>
## Specific Ideas

- Mixed Ghibli palette references multiple films: Totoro (green), Ponyo (pink), Howl's (sky blue), wheat gold
- Patrick Hand font gives clean handwriting feel without being too casual
- Ambient animations should evoke Ghibli atmosphere: clouds drifting slowly, small character movements
- Hybrid animation feel: scroll = cinematic storytelling, interactions = playful and responsive

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 2-Design System & Animation Infrastructure*
*Context gathered: 2026-05-11*
