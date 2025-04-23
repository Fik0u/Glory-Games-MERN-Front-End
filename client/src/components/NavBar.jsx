import React, { useState } from 'react'
import { Badge, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
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

    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" className='d-flex align-items-center'>
        <Container>
          <Navbar.Brand href="/">
          {/* Here we add the logo  */} Glory Games
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (
                <>

                    <Nav.Link href="/cart" className='d-flex align-items-center position-relative'>
                      <FaShoppingCart size = {24} />
                      {cartItemCount > 0 && (
                        <Badge pill bg = 'danger' style = {{position: 'absolute', top: -5, right: -5, fontSize: '0.75rem', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                          {cartItemCount}
                        </Badge>
                      )}
                    </Nav.Link>

{/* Profile Dropdown  */}

                <NavDropdown title = {
                      <Image src={user.profilePicture} roundedCircle width={30} height={30} alt='profile' style={{ objectFit: 'cover', border: '2px solid #aaa' }} />
 
                    }
                    id='user-nav-dropdown'
                    align="end"
                    menuVariant='dark' 
                    show = {showDropdown}
                    onMouseEnter = {() => setShowDropdown(true)}
                    onMouseLeave = {() => setShowDropdown(false)}
                    style={{ zIndex: 1050 }}
                    className='position-relative'
                    >
                    
                          <NavDropdown.Item href='/profile'> My Profile</NavDropdown.Item>
                          <NavDropdown.Item href='/myorders'> My Orders</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={() => dispatch(logout(navigate))}>Logout</NavDropdown.Item>
                    </NavDropdown>

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
