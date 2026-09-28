import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/data/qualifications";

export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-6">
        <div>
          <img src={logo} alt="NVQ Alex Assessor" loading="lazy" width={64} height={64} className="h-16 w-16 object-contain" />
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Work-based NVQ assessment and construction training for tradespeople,
            supervisors and managers across the UK.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-navy-foreground/50">
            We speak {CONTACT.languages.join(" · ")}
          </p>
        </div>

        <div>
          <h3 className="text-lg text-navy-foreground">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/qualifications" className="hover:text-primary">NVQ Qualifications</Link></li>
            <li><Link to="/training" className="hover:text-primary">Training & Courses</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-navy-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-navy-foreground/85 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-navy-foreground/85 hover:text-primary">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all text-navy-foreground/85 hover:text-primary">
                <Mail className="h-4 w-4 shrink-0 text-primary" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-navy-foreground/50">
        © {new Date().getFullYear()} NVQ Alex Assessor. All rights reserved.
      </div>
    </footer>
  );
}
