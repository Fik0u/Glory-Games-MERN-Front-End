import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/actions/authAction';
import { motion } from 'framer-motion';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, navigate))
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      backgroundColor: '#f0f4f8'
    }}>
      <div style={{
        maxWidth: '28rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        marginTop: '1rem',
      }}>

        <h2 style={{
          textAlign: 'center', 
          marginBottom: '40px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)',
          backgroundClip: 'text',
          color: 'transparent', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome back, Gamer! Ready to dive back into the action?
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Form onSubmit={handleLogin}>
            <Form.Group style={{ marginBottom: '1rem' }}>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                name='email' 
                value={user.email} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontSize: '1rem'
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: '1rem' }}>
              <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                name='password' 
                value={user.password} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontSize: '1rem'
                }}
              />
            </Form.Group>

            <p style={{
              marginTop: '1rem',
              marginBottom: '1.5rem',
              color: '#4B5563',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}>
              Don't have an account yet? 
              <a href="/register" style={{
                marginLeft: '0.25rem',
                color: '#2563EB',
                fontWeight: '600',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                Sign up
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
                width: "100%",
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
              Login
            </button>
          </Form>
        </motion.div>
      </div>
    </div>
  )
}

export default Login;
