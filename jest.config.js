module.exports = {
    transform: {
      '^.+\\.(t|j)sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
  