import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Briefcase, FileText, Moon, Sun } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const dockItems = [
  {
    id: "projects",
    to: "/",
    label: "Projects",
    variant: "icon" as const,
    icon: Briefcase,
    isActive: (pathname: string) =>
      pathname === "/" || pathname.startsWith("/projects/"),
  },
  {
    id: "about",
    to: "/about",
    label: "About",
    variant: "logo" as const,
    isActive: (pathname: string) => pathname === "/about",
  },
  {
    id: "resume",
    href: siteConfig.resume.url,
    label: "Resume",
    variant: "icon" as const,
    icon: FileText,
    external: true,
  },
] as const;

function getDockIconClass(isDark: boolean, active = false) {
  return cn(
    "rounded-[8px] bg-transparent p-0 transition-colors",
    isDark
      ? "text-neutral-200 hover:bg-white/10 hover:text-white"
      : "text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950",
    active &&
      (isDark
        ? "bg-white/18 text-white"
        : "bg-neutral-200 text-neutral-950"),
  );
}

function getDockClass(isDark: boolean) {
  return cn(
    "pointer-events-auto relative mx-auto w-fit gap-1 rounded-[16px] p-2 outline-none",
    isDark
      ? "border-0 bg-[hsl(240_5%_13%)] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      : "border border-neutral-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.06)]",
  );
}

function getTooltipClass(isDark: boolean) {
  return cn(
    "z-[110] rounded-lg border-none px-3 py-1.5 text-xs",
    isDark
      ? "bg-[hsl(240_5%_13%)] text-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      : "border border-neutral-200/90 bg-white text-neutral-800 shadow-[0_8px_30px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.06)]",
  );
}

export function BottomDock({ pathname }: { pathname: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 pb-[env(safe-area-inset-bottom)]"
    >
      <TooltipProvider delayDuration={0} skipDelayDuration={0}>
        <Dock
          direction="middle"
          disableMagnification
          className={getDockClass(isDark)}
        >
          {dockItems.map((item) => {
            const active = !("external" in item) && item.isActive(pathname);
            const Icon = item.variant === "icon" ? item.icon : null;
            const iconClass = getDockIconClass(isDark, active);

            const iconContent =
              item.variant === "logo" ? (
                <Logo className="size-6 shrink-0 object-contain" />
              ) : Icon ? (
                <Icon className="size-6 shrink-0" strokeWidth={1.5} />
              ) : null;

            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  {"external" in item ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex items-center justify-center outline-none focus-visible:outline-none"
                    >
                      <DockIcon className={iconClass}>{iconContent}</DockIcon>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      role="tab"
                      aria-label={item.label}
                      aria-selected={active}
                      aria-current={active ? "page" : undefined}
                      className="inline-flex items-center justify-center outline-none focus-visible:outline-none"
                    >
                      <DockIcon className={iconClass}>{iconContent}</DockIcon>
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  align="center"
                  sideOffset={16}
                  className={getTooltipClass(isDark)}
                >
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="inline-flex items-center justify-center border-0 bg-transparent p-0 outline-none focus-visible:outline-none"
              >
                <DockIcon className={getDockIconClass(isDark)}>
                  {isDark ? (
                    <Sun className="size-6 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Moon className="size-6 shrink-0" strokeWidth={1.75} />
                  )}
                </DockIcon>
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              sideOffset={16}
              className={getTooltipClass(isDark)}
            >
              <p>{isDark ? "Light mode" : "Dark mode"}</p>
            </TooltipContent>
          </Tooltip>
        </Dock>
      </TooltipProvider>
    </nav>,
    document.body,
  );
}
