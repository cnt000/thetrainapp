import { LOAD_TRAINS_SUCCESS } from '../types/trains';

const trainsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRAINS_SUCCESS:
      return { ...state, services: action.trains.services };
    default:
      return state;
  }
};

export default trainsReducer;