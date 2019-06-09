import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function createStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support to redux devtools

  return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(reduxImmutableStateInvariant())))
}