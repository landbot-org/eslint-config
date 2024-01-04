const { join } = require('path');

module.exports = {
  root: true,
  extends: ['@landbot/typescript-react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json', 'tsconfig.node.json'],
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
