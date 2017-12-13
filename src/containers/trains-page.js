import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import shortid from 'short-id'
import styled from 'styled-components'
import { getTrains, getTrainsDetails } from '../actions/trains'
import ListContainer from '../components/list-container'
import Train from '../components/train'
import Error from '../components/error'
import Loader from '../components/loader'
import NoResults from '../components/no-results'

const proxyUrl = `/proxy?url=`
const trainsUrl = `https://realtime.thetrainline.com/departures/wat`

const TrainLi = styled.li`
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

class Trains extends React.Component {
  componentDidMount() {
    this.props.getTrainsList(`${proxyUrl}${trainsUrl}`)
  }

  getToday() {
    this.today = format(new Date(), 'YYYY-MM-DD')
    return this.today
  }

  render() {
    const { trains, error, loading } = this.props
    return (
      <ListContainer>
        <Error error={error} />
        <Loader isLoading={loading} />
        <NoResults isLoading={loading} len={trains.length} error={error} />
        <ul>
          {trains
            .filter(train => train.transportMode === 'TRAIN')
            .map(train => (
              <TrainLi key={`train_${shortid.generate()}`}>
                <Link
                  to={`/train/${train.serviceIdentifier}/${this.getToday()}`}
                  href="/"
                >
                  <Train data={train} onClick={this.props.handleClick} />
                </Link>
              </TrainLi>
            ))}
        </ul>
      </ListContainer>
    )
  }
}

Trains.defaultProps = {
  trains: [],
  error: '',
  loading: false
}

Trains.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.object),
  getTrainsList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool
}

const mapStateToProps = state => ({
  trains: state.trainsReducer.services,
  error: state.trainsReducer.error,
  loading: state.trainsReducer.loading
})

const mapDispatchToProps = dispatch => ({
  handleClick: url => {
    dispatch(getTrainsDetails(`${proxyUrl}${url}`))
  },
  getTrainsList: url => {
    dispatch(getTrains(url))
  }
})

const TrainsPage = connect(mapStateToProps, mapDispatchToProps)(Trains)

export default TrainsPage
