# @stackline/ansicolors

[![CI](https://github.com/alexandroit/stackline-ansicolors/actions/workflows/ci.yml/badge.svg)](https://github.com/alexandroit/stackline-ansicolors/actions/workflows/ci.yml)
[![CodeQL](https://github.com/alexandroit/stackline-ansicolors/actions/workflows/codeql.yml/badge.svg)](https://github.com/alexandroit/stackline-ansicolors/actions/workflows/codeql.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Zero-dependency ANSI foreground and background color wrappers. This package is
a compatibility-first, independently maintained fork of
[`ansicolors@0.3.2`](https://github.com/thlorenz/ansicolors), with accurate
first-party types and current CommonJS, ESM, and browser distribution.

Stackline maintains this package independently. The original author does not
endorse this fork.

## Install

```bash
npm install @stackline/ansicolors
```

Existing projects can keep the package key and every `require('ansicolors')`
call unchanged:

```bash
npm install ansicolors@npm:@stackline/ansicolors@^1.0.0
```

## Usage

```js
const colors = require('@stackline/ansicolors')

console.log(colors.red('failed'))
console.log(colors.bgGreen(colors.black('passed')))
```

Native ESM supports both default and named imports:

```js
import colors, { bgBlue, brightWhite } from '@stackline/ansicolors'

console.log(bgBlue(brightWhite('ready')))
console.log(colors.green('connected'))
```

## API

Foreground methods:

```text
black blue cyan green magenta red white yellow
brightBlack brightBlue brightCyan brightGreen
brightMagenta brightRed brightWhite brightYellow
```

Background methods use the same names with a `bg` prefix:

```text
bgBlack bgBlue bgCyan bgGreen bgMagenta bgRed bgWhite bgYellow
bgBrightBlack bgBrightBlue bgBrightCyan bgBrightGreen
bgBrightMagenta bgBrightRed bgBrightWhite bgBrightYellow
```

Every method surrounds its input with one opening SGR sequence and the
historical foreground (`39m`) or background (`49m`) reset.

### Escape Codes

Opening and closing sequences remain directly available as strings:

```js
colors.open.blue       // '\u001b[34m'
colors.close.blue      // '\u001b[39m'
colors.open.bgYellow   // '\u001b[43m'
colors.close.bgYellow  // '\u001b[49m'
```

## TypeScript

Declarations ship with the package and are tested with TypeScript 3.9 and the
current compiler. Do not install `@types/ansicolors` for the scoped package.

The first-party declarations reflect runtime precisely: color properties are
functions, while `open` and `close` properties are strings. This corrects the
recursive callable shape exposed by the separate historical declaration
package.

## Browser

Package export conditions select self-contained browser builds for bundlers.
Standalone artifacts are also available:

- `dist/ansicolors.browser.mjs`
- `dist/ansicolors.browser.cjs`
- `dist/ansicolors.global.js`, exposing `AnsiColors`

## Compatibility

Version 1.x preserves the observable `ansicolors@0.3.2` runtime contract:

- all 32 method names and ANSI sequences;
- exact string wrapping and JavaScript coercion behavior;
- nested foreground/background byte order;
- `open` and `close` maps;
- method extraction and object property behavior;
- CommonJS default object;
- zero runtime dependencies.

The package intentionally does not add bold, italic, underline, terminal
detection, color disabling, stripping, or nesting repair to the historical
methods. Use a full terminal styling library when those features are required.

## Verification

Release gates include the complete upstream suite, a full 32-color matrix,
differential execution against official 0.3.2, coercion and object-contract
tests, 100% core coverage, TypeScript 3.9/current compilation, CJS/ESM/browser
checks, packed installation, package metadata linting, production audit, npm
alias installation, and the complete `cardinal@2.1.1` downstream suite.

## Security

See [SECURITY.md](SECURITY.md). No runtime CVE or GHSA is claimed for upstream
`ansicolors`; this fork focuses on maintenance continuity, type correctness,
distribution quality, and reproducible compatibility.

## Migration

See [MIGRATION.md](MIGRATION.md) for direct, alias, CommonJS, ESM, and
TypeScript migration notes.

## License And Attribution

MIT. See [LICENSE](LICENSE) and [NOTICE](NOTICE). Original work copyright 2013
Thorsten Lorenz.
