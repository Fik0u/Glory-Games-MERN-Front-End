import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import UserDetails from './UserDetails';

const UsersList = () => {

    const users = useSelector(state => state.adminReducer.usersList);

    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState(null);

    const handleShow = (id) => {
      setShow(true);
      setUserId(id)
    };

    const handleClose = () => {
      setShow(false);
      setUserId(null)
    };


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '40px auto', gap: '20px', maxWidth: '1200px' }}>

    {users.filter(user => user.isAdmin !== true)
        .map(user => <User key = {user._id} user = {user} onShowDetails = {handleShow} /> )}

    {userId &&
    <UserDetails show = {show} handleClose = {handleClose} userId = {userId} />}

    </div>
  )
}

export default UsersList
