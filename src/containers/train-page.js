import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'short-id';
import format from 'date-fns/format';
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
    const { activeTrain, error, loading } = this.props;
    return (
      <nav>
        <Link to="/" href="/">
          Back
        </Link>
        {error && <div>ERROR: {error}</div>}
        {loading && <p> Is loading... </p>}
        {!loading && <p>{activeTrain.serviceUid}</p>}
        <ul>
          {!loading &&
            activeTrain.stops &&
            activeTrain.stops.map(
              stop =>
                stop.departure.scheduled && (
                  <li
                    key={`stops_${shortid.generate()}`}
                    className="calling-point"
                  >
                    <div className="calling-point-time">
                      {stop.departure.scheduled &&
                        format(stop.departure.scheduled.scheduledTime, 'HH:mm')}
                    </div>
                    <div className="calling-point-station-container">
                      <div className="calling-point-station">
                        Stoke-on-Trent
                      </div>
                      <div className="calling-point-due">?On time</div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  activeTrain: state.trainsReducer.activeTrain,
  loading: state.trainsReducer.loading
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
  match: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool
};

TrainStops.defaultProps = {
  activeTrain: {},
  getTrainsDetails: () => {},
  error: '',
  match: { params: PropTypes.string },
  loading: false
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainStops);
