import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ListContainer from '../../src/components/list-container'

describe('ListContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ListContainer />, div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<ListContainer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
