import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrainsPage from '../containers/trains-page';
import TrainPage from '../containers/train-page';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={TrainsPage} />
      <Route exact path="/train/:id/:date" component={TrainPage} />
    </div>
  </Router>
);

export default connect(state => state)(App);
