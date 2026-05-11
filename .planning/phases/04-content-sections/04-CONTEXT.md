# Phase 4: Content Sections - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning
**Source:** Auto-mode (--auto)

<domain>
## Phase Boundary

Build all portfolio content sections — projects (cards + detail pages), skills (grouped by category), about/timeline, contact, and fixed navigation — using the animation patterns and design system established in Phases 2-3. Each section uses the SceneSection wrapper for consistent scene-entry animations and follows the Ghibli aesthetic with scroll-driven reveals.

</domain>

<decisions>
## Implementation Decisions

### Projects Section
- **D-01:** Responsive grid layout for project cards — 1 column on mobile, 2 on tablet (md), 3 on desktop (lg)
- **D-02:** Each project card displays: thumbnail image (placeholder gradient initially), title, short description (2-3 lines), and tech stack tags (small pills/badges)
- **D-03:** Project cards use MotionWrapper with fadeInUp for scroll-entry animation and Motion hover effects (subtle scale + shadow lift)
- **D-04:** Separate dynamic route pages for project details at `/projects/[slug]` — better SEO, shareable URLs, compatible with static export via generateStaticParams
- **D-05:** Project detail page includes: hero banner image, full description, tech stack, links to GitHub/live demo, screenshots/demo section
- **D-06:** Project data stored as a TypeScript data file (array of typed objects) — no CMS, no markdown files, keep it simple for static site
- **D-07:** 3-5 placeholder AI/ML projects with realistic titles and descriptions (e.g., "Shrimp Detection System", "NLP Sentiment Analyzer", "Image Style Transfer")

### Skills Section
- **D-08:** Icon grid layout grouped by category headers — each category has a heading and a grid of skill items below
- **D-09:** 5 categories per SKIL-02: ML/DL, Computer Vision, NLP, Tools & Frameworks, Languages
- **D-10:** Each skill item shows: icon/logo (SVG or emoji placeholder), skill name, optional proficiency indicator (subtle, not percentage bars — per out-of-scope ruling)
- **D-11:** Skills data stored as TypeScript data file grouped by category
- **D-12:** Scroll-entry animation via MotionWrapper with staggered children per category group

### About / Timeline Section
- **D-13:** Vertical timeline with alternating left/right entries on desktop, single column on mobile
- **D-14:** Timeline entries animate sequentially on scroll — each entry fades in and slides from its side as it enters viewport
- **D-15:** Timeline content includes: year/date marker, title, description, optional illustration placeholder
- **D-16:** Brief personal narrative paragraph above the timeline connecting the developer to the AI/ML field
- **D-17:** Timeline data stored as TypeScript data file

### Contact Section
- **D-18:** Centered card layout with icon links displayed in a horizontal row (email, GitHub, LinkedIn, and other profiles)
- **D-19:** Each contact link has a Ghibli-themed hover animation — subtle color shift + scale via Motion
- **D-20:** Simple, clean design — no contact form (out of scope per REQUIREMENTS.md)

### Navigation
- **D-21:** Fixed top navbar that transitions from transparent (over hero) to solid background on scroll
- **D-22:** Smooth scroll to section anchors (projects, skills, about, contact) using native CSS scroll-behavior or GSAP scrollTo
- **D-23:** Active section highlighting via Intersection Observer — navbar link for the currently visible section gets a visual indicator (underline or color change)
- **D-24:** Mobile: hamburger menu with slide-in overlay containing the same navigation links
- **D-25:** Navbar z-index uses --z-index-nav (100) from design tokens, above all content

### Styling Conventions
- **D-26:** All sections wrapped in SceneSection component (from Phase 3) for consistent scene-entry animations
- **D-27:** Ghibli card styling: rounded-2xl, soft shadows, cream/wheat backgrounds, primary color accents
- **D-28:** Typography follows established tokens: font-heading for section titles, font-body for content, color hierarchy (primary → secondary → foreground/60)

### Claude's Discretion
- Exact card component styling details (padding, border-radius, shadow values)
- Project detail page layout specifics (spacing, image sizes)
- Timeline visual design (line style, node markers, spacing)
- Navigation transition timing and scroll threshold for background change
- Hamburger menu animation style
- Intersection Observer thresholds for active section detection
- Skill icon choices (SVG icons vs emoji vs text)
- Exact hover animation parameters (scale amount, spring config)
- Number of timeline entries and content
- Mobile breakpoints for responsive grid adjustments

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Project vision, core value, constraints
- `.planning/REQUIREMENTS.md` — PROJ-01 through PROJ-04, SKIL-01 through SKIL-03, ABOU-01 through ABOU-03, CONT-01, CONT-02, NAVI-01 through NAVI-03 define this phase's scope
- `.planning/ROADMAP.md` — Phase 4 success criteria (6 criteria)

### Prior Phase Context
- `.planning/phases/02-design-system-animation-infrastructure/02-CONTEXT.md` — Design system decisions (color palette, typography, animation library boundaries, mobile behavior)
- `.planning/phases/03-hero-scene-scroll-storytelling/03-CONTEXT.md` — Hero section patterns, SceneSection wrapper, parallax system, scene transition conventions

### Animation Infrastructure (from Phase 2)
- `src/components/animation/MotionWrapper.tsx` — Motion reveal wrapper with reduced motion support (use for scroll-entry)
- `src/components/animation/ParallaxLayer.tsx` — GSAP parallax component (available but not primary for content sections)
- `src/lib/animation/variants.ts` — fadeInUp, fadeIn, scaleIn, slideIn variants for Motion animations
- `src/lib/animation/gsap-config.ts` — GSAP plugin registration
- `src/hooks/useReducedMotion.ts` — Reduced motion detection
- `src/hooks/useMediaQuery.ts` — Responsive breakpoint detection

### Scene & Layout (from Phase 3)
- `src/components/sections/SceneSection.tsx` — Reusable section wrapper with fade-in + upward slide entry
- `src/components/hero/HeroScene.tsx` — Hero section (first child in page.tsx)

### Design Tokens
- `src/app/globals.css` — Ghibli color palette, z-index scale, animation keyframes, font variables
- `src/lib/design-tokens.ts` — JS-accessible design token constants
- `src/app/fonts.ts` — Patrick Hand and Noto Sans font definitions

### Current Page Structure
- `src/app/page.tsx` — Currently renders HeroScene + placeholder SceneSections (replace placeholders with real content)
- `src/app/layout.tsx` — Root layout with AnimationProvider wrapping children

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `SceneSection` wraps any section content with consistent scene-entry animation — use for all 4 content sections
- `MotionWrapper` provides viewport-entry reveal — use for individual cards, timeline entries, skill items
- `fadeInUp` variant from variants.ts — standard scroll-entry animation
- Design tokens provide complete Ghibli color palette, z-index layers, and font families
- `useMediaQuery` with `PARALLAX_BREAKPOINT` (1024px) for responsive behavior
- `useReducedMotion` for accessibility compliance

### Established Patterns
- Client components use `"use client"` directive
- Animation components import gsap-config for plugin registration
- Page.tsx is a server component; interactive sections are client components
- LazyMotion with domAnimation wraps all children via AnimationProvider in layout.tsx
- Motion imports use tree-shakable `motion/react-m` pattern (as seen in MotionWrapper, HeroIdentity)

### Integration Points
- `src/app/page.tsx` — Replace placeholder SceneSections with real content sections (Projects, Skills, About, Contact)
- Navigation component integrates at layout.tsx or page.tsx level, above all sections
- Project detail pages need `src/app/projects/[slug]/page.tsx` with generateStaticParams for static export
- Data files go in `src/data/` directory (projects.ts, skills.ts, timeline.ts)

</code_context>

<specifics>
## Specific Ideas

- Project cards should feel like illustrated postcards from a Ghibli world — soft edges, warm colors, inviting
- Skills section evokes a "workshop" or "tool shed" feeling — organized, colorful, craft-like
- Timeline feels like flipping through a storybook — each entry is a chapter
- Contact section is the "farewell scene" — warm, simple, inviting connection
- Navigation is subtle and non-intrusive — doesn't break the cinematic scrolling immersion
- Hover animations should feel organic and playful, not mechanical

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-content-sections*
*Context gathered: 2026-05-11 via auto-mode*
