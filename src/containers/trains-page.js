import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTrains, getTrainsDetails } from '../actions/trains';
import Train from '../components/train';

const proxyUrl = `http://localhost:3000/proxy?url=`;
const trainsUrl = `https://realtime.thetrainline.com/departures/wat`;

class Trains extends React.Component {
  componentDidMount() {
    this.props.getTrainsList(`${proxyUrl}${trainsUrl}`);
  }

  render() {
    const { trains, error } = this.props;
    const dateTime = new Date();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const dayLeftPadded = `0${dateTime.getDate()}`;
    const day = `${dayLeftPadded.slice(-2)}`;
    const today = `${year}-${month}-${day}`;
    return (
      <div>
        <Link to="/" href="/">
          Home
        </Link>
        <div>{error}</div>
        {trains ? (
          <div>
            <span>{trains.length === 0 ? 'no results' : ''}</span>
            <ul>
              {trains
                .filter(train => train.transportMode === 'TRAIN')
                .map(train => (
                  <Link
                    to={`/train/${train.serviceIdentifier}/${today}`}
                    href="/"
                    key={`${train.serviceIdentifier}${
                      train.destinationList[0].crs
                    }`}
                  >
                    <Train data={train} onClick={this.props.handleClick} />
                  </Link>
                ))}
            </ul>
          </div>
        ) : (
          '...loading'
        )}
      </div>
    );
  }
}

Trains.defaultProps = {
  trains: [],
  error: ''
};

Trains.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.object),
  getTrainsList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  trains: state.trainsReducer.services,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  handleClick: url => {
    dispatch(getTrainsDetails(`${proxyUrl}${url}`));
  },
  getTrainsList: url => {
    dispatch(getTrains(url));
  }
});

const TrainsPage = connect(mapStateToProps, mapDispatchToProps)(Trains);

export default TrainsPage;
