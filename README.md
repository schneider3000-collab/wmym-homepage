# whatmakesyoumove

Website for the Feldenkrais practice and movement research of **Stefan M. Schneider**, Vienna.
Static, bilingual (German / English), no cookies, no tracking, no external requests.

Built with [Astro](https://astro.build). Deploys to GitHub Pages or Cloudflare Pages unchanged.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
npm run check    # type-check (also verifies German/English parity)
```

Node 22 or newer is required.

---

## Where the content lives

All page copy is in two files:

| File | Contents |
|---|---|
| `src/content/de.ts` | German — **the source of truth** |
| `src/content/en.ts` | English — must mirror `de.ts` exactly |

`src/content/types.ts` derives the site's shape from `de.ts`, and `en.ts` is annotated
with that type. So if you add, rename or remove a key in German and forget the English
side, `npm run check` fails instead of the page silently rendering a blank section.

**To change wording, edit these two files.** You almost never need to touch the
`.astro` files.

Adding a page means: a new key in `routes`, a content block in both files, a view in
`src/views/`, and two thin route files (`src/pages/…` and `src/pages/en/…`).

### Editing copy in the browser

Run `npm run dev` and click **Edit copy** at the bottom-left (or press `Ctrl+Shift+E`).
Text on the page becomes directly editable: click, type, then press `Enter` or click
away to save. `Esc` cancels. The change is written straight into `de.ts` or `en.ts` —
whichever language you are viewing — so it survives a restart and shows up in `git diff`.

Saving rewrites a source file, so the page reloads. That is expected; the edit is
already on disk.

Two limits worth knowing:

- **Existing text only.** Adding an FAQ entry, a publication or a programme means
  editing the content file directly — the editor changes strings, it does not add or
  remove them.
- **A few short labels are skipped.** When the same words appear under two different
  keys on one page (`Angebot` is both the nav label and the page heading, `Buchbar`
  is the status on all three programmes), a click cannot say which one you mean, so
  those are left alone. The browser console lists them each time. Longer prose —
  which is what usually needs changing — is effectively always unique.

The whole thing is dev-only: `src/dev/copy-editor-plugin.mjs` registers with
`apply: 'serve'` and the component renders behind `import.meta.env.DEV`, so no markup,
CSS or script reaches a build. Verified — `npm run build` still emits zero JS bundles.

### Keeping the two languages in step

Two different failure modes, two different guards:

| Problem | Caught by |
|---|---|
| A key exists in `de.ts` but not `en.ts` | TypeScript — `npm run check` |
| A string is reworded in one language, the other goes stale | `npm run i18n` + a pre-commit hook |

The second one is the likely one once you start editing copy in the browser: you fix
the German headline, never touch English, and nothing complains because the structure
is still valid. So there is a hook:

```bash
git config core.hooksPath .githooks   # or just: npm install
```

`npm install` sets this up via the `prepare` script. On every commit it diffs the
staged `de.ts` / `en.ts` against `HEAD` and refuses the commit if any key changed on
one side only:

```
  Translation drift — 1 key(s) changed in one language only:

  home.headline
    de  "Was bewegt dich?" → "Was bewegt dich wirklich?"
    en  unchanged: "What makes you move?"
```

Update the other language and stage it. When the other language genuinely should not
change — fixing a German typo whose English was already right — say so explicitly:

```bash
SKIP_I18N_CHECK=1 git commit -m "fix German typo"
```

Prefer that over `--no-verify`: it skips only this check, and it is greppable in your
shell history. CI runs the same check against the pull request's base commit, so the
hook being uninstalled locally is not a silent hole.

### Project layout

```
src/
  content/     de.ts, en.ts, types.ts — all copy
  views/       one component per page, rendered for both languages
  pages/       thin routes; German at /, English at /en/
  components/  header, footer, FAQ, programme cards, marks
  layouts/     BaseLayout — <head>, SEO, structured data
  styles/      global.css — the whole design system
  assets/      images (optimised at build time)
public/        favicon, robots.txt, og-default.jpg, _headers
```

---

## Before going live

- [ ] **Fill the legal placeholders.** `src/content/de.ts` and `en.ts` →
      `legal.imprint` (address, trade licence wording) and `legal.privacy`
      (hosting provider). These are shown as a visible orange box on
      `/impressum` and `/datenschutz` until filled. An Impressum is mandatory
      in Austria (§ 5 ECG, § 25 MedienG).
- [ ] **Confirm photo consent.** The group photos (`gruppenraum.jpg`,
      `forschung-team.jpg`) show identifiable people. Stefan's notes flag that
      permission still needs to be asked, or the faces blurred.
- [ ] **Check the facts on the homepage.** `home.facts` contains figures
      (15 years of Taichi, 100+ students, 18 publications) inferred from the
      source documents — verify each one.
- [ ] **Replace the programme marks.** The DEEP / BALANCE / ACTIVE figures in
      `src/components/ProgrammeMark.astro` are placeholders. The plan in Stefan's
      notes is his own brush drawings, with the existing headstand figure for ACTIVE.
- [ ] **Add the two missing DOIs** in `about.pubs` (2026 entries, currently empty
      `href` — the link simply does not render while empty).
- [ ] Point `site` in `astro.config.mjs` at the real domain if it is not
      `whatmakesyoumove.org`.

---

## Deploying

### Cloudflare Pages (recommended)

Connect the repository and use:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 22

`public/_headers` is picked up automatically and adds security headers plus
immutable caching for fingerprinted assets. Nothing else to configure.

### GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Enable Pages with source *GitHub Actions* in the repository settings.

Serving from a **custom domain** works as-is. Serving from a **project path**
(`user.github.io/whatmakesyoumove`) additionally needs `BASE_PATH` in the
workflow's build step:

```yaml
env:
  SITE: https://user.github.io
  BASE_PATH: /whatmakesyoumove
```

All internal links go through `route()` in `src/content/index.ts`, which applies
the base path, so nothing else changes.

---

## Notes on some decisions

**Fonts are self-hosted.** Astro's fonts API downloads Fraunces, Inter and
IBM Plex Mono at build time and serves them from this origin. No request ever
reaches Google, which is what lets the privacy page honestly claim no third-party
connections — a real concern for an Austrian practice under GDPR.

Do not redefine `--font-display`, `--font-body` or `--font-mono` in CSS: Astro
registers the families under hashed names with metric-matched fallbacks, and
overriding the variables silently drops back to system fonts.

**The contact form posts nothing.** It assembles a `mailto:` link in the browser
and hands off to the visitor's mail client. No backend, no form service, nothing
stored — which is also why it works on purely static hosting.

**FAQ blocks emit `FAQPage` structured data.** Stefan's brief asks for direct
answer blocks that AI search systems can quote; that is what the JSON-LD on the
method, offerings and research pages is for. `robots.txt` welcomes crawlers
explicitly.

**Accessibility is a functional requirement here,** not a nicety: the audience
includes people with Parkinson's and older adults. Hence 48px minimum touch
targets, ≥4.5:1 contrast on every text colour, visible focus rings, a skip link,
and `prefers-reduced-motion` support.
