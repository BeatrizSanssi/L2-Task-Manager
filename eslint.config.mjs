import eslintPluginPrettier from 'eslint-plugin-prettier'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts'],
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    linterOptions: {
      noInlineConfig: false,
    },
  },
]
