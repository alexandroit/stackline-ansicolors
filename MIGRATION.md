# Migration

## Lowest-Change Migration

Keep the dependency key and all source imports unchanged:

```bash
npm install ansicolors@npm:@stackline/ansicolors@1.0.0
```

```js
const colors = require('ansicolors')
console.log(colors.green('ready'))
```

## Direct Scoped Install

```bash
npm install @stackline/ansicolors
```

```js
const colors = require('@stackline/ansicolors')
```

## ESM

```js
import colors, { bgBlue, brightWhite } from '@stackline/ansicolors'
```

## TypeScript Note

First-party declarations replace the separate `@types/ansicolors` package.
The `open` and `close` entries are correctly typed as strings, and color
methods are correctly typed as functions. Code that called nested properties
such as `colors.red.blue()` was accepted by old declarations but never worked
at runtime.
