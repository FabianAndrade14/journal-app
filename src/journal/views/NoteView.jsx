import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>31 de enero, 2025 </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}>
                        Guardar
                    </SaveOutlined>
                </Button>
            </Grid>

            <Grid container>

                {/* Formulario para hacer las entradas del diario */}
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                />

                {/* Galería de imágenes */}
                <ImageGallery></ImageGallery>

            </Grid>
        </Grid>
    )
}
