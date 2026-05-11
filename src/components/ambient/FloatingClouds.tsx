"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTabVisibility } from "@/hooks/useTabVisibility";

const clouds = [
  { width: "180px", height: "60px", top: "15%", duration: "40s", delay: "0s", opacity: 0.35 },
  { width: "240px", height: "80px", top: "40%", duration: "55s", delay: "-15s", opacity: 0.25 },
  { width: "160px", height: "50px", top: "70%", duration: "70s", delay: "-30s", opacity: 0.3 },
];

export function FloatingClouds() {
  const shouldReduce = useReducedMotion();
  const isVisible = useTabVisibility();

  if (shouldReduce) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-[50] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: cloud.width,
            height: cloud.height,
            top: cloud.top,
            opacity: cloud.opacity,
            animation: `drift-cloud ${cloud.duration} linear infinite`,
            animationDelay: cloud.delay,
            animationPlayState: isVisible ? "running" : "paused",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes drift-cloud {
          0% {
            transform: translateX(-260px);
          }
          100% {
            transform: translateX(calc(100vw + 260px));
          }
        }
      `}</style>
    </div>
  );
}
