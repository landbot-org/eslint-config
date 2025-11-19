const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const _import = require('eslint-plugin-import');
const jest = require('eslint-plugin-jest');
const reactHooks = require('eslint-plugin-react-hooks');
const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// Export restricted imports configuration for external use
const restrictedImportsPaths = [
  {
    importNames: ['faker'],
    message: "Please import { faker } from '@faker-js/faker/locale/en' instead due to performance issues",
    name: '@faker-js/faker',
  },
];

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/.git/**',
      '**/.github/**',
      '**/.vscode/**',
      '**/.cache/**',
      '**/*.d.ts',
      '**/babel.config.js',
      '**/prettier.config.js',
      '**/.prettierrc.js',
      '**/commitlint.config.js',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],

      // Import rules
      'import/no-extraneous-dependencies': 'off',
      'import/order': 'off', // Handled by @trivago/prettier-plugin-sort-imports
      'import/no-unresolved': 'off', // TypeScript ya valida esto
      'import/named': 'off', // TypeScript ya valida esto
      'import/namespace': 'off', // TypeScript ya valida esto
      'import/default': 'off', // TypeScript ya valida esto

      // General rules
      'no-console': 'error',
      'no-unused-vars': 'off', // Uses TypeScript version
      'no-undef-init': 'warn',
      'linebreak-style': 'off',
      'no-var': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: restrictedImportsPaths,
        },
      ],
    },
  },

  // TypeScript-specific configuration
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        // Users should configure this in their own project
        // project: './tsconfig.json',
      },
    },

    ...fixupConfigRules(compat.extends('plugin:@typescript-eslint/recommended'))[0],
  },

  // React-specific configuration
  {
    files: ['**/*.{js,jsx,tsx}'],

    ...fixupConfigRules(compat.extends('plugin:react/recommended'))[0],

    rules: {
      'react/prop-types': 'off', // Since we use TypeScript for type checking
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
  },

  // React Hooks configuration (applies to all JS/TS files, including custom hooks)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },

    ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended'))[0],

    rules: {
      'react-hooks/exhaustive-deps': 'error',
    },
  },

  // Jest/Testing configuration
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    plugins: {
      jest: fixupPluginRules(jest),
    },

    ...fixupConfigRules(compat.extends('plugin:jest/recommended'))[0],
  },

  // Prettier configuration - must be last to override conflicting rules
  eslintConfigPrettier,
];

// Also export the restricted imports list for external use
module.exports.restrictedImportsPaths = restrictedImportsPaths;
