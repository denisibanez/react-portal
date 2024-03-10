import React from 'react';

// Router
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';

// Components
import {
  ButtonComponent,
  HeaderComponent,
  LoaderComponent,
  SnackbarComponent,
} from '@denisibanez/react-ds';

import { Grid, Paper } from '@mui/material';

// Translate
import { useTranslation } from 'react-i18next';
// Store
import { useSelector } from 'react-redux';

// Style
import './Layout.scss';

// Types
import { LayoutInterface, LangSelectorInterface } from './Layout.model';
import { LoaderInterface, SnackbarInterfaceProps } from '../../models';

// Variables
import PortugalFlag from '@/assets/img/Portugal.svg';
import EuaFlag from '@/assets/img/en.png';

const menuItems: string[] = ['home', 'about'];
const appName: string = 'Vite + React';
const buttonLabel: string = 'Sair';

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const navigate: NavigateFunction = useNavigate();

  const lngs: LangSelectorInterface = {
    en: {
      nativeName: 'en',
    },
    ptBr: {
      nativeName: 'pt',
    },
  };

  // Translate
  const { i18n: i18n } = useTranslation();

  // Store
  const snackbar = useSelector(
    (state: SnackbarInterfaceProps) => state.snackbar.control
  );
  const loader = useSelector((state: LoaderInterface) => state.loader.control);

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
          navigateFn={() => {}}
        />
      )}

      <div className={!loader ? 'layout__wrapper' : ''} data-testid="layout">
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
