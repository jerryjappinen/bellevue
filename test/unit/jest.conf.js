const _ = require('lodash')
const path = require('path')

// We need to turn aliases to something like this for Jest:
// moduleNameMapper: {
//   '^@/(.*)$': '<rootDir>/src/$1'
// },

const aliasConfig = require('../../src/config/tooling/aliases.js')

function escapeJestRegexp (str) {
  return str
}

function treatAliasKey (aliasValue, aliasKey) {
  return '^' + escapeJestRegexp(aliasKey) + '/(.*)$'
}

function treatAliasValue (aliasValue) {
  return '<rootDir>/' + escapeJestRegexp(aliasValue) + '/$1'
}

function treatAliasKeySingle (aliasValue, aliasKey) {
  return '^' + escapeJestRegexp(aliasKey)
}

function treatAliasValueSingle (aliasValue) {
  return '<rootDir>/' + escapeJestRegexp(aliasValue)
}

let jestAliases = _.mapKeys(_.mapValues(aliasConfig, treatAliasValue), treatAliasKey)
_.merge(jestAliases, _.mapKeys(_.mapValues(aliasConfig, treatAliasValueSingle), treatAliasKeySingle))

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: _.merge({}, jestAliases, {

    // NOTE: Jest can't handle static assets
    '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$': 'jest-static-stubs/$1',

    // NOTE: Jest can't handle this SCSS variables loader
    '!!sass-to-js!@styles-variables': '<rootDir>/test/unit/stubs/scssShared.stub.js',

    // NOTE: Jest can't handle this SVG loader
    '^.+\\.(svg)$': '<rootDir>/test/unit/stubs/svg.stub.js'

  }),
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
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/svg/index.js',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
