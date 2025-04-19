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
      return <p>Order not found</p>
    };

  return (
    <div className='container'>
      <h2>Order Details</h2>
        <table>
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {order.products.map((item, index) => (
                    <tr key={index}>
                        <td>{item.product.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity} $</td>
                    </tr>
                ))}
            </tbody>
        </table>

      <h4>Total Amount : {order.total} $</h4>
    </div>
  )
}

export default OrderDetails
