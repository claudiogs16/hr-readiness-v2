import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomSelect from "../../components/Select/custom-select.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import { GET_ALL_POST_ROLE } from "../../gqloperation/query";

const EmployeerForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { loading, error, data: postRoles } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  // if(postRoles) console.log(postRoles.postRoles.data[0].attributes.postRole)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomTextField label="Nome Completo" />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label="Email" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField label="Contacto" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label="Data Inicio Função"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {postRoles && <CustomSelect values={postRoles.postRoles.data} label="Cargo" />} 
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomSelect label="Permissão" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomSelect label="Estado" />
      </Grid>

      <Grid item xs={12}>
        <CustomButton name="Registrar" />
      </Grid>
    </Grid>
  );
};

export default EmployeerForm;
