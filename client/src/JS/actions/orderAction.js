// The necessary imports
import axios from 'axios';
import { ADD_ORDER, FAIL_ORDER, GET_ALL_ORDERS, GET_MY_ORDERS, GET_ONE_ORDER, LOAD_ORDER, UPDATE_STATUS_ORDER } from "../actionTypes/orderActionTypes";
import { clearCart } from './cartAction';
import { setErrorToast, setSuccessToast } from './toastAction';


//! Action Creators

// Add new order
export const addOrder = (newOrder, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_ORDER });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };

        const result = await axios.post('/api/order/addOrder', newOrder, config);
        dispatch({ type: ADD_ORDER, payload: result.data });
        dispatch(clearCart());
        dispatch(setSuccessToast('Order placed successfully 🫡'))
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors || error.message });
        dispatch(setErrorToast('Failed to place order 🫤'))
    }
};

// Get User's Orders
export const getMyOrders = () => async (dispatch) => {
    dispatch({ type: LOAD_ORDER });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.get('/api/order/myOrders', config);
        dispatch({ type: GET_MY_ORDERS, payload: result.data.orders });
        // console.log(result.data)
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors || error.message })
    }
};

// Get All Orders (Admin Only)
export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: LOAD_ORDER });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.get('/api/order/all', config);
        dispatch({ type: GET_ALL_ORDERS, payload: result.data.orders });
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors || error.message })
    }
};

// Get One Order
export const getOneOrder = (id) => async (dispatch) => {
    dispatch({ type: LOAD_ORDER });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.get(`/api/order/${id}`, config);
        dispatch({ type: GET_ONE_ORDER, payload: result.data.order });
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors || error.message })
    }
};

// Update Order Status (admin only)
export const updateOrderStatus = (id, status) => async (dispatch) => {
    dispatch({ type: LOAD_ORDER });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.put(`/api/order/${id}`, { status }, config);
        dispatch({ type: UPDATE_STATUS_ORDER, payload: result.data.order });
        dispatch(setSuccessToast(`Order marked as ${status}`));
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors || error.message });
        dispatch(setErrorToast("Failed to update order status"));
    }
};