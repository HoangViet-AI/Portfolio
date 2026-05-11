"use client";

import type { ReactNode } from "react";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { fadeInUp } from "@/lib/animation/variants";

type SceneSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SceneSection({ children, className, id }: SceneSectionProps) {
  return (
    <section id={id} className={className}>
      <MotionWrapper variant={fadeInUp} once>
        {children}
      </MotionWrapper>
    </section>
  );
}
