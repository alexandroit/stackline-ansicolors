import assert from 'node:assert/strict'
import colors, {
  bgBlue,
  brightWhite,
  close,
  open,
  red
} from '../index.mjs'

assert.equal(red, colors.red)
assert.equal(bgBlue, colors.bgBlue)
assert.equal(brightWhite, colors.brightWhite)
assert.equal(open, colors.open)
assert.equal(close, colors.close)
assert.equal(red('error'), '\u001b[31merror\u001b[39m')
assert.equal(bgBlue(brightWhite('info')), colors.bgBlue(colors.brightWhite('info')))

const self = await import('@stackline/ansicolors')
assert.equal(self.default.red('self'), colors.red('self'))
assert.equal(self.red, self.default.red)

console.log('ESM checks passed.')
