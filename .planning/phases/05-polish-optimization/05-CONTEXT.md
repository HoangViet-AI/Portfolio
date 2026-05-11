# Phase 5: Polish & Optimization - Context

**Gathered:** 2026-05-12
**Status:** Ready for planning
**Source:** Auto-mode (--auto)

<domain>
## Phase Boundary

Make the site production-ready with ambient atmospheric animations (Lottie clouds/leaves), full keyboard accessibility and semantic HTML, responsive refinement across mobile/tablet/desktop/wide viewports, SEO optimization with meta tags and OG images, social sharing readiness, Ghibli-themed favicon, and a downloadable resume link. This is the final quality pass before shipping.

</domain>

<decisions>
## Implementation Decisions

### Ambient Animations
- **D-01:** Floating cloud Lottie animation overlays the hero section background, looping continuously with low opacity (0.3-0.5) so it doesn't distract from content
- **D-02:** Falling leaves Lottie animation spans across content sections as a subtle overlay with pointer-events: none, pausing when tab is hidden (useTabVisibility)
- **D-03:** All ambient animations respect prefers-reduced-motion — disabled entirely when reduced motion is active (useReducedMotion hook already exists)
- **D-04:** Ambient animations use the existing LottieAmbient component wrapper — extend if needed but don't create a new pattern
- **D-05:** Use free Lottie JSON files from LottieFiles marketplace — clouds and leaves/nature themed. If suitable files aren't available, use CSS-only animated elements as fallback (floating div circles for clouds, CSS keyframe leaves)

### Accessibility
- **D-06:** Add skip-to-content link as the first focusable element in the body — visually hidden until focused, jumps to main content area
- **D-07:** All sections use semantic HTML landmarks: header (navbar), main (content), nav (navigation), section (each content section with aria-label), footer
- **D-08:** Interactive elements (navbar links, project cards, contact links, hamburger menu) have visible focus indicators using Tailwind's ring-2 ring-primary ring-offset-2 utilities
- **D-09:** Hamburger menu button has aria-expanded, aria-controls, and aria-label attributes. Mobile overlay traps focus when open.
- **D-10:** All images/thumbnails have meaningful alt text. Decorative elements use aria-hidden="true" or role="presentation"
- **D-11:** prefers-reduced-motion disables all GSAP ScrollTrigger animations, Motion transitions, and Lottie loops — content remains visible without animation

### Responsive Tuning
- **D-12:** Test and fix at 4 breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide desktop)
- **D-13:** Ensure no horizontal overflow at any breakpoint — check hero scene, project grid, skills grid, timeline
- **D-14:** Touch targets minimum 44x44px on mobile — verify navbar links, hamburger button, contact links, project cards
- **D-15:** Font sizes scale appropriately — hero title readable on mobile without horizontal scroll, body text at least 16px on mobile
- **D-16:** Hero scene parallax disabled below 1024px (already handled by PARALLAX_BREAKPOINT) — verify mobile hero renders correctly without parallax

### SEO & Social Meta
- **D-17:** Root layout metadata includes: title template, default description, OG title/description/image, Twitter card (summary_large_image), canonical URL
- **D-18:** OG image is a static 1200x630 placeholder image (Ghibli-themed gradient with site title text overlay) stored in public/og-image.png
- **D-19:** JSON-LD structured data for Person schema on the home page — name, jobTitle (AI Engineer), url, sameAs (GitHub, LinkedIn)
- **D-20:** Project detail pages have individual meta titles and descriptions via generateMetadata (already implemented in 04-04)
- **D-21:** Robots meta allows indexing. Sitemap.xml generated or manually created for the static routes

### Favicon & Resume
- **D-22:** Favicon as SVG in public/favicon.svg with a simple Ghibli-inspired icon (leaf or small spirit character as emoji/SVG shape). Fallback favicon.ico for older browsers.
- **D-23:** Resume is a placeholder PDF file in public/resume.pdf. Link in navbar or contact section with download attribute.
- **D-24:** Apple touch icon (180x180) in public/ for iOS home screen

### Claude's Discretion
- Specific Lottie animation files selection — choose whatever looks best from free assets
- Exact OG image design — any Ghibli-themed gradient/illustration is fine
- Favicon SVG design — any simple nature/Ghibli element
- Sitemap format — static XML file or generated during build
- Resume PDF content — placeholder with site URL is sufficient

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Configuration
- `.planning/ROADMAP.md` — Phase 5 success criteria and requirements list
- `.planning/PROJECT.md` — Core value statement and constraints

### Animation Infrastructure
- `src/components/animation/LottieAmbient.tsx` — Existing Lottie wrapper component
- `src/components/providers/AnimationProvider.tsx` — Animation context provider
- `src/hooks/useReducedMotion.ts` — Reduced motion detection hook
- `src/hooks/useTabVisibility.ts` — Tab visibility detection for pausing animations

### Layout & Navigation
- `src/app/layout.tsx` — Root layout where meta tags and skip-link go
- `src/components/navigation/Navbar.tsx` — Navigation component needing accessibility improvements

### Design System
- `src/lib/design-tokens.ts` — Color palette and z-index scale
- `src/app/globals.css` — CSS custom properties and Tailwind theme

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `LottieAmbient.tsx`: Lottie wrapper with useTabVisibility integration — use for cloud/leaf animations
- `useReducedMotion.ts`: Hook returning boolean for prefers-reduced-motion — use to conditionally disable all ambient effects
- `useTabVisibility.ts`: Hook for document visibility — Lottie already pauses on hidden tab
- `AnimationProvider.tsx`: Wraps all content — good place to add ambient overlay layers
- `MotionWrapper.tsx`: Scroll-entry animation wrapper — may need focus-visible pass

### Established Patterns
- All section components use SceneSection wrapper with id prop — these become the aria-label targets
- "use client" directive on all interactive components — server components for pages
- Motion imported from "motion/react" and "motion/react-m"
- Design tokens in src/lib/design-tokens.ts with z-index scale (particles: 50, nav: 100)

### Integration Points
- `layout.tsx`: Navbar already integrated — add skip-link before Navbar, add metadata export
- `page.tsx`: Server component composing all sections — add JSON-LD script tag
- `globals.css`: Add focus-visible utility styles and skip-link styles
- `public/`: Static assets directory for OG image, favicon, resume PDF

</code_context>

<specifics>
## Specific Ideas

- Ambient clouds should feel like they're drifting slowly across the sky — 30-60 second loop, very subtle
- Falling leaves should be sparse (3-5 leaves visible at a time), not a dense shower
- The skip-to-content link should match the Ghibli aesthetic when visible (primary color, rounded)
- OG image gradient should use the Ghibli palette (ghibliGreen → ghibliSky) with "AI Engineer Portfolio" text

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 5-Polish & Optimization*
*Context gathered: 2026-05-12*
