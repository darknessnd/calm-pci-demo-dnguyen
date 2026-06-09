# AGENTS.md

Project architecture reference for AI agents working on this codebase.

## Overview

Personal portfolio for "Alex Morgan" — a full-stack developer. Built on TanStack Start (SSR React) and deployed on Netlify. The design uses a dark color scheme (near-black navy background, indigo/violet accent) defined via oklch CSS variables.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Primitives | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI (resume assistant) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
content/
  jobs/           # Work experience markdown files
  education/      # Education markdown files
  projects/       # Project showcase markdown files
  blog/           # Blog post markdown files
public/
  contact.html    # Static form for Netlify Forms build-time detection
  headshot-on-white.jpg  # Profile photo
src/
  components/
    Header.tsx    # Sticky nav header with mobile menu
    ui/           # Radix UI-based primitives (badge, card, etc.)
  routes/
    __root.tsx    # Root layout: renders Header + <main>
    index.tsx     # About/Home page
    gallery.tsx   # Image gallery (Netlify Image CDN + lightbox)
    projects.tsx  # Project showcase grid
    resume.tsx    # Work history + education
    contact.tsx   # Netlify Form + social links
    blog/$slug.tsx # Blog post detail
    api.resume-chat.ts  # AI assistant endpoint
  styles.css      # Tailwind imports + dark oklch CSS variables
```

## Design System

All colors use CSS variables defined in `src/styles.css`:
- `--background`: near-black navy (`oklch(0.08 0.015 280)`)
- `--foreground`: off-white (`oklch(0.94 0.005 280)`)
- `--primary`: indigo (`oklch(0.58 0.22 264)`)
- `--accent`: violet (`oklch(0.65 0.22 295)`)
- `--card`: slightly lighter background for cards
- `--border`: subtle border at `oklch(0.22 0.015 280)`

Gradient text uses `.gradient-text` class in styles.css.

## Key Conventions

### Routing
- File-based routing under `src/routes/`
- `api.*.ts` files become API endpoints
- All pages use `createFileRoute`

### Images
- Use Netlify Image CDN: `/.netlify/images?url=<path>&w=<width>&fm=webp&q=82`
- Remote Unsplash images are allowlisted in `netlify.toml` under `[images] remote_images`
- Profile photo at `/headshot-on-white.jpg` is in `public/`

### Content Collections
- Schema defined in `content-collections.ts`
- Import with `import { allProjects } from 'content-collections'`
- Collections: `jobs`, `education`, `blog`, `projects`

### Forms
- Netlify Forms require a static HTML skeleton in `public/` for build-time detection
- `public/contact.html` registers the "contact" form
- React component posts to `/contact.html` with `application/x-www-form-urlencoded`

### Styling
- Use Tailwind utility classes + `cn()` helper for conditional classes
- Prefer `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border` etc. (CSS var tokens)
- `bg-primary/10`, `text-primary` for accent elements
- `rounded-2xl` for cards, `rounded-xl` for buttons/inputs

### TypeScript
- Strict mode, `@/` alias for `src/`
- Type-only imports with `import type`
