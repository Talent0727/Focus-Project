import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { shallow } from 'enzyme'
import JobPage from '../../../components/jobPage/JobPage'

const BrowserRouterMock = () => {
  return (
    <BrowserRouter>
      <Route exact path='fake-path' component={JobPage} />
    </BrowserRouter>
  )
}

describe('<JobPage/>', () => {
  const app = shallow(<BrowserRouterMock />)
  const jobPage = app.shallow(<JobPage />)

  test('Render of the JobPage Component', () => {
    expect(jobPage.length).toEqual(1)
  })
})