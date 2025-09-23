export type Patent = {
  title: string;
  number?: string;
  pdf?: string; // path under /public
  link?: string; // external link
  summary?: string;
};

export const patents: Patent[] = [
  {
    title: "USPTO Grant — US 12308894 B2",
    number: "US 12308894 B2",
    pdf: "/docs/patents/PatCntr_eGrantPDF(US 12308894 B2).pdf",
    summary: "Granted patent in AI/blockchain/telecommunications domain.",
  },
  {
    title: "USPTO Grant — US 12328299 B2",
    number: "US 12328299 B2",
    pdf: "/docs/patents/PatCntr_eGrantPDF(US 12328299 B2).pdf",
    summary: "Granted patent in telecommunications technology.",
  },
  {
    title: "USPTO Application — 18/006,948",
    link: "https://patentcenter.uspto.gov/applications/18006948",
    summary: "Application record linked in USPTO Patent Center.",
  },
  {
    title: "USPTO Application — 18/010,309",
    link: "https://patentcenter.uspto.gov/applications/18010309",
    summary: "Application record linked in USPTO Patent Center.",
  }
];
