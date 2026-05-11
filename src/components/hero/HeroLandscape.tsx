"use client";

import type { RefObject } from "react";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { HERO_PARALLAX_SPEEDS } from "@/lib/animation/parallax";

type HeroLandscapeProps = {
  triggerRef: RefObject<HTMLDivElement | null>;
};

export function HeroLandscape({ triggerRef }: HeroLandscapeProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" role="presentation">
      {/* Layer 1: Sky gradient (slowest parallax, z-10) */}
      <ParallaxLayer
        speed={HERO_PARALLAX_SPEEDS.sky}
        triggerRef={triggerRef}
        className="absolute inset-0 z-[10]"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(to bottom, #87CEEB 0%, #B8E0F0 40%, #E8F4F8 70%, #FAFAF5 100%)",
          }}
        />
      </ParallaxLayer>

      {/* Layer 2: Distant mountains and clouds (z-15) */}
      <ParallaxLayer
        speed={HERO_PARALLAX_SPEEDS.mountains}
        triggerRef={triggerRef}
        className="absolute inset-0 z-[15]"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute bottom-[20%] h-[50%] w-full"
          aria-hidden="true"
        >
          {/* Cloud shapes */}
          <ellipse cx="200" cy="80" rx="100" ry="30" fill="#E8F4F8" opacity="0.8" />
          <ellipse cx="250" cy="75" rx="70" ry="25" fill="#F0F8FB" opacity="0.7" />
          <ellipse cx="900" cy="60" rx="120" ry="35" fill="#E8F4F8" opacity="0.6" />
          <ellipse cx="960" cy="55" rx="80" ry="28" fill="#F0F8FB" opacity="0.5" />
          <ellipse cx="1300" cy="90" rx="90" ry="25" fill="#E8F4F8" opacity="0.7" />

          {/* Distant mountain silhouettes */}
          <path
            d="M0 400 L0 280 Q120 180 240 260 Q360 180 480 250 Q600 160 720 240 Q840 170 960 230 Q1080 150 1200 240 Q1320 190 1440 260 L1440 400 Z"
            fill="#A8C4D4"
            opacity="0.5"
          />
          <path
            d="M0 400 L0 300 Q180 220 360 290 Q540 200 720 270 Q900 190 1080 260 Q1260 210 1440 280 L1440 400 Z"
            fill="#94B3C5"
            opacity="0.4"
          />
        </svg>
      </ParallaxLayer>

      {/* Layer 3: Rolling green hills midground (z-20) */}
      <ParallaxLayer
        speed={HERO_PARALLAX_SPEEDS.hills}
        triggerRef={triggerRef}
        className="absolute inset-0 z-[20]"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-[45%] w-full"
          aria-hidden="true"
        >
          {/* Back hills - lighter green */}
          <path
            d="M0 400 L0 200 Q180 120 360 180 Q540 80 720 160 Q900 60 1080 140 Q1260 100 1440 180 L1440 400 Z"
            fill="#8FBF93"
            opacity="0.7"
          />
          {/* Front hills - main ghibli green */}
          <path
            d="M0 400 L0 260 Q200 160 400 240 Q600 140 800 220 Q1000 130 1200 210 Q1350 170 1440 240 L1440 400 Z"
            fill="#7BAE7F"
            opacity="0.9"
          />
          {/* Highlight hills - subtle variation */}
          <path
            d="M0 400 L0 300 Q240 220 480 280 Q720 200 960 270 Q1200 230 1440 300 L1440 400 Z"
            fill="#6DA071"
            opacity="0.6"
          />
        </svg>
      </ParallaxLayer>

      {/* Layer 4: Foreground grass and flowers (z-30) */}
      <ParallaxLayer
        speed={HERO_PARALLAX_SPEEDS.foreground}
        triggerRef={triggerRef}
        className="absolute inset-0 z-[30]"
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-[15%] w-full"
          aria-hidden="true"
        >
          {/* Grass base */}
          <path
            d="M0 200 L0 60 Q60 40 120 50 Q180 30 240 55 Q300 20 360 45 Q420 30 480 50 Q540 15 600 40 Q660 25 720 50 Q780 10 840 35 Q900 20 960 45 Q1020 15 1080 40 Q1140 25 1200 50 Q1260 10 1320 35 Q1380 25 1440 45 L1440 200 Z"
            fill="#5A9060"
          />
          {/* Grass blades */}
          <path
            d="M80 60 L85 30 L90 60 M200 55 L205 20 L210 55 M320 50 L325 15 L330 50 M440 55 L445 25 L450 55 M560 45 L565 10 L570 45 M680 50 L685 20 L690 50 M800 40 L805 8 L810 40 M920 50 L925 18 L930 50 M1040 45 L1045 12 L1050 45 M1160 55 L1165 22 L1170 55 M1280 40 L1285 10 L1290 40 M1400 50 L1405 20 L1410 50"
            stroke="#4A7F50"
            strokeWidth="2"
            fill="none"
          />
          {/* Flowers - pink */}
          <circle cx="150" cy="55" r="4" fill="#F4A7BB" />
          <circle cx="450" cy="48" r="3" fill="#F4A7BB" />
          <circle cx="750" cy="42" r="4" fill="#F4A7BB" />
          <circle cx="1050" cy="50" r="3" fill="#F4A7BB" />
          <circle cx="1350" cy="45" r="4" fill="#F4A7BB" />
          {/* Flowers - wheat/yellow */}
          <circle cx="280" cy="50" r="3" fill="#F5DEB3" />
          <circle cx="580" cy="38" r="4" fill="#F5DEB3" />
          <circle cx="880" cy="45" r="3" fill="#F5DEB3" />
          <circle cx="1180" cy="52" r="4" fill="#F5DEB3" />
        </svg>
      </ParallaxLayer>

      {/* Layer 5: Floating cloud particles (z-50, CSS animation only) */}
      <div className="absolute inset-0 z-[50] pointer-events-none">
        <svg
          className="absolute top-[8%] left-[10%] h-8 w-16 animate-float opacity-60"
          viewBox="0 0 64 32"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="18" rx="28" ry="12" fill="white" />
          <ellipse cx="22" cy="14" rx="16" ry="10" fill="white" />
          <ellipse cx="42" cy="14" rx="18" ry="10" fill="white" />
        </svg>
        <svg
          className="absolute top-[15%] right-[20%] h-6 w-12 animate-float opacity-40"
          style={{ animationDelay: "2s" }}
          viewBox="0 0 48 24"
          aria-hidden="true"
        >
          <ellipse cx="24" cy="14" rx="20" ry="9" fill="white" />
          <ellipse cx="16" cy="10" rx="12" ry="8" fill="white" />
          <ellipse cx="32" cy="10" rx="14" ry="8" fill="white" />
        </svg>
        <svg
          className="absolute top-[5%] left-[55%] h-10 w-20 animate-float opacity-50"
          style={{ animationDelay: "4s" }}
          viewBox="0 0 80 40"
          aria-hidden="true"
        >
          <ellipse cx="40" cy="22" rx="35" ry="14" fill="white" />
          <ellipse cx="28" cy="16" rx="20" ry="12" fill="white" />
          <ellipse cx="52" cy="16" rx="22" ry="12" fill="white" />
        </svg>
        <svg
          className="absolute top-[20%] left-[75%] h-5 w-10 animate-float opacity-35"
          style={{ animationDelay: "1s" }}
          viewBox="0 0 40 20"
          aria-hidden="true"
        >
          <ellipse cx="20" cy="12" rx="16" ry="7" fill="white" />
          <ellipse cx="14" cy="9" rx="10" ry="6" fill="white" />
        </svg>
        <svg
          className="absolute top-[12%] left-[35%] h-7 w-14 animate-float opacity-45"
          style={{ animationDelay: "3s" }}
          viewBox="0 0 56 28"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="16" rx="24" ry="10" fill="white" />
          <ellipse cx="18" cy="12" rx="14" ry="9" fill="white" />
          <ellipse cx="38" cy="12" rx="16" ry="9" fill="white" />
        </svg>
      </div>
    </div>
  );
}
