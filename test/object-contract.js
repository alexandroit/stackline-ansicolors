'use strict'

var assert = require('assert').strict
var colors = require('..')
var assertions = 0

assert.equal(Object.getPrototypeOf(colors), Object.prototype)
assert.equal(Object.getPrototypeOf(colors.open), Object.prototype)
assert.equal(Object.getPrototypeOf(colors.close), Object.prototype)
assertions += 3

Object.keys(colors).forEach(function (name) {
  var descriptor = Object.getOwnPropertyDescriptor(colors, name)
  assert.equal(descriptor.enumerable, true)
  assert.equal(descriptor.configurable, true)
  assert.equal(descriptor.writable, true)
  assertions += 3
})

Object.keys(colors.open).forEach(function (name) {
  var openDescriptor = Object.getOwnPropertyDescriptor(colors.open, name)
  var closeDescriptor = Object.getOwnPropertyDescriptor(colors.close, name)
  assert.equal(openDescriptor.enumerable, true)
  assert.equal(openDescriptor.configurable, true)
  assert.equal(openDescriptor.writable, true)
  assert.equal(closeDescriptor.enumerable, true)
  assert.equal(closeDescriptor.configurable, true)
  assert.equal(closeDescriptor.writable, true)
  assertions += 6
})

assert.equal(colors.red.name, '')
assert.equal(colors.red.length, 1)
assert.equal(colors.red.call(null, 'x'), '\u001b[31mx\u001b[39m')
assert.equal((0, colors.red)('x'), '\u001b[31mx\u001b[39m')
assertions += 4

var originalOpenRed = colors.open.red
colors.open.red = 'changed'
assert.equal(colors.red('x'), '\u001b[31mx\u001b[39m')
assertions += 1
colors.open.red = originalOpenRed

var originalRed = colors.red
colors.red = function () { return 'replacement' }
assert.equal(colors.red('x'), 'replacement')
assertions += 1
colors.red = originalRed

console.log('Object compatibility passed ' + assertions + ' assertions.')
