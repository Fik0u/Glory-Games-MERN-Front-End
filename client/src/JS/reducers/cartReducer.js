import { ADD_TO_CART, CLEAR_CART, FAIL_CART, LOAD_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../actionTypes/cartActionTypes";


const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
    isLoad: false,
    cartItems: cartItemsFromStorage,
    totalAmount: cartItemsFromStorage.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CART: return { ...state, isLoad: true };

        case ADD_TO_CART: {
            const exist = state.cartItems.find(item => item.product._id === payload.product._id);
            let updatedCartItems;

            if (exist) {
                updatedCartItems = state.cartItems.map(item => item.product._id === payload.product._id 
                    ? { ...item, quantity: item.quantity + payload.quantity } : item);
                } else {
                    updatedCartItems = [...state.cartItems, payload]
                }
                
                const totalAmount = updatedCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

                return { ...state, isLoad: false, cartItems: updatedCartItems, totalAmount }
            };
        
        case UPDATE_CART_ITEM: {
            const updatedCartItems = state.cartItems.map(item => item.product._id === payload.id ? { ...item, quantity: payload.quantity} : item);

            const totalAmount = updatedCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

            return { ...state, isLoad: false, cartItems: updatedCartItems, totalAmount }};

        case REMOVE_FROM_CART: {
            const updatedCartItems = state.cartItems.filter(item => item.product._id !== payload);

            const totalAmount = updatedCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

            return { ...state, isLoad: false, cartItems: updatedCartItems, totalAmount }
        };

        case CLEAR_CART: return { ...state, isLoad: false, cartItems: [], totalAmount: 0 };

        case FAIL_CART: return { ...state, isLoad: false };
    
        default: return state;
    }
};


export default cartReducer;