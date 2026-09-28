import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { CONTACT, qualifications, courses } from "@/data/qualifications";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NVQ Alex Assessor | Call, WhatsApp or Email" },
      {
        name: "description",
        content:
          "Get in touch with NVQ Alex Assessor on 07447938882 or nvq.assessor23@gmail.com to check your eligibility for a construction NVQ or training course.",
      },
      { property: "og:title", content: "Contact NVQ Alex Assessor" },
      {
        property: "og:description",
        content:
          "Call, WhatsApp or email to discuss NVQ assessment and construction training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const interests = [
  ...courses.map((c) => c.title),
  ...Array.from(new Set(qualifications.map((q) => `NVQ Level ${q.level}`))),
  "Not sure yet",
];

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Interested in: ${interest}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Website enquiry — ${interest}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full border border-input bg-card px-4 py-3 text-base outline-none focus:border-primary";

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Get in touch today</>}
        subtitle="Tell us about your trade and experience and we will let you know which qualification fits."
      />

      <section className="bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 lg:px-6">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-4 bg-secondary p-6 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-7 w-7 shrink-0" />
            <span className="min-w-0">
              <span className="block font-display text-sm uppercase tracking-widest opacity-70">Call</span>
              <span className="block truncate font-display text-xl">{CONTACT.phone}</span>
            </span>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-primary p-6 text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-7 w-7 shrink-0" />
            <span className="min-w-0">
              <span className="block font-display text-sm uppercase tracking-widest opacity-80">WhatsApp</span>
              <span className="block truncate font-display text-xl">Message us</span>
            </span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 bg-muted p-6 transition-colors hover:bg-accent"
          >
            <Mail className="h-7 w-7 shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block font-display text-sm uppercase tracking-widest text-muted-foreground">Email</span>
              <span className="block truncate font-display text-lg">{CONTACT.email}</span>
            </span>
          </a>
        </div>
      </section>

      <section className="bg-muted py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:px-6">
          <div className="bg-card p-8 shadow-[var(--shadow-card)]">
            <h2 className="rule-orange text-3xl">Enquiry form</h2>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-display text-sm uppercase tracking-widest">Name</span>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
                </label>
                <label className="block">
                  <span className="mb-2 block font-display text-sm uppercase tracking-widest">Phone</span>
                  <input required value={phone} onChange={(e) => setPhone(e.target.value)} className={field} />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block font-display text-sm uppercase tracking-widest">Email</span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
              </label>
              <label className="block">
                <span className="mb-2 block font-display text-sm uppercase tracking-widest">Interested in</span>
                <select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
                  {interests.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block font-display text-sm uppercase tracking-widest">Your experience</span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Trade, years on site, current role…"
                  className={field}
                />
              </label>
              <button
                type="submit"
                className="mt-2 bg-primary px-7 py-4 font-display text-base uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send enquiry
              </button>
              <p className="text-xs text-muted-foreground">
                This opens your email app with the details filled in, ready to send.
              </p>
            </form>
          </div>

          <div>
            <h2 className="rule-orange text-3xl">Before you get in touch</h2>
            <p className="mt-6 text-muted-foreground">
              It helps to know your trade, how long you have been working in it,
              and whether you are currently on site. NVQ assessment is based on
              the work you do, so you will need to be working in the occupation
              you want to be qualified in.
            </p>
            <p className="mt-4 text-muted-foreground">
              Prices listed on this site are exclusive of VAT.
            </p>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              We speak {CONTACT.languages.join(" · ")}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
