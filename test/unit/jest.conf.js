const _ = require('lodash')
const path = require('path')

// We need to turn aliases to something like this for Jest:
// moduleNameMapper: {
//   '^@/(.*)$': '<rootDir>/src/$1'
// },

const aliasConfig = require('../../src/config/config.aliases.js')

function escapeRegexp (str) {
  return str
}

function treatAliasKey (aliasValue, aliasKey) {
  return '^' + escapeRegexp(aliasKey) + '/(.*)$'
}

function treatAliasValue (aliasValue) {
  return '<rootDir>/' + escapeRegexp(aliasValue) + '/$1'
}

function treatAliasKeySingle (aliasValue, aliasKey) {
  return '^' + escapeRegexp(aliasKey)
}

function treatAliasValueSingle (aliasValue) {
  return '<rootDir>/' + escapeRegexp(aliasValue)
}

let jestAliases = _.mapKeys(_.mapValues(aliasConfig, treatAliasValue), treatAliasKey)
_.merge(jestAliases, _.mapKeys(_.mapValues(aliasConfig, treatAliasValueSingle), treatAliasKeySingle))

console.log('jestAliases', jestAliases)

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: jestAliases,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(scss)$': '<rootDir>/node_modules/jest-css-modules',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/svg/index.js',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
