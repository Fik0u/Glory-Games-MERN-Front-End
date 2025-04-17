import React from 'react';
import { Card, Button } from 'react-bootstrap';
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
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ product.image } />
      <Card.Body>
        <Card.Title>{ product.name }</Card.Title>
        <Card.Text>
          { product.description }
          <br />
          { product.price } $
        </Card.Text>
        {admin ? (
          <>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to = {`/product/${product._id}`}>
        <Button variant="primary">Details</Button>
        </Link>
        <EditProd product = { product } />
        <Button variant='danger' onClick={handleDelete}>Delete</Button>
        </div>
          </>
        ) : (
          <Link to = {`/product/${product._id}`}>
          <Button variant="primary">Details</Button>
          </Link>
        )}

      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
