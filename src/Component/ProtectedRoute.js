import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './Redux/AuthSlice';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(selectAuth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
