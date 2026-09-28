# Changelog

All notable changes to `@stackline/ansicolors` are documented here.

## [Unreleased]

## [1.0.2] - 2026-09-28

- Organize package documentation, preserve API and migration examples, and add Stackline community links.
- Improve package discovery keywords with precise domain terms and `stackline`.
- Pin GitHub Actions release tooling and require an explicit missing-version response before publication.


## [1.0.1] - 2026-08-26

### Added

- Public ANSI palette preview backed by the production browser bundle.
- Machine-readable documentation, crawler metadata, and a packaged example.
- Pinned CI, CodeQL, and immutable npm publication workflows.
- Documentation and production dependency audit release gates.

## [1.0.0] - 2026-08-26

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

[Unreleased]: https://github.com/alexandroit/stackline-ansicolors/compare/v1.0.2...HEAD
[1.0.1]: https://github.com/alexandroit/stackline-ansicolors/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alexandroit/stackline-ansicolors/tree/v1.0.0
