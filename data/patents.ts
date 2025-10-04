export type Patent = {
  title: string;
  number?: string;
  patentTitle?: string; // The actual patent invention title
  pdf?: string; // path under /public
  link?: string; // external link
  summary?: string;
};

export const patents: Patent[] = [
  {
    title: "USPTO Grant — US 12308894 B2",
    number: "US 12308894 B2",
    patentTitle: "System, method, and medium for blockchain-enabled microwave antennas",
    pdf: "/docs/patents/PatCntr_eGrantPDF(US 12308894 B2).pdf",
    summary: "Granted patent in AI/blockchain/telecommunications domain.",
  },
  {
    title: "USPTO Grant — US 12328299 B2",
    number: "US 12328299 B2",
    patentTitle: "System, method and non-transitory computer readable medium for an internet-enabled network radio node",
    pdf: "/docs/patents/PatCntr_eGrantPDF(US 12328299 B2).pdf",
    summary: "Granted patent in telecommunications technology.",
  },
  {
    title: "USPTO Application — 18/006,948",
    link: "https://patents.google.com/patent/US12308894B2/en?oq=+US+12308894+B2",
    summary: "Application record linked in USPTO Patent Center.",
  },
  {
    title: "USPTO Application — 18/010,309",
    link: "https://patents.google.com/patent/US12328299B2/en?oq=US+12328299+B2",
    summary: "Application record linked in USPTO Patent Center.",
  }
];
