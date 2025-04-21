import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyOrders } from '../JS/actions/orderAction';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
    
    const MyOrders = () => {
        const dispatch = useDispatch();
        const myOrders = useSelector(state => state.orderReducer.myOrders);
        // console.log(myOrders)
        
        useEffect(() => {
            dispatch(getMyOrders())
        }, [dispatch]);

        return (
          <div>
            <h2>Order History</h2>
            {myOrders && myOrders.length > 0 ? (
              myOrders.map(order => (
                <Card key={order._id} style={{ marginBottom: "20px", padding: "20px", borderRadius: "10px" }}>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div style={{ fontWeight: 'bold' }}>
                        <p>Order ID: <span style={{ color: '#007bff' }}>{order._id}</span></p>
                        <p><strong>Status:</strong> {order.status}</p>
                      </div>
                      <div>
                        <p><strong>Total:</strong> {order.total} $</p>
                        <p><strong>Shipping:</strong> {order.shippingAddress}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod}</p>
                      </div>
                    </div>
      
                    <h5>📦 Products:</h5>
              {order.products.map((item, index) => (
                <div key={index} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={{ fontWeight: 'bold', marginBottom: 0 }}>{item.product.name}</p>
                    <div className="d-flex align-items-center">
                      <p style={{ marginRight: "10px", marginBottom: 0 }}>Quantity: {item.quantity}</p>
                      <p style={{ marginBottom: 0 }}>Price: {item.product.price} $</p>
                    </div>
                  </div>
                </div>
              ))}
      
                    <div className="d-flex justify-content-end">
                      <Link to={`/order/${order._id}`}>
                        <Button variant="info" size="sm">Details</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No orders yet</p>
            )}
          </div>
        );
      };
      
      export default MyOrders;