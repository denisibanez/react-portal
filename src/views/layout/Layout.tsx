import React, { ReactNode } from 'react';

// Router
import { Outlet, useNavigate } from 'react-router-dom';
// Components
import { ButtonComponent } from '@denisibanez/react-ds';
// Translate
import { useTranslation } from 'react-i18next';

// Style
import './Layout.scss';
import { Grid, Paper } from '@mui/material';

interface LayoutInterface {
  children?: ReactNode;
}

interface LangSelectorInterface {
  en: unknown;
  ptBr: unknown;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const navigate = useNavigate();
  const lngs: LangSelectorInterface = {
    en: {
      nativeName: 'en',
    },
    ptBr: {
      nativeName: 'pt',
    },
  };

  // Translate
  const { i18n } = useTranslation();

  return (
    <>
      <div className="layout__wrapper">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Paper elevation={3} style={{ padding: '10px' }}>
              <div
                className="layout__translations"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <>
                  <div>
                    <h2>Linguagem</h2>
                  </div>
                  {lngs &&
                    Object.keys(lngs).map((lng) => {
                      return (
                        <div
                          style={{ margin: '10px', display: 'inline' }}
                          key={lng}
                        >
                          <ButtonComponent
                            onClick={() => i18n.changeLanguage(lng)}
                          >
                            {lng}
                          </ButtonComponent>
                        </div>
                      );
                    })}
                </>
              </div>
            </Paper>
          </Grid>

          <Grid item md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <div>
                <h2>Menu</h2>
              </div>
              <div className="layout__buttons" style={{ display: 'inline' }}>
                <div style={{ margin: '10px' }}>
                  <ButtonComponent onClick={() => navigate('/')}>
                    HOME
                  </ButtonComponent>
                </div>
                <div style={{ margin: '10px' }}>
                  <ButtonComponent onClick={() => navigate('/sobre')}>
                    SOBRE
                  </ButtonComponent>
                </div>
                <div></div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        {children ?? <Outlet />}
      </div>
    </>
  );
};

export default Layout;
