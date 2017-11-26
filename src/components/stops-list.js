import React from 'react';
import PropTypes from 'prop-types';
import Stop from './stop';

const StopsList = ({ stops }) => (
  <ul>
    {stops ? stops.map(stop => <Stop data={stop} />) : <li> Station.... </li>}
  </ul>
);

StopsList.PropType = {
  stops: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StopsList;
