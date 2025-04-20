import React from 'react';
import { Button, Card } from "react-bootstrap";


const User = ({ user }) => {
  // console.log(user)

  return (
    <div>

<Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{ user.fullName }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> { user.address }</Card.Subtitle>
        <Button variant = 'primary'>Show</Button>
        <Button variant = 'danger'>Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default User
