import React, { useEffect } from 'react';
import UsersList from '../components/UsersList'
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../JS/actions/adminAction';

const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

  return (
    <div style={{ marginTop: '60px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#2c3e50' }}>
            Users List
          </h2>

          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>
            This is the list of all users registered in the system. You can view their details and manage their accounts from here
          </p>

          <UsersList />
    </div>  
  )
}

export default Users
