"use client";

import type { Project } from "@/data/projects";
import { MotionWrapper } from "@/components/animation/MotionWrapper";
import { div as MDiv } from "motion/react-m";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <MotionWrapper once>
        <MDiv
          className="rounded-2xl bg-ghibli-cream shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-warm/30 cursor-pointer"
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* Thumbnail */}
          <div className="h-48 rounded-t-2xl overflow-hidden">
            <div
              className="w-full h-full"
              style={{ background: project.thumbnail }}
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h3 className="font-heading text-xl text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/70 line-clamp-3">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </MDiv>
      </MotionWrapper>
    </Link>
  );
}
