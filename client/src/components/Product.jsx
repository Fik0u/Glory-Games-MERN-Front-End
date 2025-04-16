import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Product = ({ product }) => {
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
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
