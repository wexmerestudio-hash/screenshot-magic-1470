export type Qualification = {
  title: string;
  level: 2 | 4 | 5 | 6 | 7;
  price: string;
};

export const qualifications: Qualification[] = [
  "Specialist Installation Occupations – Architectural Metalwork Installer",
  "Plant Operations",
  "Specialist Installation – Joint Sealant Application",
  "Associated Industrial Occupations & Passive Fire Protection",
  "Cladding Occupations",
  "Construction Operations & Civil Engineering – General Building Operations",
  "Offsite Manufactured Assemblies – Cold Formed Steel Frame Erection",
  "Controlling Lifting Operations – Slinger/Signaller",
  "Decorative Finishing & Industrial Painting",
  "Formwork",
  "Interior Systems",
  "Specialist Concrete Occupations",
  "Steelfixing Occupations",
  "Stonemasonry",
  "Trowel Occupations",
  "Wood Occupations",
]
  .map((title) => ({ title, level: 2 as const, price: "£650 + VAT" }))
  .concat([
    {
      title: "Construction Site Supervision – Building & Civil Engineering",
      level: 4 as const,
      price: "£1,200 + VAT",
    },
    {
      title: "Controlling Lifting Operations – Supervising Lifts",
      level: 4 as const,
      price: "£1,000 + VAT",
    },
  ] as never)
  .concat([
    {
      title: "Controlling Lifting Operations – Planning Lift",
      level: 5 as const,
      price: "£1,200 + VAT",
    },
    {
      title: "Construction Site Management – Building & Civil Engineering",
      level: 6 as const,
      price: "£1,500 + VAT",
    },
    {
      title: "Construction Senior Management",
      level: 7 as const,
      price: "£1,800 + VAT",
    },
  ] as never);

export const levels = [2, 4, 5, 6, 7] as const;

export const courses = [
  {
    title: "IPAF 3a & 3b",
    price: "£280 + VAT",
    blurb:
      "Mobile vertical boom (3a) and scissor lift (3b) powered access training. Globally recognised IPAF licence, valid for five years.",
    points: [
      "Boom and scissor lift operation",
      "Safe working at height",
      "Theory and practical assessment",
    ],
  },
  {
    title: "PASMA",
    price: "£180 + VAT",
    blurb:
      "Mobile access tower training covering assembly, inspection, use and dismantling to current industry standards.",
    points: [
      "Tower assembly and dismantling",
      "Pre-use inspection",
      "PASMA certification on completion",
    ],
  },
  {
    title: "Green CSCS / GQA",
    price: "£350 + VAT",
    blurb:
      "Route to the Green CSCS Labourer card through GQA, covering site health and safety fundamentals.",
    points: [
      "Health & safety awareness",
      "GQA assessment",
      "Green CSCS card eligibility",
    ],
  },
];

export const CONTACT = {
  phone: "07447938882",
  phoneHref: "tel:+447447938882",
  whatsapp: "https://wa.me/447447938882",
  email: "nvq.assessor23@gmail.com",
};
