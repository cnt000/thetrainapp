import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Train = ({ data }) => (
  <li key={data.serviceIdentifier}>
    ID: {data.serviceIdentifier} - Operator: {data.serviceOperator} mode:{' '}
    {data.transportMode} - Calling Type: {data.callingType}
  </li>
);

Train.propTypes = {
  data: PropTypes.objectOf.isRequired
};

export default connect(state => state)(Train);
