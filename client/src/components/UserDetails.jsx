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

        <Modal show = {show} onHide = {handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '20px'  }}>

                  {/* Image + Username  */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <img src={user.profilePicture} alt='Profile' style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #3498db', boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)' }} />
                    <h4 style={{ marginTop: '15px' }}>{user.username}</h4>
                  </div>

                  {/* Users Infos  */}
                  <div style={{ flex: 2 }}>
                    <p><strong>Full Name : </strong>{user.fullName}</p>
                    <p><strong>Email : </strong>{user.email}</p>
                    {user.address && (
                      <p><strong>Address : </strong>{user.address.street}, {user.address.city}, {user.address.postalCode}, {user.address.country}</p>
                    )}
                    <p><strong>Phone Number : </strong>{user.phone}</p>
                    <p><strong>Joined At : </strong>{new Date(user.createdAt).toLocaleDateString('fr-FR', { year: 'numeric', month:'long', day: 'numeric' })}</p>
                  </div>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {handleClose} style={{ backgroundColor: '#3498db', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '8px', fontWeight: 'bold', transition: 'all 0.3s ease', boxShadow: '0 0 10px rgba(52, 152, 219, 0.4)' }} onMouseEnter={(e) => {e.target.style.backgroundColor = '#2980b9'; e.target.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.6)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#3498db'; e.target.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.4)'}} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UserDetails
