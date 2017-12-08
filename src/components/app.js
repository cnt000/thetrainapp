import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import 'normalize-css'
import TrainsPage from '../containers/trains-page'
import TrainStops from '../containers/train-stops'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={TrainsPage} />
      <Route exact path="/train/:id/:date" component={TrainStops} />
    </div>
  </Router>
)
// eslint-disable-next-line
injectGlobal`
  body {
    background-color: #d4d4d4; 
  }

  a {
    display: block;
  }

  a, a:link, a:visited {
    color: #000;
    text-decoration: none;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
export default connect(state => state)(App)
