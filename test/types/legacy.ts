import colors = require('../../index')

const foreground: string = colors.red('error')
const background: string = colors.bgBrightBlue('info')
const opening: string = colors.open.red
const closing: string = colors.close.bgBrightBlue
const colorFunction: (value: string) => string = colors.green

colors.open.red = '\u001b[31m'
colors.red = colorFunction

// @ts-expect-error Escape map values are strings, not functions.
colors.open.red('invalid')

// @ts-expect-error Color functions do not expose nested color methods.
colors.red.blue('invalid')

void [foreground, background, opening, closing]
