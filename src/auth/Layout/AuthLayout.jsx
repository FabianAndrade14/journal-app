import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title=''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundImage: `url("https://wallpapers.com/images/hd/uncharted-journal-with-treasure-map-nt2ctlfgqzgao9k4.jpg")`, padding: 4 }}>

      <Grid item
        className='box-shadow'
        xs={3}
        sx={{ 
            width: { md: 450 }, //En esta sección se ajusta el tamaño del grid para pantallas medianas.
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
            }}>

        <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

        {/* En esta parte van los children */}
        {children}

        </Grid>

    </Grid>
  )
}
