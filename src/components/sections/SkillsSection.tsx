"use client";

import { skillCategories } from "@/data/skills";
import { SkillItem } from "./SkillItem";
import { SceneSection } from "@/components/sections/SceneSection";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { fadeInUp } from "@/lib/animation/variants";

export function SkillsSection() {
  return (
    <SceneSection id="skills" ariaLabel="Technical skills" className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="font-heading text-4xl sm:text-5xl text-primary text-center mb-4">
        Skills
      </h2>
      <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        Technologies and tools I work with across the AI and software engineering landscape.
      </p>
      <div className="max-w-5xl mx-auto space-y-12">
        {skillCategories.map((category) => (
          <MotionWrapper key={category.slug} variant={fadeInUp} once>
            <h3 className="font-heading text-2xl text-secondary mb-6">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </MotionWrapper>
        ))}
      </div>
    </SceneSection>
  );
}
