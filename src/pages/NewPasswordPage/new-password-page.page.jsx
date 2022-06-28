import { Grid } from "@mui/material";
import ButtonBack from "../../components/Button/button-back.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import MainTemplate from "../../templates/MainTemplate/main.template";

const NewPasswordForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomTextField label="Nova Senha"  />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label="Repetir Senha"  />
      </Grid>
      <Grid item xs={12}>
        <CustomButton name="Criar" />
      </Grid>
    </Grid>
  );
};

const NewPasswordPage = () => {
  return (
    <MainTemplate title="Nova Senha" maxWidth="xs">
      <MainCard
        content={<NewPasswordForm />}
        title={<ButtonBack color="info" />}
      />
    </MainTemplate>
  );
};

export default NewPasswordPage;
