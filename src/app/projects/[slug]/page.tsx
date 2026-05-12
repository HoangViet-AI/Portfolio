import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Hoang Viet Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const paragraphs = project.content.split("\n\n");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 sm:px-10 pt-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 block"
      >
        &larr; Back to Portfolio
      </Link>

      <div className="h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
        {project.screenshots.length > 0 ? (
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.screenshots[0]}`}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: project.thumbnail }}
          />
        )}
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-8">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-secondary text-background font-medium hover:bg-secondary/90 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {project.screenshots.length > 0 && (
        <div className="mt-12">
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Architecture
          </h2>
          <div className="flex flex-col gap-6">
            {project.screenshots.map((src, index) => (
              <img
                key={index}
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full rounded-2xl border border-warm/20 shadow-lg"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
