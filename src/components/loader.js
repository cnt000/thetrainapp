import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 120px;
`

const Span = styled.span`
  position: absolute;
  left: 0;
  right: 0;
`

const Loader = ({ isLoading }) =>
  isLoading && <Div>{isLoading && <Span> Is loading... </Span>}</Div>

export default Loader
