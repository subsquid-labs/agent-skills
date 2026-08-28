# Changelog

What changed in each release of the SQD agent skills, newest first. Entries
describe what changed for you as a user of the skills; the full commit-level
detail lives in the auto-generated section of each
[GitHub release](https://github.com/subsquid-labs/skills/releases).

## Unreleased

## August 28, 2026 — v1.0.0

### New

- Published the initial set of four SQD agent skills: `pipes-sdk` for building
  and deploying indexers, `portal` for querying blockchain data across 140+
  networks, `migrate-to-portal` for moving a v2 Squid onto Portal, and
  `squid-perf` for comparing indexer sync times.
- Skills can now be pinned to an exact release instead of tracking whatever is
  on `main`:

  ```bash
  npx skills add subsquid-labs/skills#v1.0.0
  npx skills add subsquid-labs/skills#v1.0.0@portal
  ```

- Every release now attaches a `sqd-skills.tar.gz` bundle of all four skills,
  always reachable at
  `https://github.com/subsquid-labs/skills/releases/latest/download/sqd-skills.tar.gz`.
- Each release lists the exact skill versions it contains, so a release answers
  which version of a given skill you are installing.
