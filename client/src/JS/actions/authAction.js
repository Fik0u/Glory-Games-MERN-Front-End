// Importing the necessary modules and action types
import axios from 'axios';
import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from '../actionTypes/authActionTypes';


//! Action creators

// Register user
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post('/api/auth/register', newUser);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
};

// Login user
export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = axios.post('/api/auth/login', user);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
};

// Current user
export const currentUser = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        let config = {
            headers: {
                Authorization : localStorage.getItem('token')
            }
        };
        const result = await axios.get('/api/auth/current', config);
        dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
};

// Logout user
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
};