import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { clearCart, removeFromCart, updateCartItem } from '../JS/actions/cartAction';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems);
// console.log(cartItems)

    useEffect(() => {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
        savedCartItems.forEach(item => {
          if (!cartItems.find(cartItem => cartItem.product._id === item.product._id)) {
          dispatch(updateCartItem(item.product._id, item.quantity));
      }
    });
  }
    }, [dispatch, cartItems]);


    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateCartItem(productId, Number(quantity)));
        //Update localStorage after changing quantity
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        localStorage.removeItem('cartItems')
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 😢 </p>
      ) : (
        cartItems.map((item) => (
            <div key={item.product._id}>
                <h4>{item.product.name}</h4>
                <p>Price: ${item.product.price}</p>
                <Form.Control type="number" value={item.quantity} min="1" onChange={(e) => handleQuantityChange(item.product._id, e.target.value)} />
                <p>Total: ${item.product.price * item.quantity}</p>   
                <Button variant='danger' onClick={() => handleRemove(item.product._id)}>Remove</Button>
            </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div>
            <h3>Total: ${totalPrice}</h3>
            <Button variant='warning' onClick={handleClearCart}>Clear Cart</Button>
            <Button variant='success'>Proceed to Checkout</Button>
        </div>
      )}
    </div>
  )
}

export default Cart
