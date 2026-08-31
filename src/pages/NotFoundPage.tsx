import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <main className="page-main flex min-h-[50vh] flex-col items-start justify-center py-16">
      <p className="font-display text-5xl sm:text-7xl">404</p>
      <p className="mt-3 text-sm text-muted-foreground">Page not found.</p>
      <Button asChild className="mt-6">
        <Link to="/">Back to projects</Link>
      </Button>
    </main>
  );
}
