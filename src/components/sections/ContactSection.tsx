"use client";

import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { div as MDiv } from "motion/react-m";
import { fadeInUp } from "@/lib/animation/variants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const contactLinks = [
  {
    key: "email" as const,
    href: "mailto:ngviethoang.work@gmail.com",
    icon: "✉️",
    external: false,
  },
  {
    key: "github" as const,
    href: "https://github.com/HoangViet-AI",
    icon: "🐙",
    external: true,
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/jamesnguyen106/",
    icon: "💼",
    external: true,
  },
  {
    key: "resume" as const,
    href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`,
    icon: "📄",
    external: false,
  },
];

const ariaKeys = {
  email: "sendEmail",
  github: "visitGithub",
  linkedin: "visitLinkedin",
  resume: "downloadResume",
} as const;

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <SceneSection
      id="contact"
      ariaLabel={t.contact.heading}
      className="min-h-screen px-6 py-20 sm:px-10 lg:px-16 flex items-center justify-center"
    >
      <MotionWrapper variant={fadeInUp} once>
        <div className="max-w-lg mx-auto text-center p-8 sm:p-12 rounded-2xl bg-background/80 border border-warm/20 shadow-lg">
          <h2 className="font-heading text-4xl text-primary mb-3">
            {t.contact.heading}
          </h2>
          <p className="text-foreground/60 mb-8">
            {t.contact.subtitle}
          </p>

          <div className="flex justify-center gap-8">
            {contactLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                aria-label={t.contact[ariaKeys[link.key]]}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.key === "resume"
                  ? { download: "resume.pdf" }
                  : {})}
              >
                <MDiv
                  className="flex flex-col items-center p-4 rounded-xl transition-colors hover:bg-primary/10 cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-sm text-foreground/60 mt-2">
                    {t.contact[link.key]}
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
