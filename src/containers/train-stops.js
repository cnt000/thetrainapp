import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import shortid from 'short-id'
import styled from 'styled-components'
import { getTrainsDetails } from '../actions/trains'
import ListContainer from '../components/list-container'
import Error from '../components/error'
import Loader from '../components/loader'
import Stop from '../components/stop'

const proxyUrl = `http://localhost:3000/proxy?url=`
const trainsUrl = `https://realtime.thetrainline.com/callingPattern/`

const Div = styled.div`
  background: #ffffff;
  text-align: center;
  font-size: 20px;
  padding-top: 12px;
`

const TrainBookmark = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: ${props => props.realtTimeStopsNum * 100}px;
  left: 50%;
  margin-left: -12px;
  background-color: blue;
  z-index: 2;
`

function countStopStations(train) {
  return train && train.stops
    ? train.stops
        .map(s => s.departure.realTime || {})
        .reduce(
          (acc, curr) =>
            curr.realTimeServiceInfo && curr.realTimeServiceInfo.hasDeparted
              ? acc + 1
              : acc,
          1
        )
    : 1
}

class TrainStops extends React.Component {
  componentDidMount() {
    if (!this.props.activeTrain.url) {
      this.props.getTrainsDetails(
        `${proxyUrl}${trainsUrl}${this.props.match.params.id}/${
          this.props.match.params.date
        }`
      )
    }
  }

  render() {
    const { activeTrain, error, loading, realtTimeStopsNum } = this.props
    const listLen = activeTrain.stops ? activeTrain.stops.length : 0
    return (
      <ListContainer>
        <Link to="/" href="/">
          Back
        </Link>
        <Error error={error} />
        <Loader isLoading={loading} />
        {!loading && (
          <Div>
            {activeTrain.serviceOrigins && activeTrain.serviceOrigins[0]} to{' '}
            {activeTrain.serviceDestinations &&
              activeTrain.serviceDestinations[0]}
          </Div>
        )}
        <TrainBookmark realtTimeStopsNum={realtTimeStopsNum} />
        <ul>
          {!loading &&
            activeTrain.stops &&
            activeTrain.stops.map(
              (stop, index) =>
                stop.departure.scheduled && (
                  <Stop
                    key={`stops_${shortid.generate()}`}
                    stop={stop}
                    isFirst={index === 0}
                    isLast={index === listLen - 2}
                  />
                )
            )}
        </ul>
      </ListContainer>
    )
  }
}

const mapStateToProps = state => ({
  activeTrain: state.trainsReducer.activeTrain,
  loading: state.trainsReducer.loading,
  realtTimeStopsNum: countStopStations(state.trainsReducer.activeTrain)
})

const mapDispatchToProps = dispatch => ({
  getTrainsDetails: url => {
    dispatch(getTrainsDetails(url))
  }
})

TrainStops.propTypes = {
  activeTrain: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getTrainsDetails: PropTypes.func,
  error: PropTypes.string,
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ),
  loading: PropTypes.bool,
  realtTimeStopsNum: PropTypes.number
}

TrainStops.defaultProps = {
  activeTrain: {},
  getTrainsDetails: () => {},
  error: '',
  match: { params: PropTypes.string },
  loading: false,
  realtTimeStopsNum: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainStops)
