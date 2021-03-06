import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support to redux devtools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
