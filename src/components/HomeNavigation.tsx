import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { homeNavItems, stackTools } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HomeNavigation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activePreview = homeNavItems[activeIndex]?.preview;

  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col justify-between py-8 md:py-12">
      <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,36%)] lg:gap-16">
        <nav
          className="flex flex-col"
          aria-label="Home"
          onMouseLeave={() => setActiveIndex(1)}
        >
          {homeNavItems.map((item, index) => {
            const label = (
              <motion.span
                className={cn(
                  "nav-display inline-block transition-colors duration-300",
                  activeIndex === index
                    ? "text-foreground"
                    : "text-foreground/20",
                )}
                animate={{ x: activeIndex === index ? 16 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.label}
              </motion.span>
            );

            const shared = {
              key: item.label,
              className: "w-fit py-0.5 md:py-1",
              onMouseEnter: () => setActiveIndex(index),
              onFocus: () => setActiveIndex(index),
            };

            if (item.href) {
              return (
                <Link {...shared} to={item.href}>
                  {label}
                </Link>
              );
            }

            return (
              <div {...shared} aria-hidden="true">
                {label}
              </div>
            );
          })}
        </nav>

        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl border border-border lg:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={activePreview}
              src={activePreview}
              alt=""
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 overflow-hidden border-t border-border pt-6">
        <div className="ticker-track gap-12 md:gap-16">
          {[...stackTools, ...stackTools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap font-display text-2xl text-foreground/60 md:text-4xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
