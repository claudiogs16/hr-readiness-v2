import { Grid } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";

const PostRoleForm = () => {
    return (
        <Grid container spacing={3}>
      <Grid item xs={4}>
        <CustomTextField label="Sigla" />
      </Grid>
      <Grid item xs={8}>
        <CustomTextField label="Cargo" />
      </Grid>

      <Grid item xs={12}>
        <CustomButton name="Adicionar" />
      </Grid>
    </Grid>
    );
}
 
export default PostRoleForm;