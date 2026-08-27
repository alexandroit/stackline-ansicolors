import { mkdir } from 'node:fs/promises'
import { build } from 'esbuild'

const outdir = new URL('../dist/', import.meta.url)
await mkdir(outdir, { recursive: true })

const shared = {
  banner: {
    js: '/*! @stackline/ansicolors | Based on ansicolors, copyright 2013 Thorsten Lorenz | MIT License */'
  },
  bundle: true,
  legalComments: 'external',
  minify: true,
  platform: 'browser',
  target: ['es2018']
}

await Promise.all([
  build({
    ...shared,
    entryPoints: [new URL('../index.mjs', import.meta.url).pathname],
    format: 'cjs',
    outfile: new URL('ansicolors.browser.cjs', outdir).pathname
  }),
  build({
    ...shared,
    entryPoints: [new URL('../index.mjs', import.meta.url).pathname],
    format: 'esm',
    outfile: new URL('ansicolors.browser.mjs', outdir).pathname
  }),
  build({
    ...shared,
    entryPoints: [new URL('../index.mjs', import.meta.url).pathname],
    format: 'iife',
    globalName: 'AnsiColors',
    outfile: new URL('ansicolors.global.js', outdir).pathname
  })
])

console.log('Built self-contained CommonJS, ESM, and global browser artifacts.')
