import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="page-main flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="font-display text-8xl tracking-tight md:text-[10rem]">404</p>
      <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
        It seems like this page doesn&apos;t exist, or it&apos;s gone. But
        don&apos;t worry! I&apos;ll get you back on track :)
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Back to Home
      </Link>
    </main>
  );
}
