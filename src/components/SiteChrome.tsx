import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getProjectBySlug } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import { BottomDock } from "@/components/BottomDock";

function getHeaderTitle(pathname: string): string {
  if (pathname === "/") return "Projects";
  if (pathname === "/about") return "About";
  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (match) {
    const project = getProjectBySlug(match[1]);
    return project?.title ?? "Project";
  }
  return "Projects";
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const isProjectDetail = /^\/projects\/[^/]+$/.test(pathname);
  const isAbout = pathname === "/about";
  const reduceMotion = useReducedMotion();

  if (isProjectDetail || isAbout) {
    return null;
  }

  const title = getHeaderTitle(pathname);

  return (
    <header className="site-header">
      <div className="page-main page-header">
        <AnimatePresence mode="wait">
          <motion.h1
            key={title}
            initial={
              reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(6px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -8, filter: "blur(6px)" }
            }
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="page-title font-display font-semibold tracking-tight"
          >
            {title}
          </motion.h1>
        </AnimatePresence>
      </div>
    </header>
  );
}

export function BottomNav() {
  const { pathname } = useLocation();

  return <BottomDock pathname={pathname} />;
}
