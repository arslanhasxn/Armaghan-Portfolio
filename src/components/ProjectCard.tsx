import { BentoCard } from "@/components/ui/bento-grid";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <BentoCard
      name={project.title}
      description={project.category}
      href={`/projects/${project.slug}`}
      cta="View project"
      background={
        <img
          src={project.thumbnail}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      }
    />
  );
}
