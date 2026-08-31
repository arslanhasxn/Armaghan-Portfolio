import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function PortfolioPage() {
  return (
    <main className="page-main py-10 md:py-16">
      <div className="max-w-4xl">
        <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
          Dive into a few projects that represent my most fulfilling design
          experiences
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
