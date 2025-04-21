import { CLEAR_TOASTS, SET_ERROR_TOAST, SET_SUCCESS_TOAST } from "../actionTypes/toastActionTypes";



//! Action Creators


// Success Toasts Action
export const setSuccessToast = (msg) => ({
    type: SET_SUCCESS_TOAST, payload: msg
});

//Error Toasts Action
export const setErrorToast = (msg) => ({
    type: SET_ERROR_TOAST, payload: msg
});

// Clear Toasts Action
export const clearToasts = (msg) => ({
    type: CLEAR_TOASTS
});