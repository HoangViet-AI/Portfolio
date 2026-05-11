"use client";

import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTabVisibility } from "@/hooks/useTabVisibility";

type LottieAmbientProps = {
  animationData: object;
  className?: string;
};

export function LottieAmbient({ animationData, className }: LottieAmbientProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isVisible = useTabVisibility();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!lottieRef.current) return;

    if (isVisible && !shouldReduce) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isVisible, shouldReduce]);

  if (shouldReduce) {
    return null;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop
      autoplay
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
