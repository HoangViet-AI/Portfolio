"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Variants } from "motion/react";
import { div as MDiv } from "motion/react-m";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeInUp } from "@/lib/animation/variants";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  once?: boolean;
};

export function MotionWrapper({
  children,
  className,
  variant = fadeInUp,
  once = true,
}: MotionWrapperProps) {
  const shouldReduce = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MDiv
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={variant}
      viewport={{ once, margin: "-10%" }}
    >
      {children}
    </MDiv>
  );
}
