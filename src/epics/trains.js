import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  fetchTrainsFulfilled,
  fetchTrainDetailsFulfilled
} from '../actions/trains';
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAIN_DETAILS_REQUEST
} from '../types/trains';

export function loadTrainsList(action$) {
  return action$
    .ofType(LOAD_TRAINS_REQUEST)
    .map(action => action)
    .switchMap(payload =>
      ajax.getJSON(`${payload.action}`).map(fetchTrainsFulfilled)
    );
}

export function loadTrainDetails(action$) {
  return action$
    .ofType(LOAD_TRAIN_DETAILS_REQUEST)
    .map(action => action)
    .switchMap(payload =>
      ajax.getJSON(`${payload.action}`).map(fetchTrainDetailsFulfilled)
    );
}
