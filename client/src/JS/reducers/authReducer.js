// Importing the necessary modules
import { CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes/authActionTypes";


const initialState = {
    isLoad: false,
    isAuth: false,
    user: {},
    success: [],
    errors : []
};


//Creating the reducer function
const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_AUTH: return { ...state, isLoad: true };

        case SUCCESS_AUTH: 
        localStorage.setItem('token', payload.token);
        return { ...state, isLoad: false, isAuth: true, user: payload.user, success: payload };
        
        case CURRENT_AUTH: return { ...state, isLoad: false, isAuth: true, user: payload };
        
        case LOGOUT_AUTH: 
        localStorage.removeItem('token');
        return { isLoad: false, isAuth: false, user: {}, success: [], errors: [] };
        
        case FAIL_AUTH: return { ...state, isLoad: false, errors: payload };

        case CLEAR_SUCCESS_AUTH: return { ...state, success: [] };

        case CLEAR_ERRORS_AUTH: return { ...state, errors: [] };
            
        default: return state;
    }
};



export default authReducer;