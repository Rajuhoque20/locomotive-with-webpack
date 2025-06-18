module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
     '^#framework(.*)$': '<rootDir>/src/framework/utilities$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: ["<rootDir>/jest.require-context.mock.js"]
};
