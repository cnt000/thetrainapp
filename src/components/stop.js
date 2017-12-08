import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import styled from 'styled-components'

const Li = styled.li`
  position: relative;
  padding: 10px 14px;
  background: white;
  color: 'grey';
  font-family: 'Cabin';
  font-size: 1em;
  text-align: center;
`

const StopFlag = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 45px;
  background-color: lightgreen;
  border: 1px solid black;
  width: 30px;
  height: 30px;
  z-index: 1;
`

const Line = styled.div`
  width: 2px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 45%;
  background-color: black;
  z-index: 0;
`

const Stop = ({ stop }) => (
  <Li>
    <div className="calling-point-time">
      <StopFlag />
      <Line />
      {stop.departure.scheduled &&
        format(stop.departure.scheduled.scheduledTime, 'HH:mm')}
      <div className="calling-point-station-container">
        <div className="calling-point-station">Stoke-on-Trent</div>
        <div className="calling-point-due">?On time</div>
      </div>
    </div>
  </Li>
)

Stop.propTypes = {
  stop: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  )
}

Stop.defaultProps = {
  stop: {}
}

export default Stop
