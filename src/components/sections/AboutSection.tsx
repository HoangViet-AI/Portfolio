"use client";

import { TimelineEntry } from "./TimelineEntry";
import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fadeInUp } from "@/lib/animation/variants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AboutSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { t } = useLanguage();

  return (
    <SceneSection id="about" ariaLabel={t.about.heading} className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="font-heading text-4xl sm:text-5xl text-primary text-center mb-4">
        {t.about.heading}
      </h2>

      <MotionWrapper variant={fadeInUp} once>
        <p className="max-w-3xl mx-auto text-center text-foreground/80 leading-relaxed mb-16">
          {t.about.bio}
        </p>
      </MotionWrapper>

      <div className="relative max-w-4xl mx-auto">
        {isDesktop && (
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
        )}

        {t.about.timeline.map((entry, index) => (
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
