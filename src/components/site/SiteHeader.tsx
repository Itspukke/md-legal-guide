import { useState } from "react";
import { Menu, X } from "lucide-react";


const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#home" className="flex min-w-0 items-center" aria-label="MD Legal Contract Advisory — home">
          <img
            src="/logo.png"
            alt="MD Legal Contract Advisory logo"
            width={1280}
            height={592}
            className="h-10 w-auto mix-blend-multiply sm:h-12"
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
        <div className="fixed inset-0 z-40 flex flex-col md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-navy/40 backdrop-blur-xl"
          />
          <nav className="relative z-10 w-full border-b border-border bg-background/95 shadow-lg">
            <div className="mx-auto flex max-w-6xl items-start justify-between px-5 py-4 md:px-8">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href} className="border-b border-border last:border-b-0">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-foreground transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-1 text-navy transition-colors hover:text-gold"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
