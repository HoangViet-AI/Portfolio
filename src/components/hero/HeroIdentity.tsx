"use client";

import { div as MDiv } from "motion/react-m";
import type { Variants } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PARALLAX_BREAKPOINT } from "@/lib/animation/parallax";
import { fadeIn } from "@/lib/animation/variants";

const ghibliEase = [0.22, 1, 0.36, 1] as const;

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [...ghibliEase] },
  },
};

type HeroIdentityProps = {
  name?: string;
  title?: string;
  tagline?: string;
};

export function HeroIdentity({
  name = "Hoang NV",
  title = "AI Engineer",
  tagline = "Crafting intelligent systems with creativity and purpose",
}: HeroIdentityProps) {
  const shouldReduce = useReducedMotion();
  const isDesktop = useMediaQuery(PARALLAX_BREAKPOINT);

  // Reduced motion: render static content
  if (shouldReduce) {
    return (
      <div className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-primary sm:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-2xl text-secondary sm:text-4xl">{title}</p>
          <p className="mt-4 max-w-md font-body text-base text-foreground/60 sm:text-lg">
            {tagline}
          </p>
        </div>
      </div>
    );
  }

  // Mobile: single fade-in instead of stagger
  if (!isDesktop) {
    return (
      <div className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
        <MDiv
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="font-heading text-5xl text-primary sm:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-2xl text-secondary sm:text-4xl">{title}</p>
          <p className="mt-4 max-w-md font-body text-base text-foreground/60 sm:text-lg">
            {tagline}
          </p>
        </MDiv>
      </div>
    );
  }

  // Desktop: staggered entrance animation
  return (
    <div className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
      <MDiv
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <MDiv variants={staggerChild}>
          <h1 className="font-heading text-5xl text-primary sm:text-7xl">
            {name}
          </h1>
        </MDiv>
        <MDiv variants={staggerChild}>
          <p className="mt-3 text-2xl text-secondary sm:text-4xl">{title}</p>
        </MDiv>
        <MDiv variants={staggerChild}>
          <p className="mt-4 max-w-md font-body text-base text-foreground/60 sm:text-lg">
            {tagline}
          </p>
        </MDiv>
      </MDiv>
    </div>
  );
}
