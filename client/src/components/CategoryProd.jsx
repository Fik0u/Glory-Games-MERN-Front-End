import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getProds } from '../JS/actions/prodAction';
import { motion } from 'framer-motion';

const CategoryProd = () => {

    const { category, subcategory } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(state => state.prodReducer.prodsList);
    const user = useSelector(state => state.authReducer.user);

    useEffect(() => {

      dispatch(getProds())
    }, [dispatch])
    
    
    const filteredProducts = products.filter(
      prod => prod.category?.toLowerCase() === category?.toLowerCase() && prod.subcategory?.toLowerCase() === subcategory?.toLowerCase()
    );


  return (
    <div style={{  padding: '2rem', minHeight: '100vh', background: 'linear-gradient(to bottom, #dbe6f1, #f5f9ff)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', color: '#333' }}>

    <h1 style={{ marginTop:'80px', textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '1px' }}>
      {subcategory} {category}
    </h1>

      {/* Products  */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem', justifyContent: 'center', padding: '1rem' }}>

        {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
              <motion.div key={prod._id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ maxWidth: '320px', margin: '0 auto' }} >

                <Product product = {prod} admin={user?.isAdmin} />

              </motion.div>
            ))
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Products Found In This Category 🤷‍♂️</p></div>
        )}
      </div>
    </div>
  )
}

export default CategoryProd
