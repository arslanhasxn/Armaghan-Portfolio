import { splitTitle } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SpacedHeading({
  children,
  as: Tag = "h1",
  className,
}: {
  children: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={cn("spaced-title", className)}>{splitTitle(children)}</Tag>
  );
}
