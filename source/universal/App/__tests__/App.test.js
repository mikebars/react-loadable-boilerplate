/* @flow */

import React from 'react'
import { Router } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { App } from 'universal/App/App'

/* Require raw component */
jest.mock(
  'universal/pages/IndexPage',
  () => require('universal/pages/IndexPage/IndexPage').IndexPage,
)

/* Require raw component */
jest.mock(
  'universal/pages/LoadingPage',
  () => require('universal/pages/LoadingPage/LoadingPage').LoadingPage,
)

/* Require raw component */
jest.mock(
  'universal/pages/NotFoundPage',
  () => require('universal/pages/NotFoundPage/NotFoundPage').NotFoundPage,
)

test('App - snapshot test', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <App {...props} />
    </Router>
  )

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('App - enzyme shallow render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <App {...props} />
    </Router>
  )

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('App - enzyme full render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <App {...props} />
    </Router>
  )

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('App - enzyme static render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <App {...props} />
    </Router>
  )

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
