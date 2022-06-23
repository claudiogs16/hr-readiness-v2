import { Grid } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const SystemForm = () => {
  return (
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
  );
};

export default SystemForm;
