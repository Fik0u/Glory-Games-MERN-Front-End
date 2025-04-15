import { combineReducers } from 'redux';
import authReducer from './authReducer';
import prodReducer from './prodReducer';

const rootReducer = combineReducers({ authReducer, prodReducer });

export default rootReducer;