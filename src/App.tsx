import React from 'react';
// Material Strucutre
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@/App.scss';
import PrivateRoutes from '@/routes/guard';

const defaultTheme = createTheme();

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <PrivateRoutes />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
