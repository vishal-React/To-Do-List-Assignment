import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthSlice';


const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('authState');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
