import colors, {
  type Color,
  type Colors,
  type EscapeCodes,
  bgGreen,
  brightBlack,
  open,
  red
} from '../../index.mjs'

const color: Color = red
const palette: Colors = colors
const codes: EscapeCodes = open
const message: string = bgGreen(brightBlack(color('ready')))
const opening: string = codes.bgGreen

// @ts-expect-error Escape map values are strings, not functions.
open.red('invalid')

// @ts-expect-error Named color functions do not have nested methods.
red.blue('invalid')

void [palette, message, opening]
