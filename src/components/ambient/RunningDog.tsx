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
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/totoro-walk.gif`}
          alt=""
          className="h-16 w-auto"
          style={{ animationPlayState: playState }}
        />
      </div>
    </div>
  );
}
