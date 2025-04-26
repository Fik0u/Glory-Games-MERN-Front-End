import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from '../JS/actions/orderAction';


const OrderDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    // console.log(id)

    const order = useSelector(state => state.orderReducer.order);
    console.log(order)
    useEffect(() => {
        dispatch(getOneOrder(id))
    }, [dispatch, id]);

    if (!order || !order.products) {
      return <p style={{ textAlign: 'center', marginTop: '50px' }}>Order not found</p>
    };

    const styles = {
      container: {
        padding: '40px',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
        fontSize: '32px',
        color: '#333',
        marginBottom: '30px',
        fontWeight: 'bold',
      },
      tableContainer: {
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '90%',
        maxWidth: '800px',
        marginBottom: '30px',
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse',
      },
      th: {
        backgroundColor: '#1e3c72',
        color: 'white',
        padding: '15px',
        textAlign: 'left',
      },
      td: {
        padding: '15px',
        borderBottom: '1px solid #ddd',
      },
      totalAmount: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#1e3c72',
        marginTop: '20px',
      }
    };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📄 Order Details</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.th}>Product name</th>
                    <th style={styles.th}>Price</th>
                    <th style={styles.th}>Quantity</th>
                    <th style={styles.th}>Total</th>
                </tr>
            </thead>
            <tbody>
                {order.products.map((item, index) => (
                    <tr key={index}>
                        <td style={styles.td}>{item.product.name}</td>
                        <td style={styles.td}><strong>{item.price}</strong></td>
                        <td style={styles.td}><strong>{item.quantity}</strong></td>
                        <td style={styles.td}><strong>${item.price * item.quantity}</strong></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

      <div style={styles.totalAmount}> 
        🧾Total Amount : ${order.total} 
      </div>
    </div>
  )
}

export default OrderDetails
