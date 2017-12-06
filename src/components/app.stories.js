import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import App from './app'
import store from '../store'

storiesOf('App Main Story', module).add('App', () => (
  <Provider store={store}>
    <App />
  </Provider>
))
