import React from 'react';
import Stop from './stop'

const StopsList = ({ stops }) => (
  <ul>
    {(stops) ? stops.map((stop) => <Stop data={stop} />) : <li> Station.... </li>}
  </ul>
);

export default StopsList;
