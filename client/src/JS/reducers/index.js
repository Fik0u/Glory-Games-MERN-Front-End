import { combineReducers } from 'redux';
import authReducer from './authReducer';
import prodReducer from './prodReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({ authReducer, prodReducer, orderReducer });

export default rootReducer;