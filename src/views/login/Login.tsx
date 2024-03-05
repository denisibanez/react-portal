import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';

// Maerial componentes
import {
  FormHelperText,
  Stack,
  TextField,
} from '@mui/material';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

// DS Components
import { ButtonComponent } from '@denisibanez/react-ds';

// Style
import './Login.scss';
import reactLogo from '../../assets/react.svg';

// Types
import { IFormInput } from './Login.model';

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('ACCESS_TOKEN', 'TOKEN');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="login__wrapper flex justify-center items-center">
      <Stack className="login__box flex items-center">
        <div className="login__image flex justify-center ">
          <img src={reactLogo} style={{ width: '60px' }} alt="React logo" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            label="Usuário *"
            variant="outlined"
            placeholder="jhonny@email.com"
            //@ts-ignore
            error={errors.user}
            {...register('user', {
              maxLength: {
                value: 5,
                message: 'Máximo de 5 caracteres',
              },
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            })}
          />

          <FormHelperText error={true}>
            {errors.user && <p> {errors.user.message}</p>}
          </FormHelperText>

          <TextField
            type="password"
            label="Senha *"
            variant="outlined"
            placeholder="********"
            //@ts-ignore
            error={errors.password}
            {...register('password', {
              maxLength: {
                value: 5,
                message: 'Máximo de 5 caracteres',
              },
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            })}
          />

          <FormHelperText error={true}>
            {errors.password && <p> {errors.password.message}</p>}
          </FormHelperText>

          <ButtonComponent loading={loading} type="submit" onClick={() => {}}>
            Entrar
          </ButtonComponent>
        </form>
      </Stack>
    </div>
  );
}

export default Login;
