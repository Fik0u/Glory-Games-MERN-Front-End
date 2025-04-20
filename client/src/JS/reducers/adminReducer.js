//The imports

import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/adminActionTypes";


const initialState = {
    isLoad: false,
    usersList: [],
    user: {},
    success: false,
    errors: []
};


const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER: return { ...state, isLoad: true }; 

        case GET_ALL_USERS: return { ...state, isLoad: false, usersList: payload, success: true }; 

        case GET_USER: return { ...state, isLoad: false, user: payload, success: true }; 

        case DELETE_USER: 
            const newList = state.usersList.filter(elt => elt._id !== payload._id);
        
            return { ...state, isLoad: false, usersList: newList, success: true }; 

        case FAIL_USER: return { ...state, isLoad: false, errors: payload.errors }; 

        default: return state;
    }
};



export default adminReducer;