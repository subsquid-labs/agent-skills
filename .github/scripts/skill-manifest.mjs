#!/usr/bin/env node
// Emits a Markdown table of every skill in this repo and its frontmatter version.
// The release workflow appends this to each release body so a tag answers
// "which skill versions are in here?" without cloning.
//
// Usage: node .github/scripts/skill-manifest.mjs [repo root]

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2] ?? process.cwd();
const SKIP = new Set(['.git', '.github', 'node_modules']);

function subdirs(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !SKIP.has(e.name))
    .map((e) => e.name);
}

function hasSkill(dir) {
  try {
    return statSync(join(dir, 'SKILL.md')).isFile();
  } catch {
    return false;
  }
}

// Skills sit at depth 1 (portal/) or depth 2 (squid-sdk/squid-perf/).
function findSkillDirs(root) {
  const found = [];
  for (const top of subdirs(root)) {
    if (hasSkill(join(root, top))) {
      found.push(top);
      continue;
    }
    for (const nested of subdirs(join(root, top))) {
      if (hasSkill(join(root, top, nested))) found.push(`${top}/${nested}`);
    }
  }
  return found.sort();
}

function unquote(value) {
  return value.trim().replace(/^["'](.*)["']$/, '$1').trim();
}

// We only need `name` and the `metadata` block, so track indentation rather than
// take on a YAML dependency. Indented lines outside `metadata:` — multi-line
// descriptions, `allowed-tools` lists — are ignored, which keeps a stray
// `version:` inside a description from being picked up.
function readFrontmatter(path) {
  const text = readFileSync(path, 'utf8');
  const block = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) throw new Error(`${path}: no YAML frontmatter block`);

  const out = {};
  let inMetadata = false;

  for (const line of block[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;

    if (!/^\s/.test(line)) {
      inMetadata = /^metadata:\s*$/.test(line);
      const name = line.match(/^name:\s*(.+)$/);
      if (name) out.name = unquote(name[1]);
      continue;
    }
    if (!inMetadata) continue;
    const kv = line.match(/^\s+(version|category):\s*(.+)$/);
    if (kv) out[kv[1]] = unquote(kv[2]);
  }
  return out;
}

const dirs = findSkillDirs(ROOT);
if (dirs.length === 0) {
  console.error(`error: no SKILL.md found under ${ROOT}`);
  process.exit(1);
}

const rows = [];
const problems = [];

for (const dir of dirs) {
  let fm;
  try {
    fm = readFrontmatter(join(ROOT, dir, 'SKILL.md'));
  } catch (err) {
    problems.push(err.message);
    continue;
  }

  const leaf = dir.split('/').pop();
  if (!fm.name) problems.push(`${dir}/SKILL.md: missing \`name\``);
  if (!fm.version) problems.push(`${dir}/SKILL.md: missing \`metadata.version\``);
  // AGENTS.md requires the directory name and the frontmatter name to match.
  if (fm.name && fm.name !== leaf) {
    problems.push(`${dir}/SKILL.md: name \`${fm.name}\` does not match directory \`${leaf}\``);
  }
  rows.push({ dir, ...fm });
}

if (problems.length > 0) {
  for (const problem of problems) console.error(`error: ${problem}`);
  process.exit(1);
}

console.log('| Skill | Path | Version | Category |');
console.log('|---|---|---|---|');
for (const row of rows) {
  console.log(`| \`${row.name}\` | \`${row.dir}/\` | ${row.version} | ${row.category ?? '—'} |`);
}
