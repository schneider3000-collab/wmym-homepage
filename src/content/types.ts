import type { de } from './de';

/**
 * The German content object defines the shape of the site. `en.ts` is annotated with
 * this type, so any key that is missing, renamed, or misspelled there fails the build
 * instead of silently rendering an empty section.
 */
export type SiteContent = typeof de;

export type Locale = 'de' | 'en';
export type RouteKey = keyof SiteContent['routes'];
export type Programme = SiteContent['programmes'][number];
export type FaqItem = SiteContent['method']['faq'][number];
