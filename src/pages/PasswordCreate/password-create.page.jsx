import { Avatar, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BackButton from "../../components/Button/back-button.component";

const PasswordCreatePage = () => {
  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard title={<BackButton />}>
        <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
              <Avatar sx={{ marginBottom: "10px" }} color='primary'>
                <VpnKeyIcon />
              </Avatar>
              <Typography
                style={{ textAlign: "center" }}
                variant="h6"
                color="primary"
              >
                Criar Senha
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField label="Nova Senha" />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField label="Confirmar Senha" />
            </Grid>
            <Grid item xs={12}>
              <CustomButton name="Criar Senha" />
            </Grid>
          </Grid>
        </div>
      </MainCard>
    </Container>
  );
};

export default PasswordCreatePage;
