import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyOrders } from '../JS/actions/orderAction';
import { Link } from 'react-router-dom';
    
    const MyOrders = () => {
        const dispatch = useDispatch();
        const myOrders = useSelector(state => state.orderReducer.myOrders);
        // console.log(myOrders)
        
        useEffect(() => {
            dispatch(getMyOrders())
        }, [dispatch]);

        return (
            <div>
              <h2>Your orders</h2>
              {myOrders && myOrders.length > 0 ? (
                myOrders.map(order => (
                  <div key={order._id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>

                    <p><strong>Order Total:</strong> {order.total} $</p>
                    <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                    <p><strong>Payment Method:</strong> {order.paymentMethod}</p>

                    <h4>📦 Products:</h4>
                    {order.products.map((item, index) => (
                      <div key={index} style={{ marginLeft: "20px" }}>
                        <p><strong>{item.product.name}</strong></p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.product.price} $</p>
                      </div>
                    ))}
                    <Link to = {`/order/${order._id}`}>
                        <button>Voir les détails</button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No orders yet</p>
              )}
            </div>
          );
        };
        
        export default MyOrders;
