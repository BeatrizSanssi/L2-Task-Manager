/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts'],
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './docs/Report/test-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
      sort: 'status'
    }]
  ]
}
