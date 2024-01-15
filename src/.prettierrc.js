module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react|react-dom(.*))$',
    '<THIRD_PARTY_MODULES>',
    '@/(.*)',
    '^[./].*(?<!(\\.(c|le|sc)ss|styles))$',
    '\\.((c|le|sc)ss|styles)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
