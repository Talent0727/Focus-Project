import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { shallow } from 'enzyme'
import JobCard from '../../../components/jobCard/JobCard'

const BrowserRouterMock = () => {
  return (
    <BrowserRouter>
      <Route exact path='fake-path' component={JobCard} />
    </BrowserRouter>
  )
}

describe('<JobCard/>', () => {
  const app = shallow(<BrowserRouterMock />)
  const jobCard = app.shallow(<JobCard/>)

  test('Render of the JobCard Component', () => {
    expect(jobCard.length).toEqual(1)
  })

  /* test('JobCard title render', () => {
    const app2 = mount(<BrowserRouterMock />)
    const jobCard2 = app2.mount(<JobCard/>)

    expect(jobCard2.find('.update-Status').text()).toEqual('New')
  }) */

})
