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

## Five things to know

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

**A remote copy editor writes to a queue, not to disk.** `.claude/copy-editor.json`
points at a standalone Claude Artifact — a snapshot of the whole built site, browsable
and editable like the live site — where edits can be made without a dev server; those
edits land in the artifact's database, not in `de.ts`/`en.ts`. Before finishing any
session, read that database (if the config file exists) and apply pending edits with
`node scripts/apply-copy-edits.mjs` — see README.md's "Editing copy without a dev
server". `.claude/copy-editor-pending.json` is scratch state for a sync in progress; a
pre-commit check blocks a commit while it holds unapplied edits. Separately,
`npm run build` regenerates `.claude/copy-editor-snapshot.html` on every build
(`postbuild`), but that only updates the file on disk — republish it to the artifact
(same `file_path`, `url` from the config) whenever the site's design, layout, images,
or content keys change meaningfully; wording-only changes don't need a republish.

## Before finishing

```
npm run check    # types + German/English structural parity
npm run build    # must stay at 0 JS bundles
```

If `.claude/copy-editor.json` exists, also check the artifact's `edits` collection for
pending changes and sync them (see above) before committing.
