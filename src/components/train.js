import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

const ServiceStation = styled.div`
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
  display: inline-block;
  width: 15%;
  text-align: right;
`

const CenterInfo = styled.div`
  display: inline-block;
  width: 60%;
`

const Train = ({ data, day }) => (
  <Li>
    <Link to={`/train/${data.serviceIdentifier}/${day}`} href="/">
      <ServiceStation>
        <TimeInfo>{format(data.scheduledInfo.scheduledTime, 'HH:mm')}</TimeInfo>
        <CenterInfo>
          <ServiceStation>
            <span>{data.destinationList[0].crs}</span>
            <span>
              <abbr title="Platform">Plat. </abbr>
              {data.scheduledInfo.scheduledPlatform}
            </span>
          </ServiceStation>
          <ServiceStation>
            <span>
              {data.serviceIdentifier}-{data.serviceOperator}
            </span>
            <span>On Time</span>
          </ServiceStation>
        </CenterInfo>
        <IconBox> &gt; </IconBox>
      </ServiceStation>
    </Link>
  </Li>
)

Train.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  day: PropTypes.string
}

Train.defaultProps = {
  data: {},
  day: ''
}

export default connect(state => state)(Train)
