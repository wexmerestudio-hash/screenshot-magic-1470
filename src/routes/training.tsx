import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { courses } from "@/data/qualifications";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "IPAF, PASMA & CSCS Training Courses | NVQ Alex Assessor" },
      {
        name: "description",
        content:
          "IPAF 3a & 3b from £280 + VAT, PASMA from £180 + VAT and Green CSCS/GQA from £350 + VAT. Practical construction training in the UK.",
      },
      { property: "og:title", content: "Training & Courses — IPAF, PASMA, CSCS/GQA" },
      {
        property: "og:description",
        content:
          "Powered access, mobile tower and site safety training with clear pricing from NVQ Alex Assessor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Training,
});

function Training() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="IPAF · PASMA · CSCS / GQA"
        title={<>Training & Courses</>}
        subtitle="Practical, industry-recognised training to keep you working safely and open up more opportunities on site."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((c) => (
              <article key={c.title} className="flex flex-col bg-card p-8 shadow-[var(--shadow-card)]">
                <h2 className="text-3xl">{c.title}</h2>
                <p className="mt-2 font-display text-4xl text-primary">{c.price}</p>
                <p className="mt-5 text-sm text-muted-foreground">{c.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-secondary px-6 py-3 pt-3 font-display text-sm uppercase tracking-widest text-secondary-foreground transition-colors hover:bg-primary"
                >
                  Book this course <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
          <div>
            <h2 className="rule-orange text-3xl sm:text-4xl">Working at height, done right</h2>
            <p className="mt-6 text-muted-foreground">
              IPAF 3a covers mobile vertical boom platforms and 3b covers mobile
              vertical scissor lifts. PASMA covers mobile access towers. Both
              combine theory with hands-on practical assessment, so you finish
              the day ready to work.
            </p>
            <p className="mt-4 text-muted-foreground">
              Courses can be arranged for individuals or teams. Get in touch with
              your dates and numbers and we will confirm availability.
            </p>
          </div>
          <img
            src={training}
            alt="Scissor lift and boom lift in use on a construction site"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>
      </section>
    </PageShell>
  );
}
