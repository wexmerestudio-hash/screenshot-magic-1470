import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HardHat,
  Award,
  TrendingUp,
  Building2,
  CalendarClock,
  ArrowRight,
  Phone,
  Check,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { courses, levels, levelBlurb, CONTACT } from "@/data/qualifications";
import hero from "@/assets/hero-site.jpg";
import assessment from "@/assets/assessment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NVQ Alex Assessor | Construction NVQs, IPAF, PASMA & CSCS" },
      {
        name: "description",
        content:
          "Work-based construction NVQ assessment from Level 2 to Level 7, plus IPAF, PASMA and Green CSCS/GQA training across the UK.",
      },
      { property: "og:title", content: "NVQ Alex Assessor | Build Your Skills. Build Your Future." },
      {
        property: "og:description",
        content:
          "Construction NVQ qualifications Level 2 to 7, IPAF, PASMA and CSCS/GQA training assessed on the job.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: HardHat, title: "Work-based assessment", text: "Assessed on site doing your normal job — no classroom, no exams." },
  { icon: Award, title: "Recognised qualifications", text: "Nationally recognised NVQs respected across the UK construction industry." },
  { icon: TrendingUp, title: "Career progression", text: "Move from the tools into supervision and site management roles." },
  { icon: Building2, title: "Construction-focused", text: "Every qualification is built around real construction trades and operations." },
  { icon: CalendarClock, title: "Flexible assessment", text: "Visits and evidence gathering arranged around your work schedule." },
];

function Home() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Construction worker on site at dusk"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 lg:px-6 lg:py-36">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            UK Construction Qualifications
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl text-navy-foreground sm:text-6xl lg:text-7xl">
            Build your skills.{" "}
            <span className="text-primary">Build your future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">
            Construction NVQ Qualifications, IPAF, PASMA & CSCS/GQA
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-display text-base uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get qualified <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/qualifications"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-foreground/40 px-7 py-4 font-display text-base uppercase tracking-widest text-navy-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View qualifications
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="rule-orange text-3xl sm:text-4xl">Why choose an NVQ</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="border-l-4 border-primary bg-muted/60 p-6 shadow-[var(--shadow-card)]"
              >
                <b.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-navy py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="rule-orange text-3xl text-navy-foreground sm:text-4xl">
            Qualification levels
          </h2>
          <p className="mt-6 max-w-2xl text-navy-foreground/70">
            From operative trades through to senior management — there is an NVQ
            route for every stage of a construction career.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {levels.map((level) => (
              <Link
                key={level}
                to="/qualifications"
                search={{ level: String(level), q: "" }}
                className="group border border-white/15 bg-white/5 p-6 transition-colors hover:border-primary"
              >
                <span className="font-display text-5xl text-primary">{level}</span>
                <p className="mt-3 font-display text-lg uppercase text-navy-foreground">
                  Level {level}
                </p>
                <p className="mt-2 text-xs text-navy-foreground/60">{levelBlurb[level]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
          <img
            src={assessment}
            alt="Assessor reviewing work with a tradesperson on site"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full object-cover"
          />
          <div>
            <h2 className="rule-orange text-3xl sm:text-4xl">How assessment works</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Free eligibility chat about your trade and experience",
                "Registration and a plan built around your current work",
                "Evidence gathered on site — photos, observations, witness testimony",
                "One-to-one support from a qualified assessor throughout",
                "Certification and, where applicable, CSCS card eligibility",
              ].map((step) => (
                <li key={step} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="rule-orange text-3xl sm:text-4xl">Training courses</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-2 font-display text-3xl text-primary">{c.price}</p>
                <p className="mt-4 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
            ))}
          </div>
          <Link
            to="/training"
            className="mt-9 inline-flex items-center gap-2 font-display uppercase tracking-widest text-primary hover:underline"
          >
            See all training details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="surface-navy py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 text-center lg:grid-cols-[1fr_auto] lg:px-6 lg:text-left">
          <div>
            <h2 className="text-3xl text-navy-foreground sm:text-4xl">
              Ready to get qualified?
            </h2>
            <p className="mt-3 text-navy-foreground/70">
              Call or message to check your eligibility — no obligation.
            </p>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-lg uppercase tracking-widest text-primary-foreground"
          >
            <Phone className="h-5 w-5" /> {CONTACT.phone}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
