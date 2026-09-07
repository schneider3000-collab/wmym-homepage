#!/usr/bin/env node
/**
 * Blocks a commit while edits pulled from the copy-editor artifact's database
 * (.claude/copy-editor-pending.json) haven't been applied to de.ts/en.ts yet.
 *
 * Both files only exist once someone has actually synced with the artifact in this
 * checkout: .claude/copy-editor.json is committed (it just points at the artifact),
 * but .claude/copy-editor-pending.json is local, gitignored scratch state that only
 * appears mid-sync. So this check is a no-op everywhere except the middle of a sync
 * gone unfinished — a plain clone, CI, or a machine that has never touched the
 * artifact always passes.
 */
import { existsSync, readFileSync } from 'node:fs';

const CONFIG_FILE = '.claude/copy-editor.json';
const PENDING_FILE = '.claude/copy-editor-pending.json';

if (process.env.SKIP_COPY_EDITOR_CHECK === '1') {
  console.log('copy-editor sync check skipped (SKIP_COPY_EDITOR_CHECK=1)');
  process.exit(0);
}

if (!existsSync(CONFIG_FILE) || !existsSync(PENDING_FILE)) {
  process.exit(0);
}

let pending;
try {
  pending = JSON.parse(readFileSync(PENDING_FILE, 'utf8'));
} catch {
  // Corrupt or empty scratch file — nothing actionable, don't block on it.
  process.exit(0);
}

if (!Array.isArray(pending) || pending.length === 0) process.exit(0);

console.error(
  `\n  Unsynced copy-editor edits — ${pending.length} change(s) pulled from the artifact ` +
    `database have not been applied to de.ts/en.ts:\n`,
);
for (const p of pending) {
  console.error(`  ${p.lang}  ${p.key}${p.error ? `  (${p.error})` : ''}`);
}
console.error(`\n  Run: node scripts/apply-copy-edits.mjs`);
console.error('  If these are meant to stay unsynced for now, run:');
console.error('    SKIP_COPY_EDITOR_CHECK=1 git commit …\n');
process.exit(1);
