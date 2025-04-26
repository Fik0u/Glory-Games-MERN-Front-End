import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getProds } from '../JS/actions/prodAction';

const CategoryProd = () => {

    const { category, subcategory } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(state => state.prodReducer.prodsList);

    useEffect(() => {

      dispatch(getProds())
    }, [dispatch])
    
    const capitalize = str => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    
    const filteredProducts = products.filter(
      prod => prod.category?.toLowerCase() === category?.toLowerCase() && prod.subcategory?.toLowerCase() === subcategory?.toLowerCase()
    );




  return (
<div style={{
  display: 'flex',
  flexDirection: 'row', // éléments en ligne
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '80px', // espace en haut
  padding: '2rem',
}}>


    
      
   
      {/* Products  */}
      <div>
        {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
                <Product key={prod._id} product = {prod} />
            ))
        ) : (
            <p>No Products Found In This Category 🤷‍♂️</p>
        )}
      </div>
    </div>
  )
}

export default CategoryProd
