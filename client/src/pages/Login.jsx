import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/actions/authAction';

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
    <div className='container m-8'>
      Login
      <Form onSubmit = {handleLogin}>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter your email" name = 'email' value = {user.email} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Enter your password" name = 'password' value = {user.password} onChange = {handleChange} />
      </Form.Group>
      <p>Don't have an account yet ? <a href="/register">Sign up</a></p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login
