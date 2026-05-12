# Hoang Viet Portfolio

A personal portfolio website for an AI Engineer, designed with Studio Ghibli-inspired aesthetics. The site tells the developer's story through a cinematic scrolling experience — pastel colors, parallax landscapes, ambient animations, and micro-interactions.

**Live:** [hoangviet-ai.github.io/Portfolio](https://hoangviet-ai.github.io/Portfolio)

## Preview

The portfolio features a full-viewport hero with a 5-layer parallax Ghibli landscape, scroll-driven scene transitions, floating clouds, falling leaves, and interactive project cards showcasing real AI/ML work.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15, React 19, TypeScript 5 |
| Animation | GSAP ScrollTrigger (parallax), Motion (micro-interactions), CSS animations (ambient) |
| Styling | Tailwind CSS v4 with `@theme` design tokens |
| Fonts | Patrick Hand (headings), Noto Sans (body) |
| Deployment | GitHub Pages via GitHub Actions (static export) |

## Features

- **Parallax Hero** — 5-depth-layer Ghibli landscape with GSAP ScrollTrigger
- **Scene Transitions** — Each section animates into view like a film scene
- **Ambient Animations** — Floating clouds and falling leaves (CSS-only, pauses when tab hidden)
- **Interactive Project Cards** — 4 AI/ML projects with detail pages
- **Skills Grid** — Technology icons from [profile-technology-icons](https://github.com/marwin1991/profile-technology-icons) with emoji fallback
- **Visual Timeline** — Career journey with sequential scroll animations
- **Responsive** — Mobile-first with simplified animations on small screens
- **Accessible** — Skip-to-content, focus-visible rings, ARIA labels, `prefers-reduced-motion` support
- **SEO** — JSON-LD structured data, OG/Twitter cards, sitemap, robots.txt

## Projects Showcased

| Project | Description | Tech |
|---------|-------------|------|
| **VietStoryLens** | AI landmark recognition with Agentic RAG | LangGraph, FAISS, CLIP, OpenAI, MCP |
| **Fungi Detection** | Hybrid ConvNeXt + Transformer, 97.7% accuracy | ConvNeXt, Transformer, PyTorch |
| **Hybrid AI Detection** | Object detection for smart manufacturing | YOLO, RTMDet, Docker, FastAPI |
| **Intelligent Data Assistant** | Text-to-SQL chatbot across 62 tables | LangChain, RAG, SQL, FastAPI |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    projects/[slug]/      # Dynamic project detail pages
  components/
    hero/                 # HeroScene, HeroLandscape, HeroIdentity, ScrollCue
    sections/             # ProjectsSection, SkillsSection, AboutSection, ContactSection
    navigation/           # Navbar with scroll-aware active section
    animation/            # MotionWrapper, ParallaxLayer, LottieAmbient
    ambient/              # FloatingClouds, FallingLeaves
    providers/            # AnimationProvider (LazyMotion)
  data/                   # projects.ts, skills.ts, timeline.ts
  hooks/                  # useReducedMotion, useMediaQuery, useActiveSection, useTabVisibility
  lib/animation/          # GSAP config, parallax speeds, motion variants
public/
  projects/               # Project screenshots (WebP)
  favicon.svg             # Leaf favicon
  og-image.png            # Social sharing image
```

## Deployment

The site auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. The build uses `output: "export"` with `basePath: "/Portfolio"` for static hosting.

## License

MIT
