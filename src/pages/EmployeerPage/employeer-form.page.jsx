<<<<<<< HEAD
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
=======
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
>>>>>>> cf618bb502da7d6b1200199973c38fc1f0a3652d
import CustomButton from "../../components/Button/custom-button.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
<<<<<<< HEAD
import { useQuery } from "@apollo/client";
import { GET_ALL_POST_ROLE, GET_ALL_USER_ROLE } from "../../gqloperation/query";
import { useState } from "react";

const EmployeerForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [postRole, setPostRole] = useState('');
  const [userRole, setUserRole] = useState('');
  const [status, setStatus] = useState('');

  const handlePostRoleChange = e => {
    setPostRole(e.target.value);
  }
  const handleUserRoleChange = e => {
    setUserRole(e.target.value);
  }
  const handleStatusChange = e => {
    setStatus(e.target.value);
  }

  const {
    loading: loadingPostRoles,
    error: errorPostRoles,
    data: dataPostRoles,
  } = useQuery(GET_ALL_POST_ROLE, {
=======
import { GET_ALL_POST_ROLE } from "../../gqloperation/query";

const EmployeerForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { loading, error, data: postRoles } = useQuery(GET_ALL_POST_ROLE, {
>>>>>>> cf618bb502da7d6b1200199973c38fc1f0a3652d
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
<<<<<<< HEAD
    fetchPolicy: 'network-only'
  });

  const {
    loading: loadingUserRoles,
    error: errorUserRoles,
    data: dataUserRoles,
  } = useQuery(GET_ALL_USER_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: 'network-only'
  });

  return (
    <form>
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
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Data Inicio Função"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-post-role-input-label">Cargo</InputLabel>
            <Select
              labelId="select-post-role-label"
              id="select-post-role"
              value={postRole}
              label="Cargo"
              onChange={handlePostRoleChange}
            >
              {dataPostRoles &&
                dataPostRoles.postRoles.data.map((pr) => (
                  <MenuItem key={pr.id} value={pr.attributes.postRole}>
                    {pr.attributes.description}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="select-role-input-label">Permissão</InputLabel>
            <Select
              labelId="select-role-label"
              id="select-role"
              value={userRole}
              label="Permissão"
              onChange={handleUserRoleChange}
            >
              {
                
                dataUserRoles && dataUserRoles.userRoles.data.map(ur => (
                  <MenuItem key={ur.id} value={ur.attributes.role}>{ur.attributes.description}</MenuItem>
                ))
              }
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="select-status-input-label">estado</InputLabel>
            <Select
              labelId="select-status-label"
              id="select-status"
              value={status}
              label="estado"
              onChange={handleStatusChange}
            >
              <MenuItem value={1}>Activo</MenuItem>
              <MenuItem value={0}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <CustomButton name="Registrar" />
        </Grid>
      </Grid>
    </form>
=======
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
>>>>>>> cf618bb502da7d6b1200199973c38fc1f0a3652d
  );
};

export default EmployeerForm;
