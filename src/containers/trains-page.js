import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrains, getTrainsDetails } from '../actions/trains';
import Train from '../components/train';

const apiUrl = `http://localhost:3000/proxy?url=https://realtime.thetrainline.com/departures/wat`;

class Trains extends React.Component {
  componentDidMount() {
    this.props.getTrainsList(apiUrl);
  }

  render() {
    const { trains } = this.props;
    return (
      <div>
        {trains ? (
          <div>
            {
              <ul>
                {trains.map(
                  train =>
                    train.transportMode === 'TRAIN' && (
                      <Train data={train} onClick={this.props.handleClick} />
                    )
                )}
              </ul>
            }
          </div>
        ) : (
          '...loading'
        )}
      </div>
    );
  }
}

Trains.propTypes = {
  trains: PropTypes.arrayOf.isRequired,
  getTrainsList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ trains: state.trainsReducer.services });

const mapDispatchToProps = dispatch => ({
  handleClick: url => {
    dispatch(getTrainsDetails(url));
  },
  getTrainsList: url => {
    dispatch(getTrains(url));
  }
});

const TrainsPage = connect(mapStateToProps, mapDispatchToProps)(Trains);

export default TrainsPage;
