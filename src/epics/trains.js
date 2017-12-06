import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'
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

export function loadTrainsList(action$) {
  return action$
    .ofType(LOAD_TRAINS_REQUEST)
    .map(action => action)
    .switchMap(payload =>
      ajax
        .getJSON(`${payload.action}`)
        .map(fetchTrainsFulfilled)
        .catch(error =>
          Observable.of({
            type: LOAD_TRAINS_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
    )
}

export function loadTrainDetails(action$) {
  return action$
    .ofType(LOAD_TRAIN_DETAILS_REQUEST)
    .map(action => action)
    .switchMap(payload =>
      ajax
        .getJSON(`${payload.action}`)
        .map(fetchTrainDetailsFulfilled)
        .catch(error =>
          Observable.of({
            type: LOAD_TRAIN_DETAILS_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
    )
}
