import nock from 'nock'
import { createEpicMiddleware } from 'redux-observable'
import configureMockStore from 'redux-mock-store'
import { combineReducers } from 'redux'
import {
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAINS_REQUEST
} from '../../src/types/trains'
import { loadTrainsList, loadTrainDetails } from '../../src/epics/trains'
import { getTrains } from '../../src/actions/trains'
import mockData from '../mock_wat_call_light'

const epicMiddleware = createEpicMiddleware(loadTrainsList)
const mockStore = configureMockStore([epicMiddleware])

const proxyUrl = `http://localhost:3000`

describe('loadTrainsList', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    nock.cleanAll()
    epicMiddleware.replaceEpic(loadTrainDetails)
  })

  it('produces get the trains list', () => {
    const payload = {
      ciao: 12345
    }
    nock(proxyUrl)
      .get('/proxy')
      .reply(200, {
        ...payload
      })

    store.dispatch(
      getTrains(
        `${proxyUrl}/proxy?url=https://realtime.thetrainline.com/departures/wat`
      )
    )

    const actions = store.getActions()

    expect(actions).toEqual([
      {
        type: LOAD_TRAINS_REQUEST,
        action: `${
          proxyUrl
        }/proxy?url=https://realtime.thetrainline.com/departures/wat`
      },
      {
        type: LOAD_TRAINS_SUCCESS,
        action: payload
      }
    ])
  })
})
