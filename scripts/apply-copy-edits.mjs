#!/usr/bin/env node
/**
 * Applies edits pulled from the copy-editor artifact's database (see
 * .claude/copy-editor.json) into src/content/de.ts and en.ts.
 *
 * Expects .claude/copy-editor-pending.json — an array of { lang, key, value }
 * fetched via the Artifact tool's read_db action — written there before this runs.
 * Edits that patch cleanly are applied and removed from the pending file; edits
 * that fail (usually because the key no longer exists) are kept, with an `error`
 * field, so the pre-commit check can still flag them.
 *
 *   node scripts/apply-copy-edits.mjs
 */
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { patchContent } from '../src/dev/content-ast.mjs';

const PENDING_FILE = '.claude/copy-editor-pending.json';
const FILES = { de: 'src/content/de.ts', en: 'src/content/en.ts' };

let pending;
try {
  pending = JSON.parse(await readFile(PENDING_FILE, 'utf8'));
} catch {
  console.log(`No ${PENDING_FILE} found — nothing to apply.`);
  process.exit(0);
}

if (!Array.isArray(pending) || pending.length === 0) {
  console.log('Pending copy-editor edits file is empty — nothing to apply.');
  process.exit(0);
}

const sources = {};
for (const lang of Object.keys(FILES)) {
  sources[lang] = await readFile(FILES[lang], 'utf8');
}

const failed = [];
let appliedCount = 0;

for (const edit of pending) {
  const { lang, key, value } = edit;
  if (!sources[lang]) {
    failed.push({ ...edit, error: `unknown locale "${lang}"` });
    continue;
  }
  try {
    sources[lang] = patchContent(sources[lang], key, value);
    appliedCount++;
  } catch (error) {
    failed.push({ ...edit, error: error.message });
  }
}

for (const lang of Object.keys(FILES)) {
  await writeFile(FILES[lang], sources[lang], 'utf8');
}

if (failed.length) {
  await writeFile(PENDING_FILE, `${JSON.stringify(failed, null, 2)}\n`, 'utf8');
  console.error(`Applied ${appliedCount} edit(s). ${failed.length} could not be applied:`);
  for (const f of failed) console.error(`  ${f.lang} ${f.key}: ${f.error}`);
  process.exit(1);
} else {
  await unlink(PENDING_FILE).catch(() => {});
  console.log(`Applied ${appliedCount} edit(s) from the copy-editor artifact. ${PENDING_FILE} cleared.`);
  console.log('Remember to also delete the applied documents from the artifact\'s "edits" collection.');
}
