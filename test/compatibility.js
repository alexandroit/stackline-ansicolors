'use strict'

var assert = require('assert').strict
var baseline = require('ansicolors-baseline')
var current = require('..')

var methodNames = Object.keys(baseline).filter(function (name) {
  return name !== 'open' && name !== 'close'
})
var values = [
  '',
  'plain',
  'line one\nline two',
  '\u0000',
  '\u001b[39m',
  0,
  -1,
  42,
  1n,
  true,
  false,
  null,
  undefined,
  ['a', 'b'],
  { toString: function () { return '[custom]' } },
  Object.create(null),
  Symbol('value')
]
var comparisons = 0

assert.deepEqual(Object.keys(current), Object.keys(baseline))
assert.deepEqual(current.open, baseline.open)
assert.deepEqual(current.close, baseline.close)
comparisons += 3

methodNames.forEach(function (name) {
  assert.equal(current[name].name, baseline[name].name)
  assert.equal(current[name].length, baseline[name].length)
  comparisons += 2

  values.forEach(function (value) {
    assert.deepEqual(capture(current[name], value), capture(baseline[name], value))
    comparisons += 1
  })

  methodNames.forEach(function (innerName) {
    var baselineNested = baseline[name]('before' + baseline[innerName]('inside') + 'after')
    var currentNested = current[name]('before' + current[innerName]('inside') + 'after')
    assert.equal(currentNested, baselineNested)
    comparisons += 1
  })
})

assert.deepEqual(describeObject(current), describeObject(baseline))
comparisons += 1

assert.equal(closureAfterMapMutation(current), closureAfterMapMutation(baseline))
comparisons += 1

console.log('Differential compatibility passed ' + comparisons + ' comparisons.')

function capture(fn, value) {
  try {
    return { ok: true, value: fn(value) }
  } catch (error) {
    return { ok: false, name: error.name, message: error.message }
  }
}

function describeObject(colors) {
  return {
    keys: Object.keys(colors),
    openKeys: Object.keys(colors.open),
    closeKeys: Object.keys(colors.close),
    objectPrototype: Object.getPrototypeOf(colors) === Object.prototype,
    openPrototype: Object.getPrototypeOf(colors.open) === Object.prototype,
    closePrototype: Object.getPrototypeOf(colors.close) === Object.prototype,
    redDescriptor: descriptor(colors, 'red'),
    openDescriptor: descriptor(colors, 'open')
  }
}

function descriptor(object, key) {
  var value = Object.getOwnPropertyDescriptor(object, key)
  return {
    enumerable: value.enumerable,
    configurable: value.configurable,
    writable: value.writable
  }
}

function closureAfterMapMutation(colors) {
  var previous = colors.open.red
  colors.open.red = 'changed'
  var result = colors.red('x')
  colors.open.red = previous
  return result
}
