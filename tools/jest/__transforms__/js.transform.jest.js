/* @flow */

const { createTransformer } = require('babel-jest')

const babelConfig = {
  plugins: [
    'react-loadable/babel',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
  presets: [['env', { modules: 'commonjs' }], 'flow', 'react', 'stage-0'],
}

const jsTransform = createTransformer(babelConfig)

module.exports = jsTransform
