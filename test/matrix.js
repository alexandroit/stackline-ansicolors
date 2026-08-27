'use strict'

var assert = require('assert').strict
var colors = require('..')

var foreground = {
  white: 37,
  black: 30,
  blue: 34,
  cyan: 36,
  green: 32,
  magenta: 35,
  red: 31,
  yellow: 33,
  brightBlack: 90,
  brightRed: 91,
  brightGreen: 92,
  brightYellow: 93,
  brightBlue: 94,
  brightMagenta: 95,
  brightCyan: 96,
  brightWhite: 97
}

var background = {
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
  bgBrightBlack: 100,
  bgBrightRed: 101,
  bgBrightGreen: 102,
  bgBrightYellow: 103,
  bgBrightBlue: 104,
  bgBrightMagenta: 105,
  bgBrightCyan: 106,
  bgBrightWhite: 107
}

var foregroundNames = Object.keys(foreground)
var backgroundNames = Object.keys(background)
var assertions = 0

checkGroup(foreground, 39)
checkGroup(background, 49)

assert.deepEqual(
  Object.keys(colors),
  foregroundNames.concat(backgroundNames, ['open', 'close'])
)
assertions += 1
assert.deepEqual(Object.keys(colors.open), foregroundNames.concat(backgroundNames))
assertions += 1
assert.deepEqual(Object.keys(colors.close), foregroundNames.concat(backgroundNames))
assertions += 1

console.log('Full ANSI matrix passed ' + assertions + ' assertions.')

function checkGroup(group, resetCode) {
  Object.keys(group).forEach(function (name) {
    var opening = '\u001b[' + group[name] + 'm'
    var closing = '\u001b[' + resetCode + 'm'

    assert.equal(typeof colors[name], 'function')
    assert.equal(colors.open[name], opening)
    assert.equal(colors.close[name], closing)
    assert.equal(colors[name]('sample'), opening + 'sample' + closing)
    assertions += 4
  })
}
