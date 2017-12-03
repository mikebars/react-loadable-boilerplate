/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow, render } from 'enzyme'

import { Center } from 'universal/components/Center/Center'

test('Center - snapshot test', () => {
  const props = {}

  const element = <Center {...props} />

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Center - enzyme shallow render', () => {
  const props = {}

  const element = <Center {...props} />

  const wrapper = shallow(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Center - enzyme full render', () => {
  const props = {}

  const element = <Center {...props} />

  const wrapper = mount(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})

test('Center - enzyme static render', () => {
  const props = {}

  const element = <Center {...props} />

  const wrapper = render(element)

  expect(wrapper).toBeDefined()
  expect(wrapper).toEqual(expect.anything())
})
