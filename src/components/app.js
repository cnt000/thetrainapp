import React from 'react';
import { connect } from 'react-redux';
import TrainsPage from '../containers/trains-page';

const App = () => <TrainsPage />;

export default connect(state => state)(App);
