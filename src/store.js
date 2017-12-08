import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import trainsReducer from './reducers/trains'
import { loadTrainsList, loadTrainDetails } from './epics/trains'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */
const rootEpic = combineEpics(loadTrainsList, loadTrainDetails)

const reducer = combineReducers({
  trainsReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
)

export default store
