import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs'
import deepEqual from 'deep-equal'
import { loadTrainsList, loadTrainDetails } from '../../src/epics/trains'
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAIN_DETAILS_REQUEST
} from '../../src/types/trains'
import {
  fetchTrainsFulfilled,
  fetchTrainDetailsFulfilled
} from '../../src/actions/trains'

describe('load TrainsList', () => {
  it('dispatches the correct action when it is successful', () => {
    const action$ = ActionsObservable.of({
      type: LOAD_TRAINS_REQUEST,
      action: `http://localhost:3000/proxy`
    })
    const response = {
      trains: {
        services: []
      }
    }
    const trainsApi = {
      fetchTrains: () => Observable.of(response)
    }

    loadTrainsList(action$, null, {
      trainsApi
    })
      .toArray()
      .subscribe(actions => {
        expect(deepEqual(actions, [fetchTrainsFulfilled(response)])).toBe(true)
      })
  })
})

describe('load TrainsDetails', () => {
  it('dispatches the correct action when it is successful', () => {
    const action$ = ActionsObservable.of({
      type: LOAD_TRAIN_DETAILS_REQUEST,
      action: `http://localhost:3000/proxy`
    })
    const action = {
      details: {
        trains: []
      }
    }
    const trainsApi = {
      fetchTrainDetails: () => Observable.of(action)
    }

    loadTrainDetails(action$, null, {
      trainsApi
    })
      .toArray()
      .subscribe(actions => {
        console.log(actions)
        expect(deepEqual(actions, [fetchTrainDetailsFulfilled(action)])).toBe(
          true
        )
      })
  })
})
