import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NoResults from '../../src/components/no-results'

describe('NoResults', () => {
  it('renders without crashing isLoading', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NoResults isLoading={false} len={0} error="" />, div)
  })

  it('renders without crashing isLoading False', () => {
    const div = document.createElement('div')
    div.innerHTML = 'This is and error'
    ReactDOM.render(
      <NoResults isLoading={false} len={1} error="Error occurred" />,
      div
    )
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <NoResults len={1} error="Error occurred" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('has a valid snapshot isLoading', () => {
    const component = renderer.create(<NoResults isLoading len={1} error="" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
