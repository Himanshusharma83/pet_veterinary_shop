// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;