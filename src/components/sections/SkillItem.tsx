"use client";

import type { Skill } from "@/data/skills";
import { div as MDiv } from "motion/react-m";

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <MDiv
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 border border-warm/20 shadow-sm"
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="text-sm font-medium text-foreground/80 text-center">
        {skill.name}
      </span>
    </MDiv>
  );
}
