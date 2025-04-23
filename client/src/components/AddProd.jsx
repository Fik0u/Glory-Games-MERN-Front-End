import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProd } from '../JS/actions/prodAction';

const AddProd = () => {
    const [newProd, setNewProd] = useState({
        name: '',
        description: '',
        category: '',
        subCategory: '',
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
    <div className='container m-8'>

    <Form onSubmit={handleAdd}>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Name" name='name' value={newProd.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Description" name='description' value={newProd.description} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Category" name='category' value={newProd.category} onChange={handleChange} />
        </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Sub-category" name='subCategory' value={newProd.subCategory} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='number' placeholder="Price" name='price' value={newProd.price} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder="Image" name='image' value={newProd.image} onChange={handleChange} />
        </Form.Group>
        
        <Button type="submit">Add Product</Button>
    </Form>
    </div>
  )
}

export default AddProd
