// The necessary imports
import axios from 'axios';
import { ADD_TO_CART, CLEAR_CART, LOAD_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actionTypes/cartActionTypes';

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
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    } catch (error) {
        console.error(error);
    }
};

// 🔹 Update Cart Item
export const updateCartItem = (id, quantity) => (dispatch, getState) => {
    dispatch({ type: UPDATE_CART_ITEM, payload: { id, quantity }
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

// 🔹 Remove Item from Cart
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

// 🔹 Clear Cart
export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART });

    localStorage.removeItem('cartItems');
};