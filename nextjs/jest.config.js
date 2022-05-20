module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/components/index.tsx',
    'src/hooks/index.ts',
    'src/templates/index.ts',
    'src/utils/index.tsx',
    'src/types',
    'src/libs',
    'src/services',
    'src/store',
    'src/theme',
    'src/mocks/index.tsx',
    'src/globalStyles',
    'stories.tsx',
    'types.ts'
  ],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/mocks/svg.ts'
  }
}

// Waiting for fixes from next.js to generate coverage correctly
// const nextJest = require('next/jest')
//
// const createJestConfig = nextJest()
//
// const customJestConfig = {
//  // coverageProvider: 'v8',
//  testEnvironment: 'jest-environment-jsdom',
//  collectCoverage: true,
//  moduleDirectories: ['node_modules', '<rootDir>/'],
//  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
//  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
//  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
//  coveragePathIgnorePatterns: [
// 'src/pages/_app.page.tsx',
//  'src/pages/index.page.tsx',
//  'src/pages/_document.page.tsx',
//  'src/components/index.tsx',
//  'src/hooks/index.ts',
//  'src/templates/index.ts',
//  'src/utils/index.ts',
//  'src/types',
//  'src/libs',
//  'src/services',
//  'src/store',
//  'src/theme',
//  'src/mocks/index.tsx',
//  'src/globalStyles',
//  'stories.tsx',
//  'types.ts'
//  ]
// }
//
// module.exports = createJestConfig(customJestConfig)
