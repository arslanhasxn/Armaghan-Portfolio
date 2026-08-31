import { stackTools } from "@/lib/data";

export function StackTicker() {
  const items = [...stackTools, ...stackTools];

  return (
    <div className="mt-10 overflow-hidden border-t border-border pt-6">
      <div className="ticker-track gap-10 md:gap-14">
        {items.map((tool, index) => (
          <span
            key={`${tool}-${index}`}
            className="whitespace-nowrap font-display text-2xl text-foreground/70 md:text-4xl"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
