/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { Html } from 'server/components/Html/Html'

test('Html - snapshot test', () => {
  const props = {}

  const element = <Html {...props} />

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Html - enzyme shallow render', () => {
  const props = {}

  const element = <Html {...props} />

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Html - enzyme full render', () => {
  const props = {}

  const element = <Html {...props} />

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Html - enzyme static render', () => {
  const props = {}

  const element = <Html {...props} />

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
