import React from 'react';

// Router
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';

// Store
import { Provider } from 'react-redux';
import store from '@/store/index';

// Language
import '@/locations/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
