import 'rxjs/add/operator/mergeMap';
import trainsApi from '../services/trainsApi';
import {
  fetchTrainsFulfilled,
  fetchTrainDetailsFulfilled
} from '../actions/trains';
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAIN_DETAILS_REQUEST
} from '../types/trains';

export const loadTrainsList = action$ =>
  action$
    .ofType(LOAD_TRAINS_REQUEST)
    .mergeMap(action =>
      trainsApi(action).then(response => fetchTrainsFulfilled(response))
    );

export const loadTrainDetails = action$ =>
  action$
    .ofType(LOAD_TRAIN_DETAILS_REQUEST)
    .mergeMap(action =>
      trainsApi(action).then(response => fetchTrainDetailsFulfilled(response))
    );
