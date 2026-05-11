"use client";

import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { div as MDiv } from "motion/react-m";
import { fadeInUp } from "@/lib/animation/variants";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: "✉️",
    label: "Email",
    external: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/username",
    icon: "🐙",
    label: "GitHub",
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: "💼",
    label: "LinkedIn",
    external: true,
  },
];

export function ContactSection() {
  return (
    <SceneSection
      id="contact"
      className="min-h-screen px-6 py-20 sm:px-10 lg:px-16 flex items-center justify-center"
    >
      <MotionWrapper variant={fadeInUp} once>
        <div className="max-w-lg mx-auto text-center p-8 sm:p-12 rounded-2xl bg-background/80 border border-warm/20 shadow-lg">
          <h2 className="font-heading text-4xl text-primary mb-3">
            Get in Touch
          </h2>
          <p className="text-foreground/60 mb-8">
            Let&apos;s create something wonderful together
          </p>

          <div className="flex justify-center gap-8">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <MDiv
                  className="flex flex-col items-center p-4 rounded-xl transition-colors hover:bg-primary/10 cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-sm text-foreground/60 mt-2">
                    {link.label}
                  </span>
                </MDiv>
              </a>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </SceneSection>
  );
}
