import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { register } from '../JS/actions/authAction';
import { motion } from 'framer-motion';

const Register = () => {
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
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else {
      setNewUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        maxWidth: '50rem',
        margin: '0 auto',
        marginTop: '60px',
        marginBottom: "60px",
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >

      <h2 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #2e3b8d, #1c72f2)', 
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        marginBottom: '1.5rem',
      }}>
        Welcome to Glory Games! Create your account & start your journey with us.
      </h2>

      <Form onSubmit={handleRegister}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          maxWidth: '100%',
        }}
          className="form-grid"
        >
          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={newUser.fullName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="Username"
              name="username"
              value={newUser.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="Street"
              name="address.street"
              value={newUser.address.street}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="City"
              name="address.city"
              value={newUser.address.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="Postal Code"
              name="address.postalCode"
              value={newUser.address.postalCode}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="input-custom"
              type="text"
              placeholder="Country"
              name="address.country"
              value={newUser.address.country}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group style={{ gridColumn: '1 / 3' }}>
            <Form.Control
              className="input-custom"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <p className="mt-4 mb-6 text-gray-600">
          Already have an account?
          <a href="/login" className="ml-2 text-blue-600 font-semibold hover:underline">
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


      <style jsx="true">{`
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .input-custom {
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .input-custom:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 8px #3b82f6;
          outline: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Register;
