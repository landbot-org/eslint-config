module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  importOrder: ['^@(.*)$', '^[a-zA-Z]*/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
