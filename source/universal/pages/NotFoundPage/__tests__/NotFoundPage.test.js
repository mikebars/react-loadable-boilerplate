/* @flow */

import React from 'react'
import { Router } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { NotFoundPage } from 'universal/pages/NotFoundPage/NotFoundPage'

test('NotFoundPage - snapshot test', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <NotFoundPage {...props} />
    </Router>
  )

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('NotFoundPage - enzyme shallow render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <NotFoundPage {...props} />
    </Router>
  )

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('NotFoundPage - enzyme full render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <NotFoundPage {...props} />
    </Router>
  )

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('NotFoundPage - enzyme static render', () => {
  const history = createMemoryHistory()

  const props = {}

  const element = (
    <Router history={history}>
      <NotFoundPage {...props} />
    </Router>
  )

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
