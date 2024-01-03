module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react|react-dom(.*))$',
    '<THIRD_PARTY_MODULES>',
    '@/(.*)',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '\\.(c|le|sc)ss$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
