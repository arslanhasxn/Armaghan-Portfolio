import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[120px_1fr] sm:gap-8 sm:py-8">
      <h3 className="font-display text-lg tracking-tight sm:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-7 text-foreground/80 sm:text-base sm:leading-8">
        {body}
      </p>
    </div>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="page-main flex min-h-[50vh] flex-col items-start justify-center py-16">
        <p className="font-display text-5xl sm:text-7xl">404</p>
        <Button asChild variant="link" className="mt-4 px-0">
          <Link to="/">← Back to projects</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="page-main py-6 sm:py-8 md:py-10">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 gap-1.5">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </Link>
      </Button>

      <p className="text-sm text-muted-foreground">{project.category}</p>
      <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
        {project.title}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/80 sm:mt-6 sm:text-base sm:leading-8">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-8 text-sm">
        <div>
          <p className="text-muted-foreground">Role</p>
          <p className="mt-1">{project.role}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Year</p>
          <p className="mt-1">{project.year}</p>
        </div>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        {project.images.map((image, index) => (
          <Card
            key={image}
            className="overflow-hidden border-border/50 bg-card/30 p-1 sm:p-1.5"
          >
            <CardContent className="overflow-hidden rounded-md p-0">
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="mt-8 sm:mt-10" />

      <div className="max-w-4xl">
        <Section title="Challenge" body={project.challenge} />
        <Separator />
        <Section title="Objective" body={project.objective} />
        <Separator />
        <Section title="Results" body={project.results} />
      </div>

      <div className="mt-8 flex justify-between border-t border-border pt-6 text-sm sm:mt-10">
        {project.prev ? (
          <Button asChild variant="link" className="px-0">
            <Link to={`/projects/${project.prev}`}>← Prev</Link>
          </Button>
        ) : (
          <span />
        )}
        {project.next ? (
          <Button asChild variant="link" className="px-0">
            <Link to={`/projects/${project.next}`}>Next →</Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
