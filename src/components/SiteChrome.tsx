import { Link, useLocation } from "react-router-dom";
import { Briefcase, FileText, Monitor, Moon, Search, Sun } from "lucide-react";
import { getProjectBySlug } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { useSearch } from "@/context/SearchContext";
import { useTheme, type ThemeMode } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

function getHeaderTitle(pathname: string): string {
  if (pathname === "/") return "PROJECTS";
  if (pathname === "/about") return "ABOUT";
  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (match) {
    const project = getProjectBySlug(match[1]);
    return project?.title.toUpperCase() ?? "PROJECT";
  }
  return "PROJECTS";
}

export function SiteHeader() {
  const { openSearch } = useSearch();
  const { mode, setMode } = useTheme();
  const { pathname } = useLocation();
  const title = getHeaderTitle(pathname);
  const isProjectPage = pathname.startsWith("/projects/");

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="page-main flex h-14 items-center justify-between gap-3 sm:h-16">
        <Link
          to="/"
          className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9"
          aria-label="Home"
        >
          <Logo />
        </Link>

        <h1 className="truncate font-display text-sm font-medium uppercase tracking-[0.2em] sm:text-base">
          {title}
        </h1>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="hidden h-4 w-4 dark:block" />
                <span className="sr-only">Theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={mode}
                onValueChange={(v) => setMode(v as ThemeMode)}
              >
                <DropdownMenuRadioItem value="system">
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {!isProjectPage ? (
            <Button
              variant="outline"
              size="sm"
              onClick={openSearch}
              className="hidden h-9 gap-2 rounded-full px-3 text-muted-foreground sm:inline-flex"
            >
              <Search className="h-3.5 w-3.5" />
              Search
            </Button>
          ) : null}

          <Button
            variant="ghost"
            size="icon"
            onClick={openSearch}
            className="h-9 w-9 sm:hidden"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const dockItems = [
  {
    to: "/",
    label: "Projects",
    icon: Briefcase,
    isActive: (pathname: string) =>
      pathname === "/" || pathname.startsWith("/projects/"),
  },
  {
    to: "/about",
    label: "About",
    icon: null,
    isActive: (pathname: string, hash: string) =>
      pathname === "/about" && hash !== "#resume",
  },
  {
    to: "/about#resume",
    label: "Resume",
    icon: FileText,
    isActive: (pathname: string, hash: string) =>
      pathname === "/about" && hash === "#resume",
  },
] as const;

export function BottomNav() {
  const { pathname, hash } = useLocation();

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]"
    >
      <div className="dock-nav pointer-events-auto">
        {dockItems.map((item) => {
          const isLogo = item.icon === null;
          const active = item.isActive(pathname, hash);

          if (isLogo) {
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={cn("dock-item dock-item-logo", active && "dock-item-active")}
              >
                <span className="flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
                  <Logo />
                </span>
              </Link>
            );
          }

          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={cn("dock-item", active && "dock-item-active")}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
