import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, splitTitle } from "@/lib/data";

function CaseStudySection({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr] md:gap-10 md:py-10">
      <h3 className="font-display text-xl tracking-tight md:text-2xl">
        {title}
      </h3>
      <p className="max-w-3xl text-sm leading-7 text-foreground/80 md:text-base md:leading-8">
        {body}
      </p>
    </section>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="page-main flex min-h-[60vh] flex-col items-start justify-center py-16">
        <p className="font-display text-8xl tracking-tight md:text-[10rem]">
          404
        </p>
        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
          It seems like this page doesn&apos;t exist, or it&apos;s gone.
        </p>
        <Link
          to="/portfolio"
          className="mt-8 inline-flex rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="page-main py-10 md:py-16">
      <div className="max-w-5xl">
        <p className="text-sm text-muted">{project.category}</p>
        <h1 className="spaced-title mt-4 font-display text-display-sm">
          {splitTitle(project.title)}
        </h1>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-foreground/80 md:text-base md:leading-8">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <div>
            <p className="text-muted">Role:</p>
            <p className="mt-1">{project.role}</p>
          </div>
          <div>
            <p className="text-muted">Year:</p>
            <p className="mt-1">{project.year}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6 md:mt-14">
        {project.images.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-2xl border border-border bg-white/[0.02]"
          >
            <img
              src={image}
              alt={`${project.title} visual ${index + 1}`}
              className="aspect-[16/10] w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-5xl">
        <p className="text-sm text-muted">Explore the full story –</p>
        <CaseStudySection title="Challenge" body={project.challenge} />
        <CaseStudySection title="Objective" body={project.objective} />
        <CaseStudySection title="Results" body={project.results} />
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        {project.prev ? (
          <Link
            to={`/portfolio/${project.prev}`}
            className="text-sm transition-colors hover:text-accent"
          >
            ← Prev
          </Link>
        ) : (
          <span />
        )}

        {project.next ? (
          <Link
            to={`/portfolio/${project.next}`}
            className="text-sm transition-colors hover:text-accent"
          >
            Next →
          </Link>
        ) : null}
      </div>
    </main>
  );
}
