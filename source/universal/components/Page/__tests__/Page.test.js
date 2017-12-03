/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { Page } from 'universal/components/Page/Page'

test('Page - snapshot test', () => {
  const props = {}

  const element = <Page {...props} />

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Page - enzyme shallow render', () => {
  const props = {}

  const element = <Page {...props} />

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Page - enzyme full render', () => {
  const props = {}

  const element = <Page {...props} />

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Page - enzyme static render', () => {
  const props = {}

  const element = <Page {...props} />

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
