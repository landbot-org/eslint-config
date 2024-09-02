module.exports = {
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
};
