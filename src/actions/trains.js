import { LOAD_TRAINS_REQUEST } from '../types/trains';

export const getTrains = action => ({
  type: LOAD_TRAINS_REQUEST,
  action
});

export const getTrainsDetails = action => ({
  type: 'LOAD_TRAIN_DETAILS_REQUEST',
  action
});
