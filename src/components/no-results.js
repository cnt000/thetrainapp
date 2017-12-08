import React from 'react'

const NoResults = ({ isLoading, len, error }) =>
  !isLoading &&
  len === 0 &&
  error === '' && (
    <span className="no-results">No results, please try again...</span>
  )

export default NoResults
