import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const ProdsList = ({ products, admin }) => {
  const user = useSelector(state => state.authReducer.user);
  console.log(user)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '60px'}}>

      {products.map((product) => <Product key = {product._id} product = {product} admin = {admin} />)}

    </div>
  )
}

export default ProdsList
