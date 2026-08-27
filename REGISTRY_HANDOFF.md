# Registry Handoff

## Current State

- Upstream: `ansicolors@0.3.2`
- Stackline target: `@stackline/ansicolors@1.0.1`
- Decision: GO
- State: PUBLIC RELEASE COMPLETE
- Registry scope: Verdaccio and official npm
- Runtime dependencies: zero
- GitHub: https://github.com/alexandroit/stackline-ansicolors
- Docs: https://alexandro.net/docs/vanilla/ansicolors/

## Delivered Delta

Preserves every historical wrapper byte and object behavior while adding
accurate first-party types, CJS/ESM/browser contracts, an intentional package
allowlist, current CI/security/release documentation, differential testing,
and direct plus npm-alias installation paths.

## Artifact Evidence

- Dist tag: `latest`
- SHA-1: `54750ff0424c31b2a51e96511342a8f42c83645b`
- Integrity: `sha512-WkgOMQSXnz5wIJ86bLTPWQ1OJ0qOLxJZO/4P2jR7A/j7/QTDnZ7dS6cQ5M3yTbwCMPcM8JBx33D5RXYdboMqMg==`
- Runtime dependencies: zero
- Core runtime delta from upstream: none
- Direct scoped install: PASS
- Legacy alias install as `ansicolors`: PASS
- Cardinal 2.1.1 with both Stackline prerequisites: 174 assertions and lint
  PASS
- Production audit: zero vulnerabilities
- Official npm scoped and alias installs: PASS
- CI and CodeQL: PASS
- GitHub release: tarball, SHA512SUMS, and CycloneDX SBOM attached

## Next Project

Project 07 (`cardinal`) is unblocked and remains the next fixed roadmap item.
It should consume Projects 05 and 06 through npm aliases under the historical
`redeyed` and `ansicolors` dependency keys.
