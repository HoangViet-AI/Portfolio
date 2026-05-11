import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const GSAP_DEFAULTS = {
  duration: 0.8,
  ease: "power2.out",
} as const;

export const SCROLL_DEFAULTS = {
  scrub: 1,
  start: "top bottom",
  end: "bottom top",
} as const;
