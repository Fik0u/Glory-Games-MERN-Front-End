import React from 'react'
import Product from './Product'

const ProdsList = ({ products }) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '60px'}}>

      {products.map((product) => <Product key = {product._id} product = {product} />)}

    </div>
  )
}

export default ProdsList
