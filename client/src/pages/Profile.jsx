import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector(state => state.authReducer.user)
  
  return (
    <div style={{margin:'40px'}}>
      <h3> Hello { user.fullName} </h3>
      <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="profile test" width={"300px"} />
    </div>
  )
}

export default Profile
