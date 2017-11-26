import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getTrains from '../actions/trains';

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
            <h1> Trains List </h1>
            {
              <ul>
                {trains.map(train => (
                  <li key={train.serviceIdentifier}>
                    ID: {train.serviceIdentifier} - Operator:{' '}
                    {train.serviceOperator} mode: {train.transportMode} -
                    Calling Type: {train.callingType}
                  </li>
                ))}
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
  getTrainsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ trains: state.trainsReducer.services });

const mapDispatchToProps = dispatch => ({
  getTrainsList: url => {
    dispatch(getTrains(url));
  }
});

const TrainsPage = connect(mapStateToProps, mapDispatchToProps)(Trains);

export default TrainsPage;
