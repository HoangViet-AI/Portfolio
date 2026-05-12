"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTabVisibility } from "@/hooks/useTabVisibility";

export function RunningDog() {
  const shouldReduce = useReducedMotion();
  const isVisible = useTabVisibility();

  if (shouldReduce) return null;

  const playState = isVisible ? "running" : "paused";

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-0 z-[45] w-full overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      <div
        className="running-dog"
        style={{ animationPlayState: playState }}
      >
        <span
          className="inline-block text-3xl"
          style={{ animationPlayState: playState }}
        >
          🐕
        </span>
      </div>
    </div>
  );
}
