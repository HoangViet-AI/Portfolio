"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTabVisibility } from "@/hooks/useTabVisibility";

const leaves = [
  { size: 10, left: "10%", duration: "18s", delay: "0s", swayAmp: 60 },
  { size: 14, left: "30%", duration: "22s", delay: "-5s", swayAmp: 80 },
  { size: 8, left: "55%", duration: "16s", delay: "-10s", swayAmp: 50 },
  { size: 12, left: "75%", duration: "25s", delay: "-3s", swayAmp: 70 },
  { size: 9, left: "90%", duration: "20s", delay: "-12s", swayAmp: 55 },
];

export function FallingLeaves() {
  const shouldReduce = useReducedMotion();
  const isVisible = useTabVisibility();

  if (shouldReduce) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[50] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {leaves.map((leaf, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: leaf.left,
            top: "-20px",
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: 0.25,
            animation: `fall-leaf ${leaf.duration} linear infinite, sway-leaf-${i} ${leaf.duration} ease-in-out infinite`,
            animationDelay: leaf.delay,
            animationPlayState: isVisible ? "running" : "paused",
          }}
        >
          {/* Leaf shape via CSS */}
          <div
            className="w-full h-full rounded-tl-[50%] rounded-br-[50%] rounded-tr-[10%] rounded-bl-[10%]"
            style={{
              background: "linear-gradient(135deg, #7BAE7F 0%, #5a9060 100%)",
              transform: `rotate(${45 + i * 30}deg)`,
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fall-leaf {
          0% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(calc(100vh + 40px));
          }
        }
        @keyframes sway-leaf-0 {
          0%, 100% { margin-left: 0; }
          50% { margin-left: ${leaves[0].swayAmp}px; }
        }
        @keyframes sway-leaf-1 {
          0%, 100% { margin-left: 0; }
          50% { margin-left: ${leaves[1].swayAmp}px; }
        }
        @keyframes sway-leaf-2 {
          0%, 100% { margin-left: 0; }
          50% { margin-left: ${leaves[2].swayAmp}px; }
        }
        @keyframes sway-leaf-3 {
          0%, 100% { margin-left: 0; }
          50% { margin-left: ${leaves[3].swayAmp}px; }
        }
        @keyframes sway-leaf-4 {
          0%, 100% { margin-left: 0; }
          50% { margin-left: ${leaves[4].swayAmp}px; }
        }
      `}</style>
    </div>
  );
}
