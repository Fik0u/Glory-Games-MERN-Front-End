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
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.address.street);
  const [city, setCity] = useState(user.address.city);
  const [postalCode, setPostalCode] = useState(user.address.postalCode);
  const [country, setCountry] = useState(user.address.country);
  const [phone, setPhone] = useState(user.phone);
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
    setShowModal(false);
  };

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      margin: '40px auto', 
      padding: '30px',
    }}>
      <div style={{
        backgroundColor: '#1e1e1e', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        padding: '30px',
        maxWidth: '1200px', 
        display: 'flex', 
        justifyContent: 'space-between',
        width: '100%',
      }}>
        {/* Left Section */}
        <div style={{
          marginBottom: '20px', 
          color: '#fff', 
          flex: '0 1 45%', 
          textAlign: 'left', 
        }}>
          <h3 style={{ color: '#fff', marginBottom: '40px' }}> 📄 Personal Informations</h3>
          <p><strong>Full Name : </strong>{user.fullName}</p>
          <p><strong>Username : </strong>{user.username}</p>
          <p><strong>Email : </strong>{user.email}</p>
          <p><strong>Address : </strong>{user.address.street}, {user.address.city}, {user.address.postalCode}, {user.address.country}</p>
          <p><strong>Phone : </strong>{user.phone}</p>
          <button 
            onClick={() => setShowModal(true)} 
            style={{
              padding: '12px 25px', 
              background: 'linear-gradient(90deg, #3a5bf2 0%, #0d76e1 100%)', 
              border: 'none', 
              borderRadius: '8px', 
              color: 'white', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              marginTop: '40px',
              transition: 'all 0.3s ease' 
            }}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #1a4cd2 0%, #0a62c7 100%)'}
            onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #3a5bf2 0%, #0d76e1 100%)'} 
          >
            ✏️ Edit Your Profile
          </button>
        </div>

        {/* Right Section */}
        <div style={{
          textAlign: 'left', 
          flex: '0 1 45%', 
          paddingRight: '5px', 
        }}>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}> 👋 Hello {user.username} </h3>
          <img 
            src={user.profilePicture || "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"} 
            alt="profile" 
            width={"250px"} 
            height={"250px"} 
            style={{
              objectFit: 'cover', 
              borderRadius: '50%', 
              border: '3px solid #6c63ff', 
              marginBottom: '20px'
            }} 
          />
          {!user.isAdmin && (
          <button 
            onClick={() => navigate('/myorders')} 
            style={{
              padding: '12px 25px', 
              background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              display: 'block',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #1c4a6a 0%, #254f7d 100%)'}
            onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)'} 
          >
            📦 My Orders History
          </button>
          )}
        </div>
      </div>


      {showModal && (
  <div style={{
    position: 'fixed', 
    top: 0, left: 0, right: 0, bottom: 0, 
    backgroundColor: 'rgba(0,0,0,0.7)', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 999,
    animation: 'fadeIn 0.3s ease-out',
  }}>
    <div style={{
      backgroundColor: '#1e1e1e', 
      borderRadius: '12px', 
      padding: '20px', 
      width: '80%', 
      minWidth: '400px',
      maxWidth: '800px', 
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)', 
      textAlign: 'center',
      animation: 'scaleUp 0.3s ease-out'
    }}>
      <h3 style={{ color: '#fff', marginBottom: '20px' }}>Edit Your Profile</h3>

      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder='Full Name'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
      />

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
        />
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        placeholder='Street'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
        />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='City'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
        />
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder='Postal Code'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
        />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder='Country'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
        />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Phone Number'
        style={{
          width: '80%',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '2px solid #6c63ff',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '16px',
          transition: 'border-color 0.3s',
        }}
      />
      <input
        type="file"
        accept='image/*'
        onChange={handlePictureChange}
        style={{ marginBottom: '20px', borderRadius: '8px', padding: '10px', backgroundColor: '#3a3a3a', border: '2px dashed #6c63ff', color: '#fff', fontSize: '14px', textAlign: 'center', width: '100%' }}
      />

      <p style={{
        color: '#ccc',
        fontSize: '14px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
          Choose a new profile picture
      </p>

      <div>
        <button
          onClick={handleProfileUpdate}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c63ff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5a54e3'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6c63ff'} 
        >
        
          ✅ Save
        </button>
        <button
          onClick={() => setShowModal(false)}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = '#444'} 
        >
        
          ❌ Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Profile;
