import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TrainStops from '../../src/containers/train-stops'
import store from '../../src/store'

describe('Train Stops', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={TrainStops} />
          </div>
        </Router>
      </Provider>,
      div
    )
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={TrainStops} />
          </div>
        </Router>
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
