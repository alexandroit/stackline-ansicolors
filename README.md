# @stackline/ansicolors

> Zero-dependency ANSI color wrappers with exact ansicolors compatibility and first-party types.

[![npm version](https://img.shields.io/npm/v/@stackline/ansicolors.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/ansicolors)
[![license](https://img.shields.io/npm/l/@stackline/ansicolors.svg?style=flat-square)](https://github.com/alexandroit/stackline-ansicolors)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-ansicolors)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/ansicolors/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/ansicolors/)** | **[npm](https://www.npmjs.com/package/@stackline/ansicolors)** | **[Issues](https://github.com/alexandroit/stackline-ansicolors/issues)** | **[Repository](https://github.com/alexandroit/stackline-ansicolors)**

**Current package version:** `1.0.4`

---

## Why this package?

Zero-dependency ANSI foreground and background color wrappers. This package is
a compatibility-first, independently maintained fork of
[`ansicolors@0.3.2`](https://github.com/thlorenz/ansicolors), with accurate
first-party types and current CommonJS, ESM, and browser distribution.

Stackline maintains this package independently. The original author does not
endorse this fork.

## Compatibility

| Item | Value |
| --- | --- |
| Package | `@stackline/ansicolors@1.0.4` |
| Node.js runtime | `>=12` |
| CommonJS / primary entry | `./ansicolors.js` |
| ES module entry | `./index.mjs` |
| Type declarations | `./index.d.ts` |

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

## Installation

<a id="install"></a>

### Install

```bash
npm install @stackline/ansicolors
```

Existing projects can keep the package key and every `require('ansicolors')`
call unchanged:

```bash
npm install ansicolors@npm:@stackline/ansicolors@^1.0.2
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

## Features and Integrations

<a id="typescript"></a>

### TypeScript

Declarations ship with the package and are tested with TypeScript 3.9 and the
current compiler. Do not install `@types/ansicolors` for the scoped package.

The first-party declarations reflect runtime precisely: color properties are
functions, while `open` and `close` properties are strings. This corrects the
recursive callable shape exposed by the separate historical declaration
package.

<a id="browser"></a>

### Browser

Package export conditions select self-contained browser builds for bundlers.
Standalone artifacts are also available:

- `dist/ansicolors.browser.mjs`
- `dist/ansicolors.browser.cjs`
- `dist/ansicolors.global.js`, exposing `AnsiColors`

<a id="migration"></a>

### Migration

See [MIGRATION.md](https://github.com/alexandroit/stackline-ansicolors/blob/main/MIGRATION.md) for direct, alias, CommonJS, ESM, and
TypeScript migration notes.

## Security

See [SECURITY.md](https://github.com/alexandroit/stackline-ansicolors/blob/main/SECURITY.md). No runtime CVE or GHSA is claimed for upstream
`ansicolors`; this fork focuses on maintenance continuity, type correctness,
distribution quality, and reproducible compatibility.

## API Surface

<a id="api"></a>

### API

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

#### Escape Codes

Opening and closing sequences remain directly available as strings:

```js
colors.open.blue       // '\u001b[34m'
colors.close.blue      // '\u001b[39m'
colors.open.bgYellow   // '\u001b[43m'
colors.close.bgYellow  // '\u001b[49m'
```

## Local Development

```sh
git clone https://github.com/alexandroit/stackline-ansicolors.git
cd stackline-ansicolors
npm ci
npm run verify
```

Release tooling uses Node.js 24.20.0 and npm 11.19.0. The consumer runtime contract remains the one documented above.

## Consumer Smoke Test

Run the repository's existing consumer/package check after installing development dependencies:

```sh
npm run test:smoke
```

## Release Checklist

<a id="verification"></a>

### Verification

Release gates include the complete upstream suite, a full 32-color matrix,
differential execution against official 0.3.2, coercion and object-contract
tests, 100% core coverage, TypeScript 3.9/current compilation, CJS/ESM/browser
checks, packed installation, package metadata linting, production audit, npm
alias installation, and the complete `cardinal@2.1.1` downstream suite.

Run `npm run verify` and inspect the package contents before release. Publish a new version through the [GitHub Actions publishing workflow](https://github.com/alexandroit/stackline-ansicolors/actions/workflows/publish.yml), using the SHA-512 digest of the reviewed tarball. Verify the exact published version, tarball integrity, and npm provenance after the run.

## License

<a id="license-and-attribution"></a>

### License And Attribution

MIT. See [LICENSE](https://github.com/alexandroit/stackline-ansicolors/blob/main/LICENSE) and [NOTICE](https://github.com/alexandroit/stackline-ansicolors/blob/main/NOTICE). Original work copyright 2013
Thorsten Lorenz.

## Credits and original authors

- Original project: [ansicolors](https://github.com/thlorenz/ansicolors).
- Stackline Maintainers.
- Thorsten Lorenz.
- Copyright 2013 Thorsten Lorenz.
- Original work copyright 2013 Thorsten Lorenz.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
