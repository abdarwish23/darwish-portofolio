# Content Update Guide

This guide explains exactly where and how to update content in your portfolio app built with Next.js 14 + Tailwind.

All paths in this guide are relative to `portfolio/`.


## Overview of where content lives

- `data/profile.ts`
  - Personal info: `name`, `title`, `email`, `phone`, `location`
  - Social links: `links`
  - About summary: `summary`
  - Skills: `skills[]`
  - Experience timeline: `experiences[]`
  - Projects list: `projects[]`
  - Achievements list: `achievements[]`

- `data/patents.ts`
  - Patents list: title, number (optional), `pdf` (path under `/public`), `link` (external), `summary`

- `public/images/`
  - Project images and any other images referenced by `/images/<filename>` in code

- `public/docs/`
  - CV PDF and other documents. Patents PDFs under `public/docs/patents/`

- Components that render the above data
  - `components/Projects.tsx` renders `profile.projects`
  - `components/Experience.tsx` renders `profile.experiences`
  - `components/Achievements.tsx` renders `profile.achievements`
  - `components/Contact.tsx` uses `profile.email` and `profile.links`
  - `components/Header.tsx` shows top nav + social links + Download CV URL
  - `app/patents/page.tsx` renders `data/patents.ts`


## Update or add Projects

- File: `data/profile.ts`
- Section: `projects: [...]`
- Required fields per project:
  - `title`: string
  - `summary`: short description
  - `tags`: array of strings
  - `image`: string path to an image under `public/images/` (e.g., `/images/my_project.png`)

Steps:
1. Place your image file in `public/images/` (PNG/JPG/WebP).
2. In `data/profile.ts`, add or update an entry inside `projects`:
   ```ts
   projects: [
     {
       title: "New Project Title",
       summary: "Short summary of the project.",
       tags: ["Tag1", "Tag2"],
       image: "/images/new_project.png"
     },
     // ...existing projects
   ]
   ```
3. `components/Projects.tsx` automatically renders projects in a grid and uses `next/image` with your `image` path.


## Update Experience

- File: `data/profile.ts`
- Section: `experiences: [...]`
- Fields per role:
  - `role`, `company`, `location?`, `start`, `end`, `bullets: string[]`

Example:
```ts
experiences: [
  {
    role: "Your Role",
    company: "Company Name",
    location: "City, Country",
    start: "Jan 2025",
    end: "Present",
    bullets: [
      "Key impact or achievement",
      "Another bullet",
    ]
  },
  // ...
]
```

`components/Experience.tsx` will render this automatically.


## Update Social Links and Contact

- File: `data/profile.ts`
- Sections:
  - `email`: used by `components/Contact.tsx` for the "Email Me" button
  - `links: [...]`: used by both `Header.tsx` (top-right icons/links) and `Contact.tsx`

Example:
```ts
links: [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/USERNAME/" },
  { label: "GitHub", href: "https://github.com/USERNAME" },
  { label: "Twitter", href: "https://twitter.com/USERNAME" },
]
```

No code changes needed in components; they map over `profile.links`.


## Update Achievements

- File: `data/profile.ts`
- Section: `achievements: [...]`
- Fields: `title`, `description`, optional `link`

Example:
```ts
achievements: [
  {
    title: "Award Name",
    description: "Short detail.",
    link: "https://example.com/details"
  }
]
```


## Update Patents

- Data file: `data/patents.ts`
- PDF storage: `public/docs/patents/`
- Fields per patent:
  - `title`: string
  - `number?`: optional patent number
  - `pdf?`: string path under `/public`, e.g., `/docs/patents/my_patent.pdf`
  - `link?`: external URL to USPTO record
  - `summary?`: short description

Example:
```ts
export const patents: Patent[] = [
  {
    title: "USPTO Grant — US 12345678 B2",
    number: "US 12345678 B2",
    pdf: "/docs/patents/my_patent.pdf",
    summary: "Brief description.",
  },
  {
    title: "USPTO Application — 12/345,678",
    link: "https://patentcenter.uspto.gov/applications/12345678",
    summary: "Application record.",
  }
];
```

The page at `app/patents/page.tsx` renders the list with a "View PDF" button when `pdf` is present and a "USPTO Link" when `link` is present.


## Update or add Images

- Place new images in: `public/images/`
- Reference them in data as web paths starting with `/images/`, e.g., `/images/new.png`
- Components such as `components/Projects.tsx` will load and display them automatically via `next/image`

Tip: Keep filenames lowercase and hyphenated. Use reasonably sized images (e.g., under ~1–2 MB) for fast load.


## Update the CV download link in the header

- File used in header button: `/public/docs/CV_AHMED_DARWISH_21092025.pdf`
- The button is defined in `components/Header.tsx`.

To replace your CV:
1. Put the new PDF at `public/docs/` (e.g., `public/docs/CV_YYYYMMDD.pdf`).
2. Update the path in `components/Header.tsx` to the new filename if you change the name.

If you keep the same filename (`CV_AHMED_DARWISH_21092025.pdf`), no code change is required.


## Where to change page sections or styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Section components to tweak layout/wording:
  - `components/Hero.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `components/Skills.tsx`, `components/Projects.tsx`, `components/Experience.tsx`, `components/Achievements.tsx`, `components/Contact.tsx`


## After making content changes

- Local preview: `npm run dev` and open http://localhost:3000
- Build check: `npm run build` to validate types and build succeed
- Deploy (if using Vercel CLI): `vercel --prod` or push to GitHub if connected to Vercel


## Notes about links inside components

Recent changes replaced `next/link` with plain anchor (`<a>`) tags for external links and added `rel="noopener noreferrer"` for security. Internal navigation still uses `Link` where appropriate.

No action needed on your side unless you change targets or labels.
