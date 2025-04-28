import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditProd from './EditProd';
import { useDispatch } from 'react-redux';
import { deletedProd } from '../JS/actions/prodAction';
import { DeleteOutlined } from '@ant-design/icons';



const Product = ({ product, admin }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete this product ?')) {
      dispatch(deletedProd(product._id))
    }
  };

  return (
    <Card 
    style={{ 
      width: '18rem', 
      borderRadius: '20px', 
      overflow: 'hidden', 
      boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)', 
      position: 'relative', 
      transition: 'transform 0.3s ease', 
      cursor: 'pointer' 
    }} 
    className='product-card mb-4'
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 10px 45px rgba(0, 153, 255, 0.5)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
    }}
  >
    {product.isSale && (
      <Badge 
        bg='danger' 
        style={{ 
          position: 'absolute', 
          top: '12px', 
          right: '12px', 
          fontSize: '0.9rem', 
          zIndex: 2 
        }}
      >
        Sale
      </Badge>
    )}
  
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card.Img 
        variant="top" 
        src={product.image} 
        style={{ 
          height: '300px', 
          objectFit: 'cover' 
        }} 
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title 
          className='text-center' 
          style={{ 
            height: '70px', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis' 
          }}
        >
          {product.name}
        </Card.Title>
  
        <Card.Text 
          className='text-center' 
          style={{ 
            height: '50px', 
            overflow: 'hidden' 
          }}
        >
          {product.isSale ? (
            <>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                {product.price} $
              </span>
              <br />
              <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '1rem' }}>
                {product.oldPrice} $
              </span>
            </>
          ) : (
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              {product.price} $
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Link>
  
    {admin && (
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
        <Link to={`/product/${product._id}`}></Link>
        <EditProd product={product} />
  
        <DeleteOutlined 
          style={{ 
            fontSize: '1.4rem', 
            color: '#ff4d4f', 
            cursor: 'pointer', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '50%', 
            padding: '10px', 
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)', 
            transition: 'all 0.3s ease', 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginLeft: '40px' 
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#ffe6e6';
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f9f9f9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title="Delete Product"
          onClick={handleDelete}
        />
      </div>
    )}
  </Card>
  
  )
}

export default Product
