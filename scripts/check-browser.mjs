import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import vm from 'node:vm'

const source = await readFile(new URL('../dist/ansicolors.global.js', import.meta.url), 'utf8')
const context = {}
vm.runInNewContext(source, context, { filename: 'ansicolors.global.js' })

assert.equal(typeof context.AnsiColors.default, 'object')
assert.equal(typeof context.AnsiColors.red, 'function')
assert.equal(context.AnsiColors.red, context.AnsiColors.default.red)
assert.equal(context.AnsiColors.open, context.AnsiColors.default.open)
assert.equal(context.AnsiColors.close, context.AnsiColors.default.close)
assert.equal(context.AnsiColors.red('error'), '\u001b[31merror\u001b[39m')
assert.equal(context.AnsiColors.open.bgBrightWhite, '\u001b[107m')

const browserEsm = await import('../dist/ansicolors.browser.mjs')
assert.equal(browserEsm.red, browserEsm.default.red)
assert.equal(browserEsm.bgGreen('ok'), '\u001b[42mok\u001b[49m')

const require = createRequire(import.meta.url)
const browserCommonJs = require('../dist/ansicolors.browser.cjs')
assert.equal(browserCommonJs.red, browserCommonJs.default.red)
assert.equal(browserCommonJs.brightCyan('ok'), '\u001b[96mok\u001b[39m')

console.log('Browser bundle checks passed.')
