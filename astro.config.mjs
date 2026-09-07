// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyEditor } from './src/dev/copy-editor-plugin.mjs';

// `SITE` lets CI override the canonical origin (GitHub Pages project sites, preview
// deployments) without editing this file. `BASE_PATH` is only needed when the site is
// served from a sub-path, e.g. https://user.github.io/repo/.
const site = process.env.SITE ?? 'https://whatmakesyoumove.org';
const base = process.env.BASE_PATH ?? undefined;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',

  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },

  // Font files ship in node_modules via the @fontsource* packages (regular npm
  // dependencies) and are wired in from disk with the `local` provider — no request to
  // Google, Fontsource's CDN, or anywhere else happens at build time. That keeps the
  // build reproducible offline, and is what makes this GDPR-safe for an Austrian
  // practice: no third party ever sees a visitor's request for a font file either,
  // since Astro still copies these into the build and serves them from our own origin
  // under hashed names with metric-matched fallbacks, exactly as it did when it
  // fetched them from Google. Only the "latin" subset is included: German and English
  // copy needs nothing from "latin-ext" (Central/Eastern European diacritics) — every
  // German special character (äöüß) already lives in Latin-1.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Fraunces',
      cssVariable: '--font-display',
      fallbacks: ['Iowan Old Style', 'Palatino', 'Georgia', 'serif'],
      options: {
        variants: [
          { weight: '300 700', style: 'normal', src: ['@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2'] },
          { weight: '300 700', style: 'italic', src: ['@fontsource-variable/fraunces/files/fraunces-latin-wght-italic.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-body',
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
      options: {
        variants: [
          { weight: '300 700', style: 'normal', src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'] },
          { weight: '300 700', style: 'italic', src: ['@fontsource-variable/inter/files/inter-latin-wght-italic.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'Menlo', 'monospace'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2'] },
          { weight: 500, style: 'normal', src: ['@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2'] },
        ],
      },
    },
  ],

  // Registered with `apply: 'serve'`, so it exists only while `astro dev` is running.
  vite: { plugins: [copyEditor()] },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-AT', en: 'en' } },
      filter: (page) => !/\/(impressum|datenschutz|imprint|privacy)\/?$/.test(page),
    }),
  ],
});
