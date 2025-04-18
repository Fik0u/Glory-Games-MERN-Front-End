import { ADD_TO_CART, CLEAR_CART, LOAD_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../actionTypes/cartActionTypes";


const initialState = {
    isLoad: false,
    cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CART: return { ...state, isLoad: true };

        case ADD_TO_CART: 
            const exist = state.cartItems.find(item => item.product._id === payload.product._id);
            if (exist) {
                return { ...state, cartItems: state.cartItems.map(item => item.product._id === payload.product._id ? { ...item, quantity: item.quantity + payload.quantity } : item), isLoad: false }
            } else {
                return { ...state, cartItems: [...state.cartItems, payload], isLoad: false }
            }
        
        case UPDATE_CART_ITEM: return { ...state, isLoad: false, cartItems: state.cartItems.map(item => item.product._id === payload.id ? { ...item, quantity: payload.quantity } : item)};

        case REMOVE_FROM_CART: return { ...state, isLoad: false, cartItems: state.cartItems.filter(item => item.product._id !== payload)};
        case CLEAR_CART: return { ...state, isLoad: false, cartItems: [] };
    
        default: return state;
    }
};


export default cartReducer;