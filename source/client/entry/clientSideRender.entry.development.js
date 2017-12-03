/* @flow */

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { preloadReady } from 'react-loadable'
import AppContainer from 'react-hot-loader/lib/AppContainer'

import ClientApp from 'client/App'

const containerId: string =
  process.env.REACT_CONTAINER_ID != undefined
    ? process.env.REACT_CONTAINER_ID
    : 'react-container'

export const clientSideRender = (
  Component: React$ComponentType<any> = ClientApp,
  container: HTMLElement | null = document.getElementById(containerId),
  callback?: Function = () => console.log('clientSideRender'),
) =>
  preloadReady().then(
    () =>
      container !== null &&
      hydrate(
        <AppContainer>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </AppContainer>,
        container,
        callback,
      ),
  )

if ('hot' in module && 'accept' in module.hot) {
  module.hot.accept('client/App/index.js', () => {
    const ClientApp = require('client/App').default
    console.log('hmr clientSideRender')
    clientSideRender(ClientApp)
  })
}

clientSideRender()
