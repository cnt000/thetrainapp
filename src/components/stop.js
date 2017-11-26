import React from 'react';
import PropTypes from 'prop-types';

const Stop = ({ data }) => <li>{data.serviceIdentifier}</li>;

Stop.propTypes = {
  data: PropTypes.objectOf.isRequired
};

export default Stop;
