"use client";

import "@/lib/animation/gsap-config";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollCue() {
  const cueRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useGSAP(
    () => {
      const element = cueRef.current;
      if (!element || shouldReduce) return;

      const trigger = element.closest("section") ?? element.parentElement ?? element;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(element, {
          opacity: 0,
          scrollTrigger: {
            trigger,
            start: "top top",
            end: "5% top",
            scrub: true,
          } satisfies ScrollTrigger.Vars,
        });
      });

      return () => mm.revert();
    },
    { scope: cueRef }
  );

  // Reduced motion: static chevron, no animation
  if (shouldReduce) {
    return (
      <div className="absolute bottom-8 left-1/2 z-[40] -translate-x-1/2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="text-foreground/60"
          aria-hidden="true"
        >
          <path
            d="M8 12L16 20L24 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={cueRef}
      className="absolute bottom-8 left-1/2 z-[40] -translate-x-1/2 animate-float"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-foreground/60"
        style={{
          animation: "pulse-opacity 2s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <path
          d="M8 12L16 20L24 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
