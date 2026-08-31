import { Link, NavLink } from "react-router-dom";
import { Monitor, Moon, Search, Sun } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { LiveClock } from "@/components/LiveClock";
import { useSearch } from "@/context/SearchContext";
import { useTheme, type ThemeMode } from "@/context/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { openSearch } = useSearch();
  const { mode, setMode } = useTheme();

  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="page-main flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          to="/"
          className="truncate font-display text-sm font-medium tracking-tight transition-opacity hover:opacity-60 md:text-base"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex md:text-sm">
          <span>{siteConfig.role}</span>
          <span>•</span>
          <span>{siteConfig.city}</span>
          <span>•</span>
          <LiveClock />
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search</span>
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] lg:inline">
              ⌘K
            </kbd>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Theme"
              >
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="hidden h-4 w-4 dark:block" />
              </button>
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
        </div>
      </div>
    </header>
  );
}

const bottomLinks = [
  { to: "/portfolio", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
] as const;

export function BottomNav() {
  const { openSearch } = useSearch();

  return (
    <nav aria-label="Primary" className="glass-bar fixed inset-x-0 bottom-0 z-50">
      <div className="page-main flex items-center gap-1 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:gap-2 md:py-3">
        {bottomLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "relative flex-1 rounded-lg py-2 text-center text-[11px] font-medium transition-colors md:text-sm",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute inset-x-3 top-0 h-px bg-primary md:inset-x-4" />
                )}
                {item.label}
              </>
            )}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={openSearch}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground md:h-10 md:w-10"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
