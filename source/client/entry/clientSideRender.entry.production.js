/* @flow */

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { preloadReady } from 'react-loadable'

import ClientApp from 'client/App'

const containerId: string =
  process.env.REACT_CONTAINER_ID != undefined
    ? process.env.REACT_CONTAINER_ID
    : 'react-container'

export const clientSideRender = (
  Component: React$ComponentType<any> = ClientApp,
  container: HTMLElement | null = document.getElementById(containerId),
  callback?: Function,
) =>
  preloadReady().then(
    () =>
      container !== null &&
      hydrate(
        <BrowserRouter>
          <Component />
        </BrowserRouter>,
        container,
        callback,
      ),
  )

clientSideRender()
