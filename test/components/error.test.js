import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Error from '../../src/components/error'

describe('Error', () => {
  const props = {
    error: 'This is and error'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Error error={null} />, div)
  })

  it('renders without crashing with error', () => {
    const div = document.createElement('div')
    div.innerHTML = 'This is and error'
    ReactDOM.render(<Error {...props} />, div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<Error {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
