"use client";

import "@/lib/animation/gsap-config";
import { useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PARALLAX_BREAKPOINT } from "@/lib/animation/parallax";

type ParallaxLayerProps = {
  speed: number;
  children: React.ReactNode;
  className?: string;
  triggerRef?: RefObject<HTMLElement | null>;
};

export function ParallaxLayer({ speed, children, className, triggerRef }: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      const trigger = triggerRef?.current ?? element.parentElement ?? element;

      const mm = gsap.matchMedia();
      mm.add(`${PARALLAX_BREAKPOINT} and (prefers-reduced-motion: no-preference)`, () => {
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          } satisfies ScrollTrigger.Vars,
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
