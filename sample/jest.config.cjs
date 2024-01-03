module.exports = {
  testEnvironment: 'jsdom',
  unmockedModulePathPatterns: ['React'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.+(ts|tsx|js|jsx)'],
};
