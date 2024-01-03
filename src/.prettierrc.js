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
    '^[./].*(?<!(\\.types|(c|le|sc)ss|styles))$',
    '\\.types$',
    '\\.((c|le|sc)ss|styles)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
