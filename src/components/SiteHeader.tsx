import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/data";
import { LiveClock } from "./LiveClock";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="page-main flex items-center justify-between gap-4 py-4 md:py-5">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 transition-opacity hover:opacity-70"
        >
          <span className="truncate font-display text-sm font-medium tracking-tight md:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 text-xs text-muted md:text-sm">
          <span className="hidden sm:inline">{siteConfig.role}</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>{siteConfig.city}</span>
          <span className="text-border">•</span>
          <LiveClock />
        </div>
      </div>
    </header>
  );
}
