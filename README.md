# Alex Morgan — Personal Portfolio

A dark, modern personal portfolio and resume site built with TanStack Start and deployed on Netlify. Features an AI-powered resume assistant, an optimized image gallery, a full project showcase, and a contact form.

## Key Technologies

- **Framework**: TanStack Start (React 19, TanStack Router v1)
- **Styling**: Tailwind CSS v4 with a custom dark color scheme (oklch)
- **Content**: Content Collections for type-safe markdown content
- **Images**: Netlify Image CDN for on-demand optimization and WebP conversion
- **Forms**: Netlify Forms for serverless contact form handling
- **Build/Deploy**: Vite 7 + Netlify

## Pages

| Route | Description |
|-------|-------------|
| `/` | About / Home — hero, bio, skills grid |
| `/projects` | Project showcase with tech badges and links |
| `/gallery` | Filterable photo gallery with lightbox (Netlify Image CDN) |
| `/resume` | Interactive resume with work history and education |
| `/contact` | Contact form + social links |

## Running Locally

```bash
npm install
npm run dev       # starts on http://localhost:3000
```

For Netlify features (forms, image CDN) use the Netlify CLI:

```bash
netlify dev       # starts on http://localhost:8888
```

## Environment Variables

For the AI resume assistant:

```
ANTHROPIC_API_KEY=...   # or OPENAI_API_KEY / GEMINI_API_KEY
```
