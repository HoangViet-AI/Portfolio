import { HeroScene } from "@/components/hero/HeroScene";
import { SceneSection } from "@/components/sections/SceneSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroScene />

      <SceneSection id="projects" className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="font-heading text-4xl text-primary">Projects</h2>
        <p className="mt-4 text-foreground/60">Coming in Phase 4</p>
      </SceneSection>

      <SceneSection id="about" className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="font-heading text-4xl text-primary">About</h2>
        <p className="mt-4 text-foreground/60">Coming in Phase 4</p>
      </SceneSection>
    </main>
  );
}
