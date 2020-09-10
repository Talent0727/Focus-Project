import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../../components/Home/Home'

describe('<Home/>', () => {
  const home = shallow(<Home/>)
  test('Render of the Home Component', () => {
    expect(home.length).toEqual(1)
  })
})