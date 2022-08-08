import { Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const ProfilePage = () => {
  return (
    <MainContainer maxWidth="sm">
      <MainCard title="Meu Perfil">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="name"
              disabled
              label="Nome Completo"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              disabled
              label="Email"
              defaultValue=""
              fullWidth
              type="text"
              name="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="contact"
              disabled
              label="Contacto"
              defaultValue=""
              fullWidth
              type="text"
              name="contact"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="start_date"
              disabled
              label="Data de Inicio"
              defaultValue=""
              fullWidth
              type="date"
              name="start_date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="postRole"
              disabled
              label="Cargo"
              defaultValue=""
              fullWidth
              type="text"
              name="postRole"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="role"
              disabled
              label="Permissão"
              defaultValue=""
              fullWidth
              type="text"
              name="role"
            />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default ProfilePage;
