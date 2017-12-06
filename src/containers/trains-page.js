import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import shortid from 'short-id';
import styled from 'styled-components';
import { getTrains, getTrainsDetails } from '../actions/trains';
import Train from '../components/train';
import Error from '../components/error';
import Loader from '../components/loader';
import NoResults from '../components/no-results';

const proxyUrl = `http://localhost:3000/proxy?url=`;
const trainsUrl = `https://realtime.thetrainline.com/departures/wat`;

const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 769px) {
    width: 330px;
    margin-top: 8px;
  }
`;

class Trains extends React.Component {
  componentDidMount() {
    this.props.getTrainsList(`${proxyUrl}${trainsUrl}`);
  }

  getToday() {
    this.today = format(new Date(), 'YYYY-MM-DD');
    return this.today;
  }

  render() {
    const { trains, error, loading } = this.props;
    return (
      <Div>
        <Error error={error} />
        <Loader isLoading={loading} />
        <NoResults isLoading={loading} len={trains.length} />
        <ul>
          {trains
            .filter(train => train.transportMode === 'TRAIN')
            .map(train => (
              <Train
                key={`train_${shortid.generate()}`}
                data={train}
                day={this.getToday()}
                onClick={this.props.handleClick}
              />
            ))}
        </ul>
      </Div>
    );
  }
}

Trains.defaultProps = {
  trains: [],
  error: '',
  loading: false
};

Trains.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.object),
  getTrainsList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  trains: state.trainsReducer.services,
  error: state.trainsReducer.error,
  loading: state.trainsReducer.loading
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
