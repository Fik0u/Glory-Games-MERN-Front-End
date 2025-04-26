import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { clearCart, removeFromCart, updateCartItem } from '../JS/actions/cartAction';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleCheckout = () => {
      navigate('/order')
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#f4f4f4',
        color: '#333',
        minHeight: '100vh',
        gap: '30px'
      },
      cartItemsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        gap: '20px'
      },
      cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        gap: '10px',
        flexWrap: 'wrap' // permet de passer sur plusieurs lignes en petits écrans
      },
      actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap', // pour éviter l'écrasement
        gap: '10px'
      },
      totalContainer: {
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '15px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        width: '300px',
        maxWidth: '90%' // pour être plus petit sur mobile
      },
      buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      },
      // Partie responsive
      '@media (max-width: 768px)': {
        cartItemsContainer: {
          width: '95%'
        },
        cartItem: {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        },
        actions: {
          flexDirection: 'column',
          gap: '10px'
        },
        totalContainer: {
          width: '90%'
        }
      }
    };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '2.5rem', color: '#3A5BA0'}}>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>Your cart is empty 😢 </p>
      ) : (
        <div style={styles.cartItemsContainer}>
        {cartItems.map((item) => (
            <div key={item.product._id} style={styles.cartItem} >
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.product.name}</h4>

                <p>Price: ${item.product.price}</p>

                <Form.Control type="number" value={item.quantity} min="1" onChange={(e) => handleQuantityChange(item.product._id, e.target.value)} style={{ width: '80px' }} />

                <p>Total: ${(item.product.price * item.quantity).toFixed(2)}</p>  

              <div style={styles.actions}>
                <Button variant='danger' onClick={() => handleRemove(item.product._id)}>Remove</Button>
                </div>   
            </div>
        ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={styles.totalContainer}>
            <h3>Total: <span style={{ color:'#0cf' }}> ${totalPrice.toFixed(2)}</span></h3>
            <div style={styles.buttonContainer}>
            <Button variant='warning' onClick={handleClearCart} style={{ background: 'linear-gradient(135deg, #5e7e9f, #3a5ba0)', border: 'none', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', transition: 'background 0.3s ease-in-out' }}>Clear Cart</Button>
            <Button variant='success' onClick={handleCheckout}>Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
