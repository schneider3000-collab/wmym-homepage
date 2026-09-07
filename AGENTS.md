# Working in this repo

A bilingual static site (Astro). German is served at `/`, English at `/en/`.
`README.md` has the full picture; this file is the short list of things that will
bite you if you do not know them.

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`.

## Four things to know

**Copy lives in two files, not in the templates.** `src/content/de.ts` is the source
of truth; `src/content/en.ts` is annotated with `SiteContent` (derived from `de.ts`),
so a key missing or renamed on one side is a type error. To change wording, edit those
files — not the `.astro` views.

**Never redefine `--font-display`, `--font-body` or `--font-mono` in CSS.** Astro's
fonts API registers the families under hashed names with metric-matched fallbacks.
Setting those variables in `global.css` silently overrides them and the site falls
back to system fonts — this already happened once and was slow to spot.

**Both languages must change together.** A pre-commit hook (`npm run i18n`) rejects a
commit where a string moved in one language but not the other. When that is genuinely
intended, use `SKIP_I18N_CHECK=1 git commit`, not `--no-verify`.

**`src/dev/` and `src/components/dev/` are dev-only.** The in-place copy editor is
gated behind `import.meta.env.DEV` and a Vite plugin with `apply: 'serve'`. If you
touch it, re-check that `npm run build` still emits zero JS bundles and no trace of it
in `dist/`.

## Before finishing

```
npm run check    # types + German/English structural parity
npm run build    # must stay at 0 JS bundles
```
