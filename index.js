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
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    indent: ['error', 2, {'SwitchCase': 1}],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    semi: ['error', 'always'],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '!**/__tests__/',
        '*.test.{js,jsx,ts,tsx}': '!**/__test__/',
      },
    ]
  },
};
