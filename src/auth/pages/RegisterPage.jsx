import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'fabian@google.com',
  password: '1234567',
  displayName: 'Fabian Andrade'
}

export const RegisterPage = () => {

    const { email, password, displayName, onInputChange, formState } = useForm(formData);

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(formState);
      
    }

  return (
    <AuthLayout title="Crear cuenta">

      <form onSubmit={ onSubmit }>
        <Grid container>

          {/* Register form */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder='John Doe'
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            ></TextField>
          </Grid>

          {/* Login button section */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button 
              type='submit'
              variant='contained' 
              fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            {/* Managing routing */}
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresa
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
