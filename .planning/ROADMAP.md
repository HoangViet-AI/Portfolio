# Roadmap: Ghibli Portfolio — AI Engineer

## Overview

This roadmap delivers a Ghibli-inspired AI Engineer portfolio as a cinematic scrolling experience. We start by deploying an empty shell to GitHub Pages (catching hosting issues early), then build the design system and animation infrastructure, establish the hero scene and scroll storytelling pattern, fill in all content sections using those patterns, and finish with ambient polish, accessibility, SEO, and responsive tuning. AI artwork replaces placeholders throughout development as it becomes available.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Deployment** - Next.js project with static export deploying to GitHub Pages via CI/CD
- [x] **Phase 2: Design System & Animation Infrastructure** - Ghibli visual tokens, animation library setup, image pipeline, and motion accessibility
- [x] **Phase 3: Hero Scene & Scroll Storytelling** - Animated hero landscape with parallax and scroll-driven scene transition system
- [ ] **Phase 4: Content Sections** - Projects, skills, about/timeline, contact, and navigation — all sections built with established animation patterns
- [ ] **Phase 5: Polish & Optimization** - Ambient animations, responsive tuning, keyboard accessibility, SEO/meta, and final quality pass

## Phase Details

### Phase 1: Foundation & Deployment
**Goal**: A minimal Next.js app with static export successfully deploys to GitHub Pages, proving the hosting pipeline works before any content is built
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02
**Success Criteria** (what must be TRUE):
  1. Running `npm run build` produces a static export in the `out/` directory
  2. Pushing to main triggers a GitHub Actions workflow that deploys to GitHub Pages
  3. The deployed site is accessible at the GitHub Pages URL and renders without 404 errors
**Plans:** 1 plan
Plans:
- [x] 01-01-PLAN.md — Scaffold Next.js 15 with static export config and GitHub Actions CI/CD for GitHub Pages

### Phase 2: Design System & Animation Infrastructure
**Goal**: The visual identity (colors, typography, spacing) and animation tooling (GSAP, Motion, Lottie) are established so all future sections share a consistent Ghibli aesthetic and performant animation patterns
**Depends on**: Phase 1
**Requirements**: FOUND-03, FOUND-04, FOUND-05, ANIM-01, ANIM-04, ANIM-05, ANIM-06
**Success Criteria** (what must be TRUE):
  1. A test page renders with the Ghibli pastel palette, handwriting font for headings, and body font — all defined via Tailwind @theme tokens
  2. A demo component scrolls with GSAP parallax layers, responds to hover via Motion, and both degrade gracefully when `prefers-reduced-motion` is enabled
  3. Running the build produces optimized WebP/AVIF images at multiple breakpoints from source artwork
  4. Ambient animation pauses when the browser tab is hidden and resumes when visible
  5. On mobile viewport, parallax is disabled and simpler entrance animations are used instead
**Plans:** 3 plans
Plans:
- [x] 02-01-PLAN.md — Install dependencies and establish Ghibli design tokens (colors, typography, spacing via Tailwind @theme)
- [x] 02-02-PLAN.md — Build animation infrastructure (GSAP parallax, Motion interactions, Lottie ambient, accessibility hooks)
- [x] 02-03-PLAN.md — Create image optimization pipeline and demo verification page
**UI hint**: yes

### Phase 3: Hero Scene & Scroll Storytelling
**Goal**: Visitors land on an immersive animated Ghibli landscape with the developer's identity, and scrolling transitions smoothly between sections like scenes in a Ghibli film
**Depends on**: Phase 2
**Requirements**: HERO-01, HERO-02, HERO-03, ANIM-02
**Success Criteria** (what must be TRUE):
  1. The hero section displays an animated landscape with visible parallax depth layers (foreground, midground, background move at different rates)
  2. Developer name, "AI Engineer" title, and tagline appear with an entrance animation on page load
  3. A visual scroll cue (animated arrow or equivalent) is visible in the hero and invites the user to scroll down
  4. Scrolling past the hero into the next section triggers a smooth cinematic transition (fade, slide, or parallax shift) — not an abrupt content change
**Plans:** 2/2 plans executed
Plans:
- [x] 03-01-PLAN.md — Build hero landscape with multi-layer parallax, developer identity entrance animation, and scroll cue
- [x] 03-02-PLAN.md — Implement cinematic scene transition system with pin/scrub and reusable SceneSection wrapper
**UI hint**: yes

### Phase 4: Content Sections
**Goal**: All portfolio content — projects, skills, about/timeline, contact, and navigation — is built and functional, giving visitors complete access to the developer's work and story
**Depends on**: Phase 3
**Requirements**: PROJ-01, PROJ-02, PROJ-03, PROJ-04, SKIL-01, SKIL-02, SKIL-03, ABOU-01, ABOU-02, ABOU-03, CONT-01, CONT-02, NAVI-01, NAVI-02, NAVI-03
**Success Criteria** (what must be TRUE):
  1. Projects section displays 3-5 AI/ML project cards with thumbnails, titles, descriptions, and tech tags — each card animates on scroll entry and responds to hover
  2. Clicking a project card navigates to a detail page with full description, screenshots/demos, and links to GitHub/live demo
  3. Skills section shows technologies grouped by category (ML/DL, CV, NLP, Tools, Languages) with Ghibli-themed styling and scroll-entry animations
  4. About section presents the developer's journey as a visual timeline with sequential scroll animations and a personal narrative
  5. Contact section displays email, GitHub, LinkedIn links with Ghibli-themed hover animations
  6. Fixed navigation allows smooth-scrolling to any section, highlights the active section, and adapts to mobile (hamburger menu or equivalent)
**Plans:** 4 plans
Plans:
- [ ] 04-01-PLAN.md — Create data files (projects, skills, timeline) and navigation component with mobile support
- [ ] 04-02-PLAN.md — Build Projects section (cards + grid) and Skills section (categorized icon grid)
- [ ] 04-03-PLAN.md — Build About/Timeline section (alternating vertical timeline) and Contact section (icon links)
- [ ] 04-04-PLAN.md — Wire all sections into page.tsx, integrate Navbar in layout.tsx, create project detail pages
**UI hint**: yes

### Phase 5: Polish & Optimization
**Goal**: The site is production-ready with ambient atmospheric animations, full accessibility, responsive refinement across all viewports, SEO optimization, and social sharing readiness
**Depends on**: Phase 4
**Requirements**: FOUND-06, FOUND-07, ANIM-03, META-01, META-02, META-03, META-04
**Success Criteria** (what must be TRUE):
  1. Ambient Lottie animations (floating clouds, falling leaves, subtle character motion) play continuously across sections
  2. The entire site is keyboard-navigable with semantic HTML, proper ARIA attributes, and visible focus indicators
  3. The site renders correctly and is usable across mobile, tablet, and desktop viewports
  4. Pages have proper title, meta description, OG image, Twitter card tags, and structured data — sharing a link on social media shows an attractive preview
  5. A Ghibli-themed favicon is displayed, and a resume/CV PDF is downloadable from the site
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Deployment | 1/1 | Complete | 2026-05-11 |
| 2. Design System & Animation Infrastructure | 3/3 | Complete | 2026-05-11 |
| 3. Hero Scene & Scroll Storytelling | 2/2 | Complete | 2026-05-11 |
| 4. Content Sections | 0/4 | In progress | - |
| 5. Polish & Optimization | 0/0 | Not started | - |
