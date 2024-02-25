import React from 'react';
import { Navigate } from 'react-router-dom';

// Login
const Login: React.FC = () => {
  const auth = localStorage.getItem('ACCESS_TOKEN');
  return !auth ? <> Login </> : <Navigate to="/" />;
};

export default Login;
