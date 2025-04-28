import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProd } from '../JS/actions/prodAction';
import { addToCart } from '../JS/actions/cartAction';
import './styles/ProdDetails.css';



const ProdDetails = () => {


    const params = useParams();
    const dispatch = useDispatch();
    const prod = useSelector(state => state.prodReducer.prod);

    const handleAddToCart = () => {
      dispatch(addToCart(prod, 1))
    };
  
    useEffect(() => {
        dispatch(getOneProd(params.id))
    }, [dispatch, params.id]);

    return (
<div className='prod-details-container'>
  <img
    src={prod.image}
    alt={prod.name}
    className='prod-image'  />
  
  <div className='prod-info'>
    <h3 className='prod-title'>
      {prod.name}
    </h3>

    <p className='prod-description'>
      {prod.description}
    </p>

    <p>
      <strong className='prod-price'>{prod.price} $</strong>
    </p>

    <button className='add-to-cart-btn'
      onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>
</div>     
  )
}

export default ProdDetails
