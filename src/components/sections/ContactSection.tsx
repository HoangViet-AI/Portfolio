"use client";

import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { div as MDiv } from "motion/react-m";
import { fadeInUp } from "@/lib/animation/variants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SOCIAL_ICON_BASE =
  "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored";

function EmailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#EA4335" />
      <path d="M8 14l16 12 16-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path d="M14 4h14l12 12v28a4 4 0 01-4 4H14a4 4 0 01-4-4V8a4 4 0 014-4z" fill="#4CAF50" />
      <path d="M28 4v12h12" fill="#388E3C" />
      <rect x="16" y="22" width="16" height="2.5" rx="1" fill="white" />
      <rect x="16" y="28" width="12" height="2.5" rx="1" fill="white" />
      <rect x="16" y="34" width="14" height="2.5" rx="1" fill="white" />
    </svg>
  );
}

const contactLinks = [
  {
    key: "email" as const,
    href: "mailto:ngviethoang.work@gmail.com",
    iconType: "component" as const,
    external: false,
  },
  {
    key: "github" as const,
    href: "https://github.com/HoangViet-AI",
    iconType: "url" as const,
    iconUrl: `${SOCIAL_ICON_BASE}/github.svg`,
    external: true,
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/jamesnguyen106/",
    iconType: "url" as const,
    iconUrl: `${SOCIAL_ICON_BASE}/linkedin.svg`,
    external: true,
  },
  {
    key: "resume" as const,
    href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`,
    iconType: "component" as const,
    external: false,
  },
];

const ariaKeys = {
  email: "sendEmail",
  github: "visitGithub",
  linkedin: "visitLinkedin",
  resume: "downloadResume",
} as const;

const iconComponents = {
  email: EmailIcon,
  resume: ResumeIcon,
};

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
            {contactLinks.map((link) => {
              const IconComp = link.iconType === "component"
                ? iconComponents[link.key as keyof typeof iconComponents]
                : null;

              return (
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
                    {IconComp ? (
                      <IconComp />
                    ) : (
                      <img
                        src={(link as { iconUrl: string }).iconUrl}
                        alt=""
                        className="h-10 w-10"
                        loading="lazy"
                      />
                    )}
                    <span className="text-sm text-foreground/60 mt-2">
                      {t.contact[link.key]}
                    </span>
                  </MDiv>
                </a>
              );
            })}
          </div>
        </div>
      </MotionWrapper>
    </SceneSection>
  );
}
