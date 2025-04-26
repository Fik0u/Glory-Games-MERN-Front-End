import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, updateOrderStatus } from '../JS/actions/orderAction';
import { Link } from 'react-router-dom';

const AllOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orderReducer.orders);
    const [statusUpdate, setStatusUpdate] = useState({});

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch]);

    useEffect(() => {
      if (orders && orders.length > 0) {
        const initialStatus = {};
        orders.forEach(order => {
          initialStatus[order._id] = order.status
        });
        setStatusUpdate(initialStatus)
      }
    }, [orders]);

    const handleStatusChange = (orderId, newStatus) => {
      setStatusUpdate(prev => ({ ...prev, [orderId]: newStatus }))
    };

    const handleUpdate = (orderId) => {
      const newStatus = statusUpdate[orderId]
      if (newStatus) {
        dispatch(updateOrderStatus(orderId, newStatus))
        setStatusUpdate(prev => ({ ...prev, [orderId]: newStatus }))
      }
    };

    const styles = {
      container: {
        padding: '40px',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
      },
      title: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '40px',
      },
      ordersGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      },
      orderCard: {
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s',
      },
      orderInfo: {
        marginBottom: '20px',
        color: '#555',
      },
      orderText: {
        marginBottom: '10px',
      },
      actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
      },
      select: {
        width: '100%',
        padding: '8px',
        margin: '8px 0',
        borderRadius: '6px',
        border: '1px solid #ccc',
      },
      buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '10px',
      },
      updateButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '30%',
      },
      viewDetailsButton: {
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '6px',
        textDecoration: 'none',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '14px',
        width: '30%',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      noOrdersText: {
        textAlign: 'center',
        color: '#777',
        fontSize: '18px',
      }
    };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}> 📦All Orders</h2>

        {orders && orders.length > 0 ? (
          <div style={styles.ordersGrid}>
            {orders.map(order => (
                <div key={order._id} style={styles.orderCard}>
                  <div style={styles.orderInfo}>
                  <p style={styles.orderText}><strong>👤 Customer: {order.user.fullName}</strong></p>
                  <p style={styles.orderText}><strong>💰 Total: ${order.total}</strong></p>
                  <p style={styles.orderText}><strong>🚚 Status: {order.status}</strong></p>
                  </div>

                <div style={styles.actions}>
                  <label style={{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>Update Status:</label>
                  <select value={statusUpdate[order._id] || order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)} style={styles.select}>
                    <option value="In preparation">In Preparation</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>

                  <div style={styles.buttonGroup}>
                    <button onClick={() => handleUpdate(order._id)} style={styles.updateButton}>Update</button>
                    <Link to={`/order/${order._id}`} style={styles.viewDetailsButton}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        ) : (
            <p style={styles.noOrdersText}>No orders available</p>
        )}

    </div>
  )
}

export default AllOrders;
