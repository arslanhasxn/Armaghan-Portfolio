import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, splitTitle } from "@/lib/data";

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="grid gap-4 border-t border-border py-8 md:grid-cols-[160px_1fr] md:gap-10 md:py-10">
      <h3 className="font-display text-xl tracking-tight md:text-2xl">{title}</h3>
      <p className="text-sm leading-7 text-foreground/80 md:text-base md:leading-8">
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
      <main className="page-main flex min-h-[50vh] flex-col justify-center py-16">
        <p className="font-display text-8xl">404</p>
        <Link to="/portfolio" className="mt-6 text-sm hover:text-primary">
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="page-main py-10 md:py-16">
      <p className="text-sm text-muted-foreground">{project.category}</p>
      <h1 className="spaced-title mt-4">{splitTitle(project.title)}</h1>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-foreground/80 md:text-base md:leading-8">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-10 text-sm">
        <div>
          <p className="text-muted-foreground">Role:</p>
          <p className="mt-1">{project.role}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Year:</p>
          <p className="mt-1">{project.year}</p>
        </div>
      </div>

      <div className="mt-10 space-y-6 md:mt-14">
        {project.images.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={image}
              alt={`${project.title} ${index + 1}`}
              className="aspect-[16/10] w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-5xl">
        <p className="text-sm text-muted-foreground">Explore the full story –</p>
        <Section title="Challenge" body={project.challenge} />
        <Section title="Objective" body={project.objective} />
        <Section title="Results" body={project.results} />
      </div>

      <div className="mt-12 flex justify-between border-t border-border pt-8 text-sm">
        {project.prev ? (
          <Link to={`/portfolio/${project.prev}`} className="hover:text-primary">
            ← Prev
          </Link>
        ) : (
          <span />
        )}
        {project.next ? (
          <Link to={`/portfolio/${project.next}`} className="hover:text-primary">
            Next →
          </Link>
        ) : null}
      </div>
    </main>
  );
}
