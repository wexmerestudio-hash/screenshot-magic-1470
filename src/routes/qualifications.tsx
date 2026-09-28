import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { qualifications, levels, levelBlurb } from "@/data/qualifications";

const searchSchema = z.object({
  level: fallback(z.string(), "all").default("all"),
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/qualifications")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "NVQ Qualifications Level 2 to 7 | NVQ Alex Assessor" },
      {
        name: "description",
        content:
          "Browse construction NVQ qualifications from Level 2 trades to Level 7 senior management, with prices and work-based assessment.",
      },
      { property: "og:title", content: "NVQ Qualifications Level 2 to 7" },
      {
        property: "og:description",
        content:
          "Searchable list of construction NVQs by level, including trowel, cladding, plant, supervision and site management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Qualifications,
});

function Qualifications() {
  const { level, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/qualifications" });

  const activeLevel = levels.map(String).includes(level) ? level : "all";
  const term = q.trim().toLowerCase();

  const results = qualifications.filter(
    (item) =>
      (activeLevel === "all" || String(item.level) === activeLevel) &&
      (term === "" || item.title.toLowerCase().includes(term)),
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Level 2 – Level 7"
        title={<>NVQ Qualifications</>}
        subtitle="All qualifications are assessed in the workplace. Search by keyword or filter by level to find the right route for your trade."
      />

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <span className="sr-only">Search qualifications</span>
              <input
                value={q}
                onChange={(e) =>
                  navigate({ search: (prev) => ({ ...prev, q: e.target.value }) })
                }
                placeholder="Search e.g. cladding, formwork, lifting…"
                className="w-full border border-input bg-card py-4 pl-12 pr-4 text-base outline-none focus:border-primary"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {["all", ...levels.map(String)].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    navigate({ search: (prev) => ({ ...prev, level: value }) })
                  }
                  className={`px-5 py-3 font-display text-sm uppercase tracking-widest transition-colors ${
                    activeLevel === value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-accent"
                  }`}
                >
                  {value === "all" ? "All levels" : `Level ${value}`}
                </button>
              ))}
            </div>
          </div>

          {activeLevel !== "all" && (
            <p className="mt-6 max-w-2xl text-muted-foreground">
              {levelBlurb[Number(activeLevel) as 2 | 4 | 5 | 6 | 7]}
            </p>
          )}

          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
            {results.length} qualification{results.length === 1 ? "" : "s"}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border-t-4 border-primary bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-xs uppercase tracking-[0.25em] text-primary">
                  Level {item.level}
                </span>
                <h2 className="mt-3 text-xl leading-tight">{item.title}</h2>
                <p className="mt-auto pt-5 font-display text-2xl">{item.price}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-primary hover:underline"
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          {results.length === 0 && (
            <p className="mt-10 text-muted-foreground">
              No qualifications match that search. Try a different keyword or level.
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
