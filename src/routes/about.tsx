import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, ClipboardCheck, Globe } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { CONTACT } from "@/data/qualifications";
import assessment from "@/assets/assessment.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NVQ Alex Assessor | Work-Based Construction Assessment" },
      {
        name: "description",
        content:
          "NVQ Alex Assessor helps construction workers, tradespeople, supervisors and managers gain recognised qualifications from their on-site skills and experience.",
      },
      { property: "og:title", content: "About NVQ Alex Assessor" },
      {
        property: "og:description",
        content:
          "Work-based NVQ assessment for construction workers, supervisors and managers across the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About us"
        title={<>Qualifications built on real site experience</>}
        subtitle="NVQ Alex Assessor helps construction workers, tradespeople, supervisors and managers gain recognised qualifications based on the skills they already use at work."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-2 lg:px-6">
          <div>
            <h2 className="rule-orange text-3xl sm:text-4xl">Who we work with</h2>
            <p className="mt-6 text-muted-foreground">
              Most people on site already have the skills an NVQ asks for — what
              they are missing is the formal recognition. We work alongside you
              on your own jobs, gathering the evidence needed to prove your
              competence against the national standard.
            </p>
            <p className="mt-4 text-muted-foreground">
              That means no classroom, no written exams and no time off the
              tools. Assessment visits, photographs, observations and witness
              testimony are arranged around your working week.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you are a labourer working towards a Green CSCS card, a
              tradesperson going for a Level 2, a foreman stepping up to Level 4
              supervision, or a manager taking on Level 6 or Level 7, there is a
              route that fits.
            </p>
          </div>
          <img
            src={assessment}
            alt="Assessor discussing work with a construction worker on site"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="surface-navy py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="rule-orange text-3xl text-navy-foreground sm:text-4xl">How we work</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "One-to-one support",
                text: "A qualified assessor guides you through every unit, from registration to certification.",
              },
              {
                icon: ClipboardCheck,
                title: "Evidence from your job",
                text: "Your day-to-day work becomes the portfolio — no artificial tasks or mock projects.",
              },
              {
                icon: Globe,
                title: "We speak your language",
                text: `Support available in ${CONTACT.languages.join(", ")}.`,
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/15 bg-white/5 p-7">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl text-navy-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-primary px-7 py-4 font-display uppercase tracking-widest text-primary-foreground"
          >
            Check your eligibility <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
