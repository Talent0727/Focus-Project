import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Header from '../../../components/header/Header'

describe('<Header/>', () => {
  const header = mount(<Header/>)

  test('Render of the Header Component', () => {
    expect(header.length).toEqual(1)
  })
})