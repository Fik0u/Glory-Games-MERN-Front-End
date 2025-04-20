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
    <div>
      
        <UsersList />

    </div>
  )
}

export default Users
