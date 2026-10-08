# Portfolio

Next.js app with TypeScript, the App Router, Tailwind CSS, and ESLint.
Requires Node.js 20.9 or newer; this environment uses Node.js 24.

## Development

```sh
npm ci
npm run dev
```

The development server runs on port 3000. Edit `src/app/page.tsx` to customize the homepage and `src/app/layout.tsx` for site metadata. System fonts keep builds independent of external font services.

## Validation and production

```sh
npm run lint
npm run build
npm start
```

The production server requires a successful build. No environment variables or credentials are required for the starter app.
