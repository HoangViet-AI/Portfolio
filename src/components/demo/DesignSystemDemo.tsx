"use client";

import { useRef } from "react";
import { div as MDiv } from "motion/react-m";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { PARALLAX_SPEEDS } from "@/lib/animation/parallax";
import { fadeInUp, hoverScale, scaleIn, slideInLeft, slideInRight } from "@/lib/animation/variants";
import { colors } from "@/lib/design-tokens";

const palette = [
  { name: "Totoro Green", value: colors.ghibliGreen, className: "bg-ghibli-green" },
  { name: "Ponyo Pink", value: colors.ghibliPink, className: "bg-ghibli-pink" },
  { name: "Howl Sky", value: colors.ghibliSky, className: "bg-ghibli-sky" },
  { name: "Wheat Gold", value: colors.ghibliWheat, className: "bg-ghibli-wheat" },
  { name: "Warm Cream", value: colors.ghibliCream, className: "bg-ghibli-cream" },
  { name: "Ink Gray", value: colors.ghibliInk, className: "bg-ghibli-ink" },
] as const;

const motionCards = [
  { title: "Fade In Up", variant: fadeInUp },
  { title: "Slide In Left", variant: slideInLeft },
  { title: "Slide In Right", variant: slideInRight },
] as const;

export function DesignSystemDemo() {
  const parallaxSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="space-y-28 px-6 py-16 sm:px-10 lg:px-16">
      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section A</p>
          <h2 className="font-heading text-5xl text-primary">Color Palette</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map((color) => (
            <MotionWrapper key={color.name} variant={scaleIn}>
              <div className="rounded-[2rem] bg-white/60 p-4 shadow-sm ring-1 ring-ghibli-ink/10">
                <div className={`h-24 rounded-[1.5rem] ${color.className}`} />
                <p className="mt-4 font-heading text-2xl text-foreground">{color.name}</p>
                <p className="font-mono text-sm text-foreground/60">{color.value}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section B</p>
          <h2 className="font-heading text-5xl text-primary">Typography</h2>
        </div>
        <div className="rounded-[2rem] bg-white/60 p-8 shadow-sm ring-1 ring-ghibli-ink/10">
          <p className="font-heading text-xl text-primary">Patrick Hand - Ghibli Heading Font</p>
          <p className="font-heading text-3xl text-primary">Patrick Hand - Ghibli Heading Font</p>
          <p className="font-heading text-4xl text-primary">Patrick Hand - Ghibli Heading Font</p>
          <p className="font-heading text-5xl text-primary">Patrick Hand - Ghibli Heading Font</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/80">
            Noto Sans - Body text for readability. This font carries longer project descriptions while the heading font keeps the page warm and hand-drawn.
          </p>
          <p className="mt-4 text-secondary">Patrick Hand is single-weight (400) — no font-bold.</p>
        </div>
      </section>

      <section ref={parallaxSectionRef} className="relative min-h-[200vh] overflow-hidden rounded-[3rem] bg-ghibli-sky/10 p-8 ring-1 ring-ghibli-ink/10">
        <div className="sticky top-12 space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section C</p>
          <h2 className="font-heading text-5xl text-primary">Parallax Demo</h2>
          <p className="max-w-xl text-foreground/70">Scroll through this section. On desktop, each layer moves at a different GSAP ScrollTrigger speed. Below 1024px, layers stay static.</p>
        </div>
        <ParallaxLayer speed={PARALLAX_SPEEDS.background} triggerRef={parallaxSectionRef} className="absolute left-8 top-72 w-3/4 rounded-[2rem] bg-ghibli-sky/20 p-8">
          Background layer — speed {PARALLAX_SPEEDS.background}
        </ParallaxLayer>
        <ParallaxLayer speed={PARALLAX_SPEEDS.midground} triggerRef={parallaxSectionRef} className="absolute right-10 top-[34rem] w-2/3 rounded-[2rem] bg-ghibli-green/30 p-8">
          Midground layer — speed {PARALLAX_SPEEDS.midground}
        </ParallaxLayer>
        <ParallaxLayer speed={PARALLAX_SPEEDS.foreground} triggerRef={parallaxSectionRef} className="absolute left-16 top-[48rem] w-1/2 rounded-[2rem] bg-ghibli-pink/40 p-8">
          Foreground layer — speed {PARALLAX_SPEEDS.foreground}
        </ParallaxLayer>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section D</p>
          <h2 className="font-heading text-5xl text-primary">Motion Interactions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {motionCards.map((card) => (
            <MotionWrapper key={card.title} variant={card.variant}>
              <MDiv
                className="rounded-[2rem] bg-ghibli-cream p-8 shadow-sm ring-1 ring-ghibli-ink/10"
                whileHover={hoverScale.whileHover}
                whileTap={hoverScale.whileTap}
              >
                <p className="font-heading text-3xl text-primary">{card.title}</p>
                <p className="mt-3 text-foreground/70">Scroll reveal plus hover/tap scale animation.</p>
              </MDiv>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <section className="rounded-[3rem] bg-ghibli-sky/10 p-8 ring-1 ring-ghibli-sky/30">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section E</p>
        <h2 className="font-heading text-5xl text-primary">Lottie Ambient (Placeholder)</h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Lottie ambient animation slot — will display floating clouds when assets are sourced from LottieFiles marketplace.
        </p>
      </section>

      <section className="space-y-6 rounded-[3rem] bg-white/60 p-8 shadow-sm ring-1 ring-ghibli-ink/10">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Section F</p>
        <h2 className="font-heading text-5xl text-primary">Accessibility</h2>
        <ul className="space-y-3 text-lg text-primary">
          <li>prefers-reduced-motion: All animations disable when OS setting is on</li>
          <li>Tab visibility: Ambient animations pause when tab is hidden</li>
          <li>Mobile degradation: Parallax disabled below 1024px viewport</li>
        </ul>
        <p className="text-foreground/70">Test: Enable “Reduce motion” in OS accessibility settings and refresh this page.</p>
      </section>
    </div>
  );
}
