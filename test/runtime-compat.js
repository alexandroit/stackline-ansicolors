'use strict'

var assert = require('assert')
var colors = require('@stackline/ansicolors')
var deep = require('@stackline/ansicolors/ansicolors')
var deepJs = require('@stackline/ansicolors/ansicolors.js')

assert.strictEqual(colors, deep)
assert.strictEqual(colors, deepJs)
assert.strictEqual(colors.green('ok'), '\u001b[32mok\u001b[39m')
assert.strictEqual(colors.open.bgBrightBlue, '\u001b[104m')
assert.strictEqual(colors.close.bgBrightBlue, '\u001b[49m')

console.log('Runtime compatibility checks passed.')
