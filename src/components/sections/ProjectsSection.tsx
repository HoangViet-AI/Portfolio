"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SceneSection } from "@/components/sections/SceneSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <SceneSection id="projects" ariaLabel={t.projects.heading} className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="font-heading text-4xl sm:text-5xl text-primary text-center mb-4">
        {t.projects.heading}
      </h2>
      <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        {t.projects.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SceneSection>
  );
}
