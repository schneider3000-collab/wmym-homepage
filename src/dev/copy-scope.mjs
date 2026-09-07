/**
 * Which content sections are eligible for in-place editing on which page, shared by
 * the dev-only in-browser editor (src/components/dev/CopyEditor.astro) and the
 * copy-editor artifact generator (scripts/build-copy-editor-snapshot.mjs). Keeping
 * one copy means the two editors can never quietly drift apart on what counts as
 * editable copy.
 */

// Only the sections a page actually renders. Without this, a word like "Kontakt"
// matches keys on pages that are not even open, and every one of them has to be
// skipped as ambiguous.
export const PAGE_SECTIONS = {
  home: ['home', 'programmes'],
  offerings: ['offerings', 'programmes'],
  method: ['method'],
  research: ['research'],
  about: ['about'],
  contact: ['contact'],
  imprint: ['legal'],
  privacy: ['legal'],
};

export const ALWAYS = ['nav', 'brand', 'footer', 'common'];

// Not copy: URLs, route paths and locale plumbing would only create false matches.
export const SKIP_PREFIX = ['routes.'];
export const SKIP_LEAF = ['href', 'linkTo', 'anchor', 'id', 'locale', 'htmlLang', 'otherLocale'];

export function isEditableKey(key) {
  const leaf = key.split('.').pop() ?? '';
  return !SKIP_PREFIX.some((p) => key.startsWith(p)) && !SKIP_LEAF.includes(leaf);
}

/** Narrows a flat `{ 'a.b.c': value }` map down to the keys a given route renders. */
export function scopeToRoute(flatMap, routeKey) {
  const allowed = new Set([...(PAGE_SECTIONS[routeKey] ?? []), ...ALWAYS]);
  return Object.fromEntries(
    Object.entries(flatMap).filter(([key]) => isEditableKey(key) && allowed.has(key.split('.')[0])),
  );
}
