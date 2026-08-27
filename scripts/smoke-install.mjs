import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const temporary = await mkdtemp(path.join(os.tmpdir(), 'stackline-ansicolors-'))
let tarball

try {
  const packed = spawnSync('npm', ['pack', '--json', '--ignore-scripts'], {
    cwd: root,
    encoding: 'utf8'
  })
  assert.equal(packed.status, 0, packed.stderr)
  const packResult = JSON.parse(packed.stdout)[0]
  tarball = path.join(root, packResult.filename)

  const paths = packResult.files.map(file => file.path)
  assert.equal(paths.some(file => file.startsWith('test/')), false)
  assert.equal(paths.some(file => file.startsWith('scripts/')), false)
  assert.equal(paths.includes('LICENSE'), true)
  assert.equal(paths.includes('NOTICE'), true)
  assert.equal(paths.includes('index.d.ts'), true)

  await writeFile(path.join(temporary, 'package.json'), JSON.stringify({
    private: true,
    dependencies: {
      '@stackline/ansicolors': 'file:' + tarball
    }
  }))

  const installed = spawnSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'], {
    cwd: temporary,
    encoding: 'utf8'
  })
  assert.equal(installed.status, 0, installed.stderr)

  const commonjs = spawnSync(process.execPath, ['-e', [
    "const colors = require('@stackline/ansicolors');",
    "const deep = require('@stackline/ansicolors/ansicolors');",
    "if (colors !== deep) process.exit(1);",
    "if (colors.red('x') !== '\\u001b[31mx\\u001b[39m') process.exit(1);"
  ].join('')], { cwd: temporary, encoding: 'utf8' })
  assert.equal(commonjs.status, 0, commonjs.stderr)

  const esm = spawnSync(process.execPath, ['--input-type=module', '-e', [
    "import colors, { bgBlue, brightWhite } from '@stackline/ansicolors';",
    "if (bgBlue !== colors.bgBlue) process.exit(1);",
    "if (bgBlue(brightWhite('x')) !== colors.bgBlue(colors.brightWhite('x'))) process.exit(1);"
  ].join('')], { cwd: temporary, encoding: 'utf8' })
  assert.equal(esm.status, 0, esm.stderr)

  await writeFile(path.join(temporary, 'consumer.ts'), [
    "import colors = require('@stackline/ansicolors')",
    "const output: string = colors.red('x')",
    "const opening: string = colors.open.red",
    '// @ts-expect-error Escape codes are not callable.',
    "colors.open.red('x')",
    'void [output, opening]'
  ].join('\n'))
  await writeFile(path.join(temporary, 'consumer.mts'), [
    "import colors, { type Color, bgBlue } from '@stackline/ansicolors'",
    'const color: Color = bgBlue',
    "const output: string = color('x')",
    'if (colors.bgBlue !== bgBlue) throw new Error()',
    'void output'
  ].join('\n'))
  await writeFile(path.join(temporary, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      module: 'nodenext',
      moduleResolution: 'nodenext',
      noEmit: true,
      strict: true,
      target: 'es2018'
    },
    files: ['consumer.ts', 'consumer.mts']
  }))

  const typeChecked = spawnSync(process.execPath, [
    path.join(root, 'node_modules', 'typescript', 'bin', 'tsc'),
    '-p',
    path.join(temporary, 'tsconfig.json')
  ], { cwd: temporary, encoding: 'utf8' })
  assert.equal(typeChecked.status, 0, typeChecked.stdout + typeChecked.stderr)

  const manifest = JSON.parse(await readFile(path.join(
    temporary,
    'node_modules',
    '@stackline',
    'ansicolors',
    'package.json'
  ), 'utf8'))
  assert.equal(manifest.name, '@stackline/ansicolors')
  assert.deepEqual(manifest.dependencies, undefined)
} finally {
  if (tarball) await rm(tarball, { force: true })
  await rm(temporary, { force: true, recursive: true })
}

console.log('Packed scoped-install smoke test passed.')
