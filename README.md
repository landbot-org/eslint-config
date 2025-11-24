# ESLint and Prettier configuration

## Installation

```shell
npm i -D @landbot/eslint-config-typescript-react
```

## Usage

Create a `.eslintrc.js` file in the root of your project with the following:

```js
module.exports = {
  extends: ["@landbot/typescript-react"],
};
```

_(Optional)_ For the prettier configuration, create a `.prettierrc.js` file in
the root of your project:

```js
module.exports = require("@landbot/eslint-config-typescript-react/prettier-config");
```
