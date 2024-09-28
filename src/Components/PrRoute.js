import React from 'react';
import { Navigate } from 'react-router-dom';

//** Protected route .... */
const PrRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated');

  /* check if use is authenticated */
  /* if not then navigate to Login page*/

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  return children;
};

export default PrRoute;
