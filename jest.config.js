module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'svg'],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(svg)$':
      '<rootDir>/node_modules/jest-svg-transformer',
  },
  testMatch: ['**/__tests__/**/*.(js|ts|tsx)'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
  ],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation)/',
  ],
  coverageDirectory: '.jest/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    '!src/**/style.ts',
    '!src/**/types.ts',
    '!src/**/__Component/**/*',
    '!e2e/**/*',
    '!src/constants/**/*',
    '!src/assets/**/*',
    '!src/navigation/**/*',
    '!src/saga/**/*',
    '!src/store/**/*',
    '!src/components/Icons/*',
  ],
};
