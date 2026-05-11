# Requirements: Ghibli Portfolio — AI Engineer

**Defined:** 2026-05-11
**Core Value:** Visitors experience a memorable, visually stunning portfolio that showcases AI/ML projects through unique Ghibli-inspired storytelling and animation.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOUND-01**: Project initializes with Next.js 15.x, Tailwind CSS v4, TypeScript, and static export configuration
- [x] **FOUND-02**: Site deploys to GitHub Pages via GitHub Actions CI/CD pipeline
- [ ] **FOUND-03**: Design system defines Ghibli pastel color palette, typography (handwriting + body fonts), spacing tokens via Tailwind `@theme`
- [ ] **FOUND-04**: Build-time image optimization pipeline converts AI-generated artwork to WebP/AVIF at responsive breakpoints
- [ ] **FOUND-05**: Site respects `prefers-reduced-motion` — all animations disable/simplify gracefully
- [ ] **FOUND-06**: Site is keyboard-navigable with semantic HTML and proper ARIA attributes
- [ ] **FOUND-07**: Site is fully responsive across mobile, tablet, and desktop viewports

### Animation

- [ ] **ANIM-01**: GSAP ScrollTrigger drives parallax depth layers creating immersion on scroll
- [ ] **ANIM-02**: Each section transitions like a Ghibli film scene with smooth scroll-driven animations
- [ ] **ANIM-03**: Ambient Lottie animations play continuously (floating clouds, falling leaves, subtle character motion)
- [ ] **ANIM-04**: Micro-interactions respond to hover, click, and focus events (Motion/Framer Motion)
- [ ] **ANIM-05**: Animations degrade gracefully on mobile — parallax disabled, simpler entrance animations used
- [ ] **ANIM-06**: Ambient animations pause when tab is not visible (Page Visibility API)

### Hero

- [ ] **HERO-01**: Hero section displays animated Ghibli-style landscape with parallax depth layers
- [ ] **HERO-02**: Developer name, "AI Engineer" title, and memorable tagline appear with entrance animation
- [ ] **HERO-03**: Visual scroll cue invites user to explore further

### Projects

- [ ] **PROJ-01**: Projects section displays 3-5 AI/ML projects as interactive cards with Ghibli-themed styling
- [ ] **PROJ-02**: Each project card shows thumbnail, title, short description, and tech tags
- [ ] **PROJ-03**: Each project has a detail page with full description, screenshots/demos, and links to GitHub/live demo
- [ ] **PROJ-04**: Project cards animate on scroll entry and respond to hover interactions

### Skills

- [ ] **SKIL-01**: Skills section visualizes AI/ML technologies, frameworks, and tools with Ghibli-themed design
- [ ] **SKIL-02**: Skills are grouped by category (ML/DL, Computer Vision, NLP, Tools, Languages)
- [ ] **SKIL-03**: Skill items animate on scroll entry

### About

- [ ] **ABOU-01**: About section tells the developer's journey as a visual timeline with Ghibli-style illustrations
- [ ] **ABOU-02**: Timeline entries animate sequentially on scroll
- [ ] **ABOU-03**: Section includes a brief personal narrative connecting to the AI/ML field

### Contact

- [ ] **CONT-01**: Contact section displays direct links to email, GitHub, LinkedIn, and other social profiles
- [ ] **CONT-02**: Contact links have Ghibli-themed hover animations

### Navigation

- [x] **NAVI-01**: Fixed navigation allows smooth scroll to any section
- [x] **NAVI-02**: Navigation highlights the currently active section
- [x] **NAVI-03**: Navigation adapts for mobile (hamburger menu or equivalent)

### SEO & Meta

- [ ] **META-01**: Pages have proper title, meta description, and structured data for search engines
- [ ] **META-02**: OG image and Twitter card meta tags enable attractive social sharing
- [ ] **META-03**: Ghibli-themed favicon and app icons are configured
- [ ] **META-04**: Resume/CV is downloadable as PDF from the site

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Interactivity

- **INTR-01**: Custom animated cursor that changes per section theme
- **INTR-02**: Easter eggs — hidden Ghibli characters/references discoverable by interaction
- **INTR-03**: Kinetic typography — animated text reveals with character-by-character effects

### AI Demos

- **DEMO-01**: Embedded interactive AI/ML demos via Hugging Face Spaces iframes
- **DEMO-02**: Live model inference showcase directly in project detail pages

### Advanced Polish

- **POLH-01**: Page loading animation with Ghibli-themed progress indicator
- **POLH-02**: Sound design — optional ambient music/sound effects
- **POLH-03**: Multi-language support (EN/VI toggle)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog/writing section | Adds complexity, not core to portfolio showcase |
| Contact form with backend | Static site — direct email/social links sufficient |
| CMS integration | Content is static, managed in code |
| Dark mode | Ghibli aesthetic relies on specific pastel palette |
| 3D WebGL/Three.js | Wrong aesthetic (Ghibli is 2D), heavy bundle, performance risk |
| Real-time chat | High complexity, not relevant for portfolio |
| Scroll hijacking | Bad UX — smooth scroll enhancement only, never override native scroll |
| Skill percentage bars | Subjective, cliche, adds no real value |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Done |
| FOUND-02 | Phase 1 | Done |
| FOUND-03 | Phase 2 | Pending |
| FOUND-04 | Phase 2 | Pending |
| FOUND-05 | Phase 2 | Pending |
| FOUND-06 | Phase 5 | Pending |
| FOUND-07 | Phase 5 | Pending |
| ANIM-01 | Phase 2 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 5 | Pending |
| ANIM-04 | Phase 2 | Pending |
| ANIM-05 | Phase 2 | Pending |
| ANIM-06 | Phase 2 | Pending |
| HERO-01 | Phase 3 | Pending |
| HERO-02 | Phase 3 | Pending |
| HERO-03 | Phase 3 | Pending |
| PROJ-01 | Phase 4 | Pending |
| PROJ-02 | Phase 4 | Pending |
| PROJ-03 | Phase 4 | Pending |
| PROJ-04 | Phase 4 | Pending |
| SKIL-01 | Phase 4 | Pending |
| SKIL-02 | Phase 4 | Pending |
| SKIL-03 | Phase 4 | Pending |
| ABOU-01 | Phase 4 | Pending |
| ABOU-02 | Phase 4 | Pending |
| ABOU-03 | Phase 4 | Pending |
| CONT-01 | Phase 4 | Pending |
| CONT-02 | Phase 4 | Pending |
| NAVI-01 | Phase 4 | Complete |
| NAVI-02 | Phase 4 | Complete |
| NAVI-03 | Phase 4 | Complete |
| META-01 | Phase 5 | Pending |
| META-02 | Phase 5 | Pending |
| META-03 | Phase 5 | Pending |
| META-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 35 total
- Mapped to phases: 35
- Unmapped: 0

---
*Requirements defined: 2026-05-11*
*Last updated: 2026-05-11 after roadmap creation*
