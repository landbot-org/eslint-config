
const baseConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  importOrder: ['^@(.*)$', '^[a-zA-Z]*/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}

module.exports = {
  ...baseConfig,
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      options: {
        ...baseConfig,
        plugins: [require.resolve('@prettier/plugin-oxc'), ...baseConfig.plugins],
        parser: 'oxc'
      }
    },
    {
      files: ['**/*.{ts,mts,cts,tsx}'],
      options: {
        ...baseConfig,
        plugins: [require.resolve('@prettier/plugin-oxc'), ...baseConfig.plugins],
        parser: 'oxc-ts'
      }
    }
  ],
};
