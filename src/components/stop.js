import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import styled from 'styled-components'
import compareAsc from 'date-fns/compare_asc'

const Li = styled.li`
  position: relative;
  padding: 10px 14px;
  background: white;
  font-family: 'Cabin';
  font-size: 1em;
  text-align: center;
  height: 80px;
`

const StopFlag = styled.div`
  position: absolute;
  background: ${props => (props.realTime === 'Actual' ? 'green' : 'yellow')};
  top: 50%;
  left: 50%;
  display: inline-block;
  border-radius: 45px;
  border: 1px solid #999999;
  width: 12px;
  height: 12px;
  margin-left: -7px;
  z-index: 1;
`

const Line = styled.div`
  width: 1px;
  height: ${props => (props.isLast ? '60px' : '120px')};
  position: absolute;
  top: ${props => (props.isFirst ? '50%' : 0)};
  left: 50%;
  background-color: #999999;
  z-index: 0;
`

const Time = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 1;
`

const StopInfo = styled.div`
  display: flex;
  justify-content: center;
`

const Station = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  z-index: 1;
`
const Div = styled.div`
  color: #999999;
  font-size: 12px;
`

const Stop = ({ stop, isFirst, isLast }) => (
  <Li>
    <StopInfo>
      <Time>
        {stop.departure.scheduled &&
          format(stop.departure.scheduled.scheduledTime, 'HH:mm')}
      </Time>
      <StopFlag
        realTime={
          stop.departure.realTime &&
          stop.departure.realTime.realTimeServiceInfo.realTimeFlag
        }
      />
      <Line isFirst={isFirst} isLast={isLast} />
      <Station>
        <div className="calling-point-station">{stop.location.crs}</div>
        <div className="calling-point-due">
          {stop.departure &&
          compareAsc(
            stop.departure.scheduled.scheduledTime,
            stop.departure.realTime.realTimeServiceInfo.realTime
          ) === -1
            ? `Late ${format(
                stop.departure.realTime.realTimeServiceInfo.realTime,
                'HH:mm'
              )}`
            : `On Time`}
          {stop.departure.realTime &&
            stop.departure.realTime.realTimeServiceInfo.realTimeFlag ===
              'Actual' && <Div>departed</Div>}
        </div>
      </Station>
    </StopInfo>
  </Li>
)

Stop.propTypes = {
  stop: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
}

Stop.defaultProps = {
  stop: {},
  isFirst: false,
  isLast: false
}

export default Stop
