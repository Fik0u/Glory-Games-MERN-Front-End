// These are the actions that admin could do on users' accounts. Either display all the users list, or just one user account with its informations, and the possibility to delete his account.
// The necessary imports
import axios from 'axios';
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/adminActionTypes";
import { setErrorToast, setSuccessToast } from './toastAction';



//! Action Creators

// Get all users list
export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                Authorization : localStorage.getItem('token')
            }
        };
        const result = await axios.get('/api/admin/users', config);
        dispatch({ type: GET_ALL_USERS, payload: result.data.usersList });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
};

// Get one user
export const getOneUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                Authorization : localStorage.getItem('token')
            }
        };
        const result = await axios.get(`/api/admin/${id}`, config);
        dispatch({ type: GET_USER, payload: result.data.getUser });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                Authorization : localStorage.getItem('token')
            }
        };
        const result = await axios.delete(`/api/admin/${id}`, config);
        dispatch({ type: DELETE_USER, payload: result.data.deletedUser });
        dispatch(setSuccessToast('User deleted successfully 💀'))
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        dispatch(setErrorToast("Couldn't delete user 😢"));
    }
};