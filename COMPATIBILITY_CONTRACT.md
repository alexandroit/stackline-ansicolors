# Compatibility Contract

Baseline: `ansicolors@0.3.2`

## Public API

```js
const colors = require('ansicolors')

colors.red('text')
colors.bgBrightBlue('text')
colors.open.red
colors.close.bgBrightBlue
```

The CommonJS export remains one object with 32 callable color properties and
two escape-code maps.

## Preserved Foreground Methods

`white`, `black`, `blue`, `cyan`, `green`, `magenta`, `red`, `yellow`,
`brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`,
`brightMagenta`, `brightCyan`, and `brightWhite`.

Each method emits its historical SGR opening code and closes with `39m`.

## Preserved Background Methods

`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`,
`bgWhite`, `bgBrightBlack`, `bgBrightRed`, `bgBrightGreen`, `bgBrightYellow`,
`bgBrightBlue`, `bgBrightMagenta`, `bgBrightCyan`, and `bgBrightWhite`.

Each method emits its historical SGR opening code and closes with `49m`.

## Observable Semantics

- Strings are surrounded without inspection, stripping, or terminal detection.
- Nested foreground/background calls preserve exact byte order.
- JavaScript `+` coercion behavior remains unchanged for numbers, booleans,
  null, undefined, arrays, objects, BigInt, and Symbols.
- Method extraction remains valid because wrappers do not use `this`.
- Export, `open`, and `close` own keys, prototypes, mutability, enumerability,
  and property descriptors remain compatible with 0.3.2.
- Wrapper closures continue using their original captured escape sequences if
  consumers mutate an exposed `open` or `close` map entry.
- No style auto-detection, disabling, stripping, nesting repair, or non-color
  text style is added to the historical functions.

## Maintained Distribution Extensions

- Native ESM default and named exports mirror the CommonJS values.
- Accurate first-party TypeScript declarations support TypeScript 3.9 and
  current TypeScript.
- Self-contained browser ESM, CommonJS, and global artifacts are supplied.
- Explicit package exports retain the root, historical `ansicolors` deep path,
  and package metadata paths.

## Runtime Target

Node.js 12 and newer plus current browser bundlers. The runtime source remains
plain compatible JavaScript and has zero runtime dependencies.
