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
      if (!orderDetails.address || !orderDetails.paymentMethod) {
        alert('Please fill in all fields');
        return;
      }
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
      setProcessing(false)
    };

    const styles = {
      container: {
        padding: '40px',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        borderRadius: '10px',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      heading: {
        fontSize: '28px',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
      },
      formSection: {
        marginBottom: '20px',
        width: '60%'
      },
      label: {
        fontSize: '18px',
        marginBottom: '10px',
        display: 'block',
      },
      input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
      },
      select: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
      },
      orderSummary: {
        marginBottom: '30px',
      },
      orderItem: {
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '10px',
      },
      totalAmount: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1e3c72',
        marginBottom: '20px',
      },
      button: {
        background: 'linear-gradient(135deg, #0f2027, #2c5364)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '16px',
        width: '50%',
        maxWidth: '200px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        marginTop: '20px',
        boxShadow: '0 0 10px #2c5364, 0 0 20px #0f2027'
      },
      buttonDisabled: {
        backgroundColor: '#ddd',
        cursor: 'not-allowed',
      },
      buttonHover: {
        background: 'linear-gradient(135deg, #2c5364, #0f2027)',
        boxShadow: '0 0 20px #2c5364, 0 2px #0f2027',
      },
      processingMessage: {
        color: '#28a745',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '20px',
      },
      noItemsMessage: {
        textAlign: 'center',
        color: '#888',
        fontWeight: 'bold',
      },
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Place Your Order</h3>

      <div style={styles.formSection}>
      <label style={styles.label}>Shipping Address</label>
      <input type='text' name='address' placeholder='Enter the address' value={orderDetails.address} onChange={handleInputChange} required style={styles.input} />
      </div>

      <div style={styles.formSection}>
      <label style={styles.label}>Payment Method</label>
      <select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleInputChange} style={styles.select} required >
        <option value="Credit Card">Credit Card</option>
        <option value="Paypal">Paypal</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>
      </div>

      <div style={styles.orderSummary}>
      <h4>Order Summary</h4>
        {cartItems.map(item => (
          <div key={item.product._id} style={styles.orderItem}>
            <p>{item.product.name} - {item.quantity} x {item.product.price} $</p>
          </div>
        ))}

          <p style={styles.totalAmount}>Total : {totalAmount} $</p>
      </div>

      <button onClick={handlePlaceOrder} disabled={processing} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ ...styles.button, ...(processing ? styles.buttonDisabled : {}), ...(isHovered ? styles.buttonHover : {} )}} >
        {processing ? 'Processing...' : 'Place Order'}
      </button>

      {processing && <p style={styles.processingMessage}>Your order is being processed...</p>}
      {cartItems.length === 0 && <p style={styles.noItemsMessage}>No items in the cart to order</p>}

    </div>
  )
}

export default AddOrder
