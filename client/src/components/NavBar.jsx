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

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showGames, setShowGames] = useState(false);
    const [showConsoles, setShowConsoles] = useState(false);
    const [showAccessories, setShowAccessories] = useState(false);

    const HoverItem = ({ href, label }) => {
      const [hovered, setHovered] = useState(false);

      const style = {
        backgroundColor: hovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        color: hovered ? '#0ff' : '#fff',
        textShadow: hovered ? '0 0 5px #0ff' : 'none',
        transition: 'all 0.3s ease',
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
        <Navbar bg="dark" data-bs-theme="dark" className='d-flex align-items-center'>
        <Container>
          <Navbar.Brand href="/">
          {/* Here we add the logo  */} Glory Games
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {/* Products Section  */}
            
            {/* Games Dropdown */}
            <NavDropdown title="Games" id="games-dropdown" menuVariant="dark" show={showGames} onMouseEnter={() => setShowGames(true)} onMouseLeave={() => setShowGames(false)}>
              <HoverItem href="/category/games/xbox" label="Xbox Games" />
              <HoverItem href="/category/games/playstation" label="PlayStation Games" />
              <HoverItem href="/category/games/nintendo" label="Nintendo Games" />
            </NavDropdown>

            {/* Consoles Dropdown */}
            <NavDropdown title="Consoles" id="consoles-dropdown" menuVariant="dark" show={showConsoles} onMouseEnter={() => setShowConsoles(true)} onMouseLeave={() => setShowConsoles(false)}>
              <HoverItem href="/category/consoles/xbox" label="Xbox Consoles" />
              <HoverItem href="/category/consoles/playstation" label="PlayStation Consoles" />
              <HoverItem href="/category/consoles/nintendo" label="Nintendo Consoles" />
            </NavDropdown>

            {/* Accessories Dropdown */}
            <NavDropdown title="Accessories" id="accessories-dropdown" menuVariant="dark" show={showAccessories} onMouseEnter={() => setShowAccessories(true)} onMouseLeave={() => setShowAccessories(false)}>
              <HoverItem href="/category/accessories/xbox" label="Xbox Accessories" />
              <HoverItem href="/category/accessories/playstation" label="PlayStation Accessories" />
              <HoverItem href="/category/accessories/nintendo" label="Nintendo Accessories" />
            </NavDropdown>

            {isAuth && !user.isAdmin && (

                    <Nav.Link href="/cart" className='d-flex align-items-center position-relative'>
                      <FaShoppingCart size = {24} />
                      {cartItemCount > 0 && (
                        <Badge pill bg = 'danger' style = {{position: 'absolute', top: -5, right: -5, fontSize: '0.75rem', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                          {cartItemCount}
                        </Badge>
                      )}
                    </Nav.Link>
            )}
{/* Profile Dropdown  */}
            {isAuth && (
                <NavDropdown title = {
                      <Image src={user.profilePicture} roundedCircle width={30} height={30} alt='profile' style={{ objectFit: 'cover', border: '2px solid #aaa' }} />
 
                    }
                    id='user-nav-dropdown'
                    align="end"
                    menuVariant='dark' 
                    show = {showProfileDropdown}
                    onMouseEnter = {() => setShowProfileDropdown(true)}
                    onMouseLeave = {() => setShowProfileDropdown(false)}
                    style={{ zIndex: 1050 }}
                    className='position-relative'
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
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
