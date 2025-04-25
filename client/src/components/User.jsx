import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import UserDelete from './UserDelete';
import { DeleteOutlined } from '@ant-design/icons';



const User = ({ user, onShowDetails }) => {

const [deleteUser, setDeleteUser] = useState(false);

const [isHovered, setIsHovered] = useState(false);

const [isCardHovered, setIsCardHovered] = useState(false);

  const deleteIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'color 0.3s, transform 0.3s',
    color: isHovered ? 'red' : 'black', 
    transform: isHovered ? 'scale(1.2)' : 'scale(1)'
  };

  const cardStyle = {
    width: '18rem',
    position: 'relative',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',  
    boxShadow: isCardHovered ? '0 0 15px rgba(0, 136, 255, 0.4)' : 'none'
  };


  return (
    <div>

<Card style={ cardStyle } onClick={() => onShowDetails(user._id)} onMouseEnter={() => setIsCardHovered(true)} onMouseLeave={() => setIsCardHovered(false)} >
      <Card.Body>
        <div style={{ textAlign: 'center' }}>
          <img src={user.profilePicture} alt="Profile" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }} />
        </div>
        <Card.Title style={{ textAlign: 'center', marginTop: '10px'}}
        >{ user.fullName }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> { user.email }</Card.Subtitle>
      </Card.Body>

      <DeleteOutlined onClick={(e) => {e.stopPropagation(); setDeleteUser(true)}} style={ deleteIconStyle } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} title='Delete User' />
    </Card>
    
    <UserDelete show = {deleteUser} handleClose = {() => setDeleteUser(false)} userId = {user._id} />
    </div>
  )
}

export default User
