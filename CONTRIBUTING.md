# Contributing

Contributions are welcome when they preserve the compatibility contract and
the package's zero-runtime-dependency scope.

## Development

```bash
npm ci
npm run verify
```

Changes to `ansicolors.js`, package exports, or declarations must include a
regression test and differential evidence when behavior could diverge from
`ansicolors@0.3.2`.

## Scope

This package provides colors. Bold, italic, underline, cursor control,
terminal capability detection, stripping, and complete styling systems belong
in other libraries. Additive distribution improvements are welcome when they
do not alter the historical methods.

By contributing, you agree that your contribution is licensed under the MIT
License in [LICENSE](LICENSE).
