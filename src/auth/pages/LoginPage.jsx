import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));

  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Inicio de sesión">

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster' >
        <Grid container>

          {/* Login form */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            ></TextField>
          </Grid>

          {/* Sección de error */}
          <Grid
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}>
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
          </Grid>

          {/* Login button section */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant='contained'
                fullWidth
                onClick={onSubmit}
                >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}> Google </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            {/* Managing routing */}
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
