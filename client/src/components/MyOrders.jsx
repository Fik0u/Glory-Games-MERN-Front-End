import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyOrders } from '../JS/actions/orderAction';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
    
    const MyOrders = () => {
        const dispatch = useDispatch();
        const myOrders = useSelector(state => state.orderReducer.myOrders);

        
        useEffect(() => {
            dispatch(getMyOrders())
        }, [dispatch]);

        const styles = {
          container: {
            padding: '40px',
            backgroundColor: '#f4f6f8',
            minHeight: '100vh',
        },
        title: {
            fontSize: '36px',
            color: '#333',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: 'center',
        },
        link: {
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
        },
        card: {
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
        },
        cardHover: {
          transform: 'scale(1.02)',
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
          opacity: 0.95,
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
        },
        statusText: {
            fontWeight: 'bold',
            color: '#28a745', // Green for success status
        },
        totalAmount: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e3c72',
            marginBottom: '15px',
        },
        noOrdersMessage: {
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#888',
            marginTop: '30px',
        },
        productCard: {
            marginBottom: '10px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
        },
        productDetails: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        productText: {
            fontWeight: 'bold',
            marginBottom: '0',
        },
        };

        const [hoveredOrderId, setHoveredOrderId] = useState(null);

        return (
          <div style={styles.container}>
            <h2 style={styles.title}> 🛒 Order History</h2>
            {myOrders && myOrders.length > 0 ? (
              myOrders.map(order => (
                <Link key={order._id} to={`/order/${order._id}`} style={styles.link} onMouseEnter={()=> setHoveredOrderId(order._id)} onMouseLeave={() => setHoveredOrderId(null)}
                >

                <Card style={{ ...styles.card, ...(hoveredOrderId === order._id ? styles.cardHover : {}) }}>

                  <Card.Body>
                    <div style={styles.cardHeader}>
                      <div>
                        <p style={styles.productText}>Order ID: <span style={{ color: '#007bff' }}>{order._id}</span></p>
                        <p><strong>Status:</strong> <span style={styles.statusText}>{order.status}</span></p>
                      </div>
                      <div>
                        <p style={styles.totalAmount}><strong>Total:</strong> {order.total} $</p>
                        <p><strong>Shipping:</strong> {order.shippingAddress}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod}</p>
                      </div>
                    </div>
      
                    <h5>📦 Products:</h5>
              {order.products.map((item, index) => (
                <div key={index} style={styles.productCard}>
                  <div style={styles.productDetails}>
                    <p style={styles.productText}>{item.product.name}</p>

                    <div>
                      <p style={{ fontWeight: 'bold', marginRight: "10px", marginBottom: 0 }}>Quantity: {item.quantity}</p>
                      <p style={{ fontWeight: 'bold', marginBottom: 0 }}>Price: {item.product.price} $</p>
                    </div>
                  </div>
                </div>
              ))}
                  </Card.Body>
                </Card>
                </Link>
              ))
            ) : (
              <p style={styles.noOrdersMessage}>No orders yet</p>
            )}
          </div>
        );
      };
      
      export default MyOrders;