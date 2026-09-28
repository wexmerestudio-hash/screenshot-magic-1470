export type Level = 2 | 4 | 5 | 6 | 7;

export type Qualification = {
  title: string;
  level: Level;
  price: string;
};

const level2Titles = [
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
];

export const qualifications: Qualification[] = [
  ...level2Titles.map<Qualification>((title) => ({
    title,
    level: 2,
    price: "£650 + VAT",
  })),
  {
    title: "Construction Site Supervision – Building & Civil Engineering",
    level: 4,
    price: "£1,200 + VAT",
  },
  {
    title: "Controlling Lifting Operations – Supervising Lifts",
    level: 4,
    price: "£1,000 + VAT",
  },
  {
    title: "Controlling Lifting Operations – Planning Lift",
    level: 5,
    price: "£1,200 + VAT",
  },
  {
    title: "Construction Site Management – Building & Civil Engineering",
    level: 6,
    price: "£1,500 + VAT",
  },
  {
    title: "Construction Senior Management",
    level: 7,
    price: "£1,800 + VAT",
  },
];

export const levels: Level[] = [2, 4, 5, 6, 7];

export const levelBlurb: Record<Level, string> = {
  2: "Trade and operative level qualifications for workers on the tools.",
  4: "Supervisory qualifications for foremen, gangers and site supervisors.",
  5: "Planning and control of complex lifting operations.",
  6: "Site management for building and civil engineering projects.",
  7: "Senior management across large construction programmes.",
};

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
  languages: ["English", "Romanian", "Italian"],
};
