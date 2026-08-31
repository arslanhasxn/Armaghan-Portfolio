import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<typeof Link> {
  name: string;
  className?: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 gap-4 sm:auto-rows-[22rem] sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <Link
    to={href}
    className={cn(
      "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl",
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "cursor-pointer transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 overflow-hidden">{background}</div>

    <div className="relative z-10 mt-auto">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 transition-all duration-500 ease-out",
          "h-[58%] bg-gradient-to-t from-black/55 via-black/22 to-transparent",
          "lg:h-[40%] lg:group-hover:h-[56%] lg:group-hover:from-black/62 lg:group-hover:via-black/28",
        )}
      />

      <div className="relative p-4 pt-10 transition-all duration-500 ease-out lg:group-hover:pt-12 lg:group-hover:pb-5">
        <div className="flex transform-gpu flex-col gap-1 transition-transform duration-500 ease-out lg:group-hover:-translate-y-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-white/95">
            {name}
          </h3>
          <p className="max-w-lg text-sm text-white/70">{description}</p>
        </div>

        <div
          className={cn(
            "flex items-center overflow-hidden transition-all duration-500 ease-out",
            "mt-3 max-h-8 opacity-100",
            "lg:mt-0 lg:max-h-0 lg:opacity-0 lg:group-hover:mt-3 lg:group-hover:max-h-10 lg:group-hover:opacity-100",
          )}
        >
          <span className="inline-flex items-center text-sm font-medium text-white/90">
            {cta}
            <ArrowRight className="ms-2 h-4 w-4" />
          </span>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[0.02] group-hover:dark:bg-neutral-800/10" />
  </Link>
);

export { BentoCard, BentoGrid };
