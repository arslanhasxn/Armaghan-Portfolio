import { splitTitle } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SpacedHeading({
  children,
  as: Tag = "h1",
  className,
}: {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={cn("spaced-title font-display text-display", className)}>
      {splitTitle(children)}
    </Tag>
  );
}
