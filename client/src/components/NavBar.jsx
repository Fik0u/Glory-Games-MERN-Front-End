import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../JS/actions/authAction';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);
    const cartItems = useSelector(state => state.cartReducer.cartItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItemCount = cartItems ? cartItems.length : 0;

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

                    <Nav.Link href="/cart" className='d-flex align-items-center position-relative'>
                      <FaShoppingCart size = {24} />
                      {cartItemCount > 0 && (
                        <Badge pill bg = 'danger' style = {{position: 'absolute', top: -5, right: -5, fontSize: '0.75rem', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                          {cartItemCount}
                        </Badge>
                      )}
                    </Nav.Link>

                    <Nav.Link href="#" onClick = {() => dispatch(logout(navigate))}>Logout</Nav.Link>

                </>
            ) : (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            )}
            {user && user.isAdmin && <Nav.Link href='/admin'>Dashboard</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
