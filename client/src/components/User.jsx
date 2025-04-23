import React, { useState } from 'react';
import { Button, Card } from "react-bootstrap";
import UserDelete from './UserDelete';



const User = ({ user, onShowDetails }) => {
  console.log(user)

const [deleteUser, setDeleteUser] = useState(false);
  return (
    <div>

<Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{ user.fullName }</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted"> { user.address }</Card.Subtitle> */}
        <Button variant = 'primary' onClick = {() => onShowDetails(user._id)}>Show</Button>
        <Button variant = 'danger' onClick = {() => setDeleteUser(true)}>Delete</Button>
      </Card.Body>
    </Card>
    
    <UserDelete show = {deleteUser} handleClose = {() => setDeleteUser(false)} userId = {user._id} />
    </div>
  )
}

export default User
