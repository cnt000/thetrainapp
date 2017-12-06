import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'short-id';
import format from 'date-fns/format';

const Stop = ({ stop }) => (
  <li key={`stops_${shortid.generate()}`} className="calling-point">
    <div className="calling-point-time">
      {stop.departure.scheduled &&
        format(stop.departure.scheduled.scheduledTime, 'HH:mm')}
    </div>
    <div className="calling-point-station-container">
      <div className="calling-point-station">Stoke-on-Trent</div>
      <div className="calling-point-due">?On time</div>
    </div>
  </li>
);

Stop.propTypes = {
  stop: PropTypes.objectOf(PropTypes.string)
};

Stop.defaultProps = {
  stop: {}
};

export default Stop;
