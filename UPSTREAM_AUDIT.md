# Upstream Audit

Audit date: 2026-08-26

## Identity And Maintenance

| Field | Evidence |
| --- | --- |
| npm package | `ansicolors@0.3.2` |
| Repository | https://github.com/thlorenz/ansicolors |
| License | MIT, copyright 2013 Thorsten Lorenz |
| Latest npm release | 2013-12-03 |
| Latest repository commit | 2013-12-03 |
| Repository | Unarchived; default branch `master` |
| Current open work | No open issues or pull requests |
| Runtime dependencies | Zero |

The package is dormant, not falsely described as officially deprecated,
archived, or affected by a known advisory.

## Distribution And Reach

The official npm downloads API reports 6,402,381 downloads for the complete
week 2026-08-19 through 2026-08-25.

Direct dependencies and imports were verified in active repositories:

| Repository | Last push observed | Representative use |
| --- | --- | --- |
| `snyk/resolve-deps` | 2026-08-26 | namespace import; nested foreground/background calls |
| `shopgate/platform-sdk` | 2026-08-26 | exact `0.3.2` runtime dependency |
| `macbre/nodemw` | 2026-08-25 | `0.3.x` runtime dependency and direct color calls |
| `americanexpress/json-parse-context` | 2026-03-23 | `^0.3.2` runtime dependency and direct color calls |

`cardinal@2.1.1` depends on `ansicolors@~0.3.2` and is the mandatory downstream
consumer for this gate. It received 5,956,826 downloads in the same week.

## Issues, Pull Requests, And Forks

- Issue #1 requested bold, italic, underline, inverse, and strike. The author
  kept non-color styles in the separate `ansistyles` package.
- PR #2 proposed bold. It was closed for the same scope reason.
- Issue #3 requested a cleaner package listing. The resulting `.npmignore`
  change was released in 0.3.2.
- There are no open issues, pull requests, or GitHub releases.
- The small fork network contains no maintained drop-in successor. The only
  later functional-looking commit found merely changed an old Travis target
  to ppc64le; another fork renamed the package.

## Baseline Verification

- Upstream suite: 17/17 assertions passed.
- Official package artifact: five files, 2.9 kB packed, 7.5 kB unpacked.
- Runtime dependency audit surface: zero dependencies.
- GitHub advisory search: no advisory affecting `ansicolors`.
- Official artifact has a valid npm registry signature.

## Reproduced Type Correctness Gap

The latest separate declaration package, `@types/ansicolors@0.0.38`, models
all properties as the recursive callable `Colors` interface. TypeScript 7.0.2
accepts these invalid expressions:

```ts
colors.open.red("x")
colors.red.blue("x")
```

At runtime `colors.open.red` is a string and `colors.red.blue` is undefined;
both attempted calls throw `TypeError`. First-party declarations can describe
the actual runtime without changing JavaScript behavior.

## Alternatives

Chalk, picocolors, kleur, colorette, ansi-colors, and yoctocolors are healthy
or widely used zero-dependency alternatives. They are valid choices for new
code, but none is an exact drop-in for the 32 historical method names plus the
`open` and `close` string maps. Their existence argues against feature creep,
not against maintaining this compatibility boundary for current consumers.

## Decision

GO: keep the tiny runtime semantics exact, add correct first-party types and
modern package entry points, test the actual downstream chain, and retain zero
runtime dependencies.
