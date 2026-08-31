import { siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export function ContactPage() {
  return (
    <main className="page-main py-10 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,42%)] lg:gap-16">
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
            If you prefer not to fill out forms, feel free to email me directly
            and let&apos;s talk about the next big thing!
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 inline-block transition-colors hover:text-primary"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block break-all transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
