/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Routes from 'universal/Routes'

import Page from 'universal/components/Page'

export const App = () => (
  <Page>
    <Routes />
  </Page>
)

export default App
