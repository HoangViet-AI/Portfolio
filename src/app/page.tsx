import { HeroScene } from "@/components/hero/HeroScene";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroScene />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />

      <footer className="text-center py-8 text-foreground/40 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Engineer Portfolio</p>
        <p>Built with a Ghibli spirit</p>
      </footer>
    </main>
  );
}
