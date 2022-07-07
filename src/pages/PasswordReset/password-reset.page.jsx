import { Grid, Typography } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const PasswordResetPage = () => {
  return (
    <MainContainer title="Repor Senha" maxWidth="xs">
      <MainCard title={<BackButton />}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography style={{opacity: .8}}>
              Insira o email do utilizador no campo abaixo para repor a senha.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Email" />
          </Grid>
          <Grid item xs={12}>
            <CustomButton name="Repor Senha" />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default PasswordResetPage;