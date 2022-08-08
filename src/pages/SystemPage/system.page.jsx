import { Button, Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const SystemPage = () => {
    return (
        <MainContainer maxWidth="xs">
            <MainCard title="Definições">
            <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                label="Empresa"
                defaultValue=""
                fullWidth
                type="text"
                name="company"
                
              />
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
              <Button size="large" variant="contained" type="submit" fullWidth>Alterar</Button>
            </Grid>
          </Grid>
            </MainCard>
        </MainContainer>
    );
}
 
export default SystemPage;