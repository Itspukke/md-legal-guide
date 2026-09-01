import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, User, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./WhatsAppButton";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(40, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please tell us a little more").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full border border-input bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-gold";

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ? parsed.data.phone : null,
      message: parsed.data.message,
    });

    if (error) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-navy md:text-4xl">
            Let's discuss your contracts
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal delay={80}>
            {status === "sent" ? (
              <div className="border border-border bg-card p-8">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/20 text-accent-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl text-navy">Thank you — your message is with us</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We'll be in touch shortly. For anything urgent, WhatsApp is the quickest route.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="link-underline mt-6 text-sm text-navy"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-navy">
                    Name
                  </label>
                  <input id="name" name="name" maxLength={100} className={fieldClass} placeholder="Your full name" />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={255}
                      className={fieldClass}
                      placeholder="you@company.co.za"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-navy">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="phone" name="phone" maxLength={40} className={fieldClass} placeholder="066 000 0000" />
                    {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    className={fieldClass}
                    placeholder="Tell us about the agreement or contract matter you need help with."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-xs text-destructive">
                    Something went wrong sending your message. Please try again or WhatsApp us.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-navy px-7 py-3 text-sm tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-navy-soft disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={160} className="space-y-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <User className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="text-sm text-navy">Dineo Motepe</p>
                  <p className="text-sm text-muted-foreground">Legal Contract Specialist</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:mdlegalcontractadvisory@gmail.com"
                  className="link-underline break-all text-sm text-navy"
                >
                  mdlegalcontractadvisory@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="space-y-1">
                  <a href="tel:+27678767861" className="link-underline block text-sm text-navy">
                    067 876 7861
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline block text-sm text-muted-foreground"
                  >
                    WhatsApp us
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-navy">Johannesburg, South Africa</p>
              </li>
            </ul>

            <div className="border border-border">
              <iframe
                title="Map of Johannesburg, South Africa"
                src="https://www.google.com/maps?q=Johannesburg,+South+Africa&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[35%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
