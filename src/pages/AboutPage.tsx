import { aboutContent, siteConfig } from "@/lib/data";
import { SpacedHeading } from "@/components/SpacedHeading";

export function AboutPage() {
  return (
    <main className="page-main py-10 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="max-w-3xl">
          <SpacedHeading>About</SpacedHeading>
          <p className="mt-8 text-base leading-relaxed text-foreground/80 md:text-lg md:leading-8">
            {aboutContent.bio}
          </p>

          <ul className="mt-10 space-y-3 border-t border-border pt-8">
            {aboutContent.skills.map((skill) => (
              <li
                key={skill}
                className="font-display text-2xl tracking-tight md:text-3xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:pt-4">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={siteConfig.avatar}
              alt={siteConfig.name}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
