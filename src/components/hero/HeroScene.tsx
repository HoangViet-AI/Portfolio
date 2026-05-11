"use client";

import { useRef } from "react";
import { HeroLandscape } from "@/components/hero/HeroLandscape";
import { HeroIdentity } from "@/components/hero/HeroIdentity";
import { ScrollCue } from "@/components/hero/ScrollCue";

export function HeroScene() {
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={triggerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <HeroLandscape triggerRef={triggerRef} />
      <HeroIdentity />
      <ScrollCue />
    </section>
  );
}
