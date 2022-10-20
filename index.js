module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'check-file',],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    "check-file/folder-match-with-fex": [
      "error",
      {
        "*.test.{js,jsx,ts,tsx}":"!**/__tests__/",
        "*.test.{js,jsx,ts,tsx}":"!**/__test__/",
      },
    ]
  },
};
