import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const Train = ({ data, day }) => (
  <li>
    <Link to={`/train/${data.serviceIdentifier}/${day}`} href="/">
      <div className="service-station">
        <span className="scheduled-time">
          {format(data.scheduledInfo.scheduledTime, 'HH:mm')}
        </span>
        <span className="destination">{data.destinationList[0].crs}</span>
        <span className="platform">
          <abbr title="Platform">Plat. </abbr>
          {data.scheduledInfo.scheduledPlatform}
        </span>
      </div>
      <div className="service-detail">
        <span className="operator">
          {data.serviceIdentifier}-{data.serviceOperator}
        </span>
        <span className="expected ontime">On Time</span>
      </div>
      <i className="icon icon-chevron-right" />
    </Link>
  </li>
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
