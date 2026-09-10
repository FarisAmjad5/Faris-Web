# Faris Amjad — Portfolio

A personal portfolio site for Faris Amjad, a web developer. Built with Next.js (App Router),
TypeScript, and Tailwind CSS v4, in a dark neon-cyan glassmorphism style with a light/dark
theme toggle. No photographic images or external network assets — every visual is CSS or
inline SVG/lucide icons.

## Getting started

Requires Node.js 18.18+ (developed with Node 24 / npm 11).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The dev server supports
hot reload.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Editing content

All of the site's copy — nav links, hero stats, about/skills, experience/education, projects,
process steps, highlights, "by the numbers" stats, and contact details — lives in a single
typed file:

```
src/lib/data.ts
```

Edit the exported arrays/objects there to change any text, add/remove projects, skills, or
process steps; the UI components read from this file and don't hardcode copy. A few things to
note when editing:

- `projects` is placeholder content (see the comment at the top of the array) — swap in real
  project titles, descriptions, tech, and links.
- `heroStats` has a `// TODO: confirm project count with Faris` note next to the "10+ Projects
  Delivered" figure.
- `skills` is self-assessed proficiency (see the comment above the array) — adjust freely.

To swap in a real resume, replace `public/faris-amjad-cv.pdf` (the file the navbar's
"Download CV" button links to) — the current one is a placeholder.

## Project structure

```
src/app/                    layout.tsx (fonts, metadata, theme-init script), page.tsx, globals.css
src/components/              one component per section, plus theme-provider.tsx and ui/ helpers
src/hooks/                   use-reveal.ts (scroll-reveal), use-active-section.ts (nav highlighting)
src/lib/                     data.ts (all content), utils.ts (cn() class helper)
public/faris-amjad-cv.pdf    placeholder CV served by the navbar's download button
```

## Stack

- Next.js 16 (App Router, TypeScript, `src/` dir, `@/*` import alias)
- Tailwind CSS v4 (`@theme inline` design tokens, class-based dark mode)
- lucide-react for icons (GitHub/LinkedIn icons are hand-rolled inline SVGs, since
  lucide-react no longer ships brand/logo marks)
- Plain CSS transitions + a small IntersectionObserver-based `useReveal` hook for
  scroll-triggered animation — no animation library
