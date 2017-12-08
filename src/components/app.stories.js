import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import WebFont from 'webfontloader'
import App from './app'
import store from '../store'

WebFont.load({
  google: {
    families: ['Cabin:n4,n7']
  }
})

storiesOf('App Main Story', module).add('App', () => (
  <Provider store={store}>
    <App />
  </Provider>
))
