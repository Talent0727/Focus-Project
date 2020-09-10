import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../../components/footer/Footer'

describe('<Footer/>', () => {
  const footer = shallow(<Footer/>)

  test('Render of the Footer Component', () => {
    expect(footer.length).toEqual(1)
  })
})

describe('<Footer/> Snapshot', () => {
  test('Footer Snapshot test', () => {
    const footer = create(<Footer/>)

    expect(footer.toJSON()).toMatchSnapshot()
  })
}) 