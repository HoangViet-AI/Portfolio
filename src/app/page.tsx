import { HeroScene } from "@/components/hero/HeroScene";
import { FallingLeaves } from "@/components/ambient/FallingLeaves";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyen Viet Hoang",
  jobTitle: "AI Engineer",
  url: "https://hoangviet-ai.github.io/Portfolio",
  sameAs: [
    "https://github.com/HoangViet-AI",
    "https://www.linkedin.com/in/jamesnguyen106/",
  ],
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FallingLeaves />
      <HeroScene />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />

      <footer aria-label="Site footer" className="text-center py-8 text-foreground/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Hoang Viet Portfolio</p>
        <p>Built with a Ghibli spirit</p>
      </footer>
    </main>
  );
}
