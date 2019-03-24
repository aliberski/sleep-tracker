module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testMatch: ['**/__tests__/**/*.(js|ts|tsx)'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  coverageDirectory: '.jest/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    '!src/**/style.ts',
    '!src/**/types.ts',
    '!src/**/__Component/**/*',
    '!e2e/**/*',
  ],
};
