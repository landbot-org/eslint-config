# ESLint and Prettier configuration

## Installation

```shell
npm install --save-dev @landbot/eslint-config-typescript-react
```

## Usage

Create a `.eslintrc.js` file in the root of your project:

```js
module.exports = {
  extends: ['@landbot/typescript-react'],
};
```

*(Optional)* For the prettier configuration, create a `.prettierrc.js` file in
the root of your project:

```js
module.exports = require('@landbot/eslint-config-typescript-react/prettier-config');
```
