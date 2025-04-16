import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/actions/authAction';


const NavBar = () => {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();

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
                    <Nav.Link href="#" onClick = {() => dispatch(logout())}>Logout</Nav.Link>

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
