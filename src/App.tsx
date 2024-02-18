import React, { useEffect } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ButtonComponent } from '@denisibanez/react-ds';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

import dynamicService from '@/services/plugins/dynamicInjection.service';
import mountUrl from '@/utils/mountParams.utils';

const defaultTheme = createTheme();

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const urlParams = {
        path: '/v2/pokemon?',
        params: {
          id: 1,
        },
      };
      const requestParams = {
        type: 'get',
        url: mountUrl(urlParams),
        loading: true,
      };

      const resp = await dynamicService(requestParams);
      setData(resp.data.results);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            {data.map((item, index) => (
              <div key={index}>{item?.name}</div>
            ))}
          </Container>
        </ThemeProvider>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonComponent onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </ButtonComponent>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
