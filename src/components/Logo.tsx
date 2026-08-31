import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  alt = siteConfig.name,
}: {
  className?: string;
  alt?: string;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <img
      src={
        resolvedTheme === "dark"
          ? siteConfig.logoWhite
          : siteConfig.logoBlack
      }
      alt={alt}
      className={cn("object-contain", className)}
    />
  );
}
