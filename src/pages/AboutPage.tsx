import { ArrowUpRight } from "lucide-react";

import { aboutContent, siteConfig } from "@/lib/data";
import { AboutPhoto } from "@/components/AboutPhoto";
import { PageEnter } from "@/components/motion/PageEnter";
import { Reveal } from "@/components/motion/Reveal";

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="about-contact-item">
      <p className="text-sm text-muted-foreground">{label}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group mt-1 inline-flex max-w-full items-start gap-1.5 text-base text-foreground transition-colors hover:text-foreground/80"
      >
        <span className="break-all">{value}</span>
        <ArrowUpRight
          aria-hidden
          className="mt-0.5 size-[1.1em] shrink-0 opacity-0 transition-all duration-200 ease-out -translate-x-0.5 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0"
        />
      </a>
    </div>
  );
}

export function AboutPage() {
  return (
    <PageEnter>
      <main className="page-main page-content about-page">
        <section id="about" className="about-layout scroll-mt-24">
          <Reveal className="about-grid-title">
            <h1 className="page-title font-display font-semibold tracking-tight">
              About
            </h1>
          </Reveal>

          <Reveal className="about-photo">
            <AboutPhoto />
          </Reveal>

          <Reveal delay={0.05} className="about-copy">
            <div className="about-bio">
              {aboutContent.bio.map((paragraph) => (
                <p key={paragraph} className="about-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-contact-grid">
              <div className="about-contact-left">
                <ContactItem
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactItem
                  label="Phone"
                  value={siteConfig.phone}
                  href={siteConfig.phoneHref}
                />
              </div>

              <div className="about-contact-right">
                <ContactItem
                  label="Instagram"
                  value={siteConfig.social.instagram.label}
                  href={siteConfig.social.instagram.href}
                />
                <ContactItem
                  label="LinkedIn"
                  value={siteConfig.social.linkedin.label}
                  href={siteConfig.social.linkedin.href}
                />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </PageEnter>
  );
}
