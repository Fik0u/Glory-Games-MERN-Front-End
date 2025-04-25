import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProd } from '../JS/actions/prodAction';

const AddProd = () => {
    const [newProd, setNewProd] = useState({
        name: '',
        description: '',
        category: '',
        subcategory: '',
        price: 0,
        image: ''
    });
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewProd({ ...newProd, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addProd(newProd));
    }
  return (
    <div className='container py-4 px-3 px-md-5'>

    <Form onSubmit={handleAdd} style={{ display:'grid', gap:'16px', backgroundColor: '#e5e7eb', padding:'24px', borderRadius:'12px', boxShadow:'0 4px 12px rgba(0, 0, 0, 0.05)', maxWidth:'600px', margin:'0 auto' }}>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Name" name='name' value={newProd.name} onChange={handleChange} className='rounded-3 border-0 shadow-sm' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Description" name='description' value={newProd.description} onChange={handleChange} className='rounded-3 border-0 shadow-sm' />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Category" name='category' value={newProd.category} onChange={handleChange} className='rounded-3 border-0 shadow-sm' />
        </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Sub-category" name='subcategory' value={newProd.subcategory} onChange={handleChange} className='rounded-3 border-0 shadow-sm' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='number' placeholder="Price" name='price' value={newProd.price} onChange={handleChange} min={0} className='rounded-3 border-0 shadow-sm' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Image" name='image' value={newProd.image} onChange={handleChange} className='rounded-3 border-0 shadow-sm' />
        </Form.Group>
        
        <Button type="submit" style={{ background:'linear-gradient(45deg, #6a5acd, #2563eb)', border: 'none', width:'200px', margin:'0 auto', padding: '10px 20px', borderRadius:'8px', fontWeight: 'bold', color: 'white', boxShadow:'0 0 15px rgba(38, 198, 218, 0.6)', transition: 'all 0.3s ease-in-out', textTransform: 'uppercase', letterSpacing:'1px', fontSize:'16px', cursor: 'pointer', outline:'none' }}
        onMouseEnter={(e) => e.target.style.boxShadow = '0 0 25px rgba(38, 198, 218, 1)'}
        onMouseLeave={(e) => e.target.style.boxShadow = '0 0 15px rgba(38, 198, 218, 0.6)'} >
          Add Product</Button>
    </Form>
    </div>
  )
}

export default AddProd
