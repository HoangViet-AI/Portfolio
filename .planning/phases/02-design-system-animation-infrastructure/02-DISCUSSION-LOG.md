# Phase 2: Design System & Animation Infrastructure — Discussion Log

**Date:** 2026-05-11
**Participants:** User + Claude
**Phase:** 2 — Design System & Animation Infrastructure

## Gray Areas Identified

4 gray areas were identified for discussion:

1. Color Palette Strategy
2. Typography Pairing
3. Animation Style & Mobile Strategy
4. Image Pipeline & Lottie Assets

User selected: **All 4** for discussion.

---

## Area 1: Color Palette Strategy

### Options Presented
| Option | Description |
|--------|-------------|
| A. Totoro Theme | Greens + earth tones from My Neighbor Totoro |
| B. Howl's Theme | Sky blues + warm golds from Howl's Moving Castle |
| C. Ponyo Theme | Ocean blues + pinks from Ponyo |
| D. Mixed Ghibli | Draws from multiple films for a rich, diverse palette |

### Selection: **D. Mixed Ghibli**

### Decisions
- **D-01:** Mixed Ghibli palette — draws from multiple films
- **D-02:** Primary: `#7BAE7F` (Totoro green), Secondary: `#F4A7BB` (Ponyo pink), Accent: `#87CEEB` (Howl's sky blue), Warm: `#F5DEB3` (wheat gold), Background: `#FAFAF5` (warm white), Text: `#3B3B3B` (dark gray)
- **D-03:** All colors defined as Tailwind `@theme` tokens

---

## Area 2: Typography Pairing

### Options Presented
| Option | Description |
|--------|-------------|
| A. Caveat + Inter | Casual handwriting + modern sans-serif |
| B. Patrick Hand + Noto Sans | Clean handwriting + readable body text |
| C. Kalam + Source Sans 3 | Rounded handwriting + neutral body |

### Selection: **B. Patrick Hand + Noto Sans**

### Decisions
- **D-04:** Headings: Patrick Hand — clean handwriting style
- **D-05:** Body: Noto Sans — readable, good contrast with handwriting headings
- **D-06:** Load via `next/font/google` for zero layout shift

---

## Area 3: Animation Style & Mobile Strategy

### Options Presented

**Desktop Animation Style:**
| Option | Description |
|--------|-------------|
| A. Cinematic/Slow | All animations smooth and slow (0.8-1.5s) |
| B. Playful/Quick | All animations bouncy and quick (0.3-0.6s) |
| C. Hybrid | Cinematic for scroll transitions, playful for interactions |

**Mobile Strategy:**
| Option | Description |
|--------|-------------|
| A. Full | Same animations on mobile (GPU permitting) |
| B. Minimal | Disable parallax, keep simple fade/slide entrances |
| C. None | No animations on mobile |

### Selection: **C. Hybrid** (desktop) + **B. Minimal** (mobile)

### Decisions
- **D-07:** Hybrid animation — cinematic scroll (0.6-1.2s), playful interactions (0.3-0.6s)
- **D-08:** Library boundary: GSAP for scroll-driven, Motion for component-level, Lottie for ambient
- **D-09:** Mobile: disable parallax, keep fade-in/slide-in entrance animations
- **D-10:** Respect `prefers-reduced-motion`
- **D-11:** Pause ambient animations when tab is hidden

---

## Area 4: Image Pipeline & Lottie Assets

### Options Presented

**Responsive Breakpoints:**
| Option | Description |
|--------|-------------|
| A. 2 sizes | 640px (mobile) + 1920px (desktop) |
| B. 3 sizes | 640px + 1024px + 1920px |
| C. 4 sizes | 480px + 768px + 1280px + 1920px |

**Output Format:**
| Option | Description |
|--------|-------------|
| A. WebP only | Broad support, simpler pipeline |
| B. WebP + AVIF | Better compression, needs fallback logic |

### Selection: **B. 3 sizes** + **A. WebP only**

### Lottie Sub-discussion

**Lottie Asset Source:**
| Option | Description |
|--------|-------------|
| A. LottieFiles marketplace | Free, high quality, curated |
| B. Custom-made | Full control but time-intensive |
| C. Mix of both | Marketplace base + custom adjustments |

**Ambient Animation Types:**
| Option | Description |
|--------|-------------|
| A. Floating clouds only | Simple, universally fitting |
| B. Clouds + falling leaves | More atmosphere, seasonal feel |
| C. Clouds + subtle character motion | Ghibli-specific (soot sprites, Totoro-like) |

### Selection: **A. LottieFiles** + **C. Clouds + character motion**

### Decisions
- **D-12:** 3 responsive breakpoints: 640px, 1024px, 1920px
- **D-13:** WebP only output format
- **D-14:** Build-time optimization with sharp
- **D-15:** Source Lottie assets from LottieFiles marketplace
- **D-16:** Ambient types: floating clouds + subtle character motion

---

## Claude's Discretion

The following implementation details were left to Claude's discretion:
- Exact Tailwind `@theme` token names and organization
- GSAP ScrollTrigger configuration details
- Motion animation presets and component patterns
- Sharp build script structure
- Spacing scale values and naming convention
- `prefers-reduced-motion` implementation pattern
- Page Visibility API integration approach

---

*Discussion completed: 2026-05-11*
*Output: 02-CONTEXT.md with 16 decisions (D-01 through D-16)*
