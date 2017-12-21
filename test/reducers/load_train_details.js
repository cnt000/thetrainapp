import trainsReducer from '../../src/reducers/trains'
import {
  LOAD_TRAIN_DETAILS_REQUEST,
  LOAD_TRAIN_DETAILS_SUCCESS,
  LOAD_TRAIN_DETAILS_FAIL
} from '../../src/types/trains'

describe('trains reducer', () => {
  it('should return the initial state', () => {
    expect(trainsReducer(undefined, {})).toEqual({})
  })

  it('should handle LOAD_TRAIN_DETAILS_REQUEST', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAIN_DETAILS_REQUEST
        }
      )
    ).toEqual({ loading: true })
  })

  it('should handle LOAD_TRAIN_DETAILS_SUCCESS', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAIN_DETAILS_SUCCESS,
          details: { service: [] }
        }
      )
    ).toEqual({ activeTrain: [], loading: false })
  })

  it('should handle LOAD_TRAIN_DETAILS_FAIL', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAIN_DETAILS_FAIL
        }
      )
    ).toEqual({
      error: 'error on train',
      loading: false
    })
  })
})
