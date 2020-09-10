import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { shallow } from 'enzyme'
import Header from '../../../components/header/Header'

const BrowserRouterMock = () => {
  return (
    <BrowserRouter>
      <Route exact path='fake-path' component={Header} />
    </BrowserRouter>
  )
}

describe('<Header/>', () => {
  const app = shallow(<BrowserRouterMock />)
  const header = app.shallow(<Header />)

  test('Render of the Header Component', () => {
    expect(header.length).toEqual(1)
  })
})
