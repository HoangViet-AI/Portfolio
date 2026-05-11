"use client";

import type { TimelineEntry as TimelineEntryData } from "@/data/timeline";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import {
  slideInLeft,
  slideInRight,
  fadeInUp,
} from "@/lib/animation/variants";

type TimelineEntryProps = {
  entry: TimelineEntryData;
  index: number;
  isDesktop: boolean;
};

export function TimelineEntry({ entry, index, isDesktop }: TimelineEntryProps) {
  const isEven = index % 2 === 0;
  const variant = isDesktop
    ? isEven
      ? slideInLeft
      : slideInRight
    : fadeInUp;

  const content = (
    <>
      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-heading text-sm font-bold">
        {entry.year}
      </span>
      <h3 className="font-heading text-xl text-foreground mt-2">
        {entry.title}
      </h3>
      <p className="text-sm text-foreground/70 mt-1">{entry.description}</p>
    </>
  );

  if (!isDesktop) {
    return (
      <MotionWrapper variant={variant} className="mb-8">
        <div className="border-l-2 border-primary/20 pl-6 py-2">{content}</div>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper variant={variant} className="mb-12">
      <div className="flex items-start">
        {/* Left side */}
        <div className={`w-5/12 ${isEven ? "text-right pr-8" : ""}`}>
          {isEven && content}
        </div>

        {/* Center timeline node */}
        <div className="w-2/12 flex justify-center">
          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
        </div>

        {/* Right side */}
        <div className={`w-5/12 ${!isEven ? "text-left pl-8" : ""}`}>
          {!isEven && content}
        </div>
      </div>
    </MotionWrapper>
  );
}
