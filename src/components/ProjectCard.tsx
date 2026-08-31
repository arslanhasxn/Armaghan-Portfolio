import { Link } from "react-router-dom";
import type { Project } from "@/lib/data";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <Card className="overflow-hidden border-border/50 bg-card/40 transition-colors hover:border-border hover:bg-card/70">
        <div className="aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/10]">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </Card>
    </Link>
  );
}
