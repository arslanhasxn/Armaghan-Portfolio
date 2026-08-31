import { siteConfig } from "@/lib/data";

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  {
    label: "X (Twitter)",
    value: siteConfig.social.twitter.label,
    href: siteConfig.social.twitter.href,
  },
  {
    label: "Instagram",
    value: siteConfig.social.instagram.label,
    href: siteConfig.social.instagram.href,
  },
  {
    label: "LinkedIn",
    value: siteConfig.social.linkedin.label,
    href: siteConfig.social.linkedin.href,
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="page-main grid gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14 lg:grid-cols-5">
        {links.map((item) => (
          <div key={item.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </p>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="block text-sm transition-colors hover:text-primary md:text-base"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
