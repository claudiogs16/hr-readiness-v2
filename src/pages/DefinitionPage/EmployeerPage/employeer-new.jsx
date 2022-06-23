import { Grid } from "@mui/material";
import CustomButton from "../../../components/Button/custom-button.component";
import CustomSelect from "../../../components/Select/custom-select.component";
import CustomTextField from "../../../components/TextField/custom-text-field.component";

const EmployeerNew = () => {
  return (
    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomTextField label='Nome Completo' />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label='Email' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField label='Contacto' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField label='Data Inicio Função' />
      </Grid>
      <Grid item xs={12} >
        <CustomSelect label='Cargo'/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <CustomSelect label='Permissão'/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomSelect label='Estado' />
      </Grid>

      <Grid item xs={12}>
        <CustomButton name='Registrar' />
      </Grid>

    </Grid>
  );
}
 
export default EmployeerNew;