import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, updateOrderStatus } from '../JS/actions/orderAction';
import { Link } from 'react-router-dom';


const AllOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orderReducer.orders);
    // console.log(orders)
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


  return (
    <div className='container m-8'>
      <h2> 📦All Orders</h2>

        {orders && orders.length > 0 ? (
            orders.map(order => (
                <div key={order._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
                  <p><strong>👤 Customer: {order.user.fullName}</strong></p>
                  <p><strong>💰 Total: ${order.total}</strong></p>
                  <p><strong>🚚 Status: {order.status}</strong></p>

                <div>
                  <label>Update Status:</label>
                  <select value={statusUpdate[order._id] || order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)}>
                    <option value="In preparation">In Preparation</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <button onClick={() => handleUpdate(order._id)}>Update</button>
                </div>
                <Link to={`/order/${order._id}`} style={{ padding: "5px 10px", background: "#4CAF50", color: "white", borderRadius: "5px", textDecoration: "none" }}>
                            View Details
                </Link>
                </div>
            ))
        ) : (
            <p>No orders available</p>
        )}

    </div>
  )
}

export default AllOrders;
