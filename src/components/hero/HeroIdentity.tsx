"use client";

import { div as MDiv } from "motion/react-m";
import type { Variants } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PARALLAX_BREAKPOINT } from "@/lib/animation/parallax";
import { fadeIn } from "@/lib/animation/variants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
  name = "Nguyen Viet Hoang",
}: HeroIdentityProps) {
  const shouldReduce = useReducedMotion();
  const isDesktop = useMediaQuery(PARALLAX_BREAKPOINT);
  const { t } = useLanguage();

  // Reduced motion: render static content
  if (shouldReduce) {
    return (
      <div key="reduced" className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-foreground sm:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-2xl text-primary font-semibold sm:text-4xl">{t.hero.title}</p>
          <p className="mt-4 max-w-md font-body text-base text-foreground/80 sm:text-lg">
            {t.hero.tagline}
          </p>
        </div>
      </div>
    );
  }

  // Mobile: single fade-in instead of stagger
  if (!isDesktop) {
    return (
      <div key="mobile" className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
        <MDiv
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="font-heading text-5xl text-foreground sm:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-2xl text-primary font-semibold sm:text-4xl">{t.hero.title}</p>
          <p className="mt-4 max-w-md font-body text-base text-foreground/80 sm:text-lg">
            {t.hero.tagline}
          </p>
        </MDiv>
      </div>
    );
  }

  // Desktop: staggered entrance animation
  return (
    <div key="desktop" className="absolute inset-0 z-[40] flex flex-col items-center justify-center px-4">
      <MDiv
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <MDiv variants={staggerChild}>
          <h1 className="font-heading text-5xl text-foreground sm:text-7xl">
            {name}
          </h1>
        </MDiv>
        <MDiv variants={staggerChild}>
          <p className="mt-3 text-2xl text-primary font-semibold sm:text-4xl">{t.hero.title}</p>
        </MDiv>
        <MDiv variants={staggerChild}>
          <p className="mt-4 max-w-md font-body text-base text-foreground/80 sm:text-lg">
            {t.hero.tagline}
          </p>
        </MDiv>
      </MDiv>
    </div>
  );
}
