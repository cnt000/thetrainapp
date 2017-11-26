import { LOAD_TRAINS_SUCCESS } from '../types/trains';

const trainsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRAINS_SUCCESS:
      return { ...state, services: action.trains.services };
    case 'LOAD_TRAIN_DETAILS_SUCCESS':
      return { ...state, activeTrain: action };
    default:
      return state;
  }
};

export default trainsReducer;
