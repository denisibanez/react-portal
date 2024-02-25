import React, { ReactNode } from 'react';

// Router
import { Outlet, useNavigate } from 'react-router-dom';
// Components
import { ButtonComponent } from '@denisibanez/react-ds';

// Style
import './Layout.scss';

interface LayoutInterface {
  children?: ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="layout__wrapper">
        <div className="layout__buttons">
          <div>
            <ButtonComponent onClick={() => navigate('/')}>
              {' '}
              HOME
            </ButtonComponent>
          </div>
          <div>
            <ButtonComponent onClick={() => navigate('/sobre')}>
              SOBRE
            </ButtonComponent>
          </div>
        </div>

        {children ?? <Outlet />}
      </div>
    </>
  );
};

export default Layout;
