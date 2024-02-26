import React, { useEffect, useState } from 'react';

// Store
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '@/store/reducers/example/example.store';

// Components
import { Button, Grid, Paper } from '@mui/material';
import { ButtonComponent } from '@denisibanez/react-ds';

// Services
import mountUrl from '@/utils/mountParams.utils';
import dynamicService from '@/services/plugins/dynamicInjection.service';

// Translate
import { useTranslation } from 'react-i18next';

// Assets
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // Store
  const postsSt = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const post = 'hello';

  // Translate
  const { t } = useTranslation();

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

  const handleClickPost = () => {
    dispatch(addPost(post));
  };

  useEffect(() => {
    // if you need get data in created component
    // getData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1>Vite + React</h1>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Grid>

        <Grid item md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <h2>Store</h2>
            {postsSt.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
            <ButtonComponent onClick={handleClickPost}>
              add store
            </ButtonComponent>
          </Paper>
        </Grid>

        <Grid item md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <h2>Traducoes</h2> <br></br>
            {t('key')}
          </Paper>
        </Grid>

        <Grid item md={12}>
          <h1>Simple Hooks State</h1>
          <ButtonComponent onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </ButtonComponent>
        </Grid>

        <Grid item md={12}>
          <div className="card">
            <h1> Get Data From Back</h1>
            <Button onClick={getData}>get data</Button>
            {data.length ? (
              <ul
                style={{
                  listStyle: 'none',
                  width: '100%',
                  padding: '0',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {data.map((item, index) => (
                  <li
                    style={{
                      display: 'flex',
                      background: 'green',
                      padding: '10px',
                      margin: '10px',
                    }}
                    key={index}
                  >
                    {item?.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
