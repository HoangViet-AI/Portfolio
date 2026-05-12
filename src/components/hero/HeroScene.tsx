"use client";

import "@/lib/animation/gsap-config";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARALLAX_BREAKPOINT } from "@/lib/animation/parallax";
import { HeroLandscape } from "@/components/hero/HeroLandscape";
import { HeroIdentity } from "@/components/hero/HeroIdentity";
import { ScrollCue } from "@/components/hero/ScrollCue";
import { FloatingClouds } from "@/components/ambient/FloatingClouds";

export function HeroScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const landscapeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const landscape = landscapeRef.current;
      if (!section || !landscape) return;

      const mm = gsap.matchMedia();
      mm.add(
        `${PARALLAX_BREAKPOINT} and (prefers-reduced-motion: no-preference)`,
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: "top top",
              end: "+=50vh",
            },
          });

          tl.to(landscape, { yPercent: -30, ease: "none" });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div ref={landscapeRef} className="absolute inset-0">
        <HeroLandscape triggerRef={sectionRef} />
      </div>
      <HeroIdentity />
      <ScrollCue />
      <FloatingClouds />
    </section>
  );
}
