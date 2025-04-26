import React, { useState } from 'react'
import { Badge, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../JS/actions/authAction';
import { FaShoppingCart } from 'react-icons/fa';
import '../components/styles/NavBar.css';
import logo from "../images/glory3.jpg";



const NavBar = () => {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);
    const cartItems = useSelector(state => state.cartReducer.cartItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItemCount = cartItems ? cartItems.length : 0;

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showGames, setShowGames] = useState(false);
    const [showConsoles, setShowConsoles] = useState(false);
    const [showAccessories, setShowAccessories] = useState(false);

    const HoverItem = ({ href, label }) => {
      const [hovered, setHovered] = useState(false);

      const style = {
        backgroundColor: hovered ? 'rgba(10, 33, 54, 0.64)' : 'transparent',
        color: hovered ? '#0ff' : '#fff',
        textShadow: hovered ? '0 0 5px #0ff' : 'none',
        transition: 'all 0.3s ease-in-out',
      };
      return (
        <NavDropdown.Item
        href={href}
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </NavDropdown.Item>
      )
    };


  return (
    <div>
        <Navbar bg="dark" expand="lg" className='py-1' id='navbar'>
        <Container>
          <Navbar.Brand href="/" className='d-flex align-items-center'>
          {/* Here we add the logo  */}
          <img src={logo} alt="Glory Games" height="40" className="d-inline-block align-top me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-5">

            {/* Products Section  */}
            
            {/* Games Dropdown */}
            <NavDropdown title={<span className="custom-nav-title">Games</span>} id="games-dropdown" menuVariant="dark" show={showGames} onMouseEnter={() => setShowGames(true)} onMouseLeave={() => setShowGames(false)}>
              <HoverItem href="/category/games/xbox" label="Xbox Games" />
              <HoverItem href="/category/games/playstation" label="PlayStation Games" />
              <HoverItem href="/category/games/nintendo" label="Nintendo Games" />
            </NavDropdown>

            {/* Consoles Dropdown */}
            <NavDropdown title={<span className="custom-nav-title">Consoles</span>} id="consoles-dropdown" menuVariant="dark" show={showConsoles} onMouseEnter={() => setShowConsoles(true)} onMouseLeave={() => setShowConsoles(false)}>
              <HoverItem href="/category/consoles/xbox" label="Xbox Consoles" />
              <HoverItem href="/category/consoles/playstation" label="PlayStation Consoles" />
              <HoverItem href="/category/consoles/nintendo" label="Nintendo Consoles" />
            </NavDropdown>

            {/* Accessories Dropdown */}
            <NavDropdown title={<span className="custom-nav-title">Accessories</span>} id="accessories-dropdown" menuVariant="dark" show={showAccessories} onMouseEnter={() => setShowAccessories(true)} onMouseLeave={() => setShowAccessories(false)}>
              <HoverItem href="/category/accessories/xbox" label="Xbox Accessories" />
              <HoverItem href="/category/accessories/playstation" label="PlayStation Accessories" />
              <HoverItem href="/category/accessories/nintendo" label="Nintendo Accessories" />
            </NavDropdown>
            </Nav>

            <Nav className='ms-auto'>
            {isAuth && !user.isAdmin && (

                    <Nav.Link href="/cart" className='d-flex align-items-center position-relative me-3'>
                      <FaShoppingCart color='white' size = {24} />
                      {cartItemCount > 0 && (
                        <Badge pill bg = 'danger' style = {{position: 'absolute', top: 6, right: -2, fontSize: '0.75rem', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                          {cartItemCount}
                        </Badge>
                      )}
                    </Nav.Link>
            )}
{/* Profile Dropdown  */}
            {isAuth && (
                <NavDropdown title = {
                      <Image src={user.profilePicture} roundedCircle width={40} height={40} alt='profile' style={{ objectFit: 'cover', border: '2px solid #aaa' }} />
 
                    }
                    id='user-nav-dropdown'
                    align="end"
                    menuVariant='dark' 
                    show = {showProfileDropdown}
                    onMouseEnter = {() => setShowProfileDropdown(true)}
                    onMouseLeave = {() => setShowProfileDropdown(false)}
                    style={{ zIndex: 1050 }}
                    className='position-relative'
                    toggle={false}
                    >
                    
                          <NavDropdown.Item href='/profile'> My Profile</NavDropdown.Item>
                          {!user.isAdmin && 
                          <NavDropdown.Item href='/myorders'> My Orders</NavDropdown.Item>}
                          {user.isAdmin && <NavDropdown.Item href='/admin'> Dashboard</NavDropdown.Item>}
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={() => dispatch(logout(navigate))}>Logout</NavDropdown.Item>
                    </NavDropdown>
            )}

            {!isAuth && (
                <>
                    <Nav.Link href="/login" className="auth-link">Login</Nav.Link>
                    <Nav.Link href="/register" className="auth-link">Register</Nav.Link>
                </>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
