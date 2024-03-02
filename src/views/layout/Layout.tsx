import React, { ReactNode } from 'react';

// Router
import { Outlet, useNavigate } from 'react-router-dom';
// Components
import {
  ButtonComponent,
  HeaderComponent,
  LoaderComponent,
  SnackbarComponent,
} from '@denisibanez/react-ds';
// Translate
import { useTranslation } from 'react-i18next';
// Store
import { useSelector } from 'react-redux';

// Style
import './Layout.scss';
import { Grid, Paper } from '@mui/material';

import PortugalFlag from '@/assets/img/Portugal.svg';
import EuaFlag from '@/assets/img/en.png';

interface LayoutInterface {
  children?: ReactNode;
}

interface LangSelectorInterface {
  en: unknown;
  ptBr: unknown;
}

const menuItems = ['home', 'about'];
const appName = 'Vite + React';
const buttonLabel = 'Login';

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

  // Store
  const snackbar = useSelector((state: any) => state.snackbar.control);
  const loader = useSelector((state: any) => state.loader.control);

  // Methods
  function controlLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  // Template
  return (
    <>
      {/* Header */}
      {!loader && (
        <HeaderComponent
          menuItems={menuItems}
          appName={appName}
          buttonLabel={buttonLabel}
        />
      )}

      <div className={!loader ? 'layout__wrapper' : ''}>
        {!loader && (
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Paper elevation={3} style={{ padding: '10px' }} className="flex">
                {/* Menu */}
                <div className="layout__buttons">
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
                </div>

                {/* Translation */}
                <div className="layout__selectLanguage flex justify-end">
                  {lngs &&
                    Object.keys(lngs).map((lng) => {
                      return (
                        <div key={lng}>
                          <img
                            src={lng === 'en' ? EuaFlag : PortugalFlag}
                            className="cursor-pointer img-wrapper"
                            onClick={() => controlLanguage(lng)}
                          />
                        </div>
                      );
                    })}
                </div>
              </Paper>
            </Grid>
          </Grid>
        )}
        {children ?? <Outlet />}
      </div>

      {/* LOADER*/}
      {loader && (
        <div className="layout__wrapper">
          <h1>Carregando...</h1>
          <LoaderComponent></LoaderComponent>
        </div>
      )}

      {/* SNACKBAR */}

      <SnackbarComponent
        model={snackbar.model}
        closeSnackbar={() => {}}
        message={snackbar.message}
        severity={snackbar.severity}
      ></SnackbarComponent>
    </>
  );
};

export default Layout;
