module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'plugin:react-hooks/recommended'],
  globals: {
    Landbot: false,
    LandbotFrameWidget: false,
    LandbotFullpage: false,
    __dirname: false,
    process: false,
  },
  ignorePatterns: [
    'src/plugin/*',
    'babel.config.js',
    'prettier.config.js',
    'commitlint.config.js',
    '.eslintrc.js',
    'LOCAL_SETTINGS.js',
  ],
  overrides: [
    {
      files: ['./src/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'no-unused-vars': 'off',
        'no-undef-init': 'warn',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './services/*/tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jest'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'no-console': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            importNames: ['default', 'pricing'],
            message:
              "Please use the context 'usePricingContext' from 'src/context' instead of the instance from 'core/pricing'.",
            name: 'core/pricing',
          },
          {
            importNames: ['default'],
            message:
              "Please use the context 'useSettingsContext' from 'src/context' instead of the instance from 'core/SETTINGS'.",
            name: 'core/SETTINGS',
          },
          {
            importNames: ['faker'],
            message: "Please import { faker } from '@faker-js/faker/locale/en' instead due to performance issues",
            name: '@faker-js/faker',
          },
        ],
        patterns: [
          {
            group: ['analytics.legacy', './analytics.legacy'],
            message: "Please import analytics from 'core/analytics' instead",
          },
        ],
      },
    ],
  },
};
