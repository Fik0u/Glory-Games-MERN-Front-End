import { CLEAR_TOASTS, SET_ERROR_TOAST, SET_SUCCESS_TOAST } from "../actionTypes/toastActionTypes";


const initialState = {
    success : null,
    error: null
};

const toastReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SUCCESS_TOAST: return { ...state, success: payload };

        case SET_ERROR_TOAST: return { ...state, error: payload };

        case CLEAR_TOASTS: return { success: null, error: null };
    
        default: return state;
    }
};


export default toastReducer;