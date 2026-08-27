export as namespace ansiColors

declare const colors: ansiColors.Colors

declare namespace ansiColors {
  type Color = (value: string) => string

  interface EscapeCodes {
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

  interface Colors {
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
}

export = colors
