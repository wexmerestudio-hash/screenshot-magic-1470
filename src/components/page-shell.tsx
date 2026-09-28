import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="surface-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl text-navy-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-navy-foreground/75 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
