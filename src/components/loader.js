import React from 'react';

const Loader = ({ isLoading }) =>
  isLoading && <p>{isLoading && <span> Is loading... </span>}</p>;

export default Loader;
