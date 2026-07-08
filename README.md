# Tanay Gattani — Portfolio

Personal portfolio site for a data analyst / data engineer / AI builder. Built with
**Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Structure

- `/` — hero, about, skills, experience, featured projects, recommendations, certifications, contact
- `/projects` — all projects with a category filter and per-project case studies (deep-linkable via `?p=<id>`)
- Floating AI chatbot grounded on the portfolio data, answered by **Groq** (`/api/chat`)

Content lives in `src/data/` (`profile.ts`, `projects.ts`, `skills.ts`, `recommendations.ts`);
components follow atomic design under `src/components/{atoms,molecules,organisms}`.

## Getting started

```bash
npm install
npm run dev   # http://localhost:3000
```

## Environment

Create `.env.local`:

```
GROQ_API_KEY=your_key_here          # free key: https://console.groq.com/
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # optional, for OG/canonical URLs
```

The chatbot degrades gracefully with a setup message if `GROQ_API_KEY` is unset.

## Assets

Drop a headshot at `public/tanay.jpg` (used in the hero and as the social/OG image);
a monogram placeholder shows if it's missing.

## Deploy

Deploys on Vercel. Set `GROQ_API_KEY` (and optionally `NEXT_PUBLIC_SITE_URL`) in the project env.
