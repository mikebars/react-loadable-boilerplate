/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexPage from 'universal/pages/IndexPage'
import NotFoundPage from 'universal/pages/NotFoundPage'

export const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={IndexPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
