import { Button, Grid, TextField, Typography } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const PasswordResetPage = () => {
    return (
        <MainContainer maxWidth="sm">
            <MainCard title="Repor Senha">
            <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography style={{ opacity: 0.8 }}>
                Insira o email do utilizador no campo abaixo para repor a senha.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Email"
                defaultValue=""
                fullWidth
                type="email"
                name="email"
                
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained" fullWidth>Repor</Button>
            </Grid>
          </Grid>

            </MainCard>
        </MainContainer>
    );
}
 
export default PasswordResetPage;