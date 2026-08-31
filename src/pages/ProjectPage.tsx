import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "@/lib/data";
import { PageEnter } from "@/components/motion/PageEnter";

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="project-detail-meta">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-base text-foreground">{value}</p>
    </div>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="page-main page-content flex min-h-[50vh] flex-col items-start justify-center">
        <p className="page-title font-display font-semibold tracking-tight">404</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <PageEnter>
      <main className="project-detail">
        <aside className="project-detail-sidebar">
          <div className="project-detail-sidebar-inner">
            <Link
              to="/"
              className="project-detail-back inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-opacity hover:opacity-70"
            >
              <ArrowLeft className="h-4 w-4" />
              Projects
            </Link>

            <h1 className="project-detail-title mt-6 font-display font-semibold tracking-tight">
              {project.title}
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">{project.category}</p>

            <p className="mt-6 text-base leading-8 text-foreground sm:text-[1.05rem] sm:leading-[1.85]">
              {project.description}
            </p>

            <MetaField label="Role" value={project.role} />
            <MetaField label="Year" value={project.year} />
          </div>
        </aside>

        <div className="project-detail-gallery" data-lenis-prevent>
          {project.images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${project.title} ${index + 1}`}
              className="block w-full"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </main>
    </PageEnter>
  );
}
