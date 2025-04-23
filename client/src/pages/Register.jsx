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
    <div className='container m-8'>
      Register
      <Form onSubmit = {handleRegister}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter your full name" name = 'fullName' value = {newUser.fullName} onChange = {handleChange} />
        <Form.Control type="text" placeholder="Enter your username" name = 'username' value = {newUser.username} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter your email" name = 'email' value = {newUser.email} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Enter your password" name = 'password' value = {newUser.password} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Street" name = 'address.street' value = {newUser.address.street} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="City" name = 'address.city' value = {newUser.address.city} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Postal Code" name = 'address.postalCode' value = {newUser.address.postalCode} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Country" name = 'address.country' value = {newUser.address.country} onChange = {handleChange} />
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
