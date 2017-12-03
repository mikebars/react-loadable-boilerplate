/* @flow */

const regex = {
  file: '^.+\\.(gif|ico|jpg|png|svg)$',

  js: '^.+\\.js$',
}

const jestConfig = {
  moduleDirectories: ['node_modules', 'source'],

  moduleNameMapper: {
    [regex.file]: '<rootDir>/tools/jest/__mocks__/file.mock.jest.js',
  },

  rootDir: '../../',

  setupFiles: [
    'babel-polyfill',
    'raf/polyfill',
    './tools/jest/__setup__/setup.jest.js',
  ],

  transform: {
    [regex.js]: './tools/jest/__transforms__/js.transform.jest.js',
  },
}

module.exports = jestConfig
