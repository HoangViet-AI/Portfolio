---
phase: 03
plan: 02
status: complete
started: 2026-05-11
completed: 2026-05-11
---

## What was done

Added GSAP ScrollTrigger pin/scrub transition to HeroScene for a cinematic scroll effect on desktop, created SceneSection wrapper component with MotionWrapper fade-in animation, and wired page.tsx to render the hero scene followed by placeholder project and about sections.

## Files changed

- `src/components/hero/HeroScene.tsx` -- Added GSAP ScrollTrigger pin + scrub with matchMedia for desktop-only and reduced-motion-aware behavior. Landscape content wrapped in a ref div for yPercent: -30 parallax during scrub.
- `src/components/sections/SceneSection.tsx` -- New "use client" component wrapping children in a section element with MotionWrapper fadeInUp animation and once=true viewport trigger.
- `src/app/page.tsx` -- Replaced DesignSystemDemo with HeroScene as first child, followed by two SceneSection placeholders (Projects, About). Page remains a server component. DesignSystemDemo component file was preserved.

## Verification

- TypeScript: `npx tsc --noEmit` passed with zero errors
- Build: `npm run build` succeeded -- static export generated 2 pages (/ and /_not-found)
- First Load JS: 193 kB for home page
- All routes prerendered as static content

## Notes

- No deviations from plan -- executed exactly as specified
- HeroScene pin/scrub only activates on desktop (min-width: 1024px) with reduced-motion: no-preference, matching the ParallaxLayer pattern
- The landscape container is wrapped in an extra div with a ref to enable the yPercent: -30 scrub animation independently from the parallax layers within HeroLandscape
- DesignSystemDemo component file at src/components/demo/DesignSystemDemo.tsx was NOT deleted per plan instructions
