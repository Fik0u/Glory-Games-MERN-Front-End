// Imports of the necessary modules
import axios from 'axios';
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_ONE_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT, SEARCH_PRODUCTS } from "../actionTypes/prodActionTypes";
import { setErrorToast, setSuccessToast } from './toastAction';



//! Action creators

// Add new product
export const addProd = (newProd) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.post('/api/product/addProd', newProd, config);
        // console.log(newProd)
        dispatch({ type: ADD_PRODUCT, payload: result.data.newProduct });
        dispatch(setSuccessToast('Product added successfully'))
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
        dispatch(setErrorToast('Failed to add product'))
    }
};

// Get all products
export const getProds = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const result = await axios.get('/api/product/getProds');
        dispatch({ type: GET_PRODUCTS, payload: result.data.prodsList })
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Search products
export const searchProducts = (keyword) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT});
    try {
        const result = await axios.get(`/api/product/searchProd?keyword=${keyword}`);
        dispatch({ type: SEARCH_PRODUCTS, payload: result.data.products })
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};


// Get one product
export const getOneProd = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const result = await axios.get(`/api/product/${id}`);
        dispatch({ type: GET_ONE_PRODUCT, payload: result.data.oneProd})
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Edit a product
export const editProd = (id, editedProd) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.put(`/api/product/${id}`, editedProd, config);
        dispatch({ type: EDIT_PRODUCT, payload: result.data.editedProd })
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data})
    }
};

// Delete a product
export const deletedProd = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        const result = await axios.delete(`/api/product/${id}`, config);
        dispatch({ type: DELETE_PRODUCT, payload: result.data.deletedProd });
        dispatch(getProds());
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data})
    }
};
