import { Navigate } from 'react-router-dom';
import Layout from '../views/layout/Layout';

const PrivateRoutes = () => {
  const auth = localStorage.getItem('ACCESS_TOKEN');
  return auth ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
