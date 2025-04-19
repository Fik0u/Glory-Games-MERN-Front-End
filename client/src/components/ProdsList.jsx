import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const ProdsList = ({ products }) => {
  const user = useSelector(state => state.authReducer.user);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '60px'}}>

      {products.map((product) => <Product key = {product._id} product = {product} admin = {user.isAdmin} />)}

    </div>
  )
}

export default ProdsList
