import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const PasswordResetForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          leo ultrices, luctus lacus sit amet, accumsan massa. Mauris sed ligula
          sed lorem vestibulum feugiat id feugiat ante.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label='Email' />
      </Grid>
      <Grid item xs={12}>
        <CustomButton name='Repor Senha' />
      </Grid>

    </Grid>
  );
};

export default PasswordResetForm;
