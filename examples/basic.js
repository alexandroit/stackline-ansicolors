'use strict'

const colors = require('@stackline/ansicolors')

console.log(colors.green('ready'))
console.log(colors.bgBlue(colors.brightWhite('connected')))
