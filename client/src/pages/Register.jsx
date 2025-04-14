import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { register } from '../JS/actions/authAction';

const Register = () => {

  // The state for the new user. It'll be used to store the data entered by the user in the form
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  };


  //When the user submits the form, this function will send a POST request to the server with the new user's data
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate))
  };
  // console.log(newUser)

  return (
    <div className='container m-8'>
      Register
      <Form onSubmit = {handleRegister}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter your full name" name = 'fullName' value = {newUser.fullName} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter your email" name = 'email' value = {newUser.email} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Enter your password" name = 'password' value = {newUser.password} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter your address" name = 'address' value = {newUser.address} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="tel" placeholder="Enter your phone number" name = 'phone' value = {newUser.phone} onChange = {handleChange} />
      </Form.Group>
      <p>Already have an account ? <a href="/login">Sign in</a></p>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Register
