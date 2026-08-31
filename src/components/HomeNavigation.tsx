import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { homeNavItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { StackTicker } from "./StackTicker";

export function HomeNavigation() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activePreview = homeNavItems[activeIndex]?.preview;

  return (
    <section className="relative flex min-h-[calc(100vh-88px)] flex-col justify-between py-8 md:py-12">
      <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)] lg:gap-16">
        <nav
          className="flex flex-col"
          aria-label="Primary"
          onMouseLeave={() => setActiveIndex(1)}
        >
          {homeNavItems.map((item, index) => {
            const content = (
              <motion.span
                className={cn(
                  "inline-block font-display text-display transition-colors duration-300",
                  activeIndex === index
                    ? "text-foreground"
                    : "text-foreground/25",
                )}
                animate={{
                  x: activeIndex === index ? 12 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.label}
              </motion.span>
            );

            const sharedProps = {
              key: item.label,
              className: "group w-fit py-1 md:py-2",
              onMouseEnter: () => setActiveIndex(index),
              onFocus: () => setActiveIndex(index),
            };

            if (item.href && "external" in item && item.external) {
              return (
                <a
                  {...sharedProps}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              );
            }

            if (item.href) {
              return (
                <Link {...sharedProps} to={item.href}>
                  {content}
                </Link>
              );
            }

            return (
              <div {...sharedProps} aria-hidden="true">
                {content}
              </div>
            );
          })}
        </nav>

        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-white/5 lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePreview}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activePreview}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <StackTicker />
    </section>
  );
}
