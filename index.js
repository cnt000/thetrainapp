import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'
import App from './src/components/app'
import store from './src/store'

WebFont.load({
  google: {
    families: ['Cabin:n4,n7']
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
