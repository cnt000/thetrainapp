import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAINS_FAIL,
  LOAD_TRAIN_DETAILS_REQUEST,
  LOAD_TRAIN_DETAILS_SUCCESS,
  LOAD_TRAIN_DETAILS_FAIL
} from '../types/trains';

const trainsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRAINS_REQUEST:
      return { ...state, loading: true, activeTrain: {} };
    case LOAD_TRAINS_SUCCESS:
      return { ...state, services: action.trains.services, loading: false };
    case LOAD_TRAINS_FAIL:
      return {
        ...state,
        services: [],
        error: 'error on train list',
        loading: false
      };
    case LOAD_TRAIN_DETAILS_REQUEST:
      return { ...state, loading: true };
    case LOAD_TRAIN_DETAILS_SUCCESS:
      return { ...state, activeTrain: action.details.service, loading: false };
    case LOAD_TRAIN_DETAILS_FAIL:
      return { ...state, error: 'error on train', loading: false };
    default:
      return state;
  }
};

export default trainsReducer;
