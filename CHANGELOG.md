# Changelog

All notable changes to `@stackline/ansicolors` are documented here.

## 1.0.0 - 2026-08-26

### Added

- First Stackline compatibility release based on `ansicolors@0.3.2`.
- Accurate first-party TypeScript declarations for TypeScript 3.9 and newer.
- Native ESM default and named exports.
- Self-contained browser CommonJS, ESM, and global artifacts.
- Explicit package exports for root, historical deep entry, and metadata.
- CI, CodeQL, security policy, migration guide, and reproducible release gates.
- Full color matrix, differential, coercion, object-contract, packed-install,
  browser, type, and downstream Cardinal regression coverage.

### Preserved

- All 32 wrappers, ANSI sequences, JavaScript coercion behavior, exposed
  `open`/`close` maps, CommonJS object shape, and zero runtime dependencies.

### Security

- Production dependency audit surface remains empty.
- No CVE or GHSA is attributed to the upstream runtime.
