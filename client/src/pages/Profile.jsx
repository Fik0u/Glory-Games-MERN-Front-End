import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../JS/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [picture, setPicture] = useState(null);

  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);

  const [showModal, setShowModal] = useState(false);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };


  const handleProfileUpdate = () => {
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);

    if (picture) {
      formData.append('picture', picture);
    }

    dispatch(updateUserProfile(formData));
    setShowModal(false)
  };


  
  return (
    <div style={{maxWidth: '500px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'}}>
      <h3> 👋 Hello { user.fullName} </h3>

      <img src = {user.profilePicture || "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"} alt="profile" width={"200px"} height={"200px"} style={{objectFit: 'cover',
          borderRadius: '50%',
          border: '3px solid #6c63ff',
          marginBottom: '20px'}} />

      <button onClick={() => setShowModal(true)} style={{ padding: '10px 20px',
          backgroundColor: '#6c63ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px' }}> ✏️ Edit Your Profile </button>

            <hr style={{ margin: '30px 0'}}/>
            
  <button onClick={() => navigate('/myorders')} style={{ padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold' }}>
  📦My Orders Summary
  </button>

  {showModal && (
    <div style={{ position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999 }}>
        <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '20px',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <h3>Edit Your Profile</h3>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name'
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
            />
            <input
              type="file"
              accept='image/*'
              onChange={handlePictureChange}
              style={{ marginBottom: '10px' }}
            />

            <button
              onClick={handleProfileUpdate}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c63ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              ✅ Save
            </button>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginLeft: '10px',
                padding: '8px 16px',
                backgroundColor: '#ccc',
                color: '#333',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
              ❌ Cancel
            </button>

        </div>

    </div>
  )}

    </div>
  )
}

export default Profile
