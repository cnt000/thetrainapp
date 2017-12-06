import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import styled from 'styled-components'

const Li = styled.li`
  background: white;
  color: 'black';
  cursor: pointer;
  font-size: 1em;
  padding: 14px 14px;
  border-bottom: 1px solid #eeeeee;
  font-family: 'Cabin';
  &:hover {
    background-color: rgb(209, 244, 236);
  }
`

const Stop = ({ stop }) => (
  <Li>
    <div className="calling-point-time">
      {stop.departure.scheduled &&
        format(stop.departure.scheduled.scheduledTime, 'HH:mm')}
    </div>
    <div className="calling-point-station-container">
      <div className="calling-point-station">Stoke-on-Trent</div>
      <div className="calling-point-due">?On time</div>
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
