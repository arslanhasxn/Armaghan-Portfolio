import { aboutContent, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutPage() {
  return (
    <main className="page-main space-y-10 py-6 sm:space-y-14 sm:py-8 md:py-10">
      <section id="about" className="scroll-mt-24">
        <Card className="border-border/60 bg-card/50">
          <CardHeader>
            <CardTitle className="font-display text-2xl tracking-tight sm:text-3xl">
              About
            </CardTitle>
            <CardDescription>{siteConfig.role} · {siteConfig.city}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="max-w-2xl text-sm leading-7 text-foreground/85 sm:text-base sm:leading-8">
              {aboutContent.bio}
            </p>
            <ul className="flex flex-wrap gap-2">
              {aboutContent.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground sm:text-sm"
                >
                  {skill.replace(" –", "")}
                </li>
              ))}
            </ul>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block break-all text-sm hover:text-primary sm:text-base"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Phone
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-1 block text-sm hover:text-primary sm:text-base"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={siteConfig.social.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.twitter.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                X
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="resume" className="scroll-mt-24">
        <Card className="border-border/60 bg-card/50">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="font-display text-2xl tracking-tight sm:text-3xl">
                Resume
              </CardTitle>
              <CardDescription>
                View or download {siteConfig.name}&apos;s resume
              </CardDescription>
            </div>
            <Button asChild className="w-full shrink-0 sm:w-auto">
              <a
                href={siteConfig.resume.path}
                download={siteConfig.resume.fileName}
              >
                Download PDF
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-border bg-background">
              <iframe
                title={`${siteConfig.name} resume`}
                src={siteConfig.resume.path}
                className="h-[60vh] min-h-[320px] w-full sm:min-h-[480px]"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
