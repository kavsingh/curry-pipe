module.exports = {
  verbose: true,
  testRegex: '^.+\\.test\\.[jt]s?$',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};
