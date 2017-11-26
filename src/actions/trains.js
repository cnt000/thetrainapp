import { LOAD_TRAINS_REQUEST } from '../types/trains';

const getTrains = action => ({
  type: LOAD_TRAINS_REQUEST,
  action
});

export default getTrains;
