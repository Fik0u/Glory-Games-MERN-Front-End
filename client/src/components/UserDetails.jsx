import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { getOneUser } from '../JS/actions/adminAction';


const UserDetails = ({ show, handleClose, userId }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.adminReducer.user);



    useEffect(() => {

     dispatch(getOneUser(userId))
        
    }, [dispatch, userId]);

  return (
    <div>

        <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           
                <div style={{ textAlign: 'center' }}>
                    <p>{user.fullName}</p>
                    <p>{user.email}</p>
                    {user.address && (
                      <p>{user.address.street}, {user.address.city}, {user.address.postalCode}, {user.address.country}</p>
                    )}
                    <p>{user.phone}</p>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick = {handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UserDetails
