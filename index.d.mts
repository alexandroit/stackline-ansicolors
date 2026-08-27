export type Color = (value: string) => string

export interface EscapeCodes {
  white: string
  black: string
  blue: string
  cyan: string
  green: string
  magenta: string
  red: string
  yellow: string
  brightBlack: string
  brightRed: string
  brightGreen: string
  brightYellow: string
  brightBlue: string
  brightMagenta: string
  brightCyan: string
  brightWhite: string
  bgBlack: string
  bgRed: string
  bgGreen: string
  bgYellow: string
  bgBlue: string
  bgMagenta: string
  bgCyan: string
  bgWhite: string
  bgBrightBlack: string
  bgBrightRed: string
  bgBrightGreen: string
  bgBrightYellow: string
  bgBrightBlue: string
  bgBrightMagenta: string
  bgBrightCyan: string
  bgBrightWhite: string
}

export interface Colors {
  white: Color
  black: Color
  blue: Color
  cyan: Color
  green: Color
  magenta: Color
  red: Color
  yellow: Color
  brightBlack: Color
  brightRed: Color
  brightGreen: Color
  brightYellow: Color
  brightBlue: Color
  brightMagenta: Color
  brightCyan: Color
  brightWhite: Color
  bgBlack: Color
  bgRed: Color
  bgGreen: Color
  bgYellow: Color
  bgBlue: Color
  bgMagenta: Color
  bgCyan: Color
  bgWhite: Color
  bgBrightBlack: Color
  bgBrightRed: Color
  bgBrightGreen: Color
  bgBrightYellow: Color
  bgBrightBlue: Color
  bgBrightMagenta: Color
  bgBrightCyan: Color
  bgBrightWhite: Color
  open: EscapeCodes
  close: EscapeCodes
}

export const white: Color
export const black: Color
export const blue: Color
export const cyan: Color
export const green: Color
export const magenta: Color
export const red: Color
export const yellow: Color
export const brightBlack: Color
export const brightRed: Color
export const brightGreen: Color
export const brightYellow: Color
export const brightBlue: Color
export const brightMagenta: Color
export const brightCyan: Color
export const brightWhite: Color
export const bgBlack: Color
export const bgRed: Color
export const bgGreen: Color
export const bgYellow: Color
export const bgBlue: Color
export const bgMagenta: Color
export const bgCyan: Color
export const bgWhite: Color
export const bgBrightBlack: Color
export const bgBrightRed: Color
export const bgBrightGreen: Color
export const bgBrightYellow: Color
export const bgBrightBlue: Color
export const bgBrightMagenta: Color
export const bgBrightCyan: Color
export const bgBrightWhite: Color
export const open: EscapeCodes
export const close: EscapeCodes

declare const colors: Colors

export default colors
