// The necessary imports
import axios from 'axios';
import { ADD_TO_CART, CLEAR_CART, LOAD_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actionTypes/cartActionTypes';
import { setErrorToast, setSuccessToast } from './toastAction';

//! Action Creators

// 🔹 Add to Cart
export const addToCart = (product, quantity) => async (dispatch, getState) => {
    dispatch({ type: LOAD_CART });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.post('/api/cart/addToCart', { productId: product._id, quantity }, config);
        dispatch({ type: ADD_TO_CART, payload: { product, quantity }});
        dispatch(setSuccessToast('Product added to cart'));
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    } catch (error) {
        dispatch(setErrorToast("Couldn't add product to cart"))
        console.error(error);
    }
};

// 🔹 Update Cart Item
export const updateCartItem = (id, quantity) => async (dispatch, getState) => {
    dispatch({ type: LOAD_CART });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        // console.log(id)
        const result = await axios.put(`/api/cart/${id}`, { quantity }, config);

        dispatch({ type: UPDATE_CART_ITEM, payload: { id, quantity }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    } catch (error) {
        console.error(error)
    }
};

// 🔹 Remove Item from Cart
export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({ type: LOAD_CART });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.delete(`/api/cart/${id}`, config);
        dispatch({ type: REMOVE_FROM_CART, payload: id });
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    } catch (error) {
        console.error(error)
    }

};

// 🔹 Clear Cart
export const clearCart = () => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.put('/api/cart/clearCart', {}, config);
        dispatch({ type: CLEAR_CART });
        localStorage.removeItem('cartItems');
    } catch (error) {
        console.error(error);
    }

};