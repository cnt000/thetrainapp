import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import styled from 'styled-components';

const Li = styled.li`
  background: white;
  color: 'black';
  font-size: 1em;
  padding-bottom: 14px;
  padding-left: 15px;
  padding-right: 35px;
  padding-top: 14px;
  border-bottom: 1px solid #eeeeee;
  &:hover {
    background-color: rgb(209, 244, 236);
  }
`;

const ServiceStation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Train = ({ data, day }) => (
  <Li>
    <Link to={`/train/${data.serviceIdentifier}/${day}`} href="/">
      <ServiceStation>
        <span className="scheduled-time">
          {format(data.scheduledInfo.scheduledTime, 'HH:mm')}
        </span>
        <span className="destination">{data.destinationList[0].crs}</span>
        <span className="platform">
          <abbr title="Platform">Plat. </abbr>
          {data.scheduledInfo.scheduledPlatform}
        </span>
      </ServiceStation>
      <ServiceDetails>
        <span className="operator">
          {data.serviceIdentifier}-{data.serviceOperator}
        </span>
        <span className="expected ontime">On Time</span>
      </ServiceDetails>
      <i className="icon icon-chevron-right" />
    </Link>
  </Li>
);

Train.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  day: PropTypes.string
};

Train.defaultProps = {
  data: {},
  day: ''
};

export default connect(state => state)(Train);
