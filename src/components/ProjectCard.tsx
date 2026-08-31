import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border"
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex items-end justify-between gap-4 p-5 md:p-6">
          <div>
            <h3 className="font-display text-2xl tracking-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.category}
            </p>
          </div>
          <span className="text-sm text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary">
            →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
