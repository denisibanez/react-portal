import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// MaTerial componentes
import { FormHelperText, Stack, TextField } from '@mui/material';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

// DS Components
import { ButtonComponent, SnackbarComponent } from '@denisibanez/react-ds';

// Style
import './Login.scss';
import reactLogo from '../../assets/react.svg';

// Types
import { IFormInput } from './Login.model';
import { SnackbarInterfaceProps } from '../../models';

// SERVICE
import { ExampleService } from '../../services';

// Translation
import TranslationComponent from '@/components/translation/Translation';
import { useTranslation } from 'react-i18next'

// Store
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { setSnackbar } from '@/store/reducers/snackbar/snackbar.store';;

// Login Wrapper
const Login: React.FC = () => {
  const auth = localStorage.getItem('ACCESS_TOKEN');
  return !auth ? (
    <>
      <LoginComponent />
    </>
  ) : (
    <Navigate to="/" />
  );
};

// Login Box Form
function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);

  const navigate: NavigateFunction = useNavigate();

  // Store
  const snackbar = useSelector(
    (state: SnackbarInterfaceProps) => state.snackbar.control
  );
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  // Translate
  const { t } = useTranslation();

  // MEthods
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setLoading(true);
    getExample();
  };

  const getExample = async () => {
    await ExampleService.getExample(
      (response: any) => {
        console.log(response.data, 'SUCCESS');
        setLoading(false);
        localStorage.setItem('ACCESS_TOKEN', 'TOKEN');
        navigate('/');
      },
      (e: any) => {
        console.log(e.message, 'ERROR');
        dispatch(
          setSnackbar({
            model: true,
            duration: 6000,
            message: e.message || 'Error',
            severity: 'error',
          })
        );
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <>
      {/* Translation */}
      <TranslationComponent />
      <div className="login__wrapper flex justify-center items-center">
        <Stack className="login__box flex items-center">
          <div className="login__image flex justify-center ">
            <img src={reactLogo} style={{ width: '60px' }} alt="React logo" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="text"
              label={t('user')}
              variant="outlined"
              placeholder="jhonny@email.com"
              //@ts-ignore
              error={errors.user}
              {...register('user', {
                maxLength: {
                  value: 5,
                  message: t('max5'),
                },
                required: {
                  value: true,
                  message: t('required'),
                },
              })}
            />

            <FormHelperText error={true}>
              {errors.user && <p> {errors.user.message}</p>}
            </FormHelperText>

            <TextField
              type="password"
              label={t('password')}
              variant="outlined"
              placeholder="********"
              //@ts-ignore
              error={errors.password}
              {...register('password', {
                maxLength: {
                  value: 5,
                  message: t('password'),
                },
                required: {
                  value: true,
                  message: t('password'),
                },
              })}
            />

            <FormHelperText error={true}>
              {errors.password && <p> {errors.password.message}</p>}
            </FormHelperText>

            <ButtonComponent loading={loading} type="submit" onClick={() => {}}>
              { t('login') }
            </ButtonComponent>
          </form>
        </Stack>
      </div>

      {/* SNACKBAR */}
      <SnackbarComponent
        model={snackbar.model}
        closeSnackbar={handleClose}
        message={snackbar.message}
        severity={snackbar.severity}
      ></SnackbarComponent>
    </>
  );
}

export default Login;
