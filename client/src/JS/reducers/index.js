import { combineReducers } from 'redux';
import authReducer from './authReducer';
import prodReducer from './prodReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({ authReducer, adminReducer, prodReducer, orderReducer, cartReducer });

export default rootReducer;