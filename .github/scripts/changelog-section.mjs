#!/usr/bin/env node
// Prints the CHANGELOG.md section for a given version. Exits non-zero when the
// version has no section — this is the gate that stops a tag shipping without
// release notes.
//
// Usage: node .github/scripts/changelog-section.mjs <version> [changelog path]

import { readFileSync } from 'node:fs';

const version = process.argv[2];
const file = process.argv[3] ?? 'CHANGELOG.md';

if (!version) {
  console.error('usage: changelog-section.mjs <version> [changelog path]');
  process.exit(2);
}

const normalized = version.startsWith('v') ? version : `v${version}`;

// Match the version as a whole token so `v1.0.1` never matches `v1.0.10`, and
// `v1.0.0` never matches the `v1.0.0-rc.1` heading that may precede it.
function headingFor(needle) {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^##\\s+.*(?<![\\w.])${escaped}(?![\\w.-])`);
}

let lines;
try {
  lines = readFileSync(file, 'utf8').split(/\r?\n/);
} catch {
  console.error(`error: cannot read ${file}`);
  process.exit(1);
}

let start = lines.findIndex((line) => headingFor(normalized).test(line));

// A prerelease is a rehearsal of its base version, so fall back to that
// version's notes rather than requiring a throwaway `-rc.N` changelog section.
const base = normalized.replace(/-.*$/, '');
if (start === -1 && base !== normalized) {
  start = lines.findIndex((line) => headingFor(base).test(line));
  if (start !== -1) {
    console.error(`note: no section for ${normalized}; using ${base} notes.`);
  }
}

if (start === -1) {
  console.error(`error: ${file} has no section for ${normalized}.`);
  console.error('Add one before tagging — see the Releases section of AGENTS.md.');
  process.exit(1);
}

let end = lines.length;
for (let i = start + 1; i < lines.length; i++) {
  if (/^##\s/.test(lines[i])) {
    end = i;
    break;
  }
}

const body = lines.slice(start + 1, end).join('\n').trim();
if (!body) {
  console.error(`error: the ${normalized} section in ${file} is empty.`);
  process.exit(1);
}

console.log(body);
