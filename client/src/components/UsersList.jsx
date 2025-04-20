import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UsersList = () => {

    const users = useSelector(state => state.adminReducer.usersList);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap', margin: '40px', gap: '20px' }}>

    {users.filter(user => user.isAdmin !== true)
        .map(user => <User key = {user._id} user = {user} /> )}

    </div>
  )
}

export default UsersList
