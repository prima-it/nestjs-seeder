import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  roots: ['.'],
  modulePaths: ['./'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/src/**/*.(t|j)s',
    '!**/tests/**',
    '!**/dist/**',
    '!**/node_modules/**',
  ],
  testEnvironment: 'node',
};

export default jestConfig;
