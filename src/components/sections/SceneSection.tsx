"use client";

import type { ReactNode } from "react";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { fadeInUp } from "@/lib/animation/variants";

type SceneSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
};

export function SceneSection({ children, className, id, ariaLabel }: SceneSectionProps) {
  return (
    <section id={id} className={className} aria-label={ariaLabel}>
      <MotionWrapper variant={fadeInUp} once>
        {children}
      </MotionWrapper>
    </section>
  );
}
