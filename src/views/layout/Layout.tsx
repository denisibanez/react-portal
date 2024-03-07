import React from 'react';

// Router
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';

// Components
import {
  HeaderComponent,
  LoaderComponent,
  SnackbarComponent,
} from '@denisibanez/react-ds';

import TranslationComponent from '@/components/translation/Translation';

import { Grid, Paper } from '@mui/material';

// Store
import { useDispatch, useSelector } from 'react-redux';

// Style
import './Layout.scss';

// Types
import { LayoutInterface } from './Layout.model';
import { LoaderInterface, SnackbarInterfaceProps } from '../../models';

// Variables
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { setSnackbar } from '@/store/reducers/snackbar/snackbar.store';

const menuItems: string[] = ['home', 'sobre'];
const appName: string = 'Vite + React';
const buttonLabel: string = 'Sair';

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  // Store
  const snackbar = useSelector(
    (state: SnackbarInterfaceProps) => state.snackbar.control
  );
  const loader = useSelector((state: LoaderInterface) => state.loader.control);

  // Methods
  function handleLogoff() {
    localStorage.removeItem('ACCESS_TOKEN');
    navigate('/login');
  }

  function onNavigate(value: string) {
    navigate(value === 'home' ? '' : value);
  }

  function handleClose() {
    dispatch(
      setSnackbar({
        model: false,
        duration: 6000,
        message: '',
        severity: '',
      })
    );
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
          navigateFn={(value) => onNavigate(value)}
          buttonFn={() => handleLogoff()}
        />
      )}

      <div className={!loader ? 'layout__wrapper items-start flex' : ''}>
        {!loader && (
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Paper elevation={3} style={{ padding: '10px' }} className="flex">
                {/* Translation */}
                <TranslationComponent />
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
        closeSnackbar={handleClose}
        message={snackbar.message}
        severity={snackbar.severity}
      ></SnackbarComponent>
    </>
  );
};

export default Layout;
