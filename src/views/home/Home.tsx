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

//Types
import {
  LoaderInterface,
  PostInterface,
  UrlParamsInterface,
  RequestInterface,
} from '../../models';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

// Assets
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

//Styles
import './Home.scss';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // Store
  const postsSt: string[] = useSelector((state: PostInterface) => state.posts);
  const loader: boolean = useSelector(
    (state: LoaderInterface) => state.loader.control
  );
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const post: string = 'hello';

  // Translate
  const { t } = useTranslation();

  // Methods
  const getData = async () => {
    const urlParams: UrlParamsInterface = {
      path: '/v2/pokemon?',
      params: {
        id: 1,
      },
    };

    const requestParams: RequestInterface = {
      type: 'get',
      url: mountUrl(urlParams),
      loading: true,
      customSuccessMessage: {
        model: true,
        duration: 6000,
        message: t('requestSuccess'),
        severity: 'success',
      },
    };

    const resp = await dynamicService(requestParams);
    setData(resp.data.results);
  };

  const handleClickPost = () => {
    dispatch(addPost(post));
  };

  // Lifecycle
  useEffect(() => {
    // if you need get data in created component
    // getData();
  }, []);

  // Template
  return (
    <>
      {!loader && (
        <Grid
          container
          spacing={2}
          style={{ margin: '16px 0' }}
          data-testid="home"
        >
          <Grid item md={6}>
            <Paper
              elevation={3}
              style={{ padding: '20px' }}
              className="flex justify-between"
            >
              <div className="flex">
                <img
                  src={viteLogo}
                  style={{ minWidth: '60px' }}
                  className="logo"
                  alt="Vite logo"
                />
                <img
                  src={reactLogo}
                  style={{ minWidth: '60px' }}
                  className="logo react"
                  alt="React logo"
                />
              </div>

              <div>
                <h1>{t('store')}</h1>
                {postsSt.map((item: any, index: number) => (
                  <ul className="flex" key={index}>
                    <li>{item}</li>
                  </ul>
                ))}
                <ButtonComponent onClick={handleClickPost}>
                  {t('addStore')}
                </ButtonComponent>
              </div>
            </Paper>
          </Grid>

          <Grid item md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <h2>{t('translations')}</h2> <br></br>
              {t('key')}
            </Paper>
          </Grid>

          <Grid item md={6} style={{ margin: '16px 0' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <h1>{t('hooks')}</h1>
              <ButtonComponent onClick={() => setCount((count) => count + 1)}>
                {count}
              </ButtonComponent>
            </Paper>
          </Grid>

          <Grid item md={6} style={{ margin: '16px 0' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <div className="card">
                <h1> {t('getData')}</h1>
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
                    {data.map((item: any, index: number) => (
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
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
