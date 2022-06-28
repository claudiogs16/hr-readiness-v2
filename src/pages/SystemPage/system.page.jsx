import { Grid } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const SystemPage = () => {
  return (
    <MainContainer title="Sistema" maxWidth="xs">
      <MainCard title={<BackButton />}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CustomTextField label="Empresa" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Email" />
          </Grid>

          <Grid item xs={12}>
            <CustomButton name="Actualizar" />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default SystemPage;
