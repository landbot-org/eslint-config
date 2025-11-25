# ESLint and Prettier Configuration

Shareable ESLint and Prettier configuration for TypeScript React projects.

## Features

- ✅ TypeScript support with type-aware linting
- ⚛️ React and React Hooks rules
- 🧪 Jest testing configuration
- 📦 Import sorting and organization
- 🎨 Prettier integration
- 🔧 Flexible and extensible

## Installation

```shell
npm i -D @landbot/eslint-config-typescript-react
```

### Peer Dependencies

This package requires the following peer dependencies:

```shell
npm install --save-dev eslint prettier typescript react react-dom
```

## Usage

### ESLint Configuration

#### For ESLint 9+ (Flat Config)

Create an `eslint.config.js` file in the root of your project:

```js
const landbotConfig = require("@landbot/eslint-config-typescript-react");

module.exports = [
  ...landbotConfig,
  // Add your custom rules here
  {
    rules: {
      // Override or add rules
      "no-console": "off",
    },
  },
];
```

### Prettier Configuration

Create a `.prettierrc.js` file in the root of your project:

```js
module.exports = require("@landbot/eslint-config-typescript-react/prettier-config");
```

Or extend it with your own settings:

```js
const prettierConfig = require("@landbot/eslint-config-typescript-react/prettier-config");

module.exports = {
  ...prettierConfig,
  // Add your custom settings
  semi: false,
};
```

## TypeScript Project Configuration

This configuration works out of the box for most TypeScript projects. However, some advanced TypeScript ESLint rules
require type information from your `tsconfig.json`. These rules can catch issues like unhandled promises or incorrect
async/await usage.

**Important:** If you already run `tsc --noEmit` for type checking (recommended), enabling type-aware linting provides
minimal additional value and significantly slows down ESLint. Most teams don't need this.

If you still want to enable these type-aware rules, configure the TypeScript parser in your `eslint.config.js`:

```js
const landbotConfig = require("@landbot/eslint-config-typescript-react");

module.exports = [
  ...landbotConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
```

**Note:** Enabling `project` makes linting significantly slower. Only enable if you have specific type-aware rules you
need and aren't already using TypeScript's compiler for type checking.

## What's Included

### Plugins

- `@typescript-eslint/eslint-plugin` - TypeScript-specific linting rules
- `eslint-plugin-react` - React-specific linting rules
- `eslint-plugin-react-hooks` - Rules for React Hooks
- `eslint-plugin-import` - Import/export syntax validation
- `eslint-plugin-jest` - Jest testing rules
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier

### Key Rules

- Unused variables with `_` prefix are allowed (args, caught errors, vars, destructured arrays)
- Console statements are **errors** (not allowed by default)
- Import statements are automatically organized by `@trivago/prettier-plugin-sort-imports`
- **ESLint and Prettier work together seamlessly** - formatting rules are handled by Prettier, linting rules by ESLint
- TypeScript `any`, non-null assertions, and `@ts-` comments are allowed (rules disabled)
- Empty interfaces are errors unless they extend a single interface
- Modern ES6+ syntax is encouraged (`prefer-const`, `no-var`, `prefer-template`)
- Import restrictions: `@faker-js/faker` must use locale-specific imports

## Customization

You can override any rule by adding it to your configuration:

```js
const landbotConfig = require("@landbot/eslint-config-typescript-react");

module.exports = [
  ...landbotConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // Make it stricter
      "no-console": "off", // Allow console statements
    },
  },
];
```

## Project-Specific Patterns

### Extending Restricted Imports

This config includes a pre-configured list of restricted imports that you can extend. To add your own restrictions
while preserving the base ones:

```js
const landbotConfig = require("@landbot/eslint-config-typescript-react/eslint-config");

module.exports = [
  ...landbotConfig,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            ...landbotConfig.restrictedImportsPaths, // Keep base restrictions
            {
              name: "lodash",
              message: "Please use lodash-es instead for better tree-shaking",
            },
            {
              name: "moment",
              message: "Please use date-fns or dayjs instead",
            },
          ],
        },
      ],
    },
  },
];
```

### Custom Globals

If you need to add project-specific globals:

```js
const landbotConfig = require("@landbot/eslint-config-typescript-react");

module.exports = [
  ...landbotConfig,
  {
    languageOptions: {
      globals: {
        MyCustomGlobal: "readonly",
      },
    },
  },
];
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettier:check": "prettier . --check",
    "prettier:write": "prettier . --write"
  }
}
```

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details.
