import React, { useEffect, useState } from 'react';

// Store
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../store/reducers/example/example.store';

// Components
import { Button } from '@mui/material';
import { ButtonComponent } from '@denisibanez/react-ds';

// Services
import mountUrl from '@/utils/mountParams.utils';
import dynamicService from '@/services/plugins/dynamicInjection.service';

// Assets
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      name: '',
    },
  ]);
  // Store
  const postsSt = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const post = 'hello';

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
    getData();
  }, []);

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item?.name}</div>
        ))}

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={getData}>get data</Button>
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
      Store
      {postsSt.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={handleClickPost}>Click</button>
    </>
  );
};

export default Home;
