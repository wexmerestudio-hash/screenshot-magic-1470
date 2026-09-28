import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/data/qualifications";

const nav = [
  { to: "/", label: "Home" },
  { to: "/qualifications", label: "NVQ Qualifications" },
  { to: "/training", label: "Training & Courses" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 surface-navy shadow-lg">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="NVQ Alex Assessor" width={56} height={56} className="h-12 w-12 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl font-bold uppercase leading-none tracking-wide">
              NVQ Alex <span className="text-primary">Assessor</span>
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.2em] text-navy-foreground/60">
              Construction Qualifications
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-sm uppercase tracking-widest text-navy-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-primary px-4 py-2 font-display text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-2 text-navy-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="block border-b border-white/10 py-3 font-display text-base uppercase tracking-widest text-navy-foreground/85 data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 bg-primary px-4 py-3 font-display uppercase tracking-widest text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {CONTACT.phone}
          </a>
        </nav>
      )}
      <div className="hazard-strip" />
    </header>
  );
}
