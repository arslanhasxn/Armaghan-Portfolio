import { useState, type FormEvent } from "react";
import { contactServices } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white/[0.02] p-8 md:p-10">
        <p className="font-display text-2xl md:text-3xl">
          Thanks for reaching out.
        </p>
        <p className="mt-3 max-w-xl text-muted">
          Your message has been recorded locally for now. Connect the form to
          your preferred email service to receive submissions in production.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-2xl border border-border bg-white/[0.02] p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm text-muted">Full name</span>
          <input
            required
            name="name"
            placeholder="ex. John Smith"
            className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-muted">Email</span>
          <input
            required
            type="email"
            name="email"
            placeholder="hello@website.com"
            className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>

      <fieldset className="space-y-4">
        <legend className="text-sm text-muted">
          What&apos;s Your Project About?
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactServices.map((service) => {
            const active = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                  active
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border text-muted hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block space-y-2">
        <span className="text-sm text-muted">Share More Details</span>
        <textarea
          name="details"
          rows={5}
          placeholder="About your project..."
          className="w-full resize-y rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Submit
      </button>
    </form>
  );
}
