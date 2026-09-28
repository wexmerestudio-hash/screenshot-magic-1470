import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { CONTACT, qualifications } from "@/data/qualifications";

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
        content: "Call, WhatsApp or email to discuss NVQ assessment and construction training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact;
});

function Contact() {
  return null;
}
