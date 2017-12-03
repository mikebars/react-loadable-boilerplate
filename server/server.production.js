/* globals */
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production'
if (!process.env.SERVER_HOST) process.env.SERVER_HOST = 'localhost'
if (!process.env.SERVER_PORT) process.env.SERVER_PORT = 9999

const express = require('express')

const compression = require('compression')

const { preloadAll } = require('react-loadable')

const reactLoadableStats = require('../client/production/react.loadable.production.stats.webpack.json')

const server = express()

const webpackClientConfig = require('../tools/webpack/client.production.config.webpack')
const webpackServerConfig = require('../tools/webpack/server.production.config.webpack')

const clientOutputPath = webpackClientConfig.output.path
const serverOutputPath = webpackServerConfig.output.path

const clientStats = require(clientOutputPath +
  '/client.production.stats.webpack.json')
const serverStats = require(serverOutputPath +
  '/server.production.stats.webpack.json')

const serverSideRender = require(serverOutputPath + '/serverSideRender').default

server.disable('x-powered-by')

server.use(compression())

server.use(express.static(clientOutputPath))

server.use(serverSideRender({ clientStats, serverStats, reactLoadableStats }))

server.listen(process.env.SERVER_PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.log(
      `Server listening at http://${process.env.SERVER_HOST}:${
        process.env.SERVER_PORT
      }`,
    )
  }
})
