import { de } from './de';
import { en } from './en';
import type { Locale, RouteKey } from './types';

export const content = { de, en } as const;
export const locales: Locale[] = ['de', 'en'];

export function useContent(locale: Locale) {
  return content[locale];
}

/** Prefixes a site-root path with Astro's configured `base`, if any. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return path;
  return path === '/' ? base || '/' : `${base}${path}`;
}

/** Resolves a page key to its href in the given locale, base path included. */
export function route(locale: Locale, key: RouteKey): string {
  return withBase(content[locale].routes[key]);
}

/** The same page in the other language — used for the language switch and hreflang. */
export function alternateFor(locale: Locale, key: RouteKey) {
  const other: Locale = locale === 'de' ? 'en' : 'de';
  return { locale: other, href: route(other, key) };
}

export type { Locale, RouteKey };
