import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import App from '../../src/components/app'
import store from '../../src/store'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
