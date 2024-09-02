module.exports = {
  singleQuote: true,
  printWidth: 120,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@(.*)$', '^[a-zA-Z]*/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
