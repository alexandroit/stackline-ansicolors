# Registry Handoff

## Current State

- Upstream: `ansicolors@0.3.2`
- Stackline target: `@stackline/ansicolors@1.0.0`
- Decision: GO
- State: PUBLISHED
- Registry scope: Verdaccio only (`http://127.0.0.1:4873`)
- Runtime dependencies: zero
- Public npm publication: not authorized and not performed
- Public GitHub publication: not performed

## Delivered Delta

Preserves every historical wrapper byte and object behavior while adding
accurate first-party types, CJS/ESM/browser contracts, an intentional package
allowlist, current CI/security/release documentation, differential testing,
and direct plus npm-alias installation paths.

## Artifact Evidence

- Dist tag: `latest`
- SHA-1: `d48bbf1c265319da5b62d58d1b7575202cdda0e3`
- Integrity: `sha512-qbk8HSncjM7dqCy2JovYmCJaUdlUHLnMlGIgXzR0LrbP2yeICD/PoFKMTZ6m/82E02iR8zc9Q0OnOPqtXcWdJQ==`
- Runtime dependencies: zero
- Core runtime delta from upstream: none
- Direct scoped install: PASS
- Legacy alias install as `ansicolors`: PASS
- Cardinal 2.1.1 with both Stackline prerequisites: 174 assertions and lint
  PASS
- Production audit: zero vulnerabilities
- Public npm: untouched
- Public GitHub: untouched

## Next Project

Project 07 (`cardinal`) is unblocked and remains the next CODEX_READY project.
It should consume Projects 05 and 06 through npm aliases under the historical
`redeyed` and `ansicolors` dependency keys.
