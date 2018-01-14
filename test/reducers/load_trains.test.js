import trainsReducer from '../../src/reducers/trains'
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAINS_FAIL
} from '../../src/types/trains'

describe('trains reducer', () => {
  it('should return the initial state', () => {
    expect(trainsReducer(undefined, {})).toEqual({})
  })

  it('should handle LOAD_TRAINS_REQUEST', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAINS_REQUEST
        }
      )
    ).toEqual({ loading: true, activeTrain: {} })
  })

  it('should handle LOAD_TRAINS_SUCCESS', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAINS_SUCCESS,
          action: { services: [] }
        }
      )
    ).toEqual({ services: [], loading: false })
  })

  it('should handle LOAD_TRAINS_FAIL', () => {
    expect(
      trainsReducer(
        {},
        {
          type: LOAD_TRAINS_FAIL
        }
      )
    ).toEqual({
      services: [],
      error: 'error on train list',
      loading: false
    })
  })
})
