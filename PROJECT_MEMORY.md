---
schema: stackline-project-memory-v1
package: ansicolors
upstream: https://github.com/thlorenz/ansicolors
stackline_package: "@stackline/ansicolors"
state: PUBLISHED
decision: GO
registry_scope: verdaccio-and-public-npm
public_npm: true
public_github: true
docs_production: true
created: 2026-08-26
last_updated: 2026-08-26
---

# Project Memory

## Objective

Preserve every observable color-wrapper and escape-code behavior from
`ansicolors@0.3.2` while supplying a maintained zero-runtime-dependency package
with accurate first-party types, current module/browser entry points, a clean
artifact, and a tested npm-alias migration path for existing consumers.

## Upstream Identity

- npm: `ansicolors@0.3.2`
- repository: https://github.com/thlorenz/ansicolors
- license: MIT, copyright 2013 Thorsten Lorenz
- latest npm publish and repository commit: 2013-12-03
- repository state: public, unarchived, no open issues or pull requests
- runtime dependencies: zero

## Distribution Snapshot

- `ansicolors`: 6,402,381 downloads for 2026-08-19 through 2026-08-25
- source: official npm downloads API
- current direct users include repositories touched in 2026: Snyk
  `resolve-deps`, Shopgate `platform-sdk`, `macbre/nodemw`, and American
  Express `json-parse-context`
- `cardinal@2.1.1`, with 5,956,826 downloads in the same complete week,
  depends on `ansicolors@~0.3.2`; it is Project 07 in this program

## Verified Gaps

1. The runtime has received no release, CI update, support policy, or package
   metadata update since 2013 despite active production use.
2. It has no first-party TypeScript declarations, ESM contract, browser
   distribution contract, security policy, or maintained runtime matrix.
3. `@types/ansicolors@0.0.38` models color functions and the `open`/`close`
   maps recursively as the same callable `Colors` shape. TypeScript therefore
   accepts `colors.open.red("x")` and `colors.red.blue("x")`; runtime exposes a
   string and `undefined`, and both calls throw `TypeError`.
4. The upstream tests cover only a subset of the 32 colors and do not lock
   coercion, own-key, descriptor, module, packed-install, or downstream
   behavior.

No runtime CVE or GHSA was found. This project must not claim otherwise.

## Required Decision Output

- decision: GO
- problem: a high-reach dormant package has no maintained distribution or
  first-party types, while the separate declarations provably permit invalid
  calls that fail at runtime
- active_users: four directly verified repositories touched in 2026 plus the
  high-distribution Cardinal chain
- successor_landscape: Chalk, picocolors, kleur, colorette, ansi-colors, and
  yoctocolors are viable modern libraries but do not preserve this exact
  callable object, names, or `open`/`close` API without source changes
- compatibility_contract: exact 0.3.2 keys, escape sequences, wrappers,
  coercion/errors, prototypes, descriptors, CommonJS result, and zero runtime
  dependencies
- risk: over-modernizing six lines of stable behavior could cause more harm
  than value; core changes therefore require differential proof
- maintenance_cost: low; one tiny runtime module, no runtime dependencies,
  fixed ANSI constants, and a bounded compatibility matrix
- adoption_targets: Cardinal, Snyk resolve-deps, Shopgate platform-sdk,
  macbre/nodemw, and American Express json-parse-context
- proof_of_success: complete upstream/differential matrix, 100% core coverage,
  accurate TS 3.9/current declarations, CJS/ESM/browser checks, clean tarball,
  direct/alias installs, zero production audit findings, and full Cardinal
  downstream tests

## Decision

GO. Implementation, verification, packaging, and downstream validation are
complete. The Verdaccio rehearsal was published as `1.0.0`; the exact final
artifact is public as `@stackline/ansicolors@1.0.1` on Verdaccio and npm.
Source, CI, CodeQL, release assets, and production documentation are public.

## Final Verification

- The CommonJS runtime remains byte-for-byte unchanged from upstream 0.3.2.
- All 17 upstream assertions passed.
- The complete 32-color matrix passed 131 assertions.
- Object/prototype/descriptor/mutation behavior passed 303 assertions.
- 1,637 differential comparisons matched official `ansicolors@0.3.2`.
- Core coverage is 100% for lines, branches, functions, and statements.
- TypeScript 3.9.10 and 7.0.2 tests passed, including negative regressions for
  the two runtime-invalid calls accepted by the historical declarations.
- CJS, ESM, browser CJS/ESM/global, historical deep imports, and packed
  consumer TypeScript compilation passed.
- `publint` reported no findings and AreTheTypesWrong reported all root, deep,
  CJS, ESM, Node 10/16, and bundler entry points green.
- Direct and legacy npm-alias installs from Verdaccio and official npm passed.
- The complete `cardinal@2.1.1` suite passed 174 assertions and lint with both
  `@stackline/ansicolors` and `@stackline/redeyed` installed from Verdaccio
  through their historical dependency keys.
- Production audit reported zero vulnerabilities and runtime dependencies
  remain zero.
- 174 dependency signatures and 26 attestations were verified.

## Public Artifact

- package: `@stackline/ansicolors@1.0.1`
- tag: `latest`
- files: 16
- packed size: 8.1 kB
- unpacked size: 28.3 kB
- SHA-1: `54750ff0424c31b2a51e96511342a8f42c83645b`
- integrity: `sha512-WkgOMQSXnz5wIJ86bLTPWQ1OJ0qOLxJZO/4P2jR7A/j7/QTDnZ7dS6cQ5M3yTbwCMPcM8JBx33D5RXYdboMqMg==`
- source commit: `3538f6654955b2c9083a2ba70aaa965736ed1e9f`
- release: https://github.com/alexandroit/stackline-ansicolors/releases/tag/v1.0.1
- CI: https://github.com/alexandroit/stackline-ansicolors/actions/runs/33033264530
- CodeQL: https://github.com/alexandroit/stackline-ansicolors/actions/runs/33033264443
- documentation: https://alexandro.net/docs/vanilla/ansicolors/

## Chronological Log

- 2026-08-26: npm metadata, complete-week downloads, repository history,
  license, all issues/PRs, forks, package contents, advisories, alternatives,
  and active direct consumers audited.
- 2026-08-26: upstream suite passed all 17 assertions.
- 2026-08-26: TypeScript unsoundness reproduced: two invalid calls compiled
  successfully and both failed with `TypeError` at runtime.
- 2026-08-26: official npm and Verdaccio names confirmed available.
- 2026-08-26: GO recorded before implementation.
- 2026-08-26: accurate first-party types, native ESM, browser artifacts,
  explicit exports, CI/security/release documentation, and comprehensive
  compatibility tests implemented without changing the CommonJS runtime.
- 2026-08-26: all release gates and the full Cardinal consumer suite passed.
- 2026-08-26: `@stackline/ansicolors@1.0.0` published to Verdaccio as the
  private registry rehearsal.
- 2026-08-26: final `1.0.1` artifact published unchanged to Verdaccio and npm;
  public direct/alias smoke, audit, CI, CodeQL, release assets, documentation,
  robots, and aggregate sitemaps passed.
