import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyOrders from '../components/MyOrders';
import { updateUserProfile } from '../JS/actions/authAction';

const Profile = () => {

  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  const [picture, setPicture] = useState(null);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  const handleUpload = () => {
    if (picture) {
      const formData = new FormData();
      formData.append('picture', picture);

      dispatch(updateUserProfile(formData))
    }
  };

  
  return (
    <div style={{margin:'40px'}}>
      <h3> Hello { user.fullName} </h3>
      <img src = {user.profilePicture || "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"} alt="profile test" width={"300px"} />
    <br />
    <input type='file' accept='image/*' onChange={handlePictureChange} style={{ marginTop: '20px'}} />

    <button onClick={handleUpload} style={{ marginTop: '10px'}}>Update Profile Picture</button>

    <MyOrders />
    </div>
  )
}

export default Profile
