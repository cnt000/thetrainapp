import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'
import {
  fetchTrainsFulfilled,
  fetchTrainDetailsFulfilled
} from '../actions/trains'
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAINS_FAIL,
  LOAD_TRAIN_DETAILS_REQUEST,
  LOAD_TRAIN_DETAILS_FAIL
} from '../types/trains'

export function loadTrainsList(action$, store, { trainsApi }) {
  return action$.ofType(LOAD_TRAINS_REQUEST).switchMap(action =>
    trainsApi
      .fetchTrains(action)
      .map(json => fetchTrainsFulfilled(json))
      .catch(error =>
        Observable.of({
          type: LOAD_TRAINS_FAIL,
          payload: error,
          error: true
        })
      )
  )
}

export function loadTrainDetails(action$, store, { trainsApi }) {
  return action$.ofType(LOAD_TRAIN_DETAILS_REQUEST).switchMap(action =>
    trainsApi
      .fetchTrainDetails(action)
      .map(json => fetchTrainDetailsFulfilled(json))
      .catch(error =>
        Observable.of({
          type: LOAD_TRAIN_DETAILS_FAIL,
          payload: error,
          error: true
        })
      )
  )
}
