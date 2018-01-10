import { Observable } from 'rxjs'

const trainsApi = {}

// Best practice to encapsulate fetch's Promise in an Observable
trainsApi.fetchTrains = ({ action }) => {
  const request = fetch(action).then(response => response.json())
  return Observable.from(request)
}

trainsApi.fetchTrainDetails = ({ action }) => {
  const request = fetch(action).then(response => response.json())
  return Observable.from(request)
}

export default trainsApi
