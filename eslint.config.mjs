import js from '@eslint/js'

export default [
  {
    ignores: ['coverage/**', 'dist/**', 'node_modules/**', 'site-dist/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        Buffer: 'readonly',
        URL: 'readonly',
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['docs-site/**/*.js'],
    languageOptions: {
      globals: {
        document: 'readonly',
        globalThis: 'readonly',
        navigator: 'readonly'
      }
    }
  },
  {
    files: ['ansicolors.js', 'test/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  }
]
