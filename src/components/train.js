import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import compareAsc from 'date-fns/compare_asc'
import styled from 'styled-components'
import ArrowRight from '../images/arrow-right.svg'

const TrainStation = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimeInfo = styled.div`
  display: inline-block;
  width: 25%;
  font-size: 18px;
  font-weight: bold;
`

const IconBox = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  width: 15%;
  text-align: right;
  font-size: 24px;
`

const CenterInfo = styled.div`
  display: inline-block;
  width: 60%;
`

const Train = ({ data }) => (
  <TrainStation>
    <TimeInfo>{format(data.scheduledInfo.scheduledTime, 'HH:mm')}</TimeInfo>
    <CenterInfo>
      <TrainStation>
        <span>{data.destinationList[0].crs}</span>
        <span>
          <abbr title="Platform">Plat. </abbr>
          {data.scheduledInfo.scheduledPlatform}
        </span>
      </TrainStation>
      <TrainStation>
        <span>
          {data.serviceIdentifier}-{data.serviceOperator}
        </span>
        <span>
          {data.realTimeUpdatesInfo &&
          compareAsc(
            data.scheduledInfo.scheduledTime,
            data.realTimeUpdatesInfo.realTimeServiceInfo.realTime
          ) === -1
            ? `Late ${format(
                data.realTimeUpdatesInfo.realTimeServiceInfo.realTime,
                'HH:mm'
              )}`
            : `On Time`}
        </span>
      </TrainStation>
    </CenterInfo>
    <IconBox>
      <ArrowRight width={16} height={16} />
    </IconBox>
  </TrainStation>
)

Train.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

Train.defaultProps = {
  data: {}
}

export default Train
