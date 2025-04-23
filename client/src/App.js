import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './JS/actions/authAction';
import Dashboard from './pages/Dashboard';
import ProdDetails from './pages/ProdDetails';
import AddOrder from './components/AddOrder';
import AllOrders from './components/AllOrders';
import Cart from './components/Cart';
import OrderDetails from './pages/OrderDetails';
import Users from './pages/Users';


import { ToastContainer } from 'react-toastify';
import ToastManager from './components/ToastManager';
import SpinLoad from './components/SpinLoad';
import MyOrders from './components/MyOrders';



function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const isAuth = useSelector(state => state.authReducer.isAuth);

  const authLoad = useSelector(state => state.authReducer.isLoad);
  const adminLoad = useSelector(state => state.adminReducer.isLoad);
  const cartLoad = useSelector(state => state.cartReducer.isLoad);
  const orderLoad = useSelector(state => state.orderReducer.isLoad);
  const prodLoad = useSelector(state => state.prodReducer.isLoad);

  // If the user is already authenticated
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(currentUser())
    }
  }, [dispatch]);
  
  return (
    <div className="App">
    {(authLoad || adminLoad || cartLoad || orderLoad || prodLoad) && <SpinLoad />}

      {/* Globan Toasts Manager  */}
      <ToastContainer position="top-right" autoClose={3000} />
      <ToastManager />

{/* Navbar  */}
      <NavBar />
      
      <h1>Glory Games e-Commerce MERN</h1>
{/* Main Routes  */}
      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = '/product/:id' element = {<ProdDetails />} />
        {isAuth ? (
          <>
          <Route path = '/profile' element = { <Profile /> } />
          <Route path = '/order' element = { <AddOrder /> } />
          <Route path = '/cart' element = { <Cart />} />
          <Route path = '/myorders' element = { <MyOrders />} />
          <Route path = '/order/:id' element = { <OrderDetails />} />
          </>
        ) : (
          <>
        <Route path = '/register' element = { <Register /> } />
        <Route path = '/login' element = { <Login /> } />
          </>
        )}
        
        {user && user.isAdmin && (
          <>
            <Route path = '/admin' element = { <Dashboard /> } />
            <Route path = '/admin/orders' element = { <AllOrders /> } />
            <Route path = '/admin/users' element = { <Users /> } />
          </>
        )}
        <Route path = '/*' element = { <Error /> } />
      </Routes>
      
    </div>
  );
}

export default App;
