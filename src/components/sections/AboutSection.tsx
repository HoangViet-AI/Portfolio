"use client";

import { timelineEntries } from "@/data/timeline";
import { TimelineEntry } from "./TimelineEntry";
import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fadeInUp } from "@/lib/animation/variants";

export function AboutSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <SceneSection id="about" className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="font-heading text-4xl sm:text-5xl text-primary text-center mb-4">
        About Me
      </h2>

      <MotionWrapper variant={fadeInUp} once>
        <p className="max-w-3xl mx-auto text-center text-foreground/80 leading-relaxed mb-16">
          From the moment I wrote my first neural network, I knew AI would be my
          calling. Every project is a new adventure — like exploring uncharted
          lands in a Ghibli film, each challenge reveals something beautiful
          about what machines can learn.
        </p>
      </MotionWrapper>

      <div className="relative max-w-4xl mx-auto">
        {isDesktop && (
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
        )}

        {timelineEntries.map((entry, index) => (
          <TimelineEntry
            key={entry.year + entry.title}
            entry={entry}
            index={index}
            isDesktop={isDesktop}
          />
        ))}
      </div>
    </SceneSection>
  );
}
