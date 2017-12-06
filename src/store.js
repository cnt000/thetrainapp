import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import trainsReducer from './reducers/trains'
import { loadTrainsList, loadTrainDetails } from './epics/trains'

const rootEpic = combineEpics(loadTrainsList, loadTrainDetails)

const reducer = combineReducers({
  trainsReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(reducer, applyMiddleware(epicMiddleware))

export default store
