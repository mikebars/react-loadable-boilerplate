/* @flow */

import React from 'react'
import { Router } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { LoadingPage } from 'universal/pages/LoadingPage/LoadingPage'

test('LoadingPage - snapshot test', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <LoadingPage {...props} />
    </Router>
  )

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('LoadingPage - enzyme shallow render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <LoadingPage {...props} />
    </Router>
  )

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('LoadingPage - enzyme full render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <LoadingPage {...props} />
    </Router>
  )

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('LoadingPage - enzyme static render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <LoadingPage {...props} />
    </Router>
  )

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
