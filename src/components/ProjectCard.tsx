import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-white/[0.02]"
      >
        <div className="aspect-[16/10] overflow-hidden">
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
            <p className="mt-1 text-sm text-muted">{project.category}</p>
          </div>
          <span
            aria-hidden
            className="text-sm text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
          >
            →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
