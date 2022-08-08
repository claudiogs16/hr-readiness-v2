import { Button, Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";






const PasswordChangePage = () => {
  return (
    <MainContainer maxWidth="xs">
      <MainCard title="Alterar Senha">
      <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="oldPassword"
                required
                label="Senha Actual"
                defaultValue=""
                fullWidth
                type="text"
                name="oldPassword"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                required
                label="Nova Senha"
                defaultValue=""
                fullWidth
                type="text"
                name="password"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                required
                label="Confirmar Senha"
                defaultValue=""
                fullWidth
                type="text"
                name="confirmPassword"
                
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained" fullWidth>Alterar Senha</Button>
            </Grid>
          </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default PasswordChangePage;
