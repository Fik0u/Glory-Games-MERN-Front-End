import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editProd } from '../JS/actions/prodAction';
import { EditOutlined } from '@ant-design/icons';

const EditProd = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedProd, setEditedProd] = useState({
        name: product.name,
        description: product.description,
        price: '',
        oldPrice: product.price || '',
        isSale: product.isSale || false,
        category: product.category || '',
        subcategory: product.subcategory || '',
        image: product.image

    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setEditedProd({ ...editedProd, [e.target.name]: e.target.value })
    };
    
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editProd(product._id, editedProd));
        handleClose();
    };
    

  return (
    <div>
      <EditOutlined onClick={handleShow} style={{ fontSize: '1.3rem', color: '#52c41a', cursor: 'pointer', backgroundColor: '#f0f0f0', borderRadius: '50%', padding: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', transition:'all 0.3s ease', display:'inline-flex', alignItems: 'center', justifyContent: 'center' }}  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#e6f7ff';
    e.currentTarget.style.transform = 'scale(1.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#f0f0f0';
    e.currentTarget.style.transform = 'scale(1)';
  }} title='Edit Product' />
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Name" name='name' value={editedProd.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Description" name='description' value={editedProd.description} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Price" name='price' value={editedProd.price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Old Price (Optional)" name='oldPrice' value={editedProd.oldPrice || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label='On Sales' name='isSale' value={editedProd.isSale} onChange={(e) => setEditedProd({ ...editedProd, isSale: e.target.checked })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Category" name='category' value={editedProd.category || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Sub-category" name='subcategory' value={editedProd.subcategory || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Image" name='image' value={editedProd.image} onChange={handleChange} />
      </Form.Group>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditProd
