import { combineReducers } from 'redux';
import authReducer from './authReducer';
import prodReducer from './prodReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ authReducer, prodReducer, orderReducer, cartReducer });

export default rootReducer;