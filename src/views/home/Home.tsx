import React, { useEffect, useState } from 'react';

// Store
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '@/store/reducers/example/example.store';

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
  const [data, setData] = useState([]);
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
    // if you need get data in created component
    // getData();
  }, []);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={getData}>get data</Button>
        <ButtonComponent onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </ButtonComponent>
      </div>

      <div>
        <h1>Store</h1>
        {postsSt.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <ButtonComponent onClick={handleClickPost}>
          Click to add store
        </ButtonComponent>
      </div>

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
    </>
  );
};

export default Home;
