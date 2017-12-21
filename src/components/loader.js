import React from 'react'
import styled from 'styled-components'
import ReactLoader from 'react-loader'
import PropTypes from 'prop-types'

const Div = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 120px;
`

const Span = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
`

const Loader = ({ isLoading }) => (
  <ReactLoader loaded={!isLoading}>
    {isLoading && (
      <Div>
        <Span> Is loading... </Span>
      </Div>
    )}
  </ReactLoader>
)

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Loader
