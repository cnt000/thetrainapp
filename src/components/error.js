import React from 'react';

const Error = ({ error }) =>
  error && <span className="error">Error: {error}</span>;

export default Error;
