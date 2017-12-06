import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAIN_DETAILS_REQUEST,
  LOAD_TRAIN_DETAILS_SUCCESS
} from '../types/trains'

export const getTrains = action => ({
  type: LOAD_TRAINS_REQUEST,
  action
})

export const getTrainsDetails = action => ({
  type: LOAD_TRAIN_DETAILS_REQUEST,
  action
})

export const fetchTrainsFulfilled = trains => ({
  type: LOAD_TRAINS_SUCCESS,
  trains
})

export const fetchTrainDetailsFulfilled = details => ({
  type: LOAD_TRAIN_DETAILS_SUCCESS,
  details
})
