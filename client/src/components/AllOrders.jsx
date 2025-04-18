import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../JS/actions/orderAction';

const AllOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orderReducer.orders);

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch]);


  return (
    <div>
      <h2>All Orders</h2>
      <ul>
        {orders && orders.length > 0 ? (
            orders.map(order => (
                <div key={order._id}>
                    <p>Order total: ${order.total}</p>
                    {order.products.map(item => (
                        <div key={item.product._id}>
                            <p>Product: {item.product.name}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            ))
        ) : (
            <p>No orders available</p>
        )}
      </ul>
    </div>
  )
}

export default AllOrders;
