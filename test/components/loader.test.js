import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Loader from '../../src/components/loader'

describe('Loader', () => {
  it('renders without crashing isLoading', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Loader isLoading />, div)
  })

  it('renders without crashing isLoading False', () => {
    const div = document.createElement('div')
    div.innerHTML = 'This is and error'
    ReactDOM.render(<Loader isLoading={false} />, div)
  })
})
