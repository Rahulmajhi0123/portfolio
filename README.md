# Rahul Majhi - Portfolio

A modern, fully-configurable personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Dark-mode first, responsive from 320px to 4K, and 100% content-driven so you can edit any text from your phone.

## Quick start (local)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm start
```

## Editing content (from your phone or laptop)

All content lives in the `content/` folder as typed TypeScript files. Edit a file, save, and push - Vercel redeploys automatically in ~30 seconds.

| File | What it controls |
|---|---|
| `content/profile.ts` | Name, role, tagline, summary, email, socials, portrait, resume links |
| `content/experience.ts` | Timeline of roles with bullets and tech stack |
| `content/projects.ts` | Project cards, tags, descriptions, stacks, links |
| `content/differentiators.ts` | "What Sets Me Apart" pillar cards |
| `content/skills.ts` | Grouped skill chips |
| `content/achievements.ts` | Awards, recognition, education |
| `content/site.config.ts` | Nav labels, SEO title/description, URL |

### Mobile editing workflow (GitHub + Vercel)

1. Open the GitHub mobile app or github.com on your phone
2. Navigate to the file you want to edit (e.g. `content/projects.ts`)
3. Tap the pencil icon
4. Make your edits, tap "Commit changes"
5. Vercel detects the push and redeploys automatically - live in ~30s

No CMS, no backend, no monthly fees. The TypeScript types prevent you from accidentally breaking the site.

### Swapping the portrait

Drop a new image into `public/` (e.g. `public/portrait.jpg`) and update `profile.portrait` in `content/profile.ts`. Next.js image optimization handles the rest.

### Swapping the resume PDFs

Replace the files in `public/`. The resume buttons are driven by `profile.resumes` in `content/profile.ts` - adjust labels or add new entries as needed.

## Theme

- **Dark mode default**, with a three-way toggle (Light / Dark / System) in the nav
- Preference is saved to `localStorage`
- An inline pre-hydration script sets the theme before paint - no white flash on load
- All colors are HSL CSS variables in `app/globals.css` - tweak accent, foreground, etc. once and every component follows

## Deploy to Vercel

1. Push this repo to GitHub (new repo, public or private is fine)
2. Go to https://vercel.com/new and import the repo
3. Click Deploy - no configuration needed
4. (Optional) Add a custom domain under Project Settings -> Domains

## Project structure

```
app/
  layout.tsx              root layout + metadata + theme script
  page.tsx                composes every section
  globals.css             Tailwind + CSS variables (light & dark)
  sitemap.ts, robots.ts   SEO files
  icon.tsx                generated favicon
  opengraph-image.tsx     generated OG social card
components/
  Nav.tsx, Footer.tsx, ThemeToggle.tsx, MotionReveal.tsx
  ui/                     Button, Card, Badge, Section primitives
  sections/               Hero, About, Differentiators, Experience,
                          Projects, Skills, Achievements, Contact
content/                  all editable content (see above)
public/                   portrait.jpg + resume PDFs
lib/utils.ts              cn() helper
```

## Tech

- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS with HSL CSS variables
- **Animation**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: lucide-react
- **Hosting**: Vercel (recommended, free tier)

## License

Personal portfolio - code free to reference, but please don't copy the content wholesale.
