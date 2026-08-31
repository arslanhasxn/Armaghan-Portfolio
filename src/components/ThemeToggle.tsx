import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground transition-transform hover:scale-105 active:scale-95",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
      )}
    </button>
  );
}
