import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrains, getTrainsDetails } from '../actions/trains';
import Train from '../components/train';

const proxyUrl = `http://localhost:3000/proxy?url=`;
const trainsUrl = `https://realtime.thetrainline.com/departures/wat`;

class Trains extends React.Component {
  componentDidMount() {
    this.props.getTrainsList(`${proxyUrl}${trainsUrl}`);
  }

  render() {
    const { trains, activeTrain } = this.props;
    return (
      <div>
        DETAILS: {activeTrain && activeTrain.serviceUid}
        {!activeTrain &&
          (trains ? (
            <div>
              {
                <ul>
                  {trains.map(
                    train =>
                      train.transportMode === 'TRAIN' && (
                        <Train
                          key={`${train.serviceIdentifier}${
                            train.destinationList[0].crs
                          }`}
                          data={train}
                          onClick={this.props.handleClick}
                        />
                      )
                  )}
                </ul>
              }
            </div>
          ) : (
            '...loading'
          ))}
      </div>
    );
  }
}

Trains.defaultProps = {
  activeTrain: undefined,
  trains: []
};

Trains.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.object),
  activeTrain: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getTrainsList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  trains: state.trainsReducer.services,
  activeTrain: state.trainsReducer.activeTrain
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
