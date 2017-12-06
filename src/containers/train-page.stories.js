import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import { Router, Route, Link } from 'react-router-dom'
import TrainStops from './trains-page'
import store from '../store'

storiesOf('TrainStops Container', module).add('TrainStops', () => (
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/" href="/">
          Back
        </Link>
        <Route exact path="/train/:id/:date" component={TrainStops} />
      </div>
    </Router>
  </Provider>
))
