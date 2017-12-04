import React from 'react';

const NoResults = ({ isLoading, len }) =>
  !isLoading &&
  len && <span className="no-results">No results, please try again...</span>;

export default NoResults;
