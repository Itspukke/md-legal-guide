import { useEffect, useState } from "react";
import {
  FileSignature,
  ShieldCheck,
  SearchCheck,
  RefreshCcw,
  Users,
  FolderArchive,
  Handshake,
  Scale,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-law.jpg";
import serviceContract from "@/assets/service-contract.jpg";
import serviceNegotiation from "@/assets/service-negotiation.jpg";
import serviceRecords from "@/assets/service-records.jpg";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.06);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Law office desk with scales of justice and legal texts"
        width={1920}
        height={1200}
        style={{ transform: `translateY(${offset}px) scale(1.06)` }}
        className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 -z-10 bg-navy/60" />

      <div className="mx-auto w-full max-w-3xl px-5 py-32 text-center md:px-8 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">
            MD Legal Contract Advisory
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl md:text-[3.4rem]">
            Expert guidance on commercial and corporate contracts.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            We help businesses navigate complex agreements with clarity and confidence, ensuring
            their interests are protected at every step.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-gold px-7 py-3 text-sm tracking-wide text-accent-foreground transition-opacity duration-200 hover:opacity-90"
            >
              Book a Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/35 px-7 py-3 text-sm tracking-wide text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section id="about" className="border-y border-border bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            About the firm
          </p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="mt-8 border-l border-gold pl-6 font-serif text-xl leading-relaxed text-primary-foreground md:pl-8 md:text-[1.65rem] md:leading-[1.5]">
            "Our mission is to empower people and businesses by providing expert, reliable, and
            strategic legal guidance across all aspects of commercial law — ensuring clarity,
            compliance, and confidence in every agreement and decision."
          </blockquote>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 pl-6 text-sm text-primary-foreground/70 md:pl-9">
            Dineo Motepe — Legal Contract Specialist
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    icon: FileSignature,
    title: "Contract Drafting, Review & Negotiation",
    text: "Drafting, reviewing, and negotiating a wide range of commercial contracts.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Advisory",
    text: "Ensuring compliance with applicable laws, regulations, and company policies.",
  },
  {
    icon: SearchCheck,
    title: "Risk Assessment & Due Diligence",
    text: "Thorough contract risk assessments and due diligence before you commit.",
  },
  {
    icon: RefreshCcw,
    title: "Contract Lifecycle Management",
    text: "Managing renewals, amendments, and terminations on time and on record.",
  },
  {
    icon: Users,
    title: "Stakeholder Advisory",
    text: "Advising on contractual rights, obligations, and risk mitigation.",
  },
  {
    icon: FolderArchive,
    title: "Contract Records & Documentation",
    text: "Maintaining organised contract records and documentation systems.",
  },
  {
    icon: Handshake,
    title: "Legal-Commercial Liaison",
    text: "Facilitating communication between legal, commercial, and operational teams.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution Support",
    text: "Overseeing contract disputes and supporting litigation or ADR processes.",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    text: "Implementing best practices in contract management across the business.",
  },
  {
    icon: GraduationCap,
    title: "Training & Guidance",
    text: "Training your teams on contract procedures and compliance requirements.",
  },
];

const serviceGroups = [
  {
    image: { src: serviceContract, alt: "Signing a commercial contract with a fountain pen" },
    caption: "Drafting & review",
    items: services.slice(0, 4),
  },
  {
    image: { src: serviceNegotiation, alt: "Contract negotiation around a boardroom table" },
    caption: "Negotiation & advisory",
    items: services.slice(4, 7),
  },
  {
    image: { src: serviceRecords, alt: "Organised legal contract files on an office shelf" },
    caption: "Records & enablement",
    items: services.slice(7),
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-navy md:text-4xl">
            Practical contract expertise, end to end
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-20">
          {serviceGroups.map((group, gi) => (
            <div
              key={group.caption}
              className="grid items-start gap-8 md:grid-cols-12 md:gap-10"
            >
              <Reveal
                variant="image"
                className={cn(
                  "md:col-span-5",
                  gi % 2 === 1 && "md:order-2",
                )}
              >
                <img
                  src={group.image.src}
                  alt={group.image.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover md:h-full md:max-h-72"
                />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.caption}
                </p>
              </Reveal>

              <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-7">
                {group.items.map((service, i) => (
                  <Reveal
                    as="li"
                    key={service.title}
                    delay={i * 70}
                    className="border-t border-border pt-5"
                  >
                    <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <h3 className="mt-3 text-lg leading-snug text-navy">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.text}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const steps = [
  {
    title: "Contact Us",
    text: "Reach out via the form, email, or WhatsApp with a short outline of your matter.",
  },
  {
    title: "Consultation",
    text: "Discuss your contract needs directly with Dineo Motepe.",
  },
  {
    title: "Tailored Support",
    text: "Receive expert guidance through drafting, review, negotiation, or ongoing contract management.",
  },
];

export function Process() {
  return (
    <section className="border-y border-border bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
          <h2 className="mt-4 text-3xl text-navy md:text-4xl">Three straightforward steps</h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <span className="font-serif text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-xl text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What types of contracts do you review?",
    a: "Commercial and corporate agreements of most kinds — supply and service agreements, SLAs, distribution and reseller contracts, NDAs, leases, employment-related agreements, shareholder and joint-venture documents, and procurement or tender contracts.",
  },
  {
    q: "How long does a contract review take?",
    a: "A standard agreement is typically reviewed within two to three business days, with a written summary of risks and recommended amendments. Complex or high-value contracts take longer, and we confirm a realistic timeline before starting.",
  },
  {
    q: "Do you handle contract disputes?",
    a: "Yes. We assess the contractual position, advise on rights and obligations, and support negotiation, mediation, arbitration, or litigation by working alongside your attorneys where proceedings are required.",
  },
  {
    q: "Can you manage our full contract lifecycle?",
    a: "We can take on renewals, amendments, terminations, obligation tracking, and record-keeping — either as ongoing support or by setting up a system and training your team to run it internally.",
  },
  {
    q: "Do you work with small businesses as well as corporates?",
    a: "Yes. Engagements range from a single contract review for an owner-managed business to ongoing advisory for corporate legal and commercial teams.",
  },
];

export function Faq() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
          <h2 className="mt-4 text-3xl text-navy md:text-4xl">Common questions</h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left font-serif text-base text-navy hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy py-16 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg">MD Legal Contract Advisory</p>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
              Specialist advisory on commercial and corporate contracts.
            </p>
          </div>
          <nav>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/80 transition-colors duration-200 hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:mdlegalcontractadvisory@gmail.com" className="break-all hover:text-accent">
                  mdlegalcontractadvisory@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27678767861" className="hover:text-accent">
                  067 876 7861
                </a>
              </li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} MD Legal Contract Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
