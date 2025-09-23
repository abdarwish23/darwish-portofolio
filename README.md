# Ahmed B. Darwish — Portfolio (Next.js 14 + Tailwind)

Modern, professional portfolio built with Next.js App Router and Tailwind CSS. Optimized to showcase AI Strategy, Multi-AI Agents, patents, and highlighted projects for high-value roles and freelance.

## Features

- App Router (Next.js 14), TypeScript, Tailwind CSS
- Modular sections: Hero, Skills, Projects, Experience, Achievements, Contact
- Typed data layer in `data/profile.ts`
- SEO metadata configured in `app/layout.tsx`
- Dark, modern UI with accent gradient

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build && npm start
   ```

## Images and Assets

Place your screenshots in `public/images/` with the following filenames (you already have them in `content_source/images/`):

- `Sql_agent.png`
- `Telecom_multi_ai_agents.png`
- `Image_detection_site_manager.png`
- `Image_detection_yolo_models.png`

Copy them:
```bash
cp ../content_source/images/Sql_agent.png public/images/
cp ../content_source/images/Telecom_multi_ai_agents.png public/images/
cp ../content_source/images/Image_detection_site_manager.png public/images/
cp ../content_source/images/Image_detection_yolo_models.png public/images/
```

Optionally add PDFs (CV, patents) under `public/docs/` and link them from components.

## Customize Content

Edit `data/profile.ts` to change headline, summary, skills, experiences, projects, and achievements. Types are defined in `lib/types.ts`.

## Deploy to Vercel

- Create a new Vercel project and import this repository
- Root directory: project root
- Build command: `next build`
- Output: `.next`
- Add custom domain later if desired

## SEO tips

- Add `og:image` under `app/opengraph-image.png` for richer link previews
- Update `metadataBase` in `app/layout.tsx` with your final URL

## License

Private use only. © Ahmed Bahaaeldin Darwish
