import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <div className='max-w-100 h-screen bg-[#001a33]'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     <Routes>
<Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
<Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="/dashboard" element={
<PrivateRoute isLoggedIn={isLoggedIn}>
  <Dashboard/>
  </PrivateRoute>
} />

     </Routes>
   </div>
  );
}

export default App;
