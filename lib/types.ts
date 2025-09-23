export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  link?: string;
};

export type Achievement = {
  title: string;
  description: string;
  link?: string;
};

export type Profile = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: Link[];
  summary: string;
  skills: { category: string; items: string[] }[];
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
};
