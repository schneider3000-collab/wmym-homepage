#!/usr/bin/env node
/**
 * Builds a single self-contained HTML page mirroring the whole built site — every
 * route, both languages — with the same click-to-edit interaction the dev-only
 * in-browser editor (src/components/dev/CopyEditor.astro) uses, wired to save into a
 * Claude Artifact database instead of disk. See README.md's "Editing copy without a
 * dev server".
 *
 * Reads only from dist/ (produced by `astro build`) and src/content/*.ts, so it needs
 * no network access. Routes are read from content.routes rather than hardcoded, so a
 * page added to the site is picked up automatically the next time this runs.
 *
 * Runs as this repo's `postbuild` step. Never fails the surrounding `npm run build`:
 * any error here is logged and swallowed, since this output is editing tooling, not
 * part of the deployed site.
 *
 * Output: .claude/copy-editor-snapshot.html (gitignored — publish it as the artifact
 * recorded in .claude/copy-editor.json whenever it meaningfully changes).
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { extractStrings } from '../src/dev/content-ast.mjs';
import { scopeToRoute, isEditableKey } from '../src/dev/copy-scope.mjs';

const DIST = 'dist';
const OUT_FILE = '.claude/copy-editor-snapshot.html';
const TEMPLATE_FILE = 'scripts/copy-editor-snapshot-template.html';

const IMAGE_MIME = { webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', gif: 'image/gif' };
const FONT_MIME = { woff2: 'font/woff2', woff: 'font/woff', ttf: 'font/ttf', otf: 'font/otf' };

function distFileFor(routePath) {
  return path.join(DIST, routePath === '/' ? '' : routePath, 'index.html');
}

async function embed(filePath, mimeTable) {
  const buf = await readFile(filePath);
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = mimeTable[ext] ?? 'application/octet-stream';
  return `data:${mime};base64,${buf.toString('base64')}`;
}

async function main() {
  if (!existsSync(DIST)) throw new Error(`${DIST}/ not found — run \`astro build\` first`);

  const [deSource, enSource] = await Promise.all([
    readFile('src/content/de.ts', 'utf8'),
    readFile('src/content/en.ts', 'utf8'),
  ]);
  const flat = { de: extractStrings(deSource), en: extractStrings(enSource) };

  const routeKeys = Object.keys(flat.de)
    .filter((k) => k.startsWith('routes.'))
    .map((k) => k.slice('routes.'.length));

  const originals = {
    de: Object.fromEntries(Object.entries(flat.de).filter(([k]) => isEditableKey(k))),
    en: Object.fromEntries(Object.entries(flat.en).filter(([k]) => isEditableKey(k))),
  };

  const cssChunks = new Map(); // key (inline text or href) -> css text, for de-duplication
  const imageAssets = new Set(); // dist-relative paths, e.g. "/_astro/foo.webp"
  const pages = [];

  for (const routeKey of routeKeys) {
    for (const locale of ['de', 'en']) {
      const routePath = flat[locale][`routes.${routeKey}`];
      if (!routePath) continue;

      const distFile = distFileFor(routePath);
      if (!existsSync(distFile)) {
        console.warn(`[copy-editor-snapshot] skipping ${locale} ${routeKey}: ${distFile} not found`);
        continue;
      }

      const html = await readFile(distFile, 'utf8');
      const { document } = parseHTML(html);

      for (const styleEl of document.querySelectorAll('head style')) {
        const text = styleEl.textContent.trim();
        if (text) cssChunks.set(text, text);
      }
      for (const linkEl of document.querySelectorAll('head link[rel="stylesheet"]')) {
        const href = linkEl.getAttribute('href');
        if (!href || !href.startsWith('/') || cssChunks.has(href)) continue;
        const cssPath = path.join(DIST, href);
        if (existsSync(cssPath)) cssChunks.set(href, await readFile(cssPath, 'utf8'));
      }

      // The mobile-menu-toggle script is stripped; the snapshot's own runtime
      // provides one delegated handler that covers every page.
      document.querySelectorAll('body script').forEach((el) => el.remove());

      // Keep the artifact tool on-page: real navigation targets a new tab.
      document.querySelectorAll('body a[href]').forEach((a) => {
        const href = a.getAttribute('href');
        if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('mailto:')) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener');
        }
      });

      // Single-resolution images only: srcset variants would multiply asset weight
      // for a tool that isn't trying to reproduce responsive loading.
      document.querySelectorAll('body img[src]').forEach((img) => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/_astro/')) imageAssets.add(src);
        img.removeAttribute('srcset');
        img.removeAttribute('sizes');
      });

      pages.push({
        path: routePath,
        locale,
        routeKey,
        title: document.querySelector('title')?.textContent ?? routePath,
        bodyHtml: document.body.innerHTML,
        copyMap: scopeToRoute(flat[locale], routeKey),
      });
    }
  }

  const assets = {};
  for (const assetPath of imageAssets) {
    const filePath = path.join(DIST, assetPath);
    if (!existsSync(filePath)) {
      console.warn(`[copy-editor-snapshot] missing image asset ${assetPath}`);
      continue;
    }
    assets[assetPath] = await embed(filePath, IMAGE_MIME);
  }

  // Fonts (and any other local url(...) references) are inlined directly into the
  // merged stylesheet text — there are only a handful, so a runtime lookup dictionary
  // like the one used for images buys nothing here.
  let css = [...cssChunks.values()].join('\n');
  const urlPattern = /url\((['"]?)(\/_astro\/[^'")]+)\1\)/g;
  const fontPaths = new Set();
  for (const match of css.matchAll(urlPattern)) fontPaths.add(match[2]);
  const fontEmbeds = new Map();
  for (const assetPath of fontPaths) {
    const filePath = path.join(DIST, assetPath);
    if (existsSync(filePath)) fontEmbeds.set(assetPath, await embed(filePath, FONT_MIME));
  }
  css = css.replace(urlPattern, (full, _quote, assetPath) => {
    const embedded = fontEmbeds.get(assetPath);
    return embedded ? `url(${embedded})` : full;
  });

  const payload = { generatedAt: new Date().toISOString(), pages, originals, assets };
  const payloadJson = JSON.stringify(payload).replace(/<\/script/gi, '<\\/script');

  let template = await readFile(TEMPLATE_FILE, 'utf8');
  template = template
    .replace('/*__CSS__*/', () => css)
    .replace('__PAYLOAD_JSON__', () => payloadJson);

  await writeFile(OUT_FILE, template, 'utf8');

  const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
  console.log(
    `[copy-editor-snapshot] wrote ${OUT_FILE} — ${pages.length} pages, ${Object.keys(assets).length} images, ` +
      `${kb(css.length)} css, ${kb(Buffer.byteLength(template))} total`,
  );
}

main().catch((error) => {
  console.warn(`[copy-editor-snapshot] skipped: ${error.message}`);
});
