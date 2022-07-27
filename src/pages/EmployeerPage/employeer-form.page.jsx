import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_POST_ROLE, GET_ALL_USER_ROLE } from "../../gqloperation/query";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER } from "../../gqloperation/mutation";
import { RESET_PASSWORD } from "../../helpers";

const validationEmailForm = yup
  .object({
    name: yup
      .string()
      .min(3, "O nome precisa ter mais de 3 caracteres")
      .required("Nome Completo é obrigatorio"),
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
    contact: yup
      .number()
      .typeError("Insira um contacto valido")
      .min(7, "O contacto precisa ter minimo 7 numero")
      .required("Contacto é obrigatório"),
  })
  .required();

const EmployeerForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [postRole, setPostRole] = useState("");
  const [userRole, setUserRole] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");

  const handlePostRoleChange = (e) => {
    setPostRole(e.target.value);
  };
  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const {
    loading: loadingPostRoles,
    error: errorPostRoles,
    data: dataPostRoles,
  } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
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
    fetchPolicy: "network-only",
  });

  const [
    createEmployeer,
    { loading: loadingCreateEmployeer, error: errorCreateEmployeer },
  ] = useMutation(CREATE_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formEmployeer = (dataForm) => {
    
    
    createEmployeer({
      variables: {
        data: {
          "name": dataForm.name,
          "email": dataForm.email,
          "password": RESET_PASSWORD,
          "username": dataForm.email,
          "confirmed": true,
          "userRole": userRole,
          "postRole": postRole,
          "start_date": startDate,
          "blocked": status
        }
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    });
  };

  if(loadingCreateEmployeer) return <h1>Carregando</h1>

  return (
    <form onSubmit={handleSubmit(formEmployeer)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            required
            label="Nome Completo"
            defaultValue=""
            fullWidth
            type="text"
            name="name"
            {...register("name")}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            defaultValue=""
            fullWidth
            type="email"
            name="name"
            {...register("email")}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Contacto"
            defaultValue=""
            fullWidth
            type="number"
            name="contact"
            {...register("contact")}
            helperText={errors.contact?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Data Inicio Função"
            fullWidth
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            name="start_date"
            InputLabelProps={{
              shrink: true,
            }}
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
                  <MenuItem key={pr.id} value={pr.id}>
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
              {dataUserRoles &&
                dataUserRoles.userRoles.data.map((ur) => (
                  <MenuItem key={ur.id} value={ur.id}>
                    {ur.attributes.description}
                  </MenuItem>
                ))}
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
              <MenuItem value={true}>Activo</MenuItem>
              <MenuItem value={false}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <CustomButton type="submit" name="Registrar" />
        </Grid>
      </Grid>
    </form>
  );
};

export default EmployeerForm;
