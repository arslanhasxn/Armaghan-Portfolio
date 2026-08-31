import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsPage() {
  return (
    <main className="page-main py-6 sm:py-8 md:py-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
