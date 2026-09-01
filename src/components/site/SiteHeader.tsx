import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/md-legal-logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#home" className="flex min-w-0 items-center" aria-label="MD Legal Contract Advisory — home">
          <img
            src={logoAsset.url}
            alt="MD Legal Contract Advisory logo"
            width={662}
            height={496}
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted-foreground transition-colors duration-200 hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-1 text-navy md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col md:hidden animate-fade-in">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-navy/95 backdrop-blur-xl"
          />
          <nav className="relative z-10 flex h-full flex-col px-8 pt-24 pb-12">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <X className="h-7 w-7" />
            </button>
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <li key={l.href} className="border-b border-white/10">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-serif text-3xl text-primary-foreground transition-colors hover:text-gold"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

    </header>
  );
}
