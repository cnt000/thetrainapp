import {
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAINS_FAIL,
  LOAD_TRAIN_DETAILS_SUCCESS,
  LOAD_TRAIN_DETAILS_FAIL
} from '../types/trains';

const trainsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRAINS_SUCCESS:
      return { ...state, services: action.trains.services };
    case LOAD_TRAINS_FAIL:
      return { ...state, services: [], error: 'error on train list' };
    case LOAD_TRAIN_DETAILS_SUCCESS:
      return { ...state, activeTrain: action.details.service };
    case LOAD_TRAIN_DETAILS_FAIL:
      return { ...state, error: 'error on train' };
    default:
      return state;
  }
};

export default trainsReducer;
