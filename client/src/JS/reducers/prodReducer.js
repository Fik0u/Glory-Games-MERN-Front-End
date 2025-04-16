// imports of the constants defined in the action types
import { LOAD_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_ONE_PRODUCT, GET_PRODUCTS } from '../actionTypes/prodActionTypes';

const initialState = {
    isLoad: false,
    prodsList: [],
    prod: {},
    success: false,
    error: null
};


const prodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT: return { ...state, isLoad: true };

        case ADD_PRODUCT: return { ...state, isLoad: false, prodsList: [ ...state.prodsList, payload], success: true };

        case GET_PRODUCTS: return { ...state, isLoad: false, prodsList: payload };

        case GET_ONE_PRODUCT: return { ...state, isLoad: false, prod: payload };

        case EDIT_PRODUCT: return { ...state, isLoad: false, prodsList: state.prodsList.map(prod => prod._id === payload._id ? { ...prod, ...payload } : prod), success: true };

        case DELETE_PRODUCT: return { ...state, isLoad: false, prodsList: state.prodsList.filter((prod) => prod._id !== payload._id), success: true };

        case FAIL_PRODUCT: return { ...state, isLoad: false, error: payload };
    
        default: return state;
    }
};


export default prodReducer;