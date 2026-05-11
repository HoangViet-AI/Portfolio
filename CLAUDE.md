<!-- GSD:project-start source:PROJECT.md -->
## Project

**Ghibli Portfolio — AI Engineer**

A personal portfolio website for an AI Engineer, designed with Studio Ghibli-inspired aesthetics. The site tells the developer's story through a cinematic scrolling experience where each section is a "scene" — pastel colors, hand-drawn illustrations, ambient animations (floating clouds, falling leaves, small characters), and micro-interactions. Built with Next.js and deployed on GitHub Pages.

**Core Value:** Visitors experience a memorable, visually stunning portfolio that showcases AI/ML projects while leaving a lasting impression through its unique Ghibli-inspired storytelling and animation.

### Constraints

- **Deployment**: GitHub Pages — static site only, no server-side rendering
- **Performance**: Animations must not degrade performance on mid-range devices
- **Assets**: AI-generated artwork — placeholder-first approach during development
- **Framework**: Next.js with React
- **Budget**: Free hosting (GitHub Pages)
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | ~15.3.x | React framework, static export | Well-documented for `output: 'export'` + GitHub Pages. v16 exists (16.2.6 on npm) but community docs/guides are sparse. Pin to 15.x for proven static export stability. |
| React | ^19.x | UI library | Next.js 15 ships with React 19 support. Needed for Motion's latest APIs. |
| TypeScript | ^5.x | Type safety | Next.js 15 has native `next.config.ts` support. Use TS 5.x (not 6.x which is bleeding edge). |
| Node.js | >=18.18 | Runtime | Minimum required by Next.js 15. Recommend Node 20 LTS. |
### Animation (Primary: GSAP + Motion hybrid)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| gsap | ^3.15.0 | Scroll-driven animations, parallax, timelines | Industry-standard for complex scroll-triggered effects. ScrollTrigger plugin is essential for the "scene-by-scene" cinematic scroll. Now 100% free (including all plugins) since Sept 2024. |
| @gsap/react | ^2.1.2 | React integration for GSAP | Official `useGSAP()` hook -- drop-in replacement for `useEffect()` with automatic cleanup, React Strict Mode safe, scoped selectors. |
| motion | ^12.x | UI transitions, gestures, micro-interactions | Formerly "framer-motion" (renamed at v12). Best-in-class for declarative React component animations -- hover effects, page transitions, layout animations. Import from `motion/react`. |
| lottie-react | ^2.4.1 | Pre-made ambient animations (clouds, leaves, sparkles) | Lightweight wrapper around lottie-web. Ideal for looping ambient SVG animations without hand-coding every frame. Use LottieFiles marketplace for free assets. |
### CSS & Styling
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | ^4.3.0 | Utility-first styling | v4 is a complete rewrite: 5x faster builds, CSS-first config via `@theme`, auto content detection, native CSS variables. No `tailwind.config.js` needed. |
| @tailwindcss/postcss | ^4.3.0 | PostCSS integration | Required for Next.js (which uses PostCSS). Replaces old `tailwindcss` PostCSS plugin. |
### Image Handling
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| sharp | ^0.34.5 | Build-time image optimization (dev tooling) | Pre-process AI-generated artwork at build time: convert PNG to WebP/AVIF, generate multiple sizes. NOT used at runtime (static export has no server). |
| next/image | (bundled) | Image component | Use with `unoptimized: true` for static export. Still provides lazy loading, proper `<img>` attributes, and layout shift prevention via width/height. |
### Fonts & Typography
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| next/font/google | (bundled) | Self-hosted Google Fonts | Zero layout shift, automatic optimization. Use handwriting-style fonts (Caveat, Patrick Hand, or Kalam) for Ghibli aesthetic headings. |
| @fontsource/* | latest | Alternative font hosting | Fallback if next/font has issues with static export. Self-hosted, tree-shakable. |
### Development Tools
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| eslint | ^9.x | Linting | Next.js ships with eslint-config-next. |
| prettier | ^3.x | Code formatting | Consistent code style. |
| prettier-plugin-tailwindcss | latest | Tailwind class sorting | Auto-sorts Tailwind classes in JSX. |
## Alternatives Considered
| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 15.x | Astro | Astro is excellent for static sites but the project spec requires Next.js. Also, React animation ecosystem (Motion, GSAP hooks) is more mature. |
| Framework | Next.js 15.x | Next.js 16.x | v16 is too new (released recently). Community guides, GitHub Pages deployment examples, and static export documentation all target v15. Upgrade later when v16 docs mature. |
| Scroll animation | GSAP ScrollTrigger | Motion useScroll | Motion's scroll capabilities are limited -- no pinning, no scrub-to-timeline, no advanced trigger offsets. GSAP ScrollTrigger is vastly more powerful for cinematic scroll effects. |
| UI animation | Motion (framer-motion) | React Spring | Motion has better DX, layout animations, and gesture support. React Spring's API is more verbose for the same results. |
| UI animation | Motion | GSAP for everything | GSAP can do UI animations but its imperative API is clunky for React component state transitions. Motion's declarative `animate` prop is much more natural in JSX. |
| CSS | Tailwind CSS v4 | CSS Modules | Tailwind is faster to develop with for a solo project. CSS Modules add file overhead without significant benefit for a portfolio. |
| CSS | Tailwind CSS v4 | Styled Components | Runtime CSS-in-JS adds bundle size and complexity. Tailwind is zero-runtime. |
| Lottie | lottie-react | @lottiefiles/react-lottie-player | lottie-react is lighter (2KB wrapper vs 4-6KB), hook-based, and better for embedded silent animations. The LottieFiles player adds UI controls we don't need. |
| Lottie | lottie-react | @lottiefiles/dotlottie-react | dotlottie format is newer and smaller but has less ecosystem support and fewer free assets available. |
| Image format | WebP + AVIF | JPEG only | AI art has complex gradients. AVIF achieves 50-80% size reduction vs JPEG. WebP provides broad fallback support. |
## What NOT to Use
| Technology | Why Not |
|------------|---------|
| Three.js / React Three Fiber | Massively overkill for 2D Ghibli aesthetics. Adds huge bundle, GPU requirements, and complexity. |
| Framer Motion (package name) | Renamed to `motion` at v12. The `framer-motion` npm package now just re-exports `motion`. Install `motion` directly. |
| CSS animations only | Insufficient for scroll-driven parallax and timeline sequencing. CSS `@scroll-timeline` has limited browser support. |
| Rough.js / Wired Elements | Hand-drawn CSS libraries. Nice concept but they render canvas/SVG -- conflicts with the AI-generated illustration approach. Use CSS techniques (asymmetric border-radius, SVG filters) instead. |
| next export (command) | Deprecated since Next.js 13.3. Use `output: 'export'` in `next.config.ts` instead. |
| Tailwind CSS v3 | v4 is stable (released Jan 2025) and significantly faster. No reason to use v3 for a new project. |
## Installation
# Create project
# Core animation libraries
# Tailwind v4 (may need manual upgrade if create-next-app scaffolds v3)
# Image processing (dev dependency for build-time optimization)
# Dev tools
### Post-install: Tailwind v4 Configuration
### Post-install: PostCSS Configuration
### Post-install: Next.js Static Export Configuration
## Confidence Assessment
| Technology | Confidence | Notes |
|------------|------------|-------|
| Next.js 15.x + static export | HIGH | Verified via Context7 docs + npm. Well-documented pattern. |
| GSAP + ScrollTrigger | HIGH | Verified via Context7 docs + npm (v3.15.0). Free license confirmed. |
| Motion (framer-motion) | HIGH | Verified via npm (v12.38.0), official migration docs confirm rename. |
| Tailwind CSS v4 | HIGH | Verified via npm (v4.3.0), official docs confirm Next.js PostCSS setup. |
| lottie-react | MEDIUM | Verified via npm (v2.4.1). Depends on availability of free Ghibli-style Lottie assets. |
| AVIF/WebP image strategy | MEDIUM | Standard practice but requires build-time tooling setup with sharp. |
| Next.js 15 over 16 | MEDIUM | v16 exists on npm but lacks community documentation for static export. Conservative choice. |
## Sources
- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js GitHub Pages Deployment Guide](https://dev.to/github/github-pages-deployment-with-nextjs-the-almost-definitive-guide-5h5c)
- [GSAP React Integration](https://gsap.com/resources/React/)
- [GSAP useGSAP Hook Docs](https://gsap.com/docs/v3/React/tools/useGSAP/)
- [GSAP Licensing (Free since 2024)](https://gsap.com/licensing/)
- [Motion (formerly Framer Motion) Migration Guide](https://motion.dev/docs/react-upgrade-guide)
- [Motion for React Quick Start](https://motion.dev/docs/react-quick-start)
- [Tailwind CSS v4.0 Release](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS + Next.js Setup Guide](https://tailwindcss.com/docs/guides/nextjs)
- [npm package versions verified 2026-05-11]
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
