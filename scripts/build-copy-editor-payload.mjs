#!/usr/bin/env node
/**
 * Flattens src/content/de.ts and en.ts into the { section -> [{ key, de, en }] }
 * shape the copy-editor artifact embeds at publish time. Mirrors the skip rules in
 * src/components/dev/CopyEditor.astro so the remote editor and the in-browser one
 * expose the same set of strings.
 *
 * Usage: node scripts/build-copy-editor-payload.mjs > payload.json
 */
import { readFile } from 'node:fs/promises';
import { extractStrings } from '../src/dev/content-ast.mjs';

const SKIP_PREFIX = ['routes.'];
const SKIP_LEAF = ['href', 'linkTo', 'anchor', 'id', 'locale', 'htmlLang', 'otherLocale'];

function editable(key) {
  const leaf = key.split('.').pop();
  return !SKIP_PREFIX.some((p) => key.startsWith(p)) && !SKIP_LEAF.includes(leaf);
}

const [de, en] = await Promise.all([
  readFile('src/content/de.ts', 'utf8'),
  readFile('src/content/en.ts', 'utf8'),
]);

const deMap = extractStrings(de);
const enMap = extractStrings(en);

const keys = Object.keys(deMap).filter(editable).sort();

// Fold single-key locale-plumbing sections into "brand" rather than giving each
// its own one-row group in the sidebar.
const FOLD_INTO_BRAND = new Set(['localeName', 'otherLocaleName', 'otherLocaleLabel']);

const bySection = new Map();
for (const key of keys) {
  const raw = key.split('.')[0];
  const section = FOLD_INTO_BRAND.has(raw) ? 'brand' : raw;
  if (!bySection.has(section)) bySection.set(section, []);
  bySection.get(section).push({ key, de: deMap[key], en: enMap[key] });
}

const sections = [...bySection.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, entries]) => ({ id, entries }));

process.stdout.write(JSON.stringify({ generatedAt: new Date().toISOString(), sections }));
