import React from 'react';
import { connect } from 'react-redux';
import StopsList from './stops-list';

const App = () => <StopsList />;

export default connect(state => state)(App);
