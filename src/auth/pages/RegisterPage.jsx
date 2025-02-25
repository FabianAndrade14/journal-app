import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setformSubmitted] = useState(false)

    const {
       email, password, displayName, onInputChange, formState,
       isFormValid, displayNameValid, emailValid, passwordValid  
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
      event.preventDefault();
      setformSubmitted( true );

      if( !isFormValid ) return;

      dispatch( startCreatingUserWithEmailPassword(formState))
      
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
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
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
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
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
