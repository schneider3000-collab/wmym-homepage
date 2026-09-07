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

  // Fonts are downloaded and served from our own origin at build time. No request ever
  // reaches Google, which is what makes this GDPR-safe for an Austrian practice.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-display',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Iowan Old Style', 'Palatino', 'Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'Menlo', 'monospace'],
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
