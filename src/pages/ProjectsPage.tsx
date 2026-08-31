import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { BentoGrid } from "@/components/ui/bento-grid";
import { PageEnter } from "@/components/motion/PageEnter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectsPage() {
  return (
    <PageEnter>
      <main className="page-main page-content">
        <Stagger>
          <BentoGrid>
            {projects.map((project) => (
              <StaggerItem key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </BentoGrid>
        </Stagger>
      </main>
    </PageEnter>
  );
}
