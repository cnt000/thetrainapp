import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTrainsDetails } from '../actions/trains';

const proxyUrl = `http://localhost:3000/proxy?url=`;
const trainsUrl = `https://realtime.thetrainline.com/callingPattern/`;

class TrainStops extends React.Component {
  componentDidMount() {
    if (!this.props.activeTrain.url) {
      this.props.getTrainsDetails(
        `${proxyUrl}${trainsUrl}${this.props.match.params.id}/${
          this.props.match.params.date
        }`
      );
    }
  }

  render() {
    const { activeTrain, error } = this.props;
    return (
      <nav>
        <div>{error}</div>
        <div>
          <Link to="/" href="/">
            Back
          </Link>
        </div>
        <div>{activeTrain.serviceUid}</div>
        <ul>
          {activeTrain.stops &&
            activeTrain.stops.map(
              stop =>
                stop.departure.scheduled && (
                  <li key={stop.departure.scheduled.scheduledTime}>
                    {stop.departure.scheduled &&
                      stop.departure.scheduled.scheduledTime}
                  </li>
                )
            )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  activeTrain: state.trainsReducer.activeTrain
});

const mapDispatchToProps = dispatch => ({
  getTrainsDetails: url => {
    dispatch(getTrainsDetails(url));
  }
});

TrainStops.propTypes = {
  activeTrain: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getTrainsDetails: PropTypes.func,
  error: PropTypes.string,
  match: PropTypes.objectOf(PropTypes.string)
};

TrainStops.defaultProps = {
  activeTrain: {},
  getTrainsDetails: () => {},
  error: '',
  match: { params: PropTypes.string }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainStops);
