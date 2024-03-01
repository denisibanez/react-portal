import React from 'react';
// Material Strucutre
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@/assets/scss/_global.scss';
import PrivateRoutes from '@/routes/guard';

const defaultTheme = createTheme();

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <PrivateRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
