import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = AuthenticationService.isAuthenticated;
  const location = useLocation();
  return isAuthenticated === true ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;