// Importing the necessary modules and action types
import axios from 'axios';
import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH, UPDATE_USER_PROFILE } from '../actionTypes/authActionTypes';
import { setErrorToast, setSuccessToast } from './toastAction';


//! Action creators

// Register user
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post('/api/auth/register', newUser);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        dispatch(setSuccessToast('User successfully registerd'));
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
        const errorResponse = error.response.data;
        if (errorResponse) {
            errorResponse.errors.forEach((e,i) => {
                setTimeout(() => {
                    dispatch(setErrorToast(e.msg)) 
                }, i * 300)
            })
        } else {
            dispatch(setErrorToast("Registration failed"))
        }
    }
};

// Login user
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post('/api/auth/login', user);

        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        const fullName = result.data.user.fullName
        dispatch(setSuccessToast(`Welcome back ${fullName} 😎`));
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
        const errorResponse = error.response.data;
        if (errorResponse) {
            errorResponse.errors.forEach((e,i) => {
                setTimeout(() => {
                    dispatch(setErrorToast(e.msg))
                }, i * 300)
            })
        } else {
            dispatch(setErrorToast("Login failed"))
        }
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
export const logout = (navigate) => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
    navigate('/');
};

// Update user profile
export const updateUserProfile = (formData) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {

        const result = await axios.post('/api/auth/updateProfile', formData, {
            headers: { 'Content-Type': 'multipart/form-data', Authorization: localStorage.getItem('token')}
        });

        dispatch({ type: UPDATE_USER_PROFILE, payload: result.data.user });
        localStorage.setItem('user', JSON.stringify(result.data.user));
        dispatch(setSuccessToast('User profile updated successfully'));
    } catch (error) {
        console.log(error)
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors || error.message });
    }
};