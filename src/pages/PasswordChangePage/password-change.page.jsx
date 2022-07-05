import { Grid } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const PasswordChangePage = () => {
  return (
    <MainContainer title="Alterar Senha" maxWidth="xs">
      <MainCard title={<BackButton />}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CustomTextField label="Senha Actual" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Nova Senha" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Confirmar Senha" />
          </Grid>
          <Grid item xs={12}>
            <CustomButton name="Alterar" />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default PasswordChangePage;
