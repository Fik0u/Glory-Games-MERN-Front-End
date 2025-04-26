import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { register } from '../JS/actions/authAction';

const Register = () => {

  // The state for the new user. It'll be used to store the data entered by the user in the form
  const [newUser, setNewUser] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    phone: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setNewUser(prev => ({
        ...prev, address: { ...prev.address, [field]: value }
      }))
    } else {
      setNewUser(prev => ({ ...prev, [name]: value }))
    }
  };


  //When the user submits the form, this function will send a POST request to the server with the new user's data
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate))
  };
  // console.log(newUser)

  return (
    <div style={{
      maxWidth: '28rem',
      margin: '0 auto',
      marginTop: '60px',
      marginBottom: "60px",
      padding: '2rem',
      backgroundColor: '#d1d5db',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
  <Form onSubmit={handleRegister}>
    
    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Enter your full name"
        name="fullName"
        value={newUser.fullName}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Enter your username"
        name="username"
        value={newUser.username}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="email"
        placeholder="Enter your email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="password"
        placeholder="Enter your password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Street"
        name="address.street"
        value={newUser.address.street}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="City"
        name="address.city"
        value={newUser.address.city}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Postal Code"
        name="address.postalCode"
        value={newUser.address.postalCode}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Country"
        name="address.country"
        value={newUser.address.country}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Control
        type="tel"
        placeholder="Enter your phone number"
        name="phone"
        value={newUser.phone}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </Form.Group>

    <p className="mt-4 mb-6 text-gray-600">
      Already have an account?
      <a href="/login" className="ml-1 text-blue-600 font-semibold hover:underline">
        Sign in
      </a>
    </p>

    <button
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        fontSize: "15px",
        fontWeight: "bold",
        background: "linear-gradient(45deg, #041361, #0003c4)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        // Ajouts responsive:
        "@media (max-width: 768px)": {
          marginLeft: "0",
          width: "100%",
          maxWidth: "300px"
        }
      }}
      onMouseOver={(e) => {
        e.target.style.background = "linear-gradient(45deg,rgb(0, 26, 255),rgb(0, 102, 255))";
        e.target.style.boxShadow = "0 0 10px #00f2ff, 0 0 20px #00f2ff";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "linear-gradient(45deg, #041361, #0003c4)";
        e.target.style.boxShadow = "0 0 0px #0003c4";
      }}
    >
      Register
    </button>
  </Form>
</div>

  )
}

export default Register
