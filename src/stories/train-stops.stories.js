import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TrainStops from './trains-page'
import store from '../store'

storiesOf('TrainStops Container', module).add('TrainStops', () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={TrainStops} />
      </div>
    </Router>
  </Provider>
))
