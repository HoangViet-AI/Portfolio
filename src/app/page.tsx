import { DesignSystemDemo } from "@/components/demo/DesignSystemDemo";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="px-6 py-20 text-center sm:px-10 lg:px-16">
        <h1 className="font-heading text-4xl text-primary sm:text-6xl">
          Ghibli Portfolio — Design System
        </h1>
        <p className="mt-4 text-lg text-foreground/60">Phase 2 verification page</p>
      </header>
      <DesignSystemDemo />
    </main>
  );
}
