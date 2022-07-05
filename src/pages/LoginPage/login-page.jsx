import { Avatar, Container, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    let navigate = useNavigate();
  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard>
        <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
              <Avatar sx={{ marginBottom: "10px" }} color="primary">
                <LockOpenIcon />
              </Avatar>
              <Typography
                style={{ textAlign: "center" }}
                variant="h6"
                color="primary"
              >
                Acesso
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField label="Email" />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField label="Senha" />
            </Grid>
            <Grid item xs={12}>
              <CustomButton onClick={() => navigate('/')}  name="Seguinte" />
            </Grid>
          </Grid>
        </div>
      </MainCard>
    </Container>
  );
};

export default LoginPage;
