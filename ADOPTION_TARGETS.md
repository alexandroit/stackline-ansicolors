# Adoption Targets

## Required Downstream

`cardinal@2.1.1` is the release gate and future Project 07 consumer. Its full
test and lint suite must pass with dependency key `ansicolors` mapped to
`@stackline/ansicolors` through an npm alias.

## Verified Active Candidates

| Repository | Dependency | Last push observed | Migration value |
| --- | --- | --- | --- |
| `snyk/resolve-deps` | `ansicolors@^0.3.2` | 2026-08-26 | TypeScript namespace import and nested foreground/background call |
| `shopgate/platform-sdk` | `ansicolors@0.3.2` | 2026-08-26 | Exact legacy runtime pin |
| `macbre/nodemw` | `ansicolors@0.3.x` | 2026-08-25 | Active package with direct calls and current TypeScript tooling |
| `americanexpress/json-parse-context` | `ansicolors@^0.3.2` | 2026-03-23 | Maintained direct consumer that also uses Cardinal |

No outreach or pull request is part of this build gate. Adoption begins only
after an authorized public release.
