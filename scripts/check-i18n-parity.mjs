#!/usr/bin/env node
/**
 * Fails when a copy string changed in one language but not the other.
 *
 * TypeScript already guarantees the two content files have the *same keys*. What it
 * cannot see is a German string being reworded while the English one silently goes
 * stale — the likeliest outcome of editing copy in the browser and committing.
 *
 * Compares the staged index against HEAD by default:
 *   node scripts/check-i18n-parity.mjs
 * Or any two refs, for CI:
 *   node scripts/check-i18n-parity.mjs --base origin/main --head HEAD
 */
import { execFileSync } from 'node:child_process';
import { extractStrings } from '../src/dev/content-ast.mjs';

const FILES = { de: 'src/content/de.ts', en: 'src/content/en.ts' };
const MAX = 64;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

/** Reads a file at a git ref. `index` means the staged copy. Returns null if absent. */
function blob(ref, file) {
  const spec = ref === 'index' ? `:${file}` : `${ref}:${file}`;
  try {
    return execFileSync('git', ['show', spec], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return null;
  }
}

function strings(ref, file) {
  const source = blob(ref, file);
  return source === null ? null : extractStrings(source);
}

const clip = (s) => (s.length > MAX ? `${s.slice(0, MAX - 1)}…` : s);
const show = (s) => (s === undefined ? '(absent)' : JSON.stringify(clip(s)));

if (process.env.SKIP_I18N_CHECK === '1') {
  console.log('i18n parity check skipped (SKIP_I18N_CHECK=1)');
  process.exit(0);
}

const base = arg('base', 'HEAD');
const head = arg('head', 'index');

const before = { de: strings(base, FILES.de), en: strings(base, FILES.en) };
const after = { de: strings(head, FILES.de), en: strings(head, FILES.en) };

// No baseline (first commit) or the files are not in this change: nothing to compare.
if (!before.de || !before.en || !after.de || !after.en) {
  process.exit(0);
}

const drift = [];
const structural = [];
const keys = new Set(
  [before.de, before.en, after.de, after.en].flatMap((m) => Object.keys(m)),
);

for (const key of [...keys].sort()) {
  const b = { de: before.de[key], en: before.en[key] };
  const a = { de: after.de[key], en: after.en[key] };

  const present = (l) => b[l] !== undefined && a[l] !== undefined;

  if (present('de') && present('en')) {
    const changed = { de: b.de !== a.de, en: b.en !== a.en };
    if (changed.de !== changed.en) {
      const moved = changed.de ? 'de' : 'en';
      const still = moved === 'de' ? 'en' : 'de';
      drift.push({ key, moved, from: b[moved], to: a[moved], still, stillValue: a[still] });
    }
    continue;
  }

  for (const [l, other] of [['de', 'en'], ['en', 'de']]) {
    if (b[l] === undefined && a[l] !== undefined && a[other] === undefined) {
      structural.push({ key, message: `added to ${l}.ts only` });
    }
    if (b[l] !== undefined && a[l] === undefined && a[other] !== undefined) {
      structural.push({ key, message: `removed from ${l}.ts only` });
    }
  }
}

if (!drift.length && !structural.length) {
  console.log('i18n parity ok — German and English copy changed in step.');
  process.exit(0);
}

const out = [];
if (drift.length) {
  out.push(`\n  Translation drift — ${drift.length} key(s) changed in one language only:\n`);
  for (const d of drift) {
    out.push(`  ${d.key}`);
    out.push(`    ${d.moved}  ${show(d.from)} → ${show(d.to)}`);
    out.push(`    ${d.still}  unchanged: ${show(d.stillValue)}\n`);
  }
}
if (structural.length) {
  out.push(`\n  Key mismatch — ${structural.length} key(s):\n`);
  for (const s of structural) out.push(`  ${s.key}\n    ${s.message}\n`);
}

out.push('  Update the matching key in the other content file, then stage it.');
out.push('  If the other language is deliberately unchanged (a typo fix, say), run:');
out.push('    SKIP_I18N_CHECK=1 git commit …\n');

console.error(out.join('\n'));
process.exit(1);
