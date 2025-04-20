import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../JS/actions/orderAction';

const AddOrder = () => {

    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const totalAmount = useSelector(state => state.cartReducer.totalAmount);

    const [orderDetails, setOrderDetails] = useState({
      address: '',
      paymentMethod: 'Credit Card',
    });
    
    const [processing, setProcessing] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOrderDetails(prevState => ({
        ...prevState, [name]: value
      }))
    };

    const handlePlaceOrder = () => {
      if (cartItems.length === 0) {
        alert('Your cart is empty, add items to checkout')
        return;
      };
      setProcessing(true);

      const newOrder = {
        products: cartItems.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        total: totalAmount,
        shippingAddress : orderDetails.address,
        paymentMethod: orderDetails.paymentMethod
      };

      dispatch(addOrder(newOrder, navigate));
      alert('Order placed successfully 🫡')
      setProcessing(false)
    };


  return (
    <div>
      Place Your Order
      <h3>Shipping Address</h3>
      <input type='text' name='address' placeholder='Enter the address' value={orderDetails.address} onChange={handleInputChange} required />

      <h3>Payment Method</h3>
      <select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleInputChange}>
        <option value="Credit Card">Credit Card</option>
        <option value="Paypal">Paypal</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>

      <h3>Order Summary</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.product._id}>
              {item.product.name} - {item.quantity} x {item.product.price} $
          </li>
        ))}
      </ul>
      <h4>Total : {totalAmount} $</h4>

      <button onClick={handlePlaceOrder} disabled={processing}>
        {processing ? 'In Processing...' : 'Place Order'}
      </button>
    </div>
  )
}

export default AddOrder
