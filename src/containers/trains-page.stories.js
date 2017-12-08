import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TrainsPage from './trains-page'
import store from '../store'

storiesOf('TrainsPage Container', module).add('TrainsPage', () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={TrainsPage} />
      </div>
    </Router>
  </Provider>
))
