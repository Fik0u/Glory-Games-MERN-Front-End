import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">

      <h1>Glory Games e-Commerce MERN</h1>

      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = '/profile' element = { <Profile /> } />
        <Route path = '/register' element = { <Register /> } />
        <Route path = '/login' element = { <Login /> } />
        <Route path = '/*' element = { <Error /> } />
      </Routes>
      
    </div>
  );
}

export default App;
