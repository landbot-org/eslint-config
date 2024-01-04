module.exports = {
  testEnvironment: 'jsdom',
  unmockedModulePathPatterns: ['React'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.+(ts|tsx|js|jsx)'],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.{js,jsx,ts,tsx}',
    '!**/*.types.{js,jsx,ts,tsx}',
    '!**/*.styles.{js,jsx,ts,tsx}',
    '!**/node_modules*/**',
  ],
};
