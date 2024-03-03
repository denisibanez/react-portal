import { useState } from 'react';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';

// Maerial componentes
import {
  Stack,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import FormControl, { useFormControl } from '@mui/material/FormControl';

// DS Components
import { ButtonComponent } from '@denisibanez/react-ds';

// Style
import './Login.scss';
import reactLogo from '../../assets/react.svg';

// Login Wrapper
const Login: React.FC = () => {
  const auth = localStorage.getItem('ACCESS_TOKEN');
  return !auth ? (
    <>
      {' '}
      <LoginComponent />{' '}
    </>
  ) : (
    <Navigate to="/" />
  );
};

// Login Box Form
function LoginComponent() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate: NavigateFunction = useNavigate();

  const handleRules = (event: string) => {
    const value = event;
    setError(value?.length < 3);
  };

  const handleUser = (event: string) => {
    handleRules(event);
    setUser(event);
  };

  const handlePassword = (event: string) => {
    handleRules(event);
    setPassword(event);
  };

  const handleSubmit = () => {
    localStorage.setItem('ACCESS_TOKEN', 'TOKEN');
    navigate('/');
  };

  return (
    <div className="login__wrapper flex justify-center items-center">
      <Stack className="login__box flex items-center">
        <div className="login__image flex justify-center ">
          <img
            src={reactLogo}
            style={{ width: '60px' }}
            className="logo react"
            alt="React logo"
          />
        </div>
        <FormControl error={error} required>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            label="Usuário"
            onChange={({ target: { value } }) => handleUser(value)}
          />
          <CustomHelperText value={user} />
        </FormControl>
        <FormControl error={error} required>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            label="Senha"
            onChange={({ target: { value } }) => handlePassword(value)}
          />
          <CustomHelperText value={password} />
        </FormControl>

        <FormControl error={error}>
          <ButtonComponent onClick={handleSubmit}>Entrar</ButtonComponent>
        </FormControl>
      </Stack>
    </div>
  );
}

interface CustomHelperTextInterface {
  value: string;
}
// Custom Validator
const CustomHelperText: React.FC<CustomHelperTextInterface> = ({ value }) => {
  console.log(useFormControl());
  const { error, required, filled } = useFormControl() || {};
  let message = null;
  const minLen = value?.length < 3;

  if (filled && minLen) {
    message = 'Campo deve ter Mínimo 3 dígitos';
  }

  if (required && !filled) {
    message = 'Campo é obrigatório';
  }

  return <FormHelperText error={error}>{message}</FormHelperText>;
};

export default Login;
