# Trishna Kashyap — Portfolio

Next.js app with TypeScript, the App Router, Tailwind CSS, and ESLint.
Requires Node.js 20.9 or newer; this environment uses Node.js 24.

## Development

```sh
npm ci
npm run dev
```

The development server runs on port 3000. On Windows with PowerShell script restrictions, use `npm.cmd` instead of `npm`.

This version is implemented in the existing Next.js project. It does not require Webflow or an external CMS. System fonts and CSS illustrations keep rendering independent of external asset services.

## Editing content

- `src/lib/projects.ts`: featured projects, their case-study content, stacks, statuses, and additional explorations. Each entry includes `liveUrl` and `githubUrl`; leave unknown links empty. Add a featured project here to generate its case-study route.
- `src/app/page.tsx`: homepage copy, categorized skills, experience, workbench notes, and contact placeholders.
- `src/components/visual.tsx`: clearly labeled project illustrations. Replace them with approved screenshots when available.
- `src/app/globals.css`: palette, typography, spacing, project artwork, responsive layouts, and reduced-motion support.
- `src/app/layout.tsx` and `src/app/opengraph-image.tsx`: search metadata and social sharing preview.

Before sharing professionally, supply email, LinkedIn, GitHub, a résumé file, verified employment dates, a portrait, and approved project assets where available. Current placeholders deliberately do not navigate to invented destinations. Replace contact spans with real links, and the résumé placeholder with a download link after adding the file to `public/`.

The project gallery links to `/work/[slug]`. Case studies share one template, include conceptual architecture diagrams, and link to the next project. Additional projects use native keyboard-accessible expandable entries. No analytics, tracking, or credentials are required.

## Validation and production

```sh
npm run lint
npm run build
npm start
```

The production server requires a successful build. No credentials are required. Set `NEXT_PUBLIC_SITE_URL` to the real production URL before building for deployment, so social image URLs resolve to that domain. Local development defaults to `http://localhost:3000`.
