/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { Text } from 'universal/components/Text/Text'

test('Text - snapshot test', () => {
  const props = {}

  const element = <Text {...props} />

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Text - enzyme shallow render', () => {
  const props = {}

  const element = <Text {...props} />

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Text - enzyme full render', () => {
  const props = {}

  const element = <Text {...props} />

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Text - enzyme static render', () => {
  const props = {}

  const element = <Text {...props} />

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
