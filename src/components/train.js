import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Train = ({ data, onClick }) => (
  <li>
    <button onClick={() => onClick(data.callingPatternUrl)}>
      ID: {data.serviceIdentifier} - Operator: {data.serviceOperator} mode:{' '}
      {data.transportMode} - Calling Type: {data.callingType}
    </button>
  </li>
);

Train.propTypes = {
  data: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired
};

export default connect(state => state)(Train);
