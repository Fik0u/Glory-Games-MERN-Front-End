import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../JS/actions/adminAction';
import { Button, Modal } from 'react-bootstrap';


const UserDelete = ({ show, handleClose, userId}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(userId));
        handleClose()
    };

  return (
    <div>
      <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UserDelete
