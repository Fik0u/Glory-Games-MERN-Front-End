import { combineReducers } from 'redux';
import authReducer from './authReducer';
import prodReducer from './prodReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';
import toastReducer from './toastReducer';

const rootReducer = combineReducers({ authReducer, adminReducer, prodReducer, orderReducer, cartReducer, toastReducer });

export default rootReducer;