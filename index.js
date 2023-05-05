module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'prettier',
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'jest',
    'react',
    'prettier',
    'react-app',
    'check-file',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['cypress/**/*','webpack*', '*.config.js'],
  rules: {
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '!**/__tests__/',
        '*.test.{js,jsx,ts,tsx}': '!**/__test__/',
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{jsx,tsx}': 'PASCAL_CASE',
        '**/*.{js,ts}': 'CAMEL_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    'react/jsx-sort-props': [1],
  },
};
