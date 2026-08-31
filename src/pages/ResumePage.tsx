import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ResumePage() {
  const [useLocal, setUseLocal] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(siteConfig.resume.localPath, { method: "HEAD" })
      .then((r) => !cancelled && setUseLocal(r.ok))
      .catch(() => !cancelled && setUseLocal(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const preview = useLocal
    ? siteConfig.resume.localPath
    : siteConfig.resume.drivePreview;
  const download = useLocal
    ? siteConfig.resume.localPath
    : siteConfig.resume.driveDownload;

  return (
    <main className="page-main py-10 md:py-16">
      <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Resume</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            View or download my resume. Add your PDF to{" "}
            <code className="text-foreground">public/resume.pdf</code> to use a
            local file.
          </p>
        </div>
        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a
            href={download}
            download={useLocal ? siteConfig.resume.fileName : undefined}
            target={useLocal ? undefined : "_blank"}
            rel={useLocal ? undefined : "noreferrer"}
          >
            Download Resume
          </a>
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        <iframe
          title={`${siteConfig.name} resume`}
          src={preview}
          className="h-[70vh] min-h-[400px] w-full bg-background"
        />
      </div>
    </main>
  );
}
