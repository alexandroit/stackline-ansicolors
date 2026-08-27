# Dependency Decisions

Audit date: 2026-08-26

## Consumer Runtime

The upstream package has zero runtime, optional, and peer dependencies.
`@stackline/ansicolors` must preserve that property.

## Development Only

| Dependency | Decision | Rationale |
| --- | --- | --- |
| `ansicolors@0.3.2` | Add as aliased baseline oracle | Differentially verify every observable runtime behavior |
| TypeScript 3.9 and current | Add, pinned | Verify old and current consumers against first-party types |
| ESLint | Add, pinned | Maintain source/tests with a current static gate |
| c8 | Add, pinned | Enforce 100% core coverage on the small fixed runtime |
| esbuild | Add, pinned | Produce self-contained browser CJS/ESM/global artifacts |
| publint / AreTheTypesWrong | Add, pinned | Validate export and declaration resolution from the packed artifact |

Development packages are lockfile-pinned and are not installed by consumers.
No ANSI dependency will be added merely to reimplement these fixed constants.
