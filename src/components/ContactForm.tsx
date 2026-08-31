import { useState, type FormEvent } from "react";
import { contactServices } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (service: string) => {
    setSelected((c) =>
      c.includes(service) ? c.filter((s) => s !== service) : [...c, service],
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border p-8 md:p-10">
        <p className="font-display text-2xl md:text-3xl">Thanks for reaching out.</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Connect this form to your email provider to receive submissions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl border border-border p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="ex. John Smith" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hello@website.com"
            required
          />
        </div>
      </div>

      <fieldset className="space-y-4">
        <legend className="text-sm text-muted-foreground">
          What&apos;s Your Project About?
        </legend>
        <div className="flex flex-wrap gap-2">
          {contactServices.map((service) => {
            const on = selected.includes(service);
            return (
              <button key={service} type="button" onClick={() => toggle(service)}>
                <span
                  className={cn(
                    "inline-block rounded-full border px-4 py-2 text-sm transition-colors",
                    on
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                  )}
                >
                  {service}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="details">Share More Details</Label>
        <Textarea
          id="details"
          name="details"
          rows={5}
          placeholder="About your project..."
        />
      </div>

      <Button
        type="submit"
        className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
      >
        Submit
      </Button>
    </form>
  );
}
