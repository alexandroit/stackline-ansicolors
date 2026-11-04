import assert from 'node:assert/strict'
import { readFile, mkdtemp, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const version = process.env.STACKLINE_VERSION || JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version
const registry = process.env.STACKLINE_REGISTRY || 'http://127.0.0.1:4873'
const temporary = await mkdtemp(path.join(os.tmpdir(), 'stackline-ansicolors-registry-'))

try {
  await writeFile(path.join(temporary, 'package.json'), JSON.stringify({
    private: true,
    dependencies: {
      '@stackline/ansicolors': version,
      ansicolors: `npm:@stackline/ansicolors@${version}`
    }
  }))

  const installed = spawnSync('npm', [
    'install',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--registry',
    registry
  ], { cwd: temporary, encoding: 'utf8' })
  assert.equal(installed.status, 0, installed.stderr)

  const checked = spawnSync(process.execPath, ['-e', [
    "const direct = require('@stackline/ansicolors');",
    "const alias = require('ansicolors');",
    "if (direct.red('x') !== alias.red('x')) process.exit(1);",
    "if (direct.open.bgBrightCyan !== '\\u001b[106m') process.exit(1);"
  ].join('')], { cwd: temporary, encoding: 'utf8' })
  assert.equal(checked.status, 0, checked.stderr)
} finally {
  await rm(temporary, { force: true, recursive: true })
}

console.log('Verdaccio direct and legacy-alias install checks passed.')
