import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditProd from './EditProd';
import { useDispatch } from 'react-redux';
import { deletedProd } from '../JS/actions/prodAction';



const Product = ({ product, admin }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete this product ?')) {
      dispatch(deletedProd(product._id))
    }
  };

  return (
      <Card style={{ width: '19rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', position: 'relative', transition: 'transform 0.3s ease', cursor: 'pointer' }} className='product-card mb-4' >

        {product.isSale && (
          <Badge bg='danger' style={{ position: 'absolute', top:'10px', right: '10px', fontSize: '0.8rem', zIndex: 2 }}>
            Sale
          </Badge>
        )}
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
      <Card.Img variant="top" src={ product.image } style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className='text-center'>{ product.name }</Card.Title>
        <Card.Text className='text-center'>
          {product.isSale ? (
            <>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{product.price} $</span>
              <br />
              <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '0.9rem' }}>{product.oldPrice} $</span>
            </>
          ): (
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{product.price} $</span>
          )}
          </Card.Text>
        </Card.Body>
      </Link>

      {admin && (

        <div className='d-flex justify-content-around pb-3'>
          <Link to = {`/product/${product._id}`}></Link>
        <EditProd product = { product } />
        <Button variant='danger' size='sm' onClick={handleDelete}>
          Delete
        </Button>
        </div>
      )}

    </Card>
  )
}

export default Product
