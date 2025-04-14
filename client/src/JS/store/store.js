
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers'
import { thunk } from "redux-thunk";

// It sets up the Redux DevTools extension (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// The Redux store with the root reducer and apply middleware thunk for async actions
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



export default store;