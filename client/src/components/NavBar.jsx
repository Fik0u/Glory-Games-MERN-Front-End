import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../JS/actions/authAction';


const NavBar = () => {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
          {/* Here we add the logo  */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (
                <>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="#" onClick = {() => dispatch(logout(navigate))}>Logout</Nav.Link>

                </>
            ) : (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            )}
            {user.isAdmin && <Nav.Link href='/admin'>Dashboard</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
