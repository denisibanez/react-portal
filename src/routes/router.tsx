import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
// Views
import Home from '@/views/home/Home';
import Layout from '@/views/layout/Layout';
import About from '@/views/about/About';
import Login from '@/views/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Layout>Not Found</Layout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/sobre',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
