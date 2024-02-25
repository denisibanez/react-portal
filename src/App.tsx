import React from 'react';
// Material Strucutre
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Route
import { Route, Routes } from 'react-router-dom';

// Views
import Home from '@/views/home/Home';

import './App.scss';

const defaultTheme = createTheme();

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
